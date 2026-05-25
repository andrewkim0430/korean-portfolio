/* ------------------ MENU DATA ------------------ */
const MENU_ITEMS = [
  // ================== BREAKFAST (served until 11AM) ==================
  { id: 1, name: "Suzette’s Breakfast", price: 16.50, category: "breakfast", tag: "Breakfast", desc: "2 eggs, bacon, hashbrown and choice of country 2 toasts." },
  { id: 2, name: "Three Egg Omelette", price: 14.50, category: "breakfast", tag: "Breakfast", desc: "Toppings: onion, mushroom, tomato, bell pepper, ham, spinach. Extra topping $0.99 each." },
  { id: 3, name: "Egg B.L.T Sandwich", price: 11.50, category: "breakfast", tag: "Breakfast", desc: "Egg, bacon, lettuce, tomato." },
  { id: 4, name: "Denver Sandwich", price: 10.75, category: "breakfast", tag: "Breakfast", desc: "Egg, ham, tomato, and onion." },
  { id: 5, name: "Bacon Egg & Cheese Sandwich", price: 10.50, category: "breakfast", tag: "Breakfast", desc: "Bacon, egg & cheese." },
  { id: 6, name: "Ham Egg & Cheese Sandwich", price: 10.50, category: "breakfast", tag: "Breakfast", desc: "Ham, egg & cheese." },
  { id: 7, name: "Breakfast Wrap", price: 10.95, category: "breakfast", tag: "Breakfast", desc: "Ham, tomato, onion, bell pepper, egg & cheese." },
  { id: 8, name: "Egg & Toast", price: 9.50, category: "breakfast", tag: "Breakfast", desc: "2 toast and 2 eggs." },

  // ================== SANDWICHES (Item + Combo) ==================
  { id: 9,  name: "Homemade Chicken Schnitzel", price: 12.50, comboPrice: 16.25, category: "sandwich", tag: "Sandwich", desc: "Item only." },
  { id: 10, name: "Homemade Grilled Chicken",   price: 12.50, comboPrice: 16.25, category: "sandwich", tag: "Sandwich", desc: "Item only." },
  { id: 11, name: "Turkey Clubhouse",           price: 13.50, comboPrice: 17.25, category: "sandwich", tag: "Sandwich", desc: "Item only." },
  { id: 12, name: "Chicken B.L.T",              price: 13.50, comboPrice: 17.25, category: "sandwich", tag: "Sandwich", desc: "Item only." },
  { id: 13, name: "Fresh Shrimp (Avocado Cream Cheese)", price: 13.50, comboPrice: 17.25, category: "sandwich", tag: "Sandwich", desc: "Item only." },
  { id: 14, name: "California B.L.T (Avocado B.L.T)",    price: 12.25, comboPrice: 16.00, category: "sandwich", tag: "Sandwich", desc: "Item only." },
  { id: 15, name: "Cheese B.L.T",               price: 12.25, comboPrice: 16.00, category: "sandwich", tag: "Sandwich", desc: "Item only." },
  { id: 16, name: "Turkey",                     price: 12.00, comboPrice: 15.75, category: "sandwich", tag: "Sandwich", desc: "Item only." },
  { id: 17, name: "Ham & Cheese",               price: 12.00, comboPrice: 15.75, category: "sandwich", tag: "Sandwich", desc: "Item only." },
  { id: 18, name: "Roast Beef",                 price: 12.00, comboPrice: 15.75, category: "sandwich", tag: "Sandwich", desc: "Item only." },
  { id: 19, name: "Egg Salad",                  price: 12.00, comboPrice: 15.75, category: "sandwich", tag: "Sandwich", desc: "Item only." },
  { id: 20, name: "Tuna",                       price: 12.00, comboPrice: 15.75, category: "sandwich", tag: "Sandwich", desc: "Item only." },
  { id: 21, name: "B.L.T",                      price: 12.00, comboPrice: 15.75, category: "sandwich", tag: "Sandwich", desc: "Item only." },
  { id: 22, name: "Vegetarian",                 price: 12.00, comboPrice: 15.75, category: "sandwich", tag: "Sandwich", desc: "Item only." },

  // ================== WRAPS (Item + Combo) ==================
  { id: 23, name: "Homemade Chicken Schnitzel (Wrap)", price: 12.75, comboPrice: 16.50, category: "wrap", tag: "Wrap", desc: "Item only." },
  { id: 24, name: "Homemade Grilled Chicken (Wrap)",   price: 12.75, comboPrice: 16.50, category: "wrap", tag: "Wrap", desc: "Item only." },
  { id: 25, name: "Homemade Chicken Caesar (Wrap)",    price: 12.75, comboPrice: 16.50, category: "wrap", tag: "Wrap", desc: "Item only." },
  { id: 26, name: "Turkey Clubhouse (Wrap)",           price: 13.75, comboPrice: 17.50, category: "wrap", tag: "Wrap", desc: "Item only." },
  { id: 27, name: "Chicken B.L.T (Wrap)",              price: 13.75, comboPrice: 17.50, category: "wrap", tag: "Wrap", desc: "Item only." },
  { id: 28, name: "Fresh Shrimp (Wrap) (Avocado Cream Cheese)", price: 13.75, comboPrice: 17.50, category: "wrap", tag: "Wrap", desc: "Item only." },
  { id: 29, name: "California B.L.T (Wrap) (Avocado B.L.T)",    price: 12.50, comboPrice: 16.25, category: "wrap", tag: "Wrap", desc: "Item only." },
  { id: 30, name: "Cheese B.L.T (Wrap)",               price: 12.25, comboPrice: 16.25, category: "wrap", tag: "Wrap", desc: "Item only." },
  { id: 31, name: "Turkey (Wrap)",                     price: 12.25, comboPrice: 16.25, category: "wrap", tag: "Wrap", desc: "Item only." },
  { id: 32, name: "Ham & Cheese (Wrap)",               price: 12.25, comboPrice: 16.25, category: "wrap", tag: "Wrap", desc: "Item only." },
  { id: 33, name: "Roast Beef (Wrap)",                 price: 12.25, comboPrice: 16.25, category: "wrap", tag: "Wrap", desc: "Item only." },
  { id: 34, name: "Egg Salad (Wrap)",                  price: 12.25, comboPrice: 16.25, category: "wrap", tag: "Wrap", desc: "Item only." },
  { id: 35, name: "Tuna (Wrap)",                       price: 12.25, comboPrice: 16.25, category: "wrap", tag: "Wrap", desc: "Item only." },
  { id: 36, name: "B.L.T (Wrap)",                      price: 12.25, comboPrice: 16.25, category: "wrap", tag: "Wrap", desc: "Item only." },
  { id: 37, name: "Vegetarian (Wrap)",                 price: 12.25, comboPrice: 16.25, category: "wrap", tag: "Wrap", desc: "Item only." },

  // ================== FRESH DAILY – CHILI & SOUP ==================
  { id: 38, name: "Chili (Small)", price: 8.95, category: "soup", tag: "Chili", desc: "Fresh daily chili." },
  { id: 39, name: "Chili (Large)", price: 10.75, category: "soup", tag: "Chili", desc: "Fresh daily chili." },
  { id: 40, name: "Soup (Small)",  price: 8.50, category: "soup", tag: "Soup",  desc: "Fresh daily soup." },
  { id: 41, name: "Soup (Large)",  price: 9.75, category: "soup", tag: "Soup",  desc: "Fresh daily soup." },

  // ================== FRESH SALADS (Small / Large) ==================
  { id: 42, name: "Suzette’s Salad (Small)", price: 14.75, category: "salad", tag: "Salad", desc: "Garden salad with bacon, ham, turkey, and cheese." },
  { id: 43, name: "Suzette’s Salad (Large)", price: 17.75, category: "salad", tag: "Salad", desc: "Garden salad with bacon, ham, turkey, and cheese." },
  { id: 44, name: "Shrimp Avocado Garden (Small)", price: 14.50, category: "salad", tag: "Salad", desc: "Shrimp + avocado garden salad." },
  { id: 45, name: "Shrimp Avocado Garden (Large)", price: 17.50, category: "salad", tag: "Salad", desc: "Shrimp + avocado garden salad." },
  { id: 46, name: "Tuna Garden (Small)", price: 14.50, category: "salad", tag: "Salad", desc: "Tuna garden salad." },
  { id: 47, name: "Tuna Garden (Large)", price: 17.50, category: "salad", tag: "Salad", desc: "Tuna garden salad." },
  { id: 48, name: "Chicken Caesar (Small)", price: 14.50, category: "salad", tag: "Salad", desc: "Chicken caesar salad." },
  { id: 49, name: "Chicken Caesar (Large)", price: 17.50, category: "salad", tag: "Salad", desc: "Chicken caesar salad." },
  { id: 50, name: "Chicken Garden (Small)", price: 14.50, category: "salad", tag: "Salad", desc: "Chicken garden salad." },
  { id: 51, name: "Chicken Garden (Large)", price: 17.50, category: "salad", tag: "Salad", desc: "Chicken garden salad." },
  { id: 52, name: "Caesar (Small)", price: 9.50, category: "salad", tag: "Salad", desc: "Caesar salad." },
  { id: 53, name: "Caesar (Large)", price: 11.75, category: "salad", tag: "Salad", desc: "Caesar salad." },
  { id: 54, name: "Garden (Small)", price: 9.50, category: "salad", tag: "Salad", desc: "Garden salad." },
  { id: 55, name: "Garden (Large)", price: 11.75, category: "salad", tag: "Salad", desc: "Garden salad." },

  // ================== DAILY SPECIAL (served from 11AM) ==================
  { id: 56, name: "Chicken Katsu on Rice", price: 14.50, category: "special", day: "Everyday", tag: "Everyday", desc: "Served from 11AM." },
  { id: 57, name: "Beef Bulgogi Bibimbap", price: 17.25, category: "special", day: "Mon", tag: "Mon", desc: "Served from 11AM.", image: "images/KakaoTalk_20260303_114521031.jpg" },
  { id: 58, name: "Lasagna",               price: 17.25, category: "special", day: "Mon", tag: "Mon", desc: "With soup or salad. Soup: Chicken Noodle or Creamy Ham & Potato." },
  { id: 59, name: "Spicy Chicken on Rice",  price: 17.25, category: "special", day: "Tue", tag: "Tue", desc: "With soup or salad. Soup: Beef Barley or Split Pea." },
  { id: 60, name: "Chicken Alfredo Penne",  price: 17.25, category: "special", day: "Tue", tag: "Tue", desc: "With soup or salad. Soup: Beef Barley or Split Pea." },
  { id: 61, name: "Beef Bulgogi Bibimbap",  price: 17.25, category: "special", day: "Wed", tag: "Wed", desc: "Served from 11AM.", image: "images/KakaoTalk_20260303_114521031.jpg" },
  { id: 62, name: "Chicken Katsu Curry on Rice", price: 17.25, category: "special", day: "Wed", tag: "Wed", desc: "Served from 11AM." },
  { id: 63, name: "Meat Sauce Spaghetti",   price: 17.25, category: "special", day: "Wed", tag: "Wed", desc: "With soup or salad. Soup: Chicken Wild Rice or Creamy Broccoli." },
  { id: 64, name: "Spicy Pork on Rice",     price: 17.25, category: "special", day: "Thu", tag: "Thu", desc: "With soup or salad. Soup: Beef Barley or Creamy Mushroom." },
  { id: 65, name: "Shepherd’s Pie",         price: 17.25, category: "special", day: "Thu", tag: "Thu", desc: "With soup or salad. Soup: Hamburger or Creamy Mushroom." },
  { id: 66, name: "Chicken Teriyaki on Rice", price: 17.25, category: "special", day: "Fri", tag: "Fri", desc: "Served from 11AM." },

  // ================== EXTRAS ==================
  { id: 200, name: "Bacon (Extra)",       price: 2.50, category: "extras", tag: "Extra", desc: "Add-on item." },
  { id: 201, name: "Avocado (Extra)",     price: 2.50, category: "extras", tag: "Extra", desc: "Add-on item." },
  { id: 202, name: "Bun / Toast (Extra)", price: 2.50, category: "extras", tag: "Extra", desc: "Add-on item." },

  // ================== CATERING (minimum order $90) ==================
  { id: 100, name: "Fruit Tray (Small)", price: 79.50, category: "catering", tag: "Catering", desc: "Minimum order $90. 24 hours notice appreciated." },
  { id: 101, name: "Fruit Tray (Large)", price: 109.50, category: "catering", tag: "Catering", desc: "Minimum order $90. 24 hours notice appreciated." },
  { id: 102, name: "Veggie & Dip (Small)", price: 79.50, category: "catering", tag: "Catering", desc: "Minimum order $90. 24 hours notice appreciated." },
  { id: 103, name: "Veggie & Dip (Large)", price: 109.50, category: "catering", tag: "Catering", desc: "Minimum order $90. 24 hours notice appreciated." },
  { id: 104, name: "Caesar Salad (Catering - Small)", price: 77.50, category: "catering", tag: "Catering", desc: "Minimum order $90. 24 hours notice appreciated." },
  { id: 105, name: "Caesar Salad (Catering - Large)", price: 107.50, category: "catering", tag: "Catering", desc: "Minimum order $90. 24 hours notice appreciated." },
  { id: 106, name: "Garden Salad (Catering - Small)", price: 77.50, category: "catering", tag: "Catering", desc: "Minimum order $90. 24 hours notice appreciated." },
  { id: 107, name: "Garden Salad (Catering - Large)", price: 107.50, category: "catering", tag: "Catering", desc: "Minimum order $90. 24 hours notice appreciated." },
  { id: 108, name: "Assorted Sandwiches (Catering)", price: 0, category: "catering", tag: "Call for inquiry", desc: "Call for inquiry." },
  { id: 109, name: "Assorted Wraps (Catering)",      price: 0, category: "catering", tag: "Call for inquiry", desc: "Call for inquiry." },
  { id: 110, name: "Dessert Tray (Catering)",        price: 0, category: "catering", tag: "Call for inquiry", desc: "Can be ordered based on number of people." }
];

