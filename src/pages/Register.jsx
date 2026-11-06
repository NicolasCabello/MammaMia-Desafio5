import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("All fields are required!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and confirmation must be the same!");
      return;
    }

    alert("Registration successful!");
  };

  return (
    <main className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <h1>Register</h1>
        <div className="mb-3">
          <label htmlFor="register-email" className="form-label">
            Email
          </label>
          <input
            id="register-email"
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="register-password" className="form-label">
            Password
          </label>
          <input
            id="register-password"
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="register-confirm" className="form-label">
            Confirm Password
          </label>
          <input
            id="register-confirm"
            type="password"
            className="form-control"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </main>
  );
};

export default Register;
