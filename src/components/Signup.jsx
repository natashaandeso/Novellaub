import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone]       = useState("");
  const [loading, setLoading]   = useState("");
  const [success, setSuccess]   = useState("");
  const [error, setError]       = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // If we were sent here from ProductDetail (or from Signin), carry the product forward
  const redirectProduct = location.state?.fromProduct || null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Please wait as registration is in progress...");
    setError("");

    try {
      const formdata = new FormData();
      formdata.append("username", username);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("phone", phone);

      const response = await axios.post("https://tashaandeso.alwaysdata.net/api/signup", formdata);
      setLoading("");
      setSuccess(response.data.message || "Account created! Redirecting...");

      // Clear form
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");

      // ✅ After signup, go back to the product page if we came from one
      setTimeout(() => {
        if (redirectProduct) {
          navigate(`/product/${redirectProduct.id}`, { state: { product: redirectProduct } });
        } else {
          navigate("/signin");
        }
      }, 1500);

    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className="signup-wrapper d-flex align-items-center justify-content-center">
      <div className="signup-container animate__animated animate__fadeInUp">

        <h5 className="text-warning">{loading}</h5>
        <h3 className="text-success">{success}</h3>
        <h4 className="text-danger">{error}</h4>

        <div className="row g-0">
          {/* Left accent panel */}
          <div className="col-lg-5 d-none d-lg-block signup-accent">
            <div className="accent-content">
              <h2>Welcome to the Library 📖</h2>
              <p>Every great story starts with a single click.</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="col-lg-7 p-5">
            <h3 className="brand-text mb-4">Create your account ✨</h3>

            {/* Optional context message */}
            {redirectProduct && (
              <div className="alert alert-info py-2 mb-3 small">
                Sign up to unlock <strong>{redirectProduct.product_name}</strong> 📖
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label small-text">Full Name</label>
                <input
                  type="text"
                  className="form-control cute-input"
                  placeholder="e.g. Jane Austen"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} // ✅ connected
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label small-text">Email Address</label>
                <input
                  type="email"
                  className="form-control cute-input"
                  placeholder="name@vibes.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}    // ✅ connected
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label small-text">Phone Number</label>
                <input
                  type="text"
                  className="form-control cute-input"
                  placeholder="+254..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}    // ✅ connected
                />
              </div>

              <div className="mb-4">
                <label className="form-label small-text">Password</label>
                <input
                  type="password"
                  className="form-control cute-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // ✅ connected
                  required
                />
              </div>

              <button type="submit" className="signup-btn w-100 py-3 shadow-lg">
                Begin the Journey 🦋
              </button>

              <p className="text-center mt-4 small text-muted">
                Already have an account?{" "}
                <span
                  className="text-purple"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate("/signin", { state: { fromProduct: redirectProduct } })}
                >
                  Sign In
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;