/* ------------------ CONFIG ------------------ */
const CATEGORY_ORDER = ["breakfast", "sandwich", "wrap", "soup", "salad", "special", "extras", "catering"];

const CATEGORY_LABELS = {
  breakfast: "Breakfast (served until 11AM)",
  sandwich: "Sandwiches",
  wrap: "Wraps",
  soup: "Fresh Daily – Chili & Soup",
  salad: "Fresh Salads",
  special: "Daily Special (served from 11AM)",
  extras: "Extras",
  catering: "Catering (minimum order $90)"
};

const SPECIAL_DAYS = ["Everyday", "Mon", "Tue", "Wed", "Thu", "Fri"];

/* ------------------ STORAGE ------------------ */
const CART_STORAGE_KEY = "suzettes_cart_v2";
const CATEGORY_STORAGE_KEY = "suzettes_category_v1";
const CUSTOMER_STORAGE_KEY = "suzettes_customer_session_v1";
const TIP_STORAGE_KEY = "suzettes_tip_v1";

/* ------------------ TAX CONFIG ------------------ */
const TAX_RATE = 0.05; // 5% GST
const TAX_LABEL = "GST (5%)";

/* money + rounding */
function money(n) {
  return "$" + Number(n || 0).toFixed(2);
}
function round2(n) {
  return Math.round((Number(n || 0) + Number.EPSILON) * 100) / 100;
}
function calcTax(subtotal) {
  return round2(subtotal * TAX_RATE);
}
function calcTotal(subtotal) {
  const tax = calcTax(subtotal);
  return round2(subtotal + tax);
}

