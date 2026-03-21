import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FacultyLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginContainer = {
    margin: "100px auto",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "5px",
    backgroundColor: "white",
    width: "50%",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if email and password match the credentials
    if (email === "teacher001@mail.com" && password === "teacher@123") {
      // Navigate to a new page on successful login
      navigate("/FacultyDashboard");
    } else {
      // Display an error message if login fails
      setError("Invalid email or password");
    }
  };

  return (
    <div style={loginContainer}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            <b>Email address</b>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            <b>Password</b>
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I agree to terms and conditions
          </label>
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
}
