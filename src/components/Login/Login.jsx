import React, { useState } from 'react';

const XLogin = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
  if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto", textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="username">Username:</label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Submit
        </button>
      </form>
      {message && <p style={{ marginTop: "1rem", color: "red" }}>{message}</p>}
    </div>
  );
};

export default XLogin;