/* ------------------ ACCOUNT STORAGE (DEMO) ------------------ */
const USERS_KEY = "suzettes_users_v1";
const SESSION_KEY = "suzettes_session_v1";
const ORDERS_KEY_PREFIX = "suzettes_orders_for_"; // + userId

function loadUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveUsers(users) {
  try { localStorage.setItem(USERS_KEY, JSON.stringify(users)); }
  catch (e) { console.log("Could not save users:", e); }
}
function getSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function setSession(sessionObj) {
  try { localStorage.setItem(SESSION_KEY, JSON.stringify(sessionObj)); } catch {}
}
function clearSession() {
  try { localStorage.removeItem(SESSION_KEY); } catch {}
}
function ordersKeyFor(userId) {
  return ORDERS_KEY_PREFIX + String(userId);
}
function loadOrdersForUser(userId) {
  try {
    const raw = localStorage.getItem(ordersKeyFor(userId));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveOrdersForUser(userId, orders) {
  try { localStorage.setItem(ordersKeyFor(userId), JSON.stringify(orders)); }
  catch (e) { console.log("Could not save orders:", e); }
}

/* ------------------ TIME / PICKUP HELPERS ------------------ */
function formatClockTime(iso) {
  try {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  } catch {
    return "";
  }
}
function computePickupAt(pickupOption, createdAtIso) {
  const base = createdAtIso ? new Date(createdAtIso) : new Date();
  if (pickupOption === "ASAP") return new Date(base.getTime() + 15 * 60000).toISOString();

  const mins = Number(pickupOption);
  if (!isNaN(mins) && mins > 0) return new Date(base.getTime() + mins * 60000).toISOString();
  return null;
}
function pickupTextFrom(pickupOption, pickupAtIso) {
  const when = pickupAtIso ? formatClockTime(pickupAtIso) : "";
  if (pickupOption === "ASAP") return `ASAP${when ? ` (~${when})` : ""}`;
  return `in ${pickupOption} min${when ? ` (${when})` : ""}`;
}

/* ------------------ CREATE + SAVE ORDER RECORD ------------------ */
function createOrderRecordFromPending(pending) {
  const safeId = Math.floor(1000 + Math.random() * 9000);
  const createdAtIso = pending.createdAt || new Date().toISOString();
  const pickupAtIso = computePickupAt(pending.pickupOption, createdAtIso);

  const subtotal = round2(Number(pending.subtotal || 0));
  const tax = calcTax(subtotal);
  const tip = round2(Number(pending.tip || 0));
  const total = round2(subtotal + tax + tip);

  return {
    id: safeId,
    createdAt: createdAtIso,
    pickup: pending.pickupOption,
    pickupAt: pickupAtIso,
    subtotal,
    tax,
    tip,
    total,
    customerName: pending.customerName,
    customerPhone: pending.customerPhone,
    items: (pending.items || []).map(i => ({
      name: i.name,
      qty: i.quantity,
      note: i.note || ""
    }))
  };
}

function saveOrderForCurrentUser(pending) {
  const s = getSession();
  if (!s || !s.userId) return false;

  const existing = loadOrdersForUser(s.userId);
  existing.push(createOrderRecordFromPending(pending));

  while (existing.length > 25) existing.shift();
  saveOrdersForUser(s.userId, existing);
  return true;
}

/* ------------------ ACCOUNT PAGE UI ------------------ */
function formatDateTime(iso) {
  try { return new Date(iso).toLocaleString(); }
  catch { return String(iso || ""); }
}

function renderAccountUI() {
  const outBox = document.getElementById("account-logged-out");
  const inBox = document.getElementById("account-logged-in");
  if (!outBox || !inBox) return;

  const s = getSession();
  if (s && s.userId) {
    outBox.style.display = "none";
    inBox.style.display = "block";

    const nameEl = document.getElementById("account-user-name") || document.getElementById("user-name");
    const emailEl = document.getElementById("account-user-email") || document.getElementById("user-email");
    if (nameEl) nameEl.textContent = s.name || "Guest";
    if (emailEl) emailEl.textContent = s.email || "";

    renderOrdersList();
  } else {
    outBox.style.display = "grid";
    inBox.style.display = "none";
  }
}

function renderOrdersList() {
  const list = document.getElementById("orders-list");
  const empty = document.getElementById("orders-empty");
  if (!list) return;

  const s = getSession();
  if (!s || !s.userId) return;

  const orders = loadOrdersForUser(s.userId);
  list.innerHTML = "";

  if (!orders.length) {
    if (empty) empty.style.display = "block";
    return;
  }
  if (empty) empty.style.display = "none";

  [...orders].reverse().forEach(o => {
    const card = document.createElement("div");
    card.className = "order-card";

    const pickupLabel = pickupTextFrom(o.pickup, o.pickupAt);

    const subtotal = (o.subtotal != null) ? Number(o.subtotal) : Number(o.total || 0);
    const tax = (o.tax != null) ? Number(o.tax) : calcTax(subtotal);
    const tip = (o.tip != null) ? Number(o.tip) : 0;
    const total = (o.total != null) ? Number(o.total) : round2(subtotal + tax + tip);

    const itemsHtml = (o.items || [])
      .map(it => {
        const notePart = it.note ? ` <span class="muted">(${it.note})</span>` : "";
        return `<div>${it.qty} × ${it.name}${notePart}</div>`;
      })
      .join("");

    card.innerHTML = `
      <div class="order-card-top">
        <div><strong>Order #${o.id}</strong></div>
        <div class="muted">${formatDateTime(o.createdAt)}</div>
      </div>
      <div class="order-card-mid">
        <div><strong>Pickup:</strong> ${pickupLabel}</div>
        <div><strong>Subtotal:</strong> ${money(subtotal)}</div>
        <div><strong>${TAX_LABEL}:</strong> ${money(tax)}</div>
        ${tip > 0 ? `<div><strong>Tip:</strong> ${money(tip)}</div>` : ""}
        <div><strong>Total:</strong> ${money(total)}</div>
      </div>
      <div class="order-card-items">${itemsHtml}</div>
    `;
    list.appendChild(card);
  });
}

/* ---- Account actions (supports both inline onclick and forms) ---- */
function handleSignup(event) {
  if (event && event.preventDefault) event.preventDefault();

  const name = (document.getElementById("signup-name")?.value || "").trim();
  const email = (document.getElementById("signup-email")?.value || "").trim().toLowerCase();
  const pass = (document.getElementById("signup-password")?.value || document.getElementById("signup-pass")?.value || "").trim();

  if (!name || !email || !pass) return alert("Please fill in name, email, and password.");
  if (!email.includes("@")) return alert("Please enter a valid email address.");
  if (pass.length < 4) return alert("Password must be at least 4 characters (demo).");

  const users = loadUsers();
  if (users.some(u => String(u.email).toLowerCase() === email)) return alert("That email is already registered. Please log in.");

  const userId = "u_" + Date.now();
  users.push({ id: userId, name, email, pass });
  saveUsers(users);

  setSession({ userId, name, email });

  ["signup-name","signup-email","signup-password","signup-pass"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  renderAccountUI();
  updateNavAuth();
}

function handleLogin(event) {
  if (event && event.preventDefault) event.preventDefault();

  const email = (document.getElementById("login-email")?.value || "").trim().toLowerCase();
  const pass = (document.getElementById("login-password")?.value || document.getElementById("login-pass")?.value || "").trim();

  if (!email || !pass) return alert("Please enter your email and password.");

  const users = loadUsers();
  const match = users.find(u => String(u.email).toLowerCase() === email && String(u.pass) === pass);
  if (!match) return alert("Invalid email or password.");

  setSession({ userId: match.id, name: match.name, email: match.email });

  ["login-email","login-password","login-pass"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  renderAccountUI();
  updateNavAuth();
}

function handleLogout() {
  clearSession();
  renderAccountUI();
  updateNavAuth();
}

function handleClearOrders() {
  const s = getSession();
  if (!s || !s.userId) return;

  const ok = confirm("Clear your saved order history? (demo)");
  if (!ok) return;

  saveOrdersForUser(s.userId, []);
  renderOrdersList();
}

/* expose for inline onclick account.html */
window.signupAccount = () => handleSignup();
window.loginAccount  = () => handleLogin();
window.logoutAccount = () => handleLogout();
window.clearMyOrders = () => handleClearOrders();

function initAccountPage() {
  const outBox = document.getElementById("account-logged-out");
  const inBox = document.getElementById("account-logged-in");
  if (!outBox || !inBox) return;

  if (document.body.dataset.accountBound === "1") return;
  document.body.dataset.accountBound = "1";

  const signupForm = document.getElementById("signup-form");
  const loginForm  = document.getElementById("login-form");
  const logoutBtn  = document.getElementById("logout-btn");
  const clearBtn   = document.getElementById("clear-orders-btn");

  if (signupForm) signupForm.addEventListener("submit", handleSignup);
  if (loginForm)  loginForm.addEventListener("submit", handleLogin);
  if (logoutBtn)  logoutBtn.addEventListener("click", handleLogout);
  if (clearBtn)   clearBtn.addEventListener("click", handleClearOrders);

  // Tab switch: Log In / Sign Up
  function showAccountTab(tabId) {
    const panels = outBox.querySelectorAll(".account-panel");
    const tabs = outBox.querySelectorAll(".account-tab");
    panels.forEach(p => {
      p.classList.toggle("hidden", p.id !== "panel-" + tabId);
    });
    tabs.forEach(t => {
      const isActive = t.dataset.tab === tabId;
      t.classList.toggle("active", isActive);
      t.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }
  outBox.querySelectorAll(".account-tab").forEach(btn => {
    btn.addEventListener("click", () => showAccountTab(btn.dataset.tab));
  });
  outBox.querySelectorAll(".account-switch-link").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      showAccountTab(btn.dataset.goto);
    });
  });

  renderAccountUI();
}

/* ------------------ CUSTOMER INFO (SESSION) ------------------ */
function saveCustomerInfoFromForm() {
  const name = (document.getElementById("customer-name")?.value || "").trim();
  const phone = (document.getElementById("customer-phone")?.value || "").trim();
  const pickupTime = document.getElementById("pickup-time")?.value || "";
  const notes = (document.getElementById("order-notes")?.value || "").trim();

  try {
    sessionStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify({ name, phone, pickupTime, notes }));
  } catch (err) {
    console.log("Could not save customer info:", err);
  }
}
function loadCustomerInfo() {
  try {
    const raw = sessionStorage.getItem(CUSTOMER_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function clearCustomerInfo() {
  try {
    sessionStorage.removeItem(CUSTOMER_STORAGE_KEY);
    sessionStorage.removeItem(TIP_STORAGE_KEY);
  } catch {}
}

/* ------------------ TIP (optional % or custom amount) ------------------ */
function getTipChoice() {
  try {
    const raw = sessionStorage.getItem(TIP_STORAGE_KEY);
    if (!raw) return { type: "none", value: 0 };
    const o = JSON.parse(raw);
    if (o.type === "percent" && typeof o.value === "number") return o;
    if (o.type === "custom" && typeof o.value === "number" && o.value >= 0) return o;
    return { type: "none", value: 0 };
  } catch {
    return { type: "none", value: 0 };
  }
}

function setTipChoice(choice) {
  try {
    sessionStorage.setItem(TIP_STORAGE_KEY, JSON.stringify(choice));
  } catch (e) {
    console.log("Could not save tip:", e);
  }
}

function getTipAmount(subtotal) {
  const choice = getTipChoice();
  if (choice.type === "none") return 0;
  if (choice.type === "percent") return round2((Number(subtotal) || 0) * (choice.value / 100));
  if (choice.type === "custom") return round2(Number(choice.value) || 0);
  return 0;
}
function fillCustomerInfoFromStorage() {
  const data = loadCustomerInfo();
  if (!data) return;

  const nameEl = document.getElementById("customer-name");
  const phoneEl = document.getElementById("customer-phone");
  const pickupEl = document.getElementById("pickup-time");
  const notesEl = document.getElementById("order-notes");

  if (nameEl && !nameEl.value) nameEl.value = data.name || "";
  if (phoneEl && !phoneEl.value) phoneEl.value = data.phone || "";
  if (pickupEl && !pickupEl.value) pickupEl.value = data.pickupTime || "";
  if (notesEl && !notesEl.value) notesEl.value = data.notes || "";
}

/* ------------------ CART STORAGE ------------------ */
function cartKey(id, mode) { return `${id}|${mode}`; }
function parseCartKey(key) {
  const [idStr, mode] = String(key).split("|");
  return { id: Number(idStr), mode: mode === "combo" ? "combo" : "reg" };
}

function saveCart() {
  try {
    const data = Object.keys(cart).map(key => {
      const { id, mode } = parseCartKey(key);
      return { id, mode, qty: cart[key].qty, note: cart[key].note || "" };
    });
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.log("Could not save cart:", err);
  }
}

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return {};

    const arr = JSON.parse(raw);
    const loaded = {};

    arr.forEach(entry => {
      const item = MENU_ITEMS.find(m => m.id === entry.id);
      if (!item || entry.qty <= 0) return;

      const mode = entry.mode === "combo" ? "combo" : "reg";
      const regPrice = Number(item.price);
      const comboPrice = Number(item.comboPrice);
      const unitPrice = mode === "combo" ? comboPrice : regPrice;

      const safeMode = mode === "combo" && !(unitPrice > 0) ? "reg" : mode;
      const safePrice = safeMode === "combo" ? comboPrice : regPrice;
      if (!(safePrice > 0)) return;

      const key = cartKey(item.id, safeMode);
      loaded[key] = { item, qty: entry.qty, mode: safeMode, unitPrice: safePrice, note: entry.note || "" };
    });

    return loaded;
  } catch (err) {
    console.log("Could not load cart:", err);
    return {};
  }
}

/* ------------------ STATE ------------------ */
const cart = loadCart();
let currentCategory = localStorage.getItem(CATEGORY_STORAGE_KEY) || "all";
let pendingOrder = null;

/* ------------------ HELPERS ------------------ */
function formatPrice(num) {
  const n = Number(num);
  if (!n) return "Call";
  return "$" + n.toFixed(2);
}
function isValidPhone(phone) {
  const digits = String(phone || "").replace(/\D/g, "");
  return digits.length >= 10;
}
function dayLabel(day) {
  if (day === "Everyday") return "Everyday Specials";
  if (day === "Mon") return "Monday Specials";
  if (day === "Tue") return "Tuesday Specials";
  if (day === "Wed") return "Wednesday Specials";
  if (day === "Thu") return "Thursday Specials";
  return "Friday Specials";
}
function isComboEligible(item) {
  return (item.category === "sandwich" || item.category === "wrap") && Number(item.comboPrice) > 0;
}
function askComboNote() {
  while (true) {
    const choice = prompt(
      "Combo choice:\n" +
      "1 = Small Soup\n" +
      "2 = Small Chili\n" +
      "3 = Salad (Caesar)\n" +
      "4 = Salad (Garden)\n\n" +
      "Type 1, 2, 3, or 4:"
    );
    if (choice === null) return null;

    const c = choice.trim();
    if (c === "1") return "Combo: Small Soup";
    if (c === "2") return "Combo: Small Chili";
    if (c === "3") return "Combo: Caesar Salad";
    if (c === "4") return "Combo: Garden Salad";

    alert("Please enter 1, 2, 3, or 4 (or press Cancel).");
  }
}

/* ------------------ MENU RENDERING ------------------ */
function setCategoryFilter(category) {
  currentCategory = category;
  localStorage.setItem(CATEGORY_STORAGE_KEY, category);

  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.classList.remove("active");
    if (btn.dataset.category === category || btn.getAttribute("onclick")?.includes(`'${category}'`)) {
      btn.classList.add("active");
    }
  });

  renderMenu();
}

