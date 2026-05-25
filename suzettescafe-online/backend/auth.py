import os
import time
import jwt

def make_token(user_id: int, email: str) -> str:
    secret = os.getenv("JWT_SECRET", "dev_secret")
    now = int(time.time())
    payload = {
        "sub": user_id,
        "email": email,
        "iat": now,
        "exp": now + (60 * 60 * 24)  # 24 hours
    }
    return jwt.encode(payload, secret, algorithm="HS256")

def verify_token(token: str):
    secret = os.getenv("JWT_SECRET", "dev_secret")
    try:
        return jwt.decode(token, secret, algorithms=["HS256"])
    except Exception:
        return None