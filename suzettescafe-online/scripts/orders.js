// js/orders.js
// Loads "recent orders" for the logged-in user.
// This is API-ready (works once your AWS backend exists).

(() => {
  const lockedBox = document.getElementById("orders-locked");
  const ordersArea = document.getElementById("orders-area");
  const ordersSub = document.getElementById("orders-sub");
  const ordersList = document.getElementById("orders-list");
  const btnRefresh = document.getElementById("btn-refresh");
  const btnLogout = document.getElementById("btn-logout");

  function money(n) {
    const num = Number(n);
    if (!num) return "$0.00";
    return "$" + num.toFixed(2);
  }

  function escapeHTML(str) {
    return String(str || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderOrders(orders) {
    if (!orders || !orders.length) {
      ordersList.innerHTML = `
        <div class="home-panel">
          <p style="margin:0;">No orders found yet.</p>
          <p class="footer-sub" style="margin-top:0.4rem;">Place a pickup order first, then come back here.</p>
        </div>
      `;
      return;
    }

    ordersList.innerHTML = orders.map(o => {
      const items = (o.items || []).map(i => {
        const note = i.note ? ` <span class="footer-sub">(${escapeHTML(i.note)})</span>` : "";
        return `<div>${Number(i.quantity || 1)} × ${escapeHTML(i.name)}${note}</div>`;
      }).join("");

      return `
        <article class="home-panel" style="margin-bottom:0.8rem;">
          <div style="display:flex; justify-content:space-between; gap:1rem; flex-wrap:wrap;">
            <div>
              <h3 style="margin:0;">Order #${escapeHTML(o.orderId || "—")}</h3>
              <p class="footer-sub" style="margin-top:0.35rem;">
                ${escapeHTML(o.createdAt || "—")} · Pickup: ${escapeHTML(o.pickupOption || "—")}
              </p>
            </div>
            <div style="text-align:right;">
              <div style="font-weight:700;">${money(o.subtotal)}</div>
              <div class="footer-sub">Status: ${escapeHTML(o.status || "—")}</div>
            </div>
          </div>

          <div style="margin-top:0.8rem;">
            ${items || "<div>—</div>"}
          </div>
        </article>
      `;
    }).join("");
  }

  async function loadOrders() {
    const user = Auth.getUser();
    if (!user) {
      lockedBox.style.display = "block";
      ordersArea.style.display = "none";
      return;
    }

    lockedBox.style.display = "none";
    ordersArea.style.display = "block";
    ordersSub.textContent = "Loading…";

    // If backend exists, you'll do fetch here:
    // GET /orders/mine
    // For now, demo data if API isn't connected yet.
    const hasBackend = false; // this stays false until you wire AWS (Auth.API_BASE)

    if (!hasBackend) {
      ordersSub.textContent = "Demo mode (AWS not connected yet).";
      renderOrders([
        {
          orderId: "DEMO-1001",
          createdAt: new Date().toLocaleString(),
          pickupOption: "ASAP",
          subtotal: 23.75,
          status: "Created",
          items: [
            { name: "Suzette’s Breakfast", quantity: 1, note: "" },
            { name: "Chicken B.L.T (Combo)", quantity: 1, note: "Combo: Small Soup" }
          ]
        }
      ]);
      return;
    }
  }

  btnRefresh?.addEventListener("click", loadOrders);

  btnLogout?.addEventListener("click", () => {
    Auth.logout();
    window.location.href = "account.html";
  });

  loadOrders();
})();