function renderMenu() {
  const grid = document.getElementById("menu-grid");
  if (!grid) return;

  grid.innerHTML = "";

  function addSectionHeading(text) {
    const h = document.createElement("div");
    h.className = "menu-section-heading";
    h.textContent = text;
    grid.appendChild(h);
  }
  function addNoteLine(text) {
    const p = document.createElement("div");
    p.className = "menu-note-line";
    p.textContent = text;
    grid.appendChild(p);
  }
  function renderItems(items) {
    items.forEach(item => grid.appendChild(buildMenuCard(item)));
  }

  if (currentCategory === "all") {
    CATEGORY_ORDER.forEach(cat => {
      const items = MENU_ITEMS.filter(i => i.category === cat);
      if (!items.length) return;

      addSectionHeading(CATEGORY_LABELS[cat] || cat);

      if (cat === "sandwich" || cat === "wrap") {
        addNoteLine("Combo includes: Small Soup or Small Chili OR Salad (Caesar / Garden only).");
      }

      if (cat === "special") {
        SPECIAL_DAYS.forEach(day => {
          const dayItems = items.filter(i => i.day === day);
          if (!dayItems.length) return;

          const dayHead = document.createElement("div");
          dayHead.className = "menu-day-heading";
          dayHead.textContent = dayLabel(day);
          grid.appendChild(dayHead);

          renderItems(dayItems);
        });
        return;
      }

      renderItems(items);
    });
    return;
  }

  if (currentCategory === "special") {
    addSectionHeading(CATEGORY_LABELS.special);

    SPECIAL_DAYS.forEach(day => {
      const dayItems = MENU_ITEMS.filter(i => i.category === "special" && i.day === day);
      if (!dayItems.length) return;

      const dayHead = document.createElement("div");
      dayHead.className = "menu-day-heading";
      dayHead.textContent = dayLabel(day);
      grid.appendChild(dayHead);

      renderItems(dayItems);
    });
    return;
  }

  addSectionHeading(CATEGORY_LABELS[currentCategory] || currentCategory);

  if (currentCategory === "sandwich" || currentCategory === "wrap") {
    addNoteLine("Combo includes: Small Soup or Small Chili OR Salad (Caesar / Garden only).");
  }

  renderItems(MENU_ITEMS.filter(i => i.category === currentCategory));
}

