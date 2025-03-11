function register() {
  fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ username: "test", email: "test@mail.com", password: "12345" }),
      headers: { "Content-Type": "application/json" },
  }).then(res => res.json()).then(data => console.log(data));
}

function login() {
  fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email: "test@mail.com", password: "12345" }),
      headers: { "Content-Type": "application/json" },
  }).then(res => res.json()).then(data => console.log(data));
}
