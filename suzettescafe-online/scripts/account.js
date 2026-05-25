const API = "http://localhost:5000";

function saveAuth(user, token) {
  localStorage.setItem("authUser", JSON.stringify(user));
  localStorage.setItem("authToken", token);
}

async function signup(name, email, password) {
  const res = await fetch(`${API}/api/signup`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({ name, email, password })
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Signup failed");

  saveAuth(data.user, data.token);
  return data.user;
}

async function login(email, password) {
  const res = await fetch(`${API}/api/login`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Login failed");

  saveAuth(data.user, data.token);
  return data.user;
}