function buildMenuCard(item) {
  const card = document.createElement("article");
  card.className = "menu-card";

  const addDisabled = Number(item.price) === 0;
  const eligibleCombo = isComboEligible(item);

  const tagText = item.category === "special" ? "Daily Special" : item.tag;

  const priceHTML = eligibleCombo
    ? `<div class="menu-price-stack">
         <div><span class="label">Item:</span> <span class="money">${formatPrice(item.price)}</span></div>
         <div><span class="label">Combo:</span> <span class="money">${formatPrice(item.comboPrice)}</span></div>
       </div>`
    : `<div class="menu-price">${formatPrice(item.price)}</div>`;

  const buttonsHTML = addDisabled
    ? `<button class="btn-add" type="button" disabled style="opacity:0.6;cursor:not-allowed;">Call</button>`
    : eligibleCombo
      ? `<div class="btn-row">
           <button class="btn-add" type="button" onclick="addToCart(${item.id}, 'reg')">Add Item</button>
           <button class="btn-add btn-combo" type="button" onclick="addToCart(${item.id}, 'combo')">Add Combo</button>
         </div>`
      : `<button class="btn-add" type="button" onclick="addToCart(${item.id}, 'reg')">Add</button>`;

  const imageHTML = item.image ? `<img src="${item.image}" alt="${item.name}" class="menu-image">` : '';

  card.innerHTML = `
    ${imageHTML}
    <div>
      <div class="menu-header">
        <div class="menu-title">${item.name}</div>
        ${priceHTML}
      </div>
      <p class="menu-desc">${item.desc}</p>
    </div>
    <div class="menu-footer">
      <span class="menu-tag">${tagText}</span>
      ${buttonsHTML}
    </div>
  `;
  return card;
}

