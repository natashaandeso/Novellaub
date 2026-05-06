import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState("");
  const [success, setSuccess]   = useState("");
  const [error, setError]       = useState("");

  const navigate  = useNavigate();
  const location  = useLocation();

  // If we were sent here from ProductDetail, this will hold the product
  const redirectProduct = location.state?.fromProduct || null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Please wait while we authenticate your account...");
    setError("");

    try {
      const formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);

      const response = await axios.post("https://tashaandeso.alwaysdata.net/api/signin", formdata);
      setLoading("");

      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setSuccess("Login successful! Redirecting...");

        // ✅ If we came from a product page, go back there with the product state
        if (redirectProduct) {
          setTimeout(() => navigate(`/product/${redirectProduct.id}`, { state: { product: redirectProduct } }), 800);
        } else {
          setTimeout(() => navigate("/"), 800);
        }
      } else {
        setError("Login failed. Please check your credentials and try again.");
      }
    } catch (error) {
      setLoading("");
      setError("Oops, an error occurred. Please try again.");
    }
  };

  return (
    <div className="signin-container d-flex justify-content-center align-items-center">
      <div className="signin-card p-5 shadow-lg text-center">

        <h5 className="text-warning">{loading}</h5>
        <h3 className="text-success">{success}</h3>
        <h4 className="text-danger">{error}</h4>

        {/* Optional: show context message if redirected from a product */}
        {redirectProduct && (
          <div className="alert alert-info py-2 mb-3 small">
            Sign in to unlock <strong>{redirectProduct.product_name}</strong> 📖
          </div>
        )}

        <div className="login-icon mb-4">📖</div>
        <h2 className="brand-text mb-2">Welcome Back!</h2>
        <p className="text-muted small mb-4">The next chapter is waiting for you.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group-custom mb-3">
            <input
              type="email"
              required
              placeholder="Email"
              className="form-control-cute"
              value={email}
              onChange={(e) => setEmail(e.target.value)}   // ✅ connected
            />
          </div>

          <div className="input-group-custom mb-4">
            <input
              type="password"
              required
              placeholder="Password"
              className="form-control-cute"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // ✅ connected
            />
          </div>

          <button type="submit" className="signin-btn-main w-100 mb-3">
            Open the Hub
          </button>

          <div className="form-footer">
            <span className="text-muted small">New reader? </span>
            {/* ✅ Pass product forward to signup too */}
            <span
              className="signup-link"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate("/signup", { state: { fromProduct: redirectProduct } })}
            >
              Create an account
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;