// js/auth.js
// Simple auth wrapper that is "AWS-ready" (API endpoints can be swapped later).

(() => {
  const AUTH_STORAGE_KEY = "suzettes_auth_v1";
  const CUSTOMER_STORAGE_KEY = "suzettes_customer_v1"; // your existing key

  // ✅ Set this later to your real AWS API base (API Gateway)
  // Example: https://abc123.execute-api.ca-central-1.amazonaws.com/prod
  const API_BASE = ""; // leave blank for now (demo mode)

  function safeJSONParse(str) {
    try { return JSON.parse(str); } catch { return null; }
  }

  function setAuth(data) {
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(data));
    } catch {}
  }

  function getAuth() {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? safeJSONParse(raw) : null;
  }

  function clearAuth() {
    try { localStorage.removeItem(AUTH_STORAGE_KEY); } catch {}
  }

  // ✅ This is the "other person ordering" fix:
  // When logged out, clear saved name/phone/pickup/notes on this device.
  function clearSavedCustomerInfo() {
    try { localStorage.removeItem(CUSTOMER_STORAGE_KEY); } catch {}
  }

  async function apiRequest(path, options = {}) {
    const auth = getAuth();
    const headers = { "Content-Type": "application/json", ...(options.headers || {}) };

    // If you later use JWT tokens, attach them here:
    if (auth && auth.token) {
      headers.Authorization = `Bearer ${auth.token}`;
    }

    const url = API_BASE ? `${API_BASE}${path}` : null;

    // DEMO MODE (no backend yet)
    if (!url) {
      return { ok: false, error: "Backend not connected yet (API_BASE is empty)." };
    }

    try {
      const res = await fetch(url, { ...options, headers });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) return { ok: false, error: data.message || "Request failed." };
      return { ok: true, data };
    } catch (err) {
      return { ok: false, error: "Network error." };
    }
  }

  // PUBLIC API
  window.Auth = {
    getUser() {
      const auth = getAuth();
      return auth && auth.user ? auth.user : null;
    },

    isLoggedIn() {
      return !!this.getUser();
    },

    // Signup (API-ready)
    async signup(email, password) {
      // If backend exists: POST /auth/signup
      if (API_BASE) {
        return apiRequest("/auth/signup", {
          method: "POST",
          body: JSON.stringify({ email, password }),
        });
      }

      // DEMO: pretend success (but don’t auto-login)
      return { ok: true, data: { message: "Demo signup ok" } };
    },

    // Login (API-ready)
    async login(email, password) {
      if (API_BASE) {
        const result = await apiRequest("/auth/login", {
          method: "POST",
          body: JSON.stringify({ email, password }),
        });

        if (!result.ok) return result;

        // Expect backend returns { token, user }
        const token = result.data.token;
        const user = result.data.user;
        setAuth({ token, user });
        return { ok: true };
      }

      // DEMO LOGIN: store fake user so you can keep building UI
      setAuth({
        token: "demo-token",
        user: { email }
      });
      return { ok: true };
    },

    logout() {
      clearAuth();
      clearSavedCustomerInfo(); // ✅ your requirement
    },

    // Optional helper if you want a "Switch user" button later
    clearCustomerInfoOnly() {
      clearSavedCustomerInfo();
    }
  };
})();