/* ------------------ CART LOGIC ------------------ */
function addToCart(id, mode = "reg") {
  const item = MENU_ITEMS.find(m => m.id === id);
  if (!item) return;

  if (Number(item.price) === 0) return alert("Please call the café for this item.");

  const isCombo = mode === "combo";
  const unitPrice = isCombo ? Number(item.comboPrice) : Number(item.price);
  if (isCombo && !unitPrice) return alert("Combo is not available for this item.");

  let note = "";
  if (isCombo) {
    note = askComboNote();
    if (note === null) return; /* user cancelled – don't add combo */
  }

  const key = cartKey(id, isCombo ? "combo" : "reg");

  if (!cart[key]) {
    cart[key] = { item, qty: 1, mode: isCombo ? "combo" : "reg", unitPrice, note };
  } else {
    cart[key].qty += 1;
    if (note) cart[key].note = note;
  }

  saveCart();
  renderCart();
}

function changeQty(key, delta) {
  if (!cart[key]) return;
  cart[key].qty += delta;
  if (cart[key].qty <= 0) delete cart[key];

  saveCart();
  renderCart();
}

function clearCartItems() {
  Object.keys(cart).forEach(k => delete cart[k]);
  saveCart();
  renderCart();
}

function clearCart() {
  clearCartItems();
  clearCustomerInfo();
  resetOrderForm();
}

function getCartSubtotal() {
  let subtotal = 0;
  for (const key in cart) subtotal += cart[key].unitPrice * cart[key].qty;
  return round2(subtotal);
}

/* Back-compat: some older code calls getCartTotal() */
function getCartTotal() {
  const subtotal = getCartSubtotal();
  return calcTotal(subtotal);
}

function renderCart() {
  const list = document.getElementById("cart-items");
  if (!list) return;

  const emptyMsg = document.getElementById("cart-empty");
  const summary = document.getElementById("cart-summary");
  const totalEl = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkout-btn");
  const clearBtn = document.getElementById("clear-btn");

  const subtotalEl = document.getElementById("cart-subtotal");
  const taxEl = document.getElementById("cart-tax");
  const taxLabelEl = document.getElementById("cart-tax-label");
  const tipRowEl = document.getElementById("cart-tip-row");
  const tipEl = document.getElementById("cart-tip");

  list.innerHTML = "";
  const keys = Object.keys(cart);

  if (!keys.length) {
    if (emptyMsg) emptyMsg.style.display = "block";
    if (summary) summary.style.display = "none";
    if (checkoutBtn) checkoutBtn.disabled = true;
    if (clearBtn) clearBtn.disabled = true;

    if (subtotalEl) subtotalEl.textContent = "$0.00";
    if (taxEl) taxEl.textContent = "$0.00";
    if (totalEl) totalEl.textContent = "$0.00";
    if (taxLabelEl) taxLabelEl.textContent = TAX_LABEL;
    if (tipRowEl) tipRowEl.style.display = "none";
    if (tipEl) tipEl.textContent = "$0.00";

    return;
  }

  if (emptyMsg) emptyMsg.style.display = "none";
  if (summary) summary.style.display = "block";
  if (checkoutBtn) checkoutBtn.disabled = false;
  if (clearBtn) clearBtn.disabled = false;

  keys.forEach(key => {
    const { item, qty, mode, unitPrice, note } = cart[key];
    const li = document.createElement("li");
    li.className = "cart-item";

    const label = mode === "combo" ? `${item.name} (Combo)` : item.name;
    const noteLine = note ? `<div class="cart-item-note">${note}</div>` : "";

    li.innerHTML = `
      <div class="cart-item-left">
        <span class="cart-item-name">${label}</span>
        ${noteLine}
      </div>
      <button type="button" aria-label="Decrease quantity" onclick="changeQty('${key}', -1)">–</button>
      <span class="cart-item-qty">${qty}</span>
      <button type="button" aria-label="Increase quantity" onclick="changeQty('${key}', 1)">+</button>
      <span class="cart-item-price">$${(unitPrice * qty).toFixed(2)}</span>
    `;
    list.appendChild(li);
  });

  const subtotal = getCartSubtotal();
  const tax = calcTax(subtotal);
  const tip = getTipAmount(subtotal);
  const total = round2(subtotal + tax + tip);

  if (subtotalEl) subtotalEl.textContent = money(subtotal);
  if (taxEl) taxEl.textContent = money(tax);
  if (taxLabelEl) taxLabelEl.textContent = TAX_LABEL;

  if (tipRowEl) {
    tipRowEl.style.display = tip > 0 ? "flex" : "none";
    if (tipRowEl.style.display === "flex" && tipRowEl.classList.contains("cart-summary-row")) tipRowEl.style.justifyContent = "space-between";
  }
  if (tipEl) tipEl.textContent = money(tip);

  if (totalEl) totalEl.textContent = money(total);

  setupTipUI();
  syncTipUI();
}

function syncTipUI() {
  const container = document.getElementById("tip-options");
  if (!container) return;
  const choice = getTipChoice();
  const buttons = container.querySelectorAll(".tip-btn");
  const customInput = document.getElementById("tip-custom-input");
  buttons.forEach(btn => {
    const val = btn.dataset.tip;
    const isActive =
      (val === "none" && choice.type === "none") ||
      (val !== "none" && choice.type === "percent" && Number(val) === choice.value);
    btn.classList.toggle("active", !!isActive);
  });
  if (customInput && choice.type === "custom") customInput.value = choice.value ? String(choice.value) : "";
}

