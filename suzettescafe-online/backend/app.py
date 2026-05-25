import os
import sys

# ✅ Ensure backend folder is always in Python path
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
if CURRENT_DIR not in sys.path:
    sys.path.insert(0, CURRENT_DIR)

from flask import Flask, jsonify, request
from flask_cors import CORS
from passlib.hash import pbkdf2_sha256
from db import get_db
from auth import make_token, verify_token

app = Flask(__name__)
CORS(app)

# ---------- helpers ----------
def money_round(x: float) -> float:
    return round(float(x), 2)

def get_bearer_token():
    auth = request.headers.get("Authorization", "")
    if auth.startswith("Bearer "):
        return auth.replace("Bearer ", "").strip()
    return None

def require_auth():
    token = get_bearer_token()
    if not token:
        return None
    payload = verify_token(token)
    return payload

# ---------- health ----------
@app.get("/api/health")
def health():
    return jsonify({"status": "ok"})

# ---------- AUTH ----------
@app.post("/api/signup")
def signup():
    data = request.get_json(silent=True) or {}
    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip().lower()
    password = (data.get("password") or "").strip()

    if not name or not email or not password:
        return jsonify({"error": "name, email, password are required"}), 400
    if "@" not in email:
        return jsonify({"error": "invalid email"}), 400
    if len(password) < 6:
        return jsonify({"error": "password must be at least 6 chars"}), 400

    pw_hash = pbkdf2_sha256.hash(password)

    db = get_db()
    cur = db.cursor(dictionary=True)

    cur.execute("SELECT id FROM users WHERE email=%s;", (email,))
    if cur.fetchone():
        cur.close()
        db.close()
        return jsonify({"error": "email already registered"}), 409

    cur.execute(
        "INSERT INTO users (name, email, password_hash) VALUES (%s,%s,%s);",
        (name, email, pw_hash),
    )
    user_id = cur.lastrowid
    db.commit()

    cur.close()
    db.close()

    token = make_token(user_id, email)
    return jsonify({
        "user": {"id": user_id, "name": name, "email": email},
        "token": token
    }), 201

@app.post("/api/login")
def login():
    data = request.get_json(silent=True) or {}
    email = (data.get("email") or "").strip().lower()
    password = (data.get("password") or "").strip()

    if not email or not password:
        return jsonify({"error": "email and password are required"}), 400

    db = get_db()
    cur = db.cursor(dictionary=True)

    cur.execute("SELECT id, name, email, password_hash FROM users WHERE email=%s;", (email,))
    user = cur.fetchone()

    cur.close()
    db.close()

    if not user or not pbkdf2_sha256.verify(password, user["password_hash"]):
        return jsonify({"error": "invalid credentials"}), 401

    token = make_token(int(user["id"]), user["email"])
    return jsonify({
        "user": {"id": user["id"], "name": user["name"], "email": user["email"]},
        "token": token
    })

@app.get("/api/me")
def me():
    payload = require_auth()
    if not payload:
        return jsonify({"error": "unauthorized"}), 401

    user_id = int(payload["sub"])

    db = get_db()
    cur = db.cursor(dictionary=True)
    cur.execute("SELECT id, name, email, created_at FROM users WHERE id=%s;", (user_id,))
    user = cur.fetchone()
    cur.close()
    db.close()

    if not user:
        return jsonify({"error": "user not found"}), 404

    return jsonify(user)

# ---------- MENU ----------
@app.get("/api/menu")
def get_menu():
    db = get_db()
    cur = db.cursor(dictionary=True)
    cur.execute("SELECT id, name, price, category FROM menu_items ORDER BY category, name;")
    rows = cur.fetchall()
    cur.close()
    db.close()
    return jsonify(rows)

# ---------- ORDERS ----------
@app.post("/api/orders")
def create_order():
    data = request.get_json(silent=True) or {}

    customer_name = (data.get("customer_name") or "").strip()
    phone = (data.get("phone") or "").strip()
    notes = (data.get("notes") or "").strip()
    tip_type = data.get("tip_type") or "percent"
    tip_value = float(data.get("tip_value") or 0)
    items = data.get("items") or []

    if not customer_name or not phone:
        return jsonify({"error": "customer_name and phone are required"}), 400
    if not isinstance(items, list) or len(items) == 0:
        return jsonify({"error": "items must be a non-empty list"}), 400

    payload = require_auth()
    user_id = int(payload["sub"]) if payload else None

    db = get_db()
    cur = db.cursor(dictionary=True)

    subtotal = 0.0
    priced_items = []

    for it in items:
        menu_item_id = int(it.get("menu_item_id"))
        qty = int(it.get("qty"))

        if qty <= 0:
            cur.close(); db.close()
            return jsonify({"error": "qty must be >= 1"}), 400

        cur.execute("SELECT id, name, price FROM menu_items WHERE id=%s;", (menu_item_id,))
        row = cur.fetchone()

        if not row:
            cur.close(); db.close()
            return jsonify({"error": f"menu_item_id {menu_item_id} not found"}), 400

        line_total = float(row["price"]) * qty
        subtotal += line_total

        priced_items.append({
            "menu_item_id": row["id"],
            "name": row["name"],
            "price": float(row["price"]),
            "qty": qty
        })

    tip_amount = subtotal * tip_value if tip_type == "percent" else tip_value
    tax_amount = subtotal * 0.05
    total_amount = subtotal + tip_amount + tax_amount

    cur.execute(
        """
        INSERT INTO orders 
        (customer_name, phone, notes, tip_type, tip_value, subtotal, tip_amount, tax_amount, total_amount)
        VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s);
        """,
        (customer_name, phone, notes, tip_type, tip_value,
         subtotal, tip_amount, tax_amount, total_amount),
    )
    order_id = cur.lastrowid

    for it in priced_items:
        cur.execute(
            """
            INSERT INTO order_items 
            (order_id, menu_item_id, item_name, item_price, qty)
            VALUES (%s,%s,%s,%s,%s);
            """,
            (order_id, it["menu_item_id"], it["name"],
             it["price"], it["qty"]),
        )

    db.commit()
    cur.close()
    db.close()

    return jsonify({
        "order_id": order_id,
        "subtotal": money_round(subtotal),
        "tip_amount": money_round(tip_amount),
        "tax_amount": money_round(tax_amount),
        "total_amount": money_round(total_amount),
        "items": priced_items,
        "user_attached": bool(user_id)
    }), 201


if __name__ == "__main__":
    app.run(debug=True, port=5000)