function setupTipUI() {
  const container = document.getElementById("tip-options");
  if (!container || container.dataset.tipBound === "1") return;
  container.dataset.tipBound = "1";

  const buttons = container.querySelectorAll(".tip-btn");
  const customInput = document.getElementById("tip-custom-input");

  buttons.forEach(btn => {
    const val = btn.dataset.tip;
    btn.addEventListener("click", () => {
      if (val === "none") {
        setTipChoice({ type: "none", value: 0 });
      } else {
        setTipChoice({ type: "percent", value: Number(val) });
        if (customInput) customInput.value = "";
      }
      renderCart();
    });
  });

  if (customInput) {
    customInput.addEventListener("input", () => {
      const num = parseFloat(customInput.value);
      if (!isNaN(num) && num >= 0) setTipChoice({ type: "custom", value: num });
      renderCart();
    });
    customInput.addEventListener("change", () => {
      const num = parseFloat(customInput.value);
      if (!isNaN(num) && num >= 0) setTipChoice({ type: "custom", value: num });
      renderCart();
    });
  }
}

/* ------------------ ORDER PAGE: GO TO CART (REVIEW & CONFIRM) ------------------ */
function goToCartReview() {
  const keys = Object.keys(cart);
  if (!keys.length) return alert("Your cart is empty. Add items before continuing.");

  const name = (document.getElementById("customer-name")?.value || "").trim();
  const phone = (document.getElementById("customer-phone")?.value || "").trim();
  const pickupTime = document.getElementById("pickup-time")?.value || "";

  if (!name || !phone || !pickupTime) return alert("Please fill in your name, phone, and pickup time.");
  if (!isValidPhone(phone)) return alert("Please enter a valid phone number (at least 10 digits).");

  saveCustomerInfoFromForm();
  window.location.href = "cart.html";
}

/* ------------------ ORDER SUBMISSION (REVIEW -> CONFIRM) ------------------ */
function placeOrder() {
  const keys = Object.keys(cart);
  if (!keys.length) return alert("Please add at least one item to your order.");

  // If cart page doesn't have inputs, we use stored session customer info.
  const nameEl = document.getElementById("customer-name");
  const phoneEl = document.getElementById("customer-phone");
  const pickupEl = document.getElementById("pickup-time");
  const notesEl = document.getElementById("order-notes");

  let name = nameEl ? nameEl.value.trim() : "";
  let phone = phoneEl ? phoneEl.value.trim() : "";
  let pickupTime = pickupEl ? pickupEl.value : "";
  let notes = notesEl ? notesEl.value.trim() : "";

  if (!name || !phone || !pickupTime) {
    const saved = loadCustomerInfo();
    if (saved) {
      name = name || (saved.name || "");
      phone = phone || (saved.phone || "");
      pickupTime = pickupTime || (saved.pickupTime || "");
      notes = notes || (saved.notes || "");
    }
  }

  if (!name || !phone || !pickupTime) return alert("Please fill in your name, phone, and pickup time.");
  if (!isValidPhone(phone)) return alert("Please enter a valid phone number (at least 10 digits).");

  const items = keys.map(key => {
    const line = cart[key];
    const nameLabel = line.mode === "combo" ? `${line.item.name} (Combo)` : line.item.name;
    return { name: nameLabel, quantity: line.qty, price: line.unitPrice, note: line.note || "" };
  });

  const subtotal = getCartSubtotal();
  const tipAmount = getTipAmount(subtotal);

  pendingOrder = {
    customerName: name,
    customerPhone: phone,
    pickupOption: pickupTime,
    notes,
    items,
    subtotal,
    tip: tipAmount,
    createdAt: new Date().toISOString()
  };

  openReviewOverlay(pendingOrder);
}

function resetOrderForm() {
  const nameEl = document.getElementById("customer-name");
  const phoneEl = document.getElementById("customer-phone");
  const pickupEl = document.getElementById("pickup-time");
  const notesEl = document.getElementById("order-notes");

  if (nameEl) nameEl.value = "";
  if (phoneEl) phoneEl.value = "";
  if (pickupEl) pickupEl.value = "";
  if (notesEl) notesEl.value = "";
}

/* ------------------ OVERLAY (REVIEW + FINAL) ------------------ */
function openReviewOverlay(order) {
  const overlay = document.getElementById("overlay");
  if (!overlay) return;

  const reviewBox = document.getElementById("overlay-review");
  const finalBox = document.getElementById("overlay-final");
  if (reviewBox) reviewBox.style.display = "block";
  if (finalBox) finalBox.style.display = "none";

  const pickupAtIso = computePickupAt(order.pickupOption, order.createdAt);
  const pickupLabel = pickupTextFrom(order.pickupOption, pickupAtIso);

  const rn = document.getElementById("review-name");
  const rp = document.getElementById("review-phone");
  const rpick = document.getElementById("review-pickup");
  const rnotes = document.getElementById("review-notes");

  // OLD overlay id (some pages used this as subtotal)
  const rtotalOld = document.getElementById("review-total");

  // NEW overlay ids (only exist if you updated cart.html)
  const rsub = document.getElementById("review-subtotal");
  const rtax = document.getElementById("review-tax");
  const rtaxLabel = document.getElementById("review-tax-label");
  const rtotal = document.getElementById("review-total");

  const itemsDiv = document.getElementById("review-items");

  if (rn) rn.textContent = order.customerName;
  if (rp) rp.textContent = order.customerPhone;
  if (rpick) rpick.textContent = pickupLabel;
  if (rnotes) rnotes.textContent = order.notes ? order.notes : "—";

  const subtotal = round2(Number(order.subtotal || 0));
  const tax = calcTax(subtotal);
  const tip = round2(Number(order.tip || 0));
  const total = round2(subtotal + tax + tip);

  if (rsub) rsub.textContent = money(subtotal);
  if (rtax) rtax.textContent = money(tax);
  if (rtaxLabel) rtaxLabel.textContent = TAX_LABEL;
  const rtipEl = document.getElementById("review-tip");
  const rtipRow = document.getElementById("review-tip-row");
  if (rtipRow) rtipRow.style.display = tip > 0 ? "flex" : "none";
  if (rtipEl) rtipEl.textContent = money(tip);
  if (rtotal) rtotal.textContent = money(total);

  // If page is still using ONLY #review-total as "Subtotal", keep it working:
  if (!rsub && rtotalOld) {
    rtotalOld.textContent = money(subtotal);
  }

  if (itemsDiv) {
    itemsDiv.innerHTML = order.items
      .map(i => {
        const notePart = i.note ? ` <span class="muted">(${i.note})</span>` : "";
        return `<div>${i.quantity} × ${i.name}${notePart}</div>`;
      })
      .join("");
  }

  overlay.style.display = "flex";
}

function confirmOrder() {
  if (!pendingOrder) return;

  const reviewBox = document.getElementById("overlay-review");
  const finalBox = document.getElementById("overlay-final");
  const msg = document.getElementById("overlay-message");
  const details = document.getElementById("overlay-details");

  const itemsSummary = pendingOrder.items
    .map(i => `${i.quantity} × ${i.name}${i.note ? ` (${i.note})` : ""}`)
    .join(", ");

  const pickupAtIso = computePickupAt(pendingOrder.pickupOption, pendingOrder.createdAt);
  const pickupLabel = pickupTextFrom(pendingOrder.pickupOption, pickupAtIso);

  const subtotal = round2(Number(pendingOrder.subtotal || 0));
  const tax = calcTax(subtotal);
  const tip = round2(Number(pendingOrder.tip || 0));
  const total = round2(subtotal + tax + tip);

  const savedToAccount = saveOrderForCurrentUser(pendingOrder);

  if (msg) {
    msg.textContent =
      savedToAccount
        ? `Thanks, ${pendingOrder.customerName}! Order saved to your account (demo).`
        : `Thanks, ${pendingOrder.customerName}! Your pickup request has been created (demo).`;
  }

  if (details) {
    let text = `Items: ${itemsSummary}. Subtotal: ${money(subtotal)}. ${TAX_LABEL}: ${money(tax)}.`;
    if (tip > 0) text += ` Tip: ${money(tip)}.`;
    text += ` Total: ${money(total)}. Requested pickup: ${pickupLabel}.`;
    if (savedToAccount) text += " Saved in Account orders.";
    else text += " (Log in to save orders.)";
    details.textContent = text;
  }

  if (reviewBox) reviewBox.style.display = "none";
  if (finalBox) finalBox.style.display = "block";

  clearCartItems();
  clearCustomerInfo();
  resetOrderForm();
  pendingOrder = null;
}

function closeOverlay() {
  const overlay = document.getElementById("overlay");
  if (overlay) overlay.style.display = "none";

  const reviewBox = document.getElementById("overlay-review");
  const finalBox = document.getElementById("overlay-final");
  if (reviewBox) reviewBox.style.display = "block";
  if (finalBox) finalBox.style.display = "none";

  pendingOrder = null;
}

/* ------------------ PICKUP UI (Show actual time beside dropdown + hint + cart line) ------------------ */
function ensurePickupHintElement(selectEl) {
  if (!selectEl) return null;

  let hint = document.getElementById("pickup-actual");
  if (hint) return hint;

  hint = document.createElement("div");
  hint.id = "pickup-actual";
  hint.className = "muted";
  hint.style.marginTop = "6px";
  hint.style.fontSize = "0.95rem";

  if (selectEl.parentElement) selectEl.parentElement.appendChild(hint);
  return hint;
}

function updatePickupHintFromSelect() {
  const pickupEl = document.getElementById("pickup-time");
  if (!pickupEl) return;

  const hint = ensurePickupHintElement(pickupEl);
  if (!hint) return;

  const val = pickupEl.value || "";
  if (!val) {
    hint.textContent = "";
    return;
  }

  const nowIso = new Date().toISOString();
  const pickupAtIso = computePickupAt(val, nowIso);
  const pickupLabel = pickupTextFrom(val, pickupAtIso);

  const nowClock = formatClockTime(nowIso);
  hint.textContent = `Now: ${nowClock} → Pickup: ${pickupLabel}`;
}

function renderCartPickupSummaryLine() {
  const btn = document.getElementById("checkout-btn");
  if (!btn) return;

  let line = document.getElementById("cart-pickup-summary");
  if (!line) {
    line = document.createElement("div");
    line.id = "cart-pickup-summary";
    line.className = "muted";
    line.style.margin = "10px 0 0";
    line.style.fontSize = "0.95rem";
    btn.insertAdjacentElement("afterend", line);
  }

  const saved = loadCustomerInfo();
  if (!saved || !saved.pickupTime) {
    line.textContent = "";
    return;
  }

  const pickupAtIso = computePickupAt(saved.pickupTime, new Date().toISOString());
  line.textContent = `Pickup time: ${pickupTextFrom(saved.pickupTime, pickupAtIso)}`;
}

function updatePickupOptionsWithTimes() {
  const sel = document.getElementById("pickup-time");
  if (!sel) return;

  const now = new Date();

  Array.from(sel.options).forEach(opt => {
    if (!opt.dataset.baseLabel) opt.dataset.baseLabel = opt.textContent.trim();
  });

  Array.from(sel.options).forEach(opt => {
    const base = opt.dataset.baseLabel || opt.textContent.trim();
    const v = (opt.value || "").trim();

    if (!v) {
      opt.textContent = base;
      return;
    }

    let pickupAt = null;
    if (v === "ASAP") {
      pickupAt = new Date(now.getTime() + 15 * 60000);
    } else {
      const mins = Number(v);
      if (!isNaN(mins) && mins > 0) pickupAt = new Date(now.getTime() + mins * 60000);
    }

    const timeStr = pickupAt ? pickupAt.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) : "";
    opt.textContent = timeStr ? `${base} (${timeStr})` : base;
  });
}

/* ------------------ NAV AUTH TOGGLE ------------------ */
function updateNavAuth() {
  const accountLink = document.getElementById("nav-account");
  const logoutLink = document.getElementById("nav-logout");
  if (!accountLink || !logoutLink) return;

  const session = getSession();
  const loggedIn = !!(session && session.userId);

  if (loggedIn) {
    logoutLink.style.display = "inline-block";
    accountLink.textContent = session.name ? session.name : "My Account";
    accountLink.href = "account.html";
  } else {
    logoutLink.style.display = "none";
    accountLink.textContent = "Account";
    accountLink.href = "account.html";
  }

  if (!logoutLink.dataset.bound) {
    logoutLink.dataset.bound = "1";
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      clearSession();
      updateNavAuth();
      window.location.href = "account.html";
    });
  }
}

/* ------------------ OPTIONAL: HOMEPAGE BUTTON FIX ------------------ */
function goHome() {
  setCategoryFilter("all");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ------------------ INIT ------------------ */
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // fill saved customer info (order->cart)
  fillCustomerInfoFromStorage();

  // render if elements exist
  renderCart();
  renderMenu();

  // account init if on account page
  initAccountPage();

  // nav auth on every page
  updateNavAuth();

  // pickup dropdown: add clock times to each option + hint line
  updatePickupOptionsWithTimes();
  const pickupEl = document.getElementById("pickup-time");
  if (pickupEl) {
    updatePickupHintFromSelect();
    if (!pickupEl.dataset.bound) {
      pickupEl.dataset.bound = "1";
      pickupEl.addEventListener("change", () => {
        updatePickupOptionsWithTimes();
        updatePickupHintFromSelect();
      });
    }
  }

  // cart page pickup summary line
  renderCartPickupSummaryLine();
});

/* ------------------ COMPATIBILITY ALIASES ------------------ */
window.goToCart = () => goToCartReview();

/* ------------------ EXPORT for inline onclicks ------------------ */
window.setCategoryFilter = setCategoryFilter;
window.addToCart = addToCart;
window.changeQty = changeQty;
window.clearCart = clearCart;
window.placeOrder = placeOrder;
window.confirmOrder = confirmOrder;
window.closeOverlay = closeOverlay;
window.goHome = goHome;