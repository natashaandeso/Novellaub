import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = ["Book Review", "Recommendation", "Article"];

const CreatePost = () => {
  const navigate   = useNavigate();
  const isLoggedIn = !!localStorage.getItem("user");
  const user       = JSON.parse(localStorage.getItem("user") || "{}");

  const [form, setForm] = useState({
    title:    "",
    category: "Book Review",
    rating:   5,
    excerpt:  "",
    body:     "",
    cover:    "",
  });
  const [error,   setError]   = useState("");
  const [loading, setLoading] = useState(false);

  /* Redirect if not logged in */
  if (!isLoggedIn) {
    return (
      <div style={{ minHeight: "100vh", background: "#060a0f", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", color: "#9ca3af" }}>
          <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>You need to be signed in to write a review.</p>
          <button
            onClick={() => navigate("/signin")}
            style={{ background: "#f59e0b", border: "none", color: "#000", padding: "0.6rem 1.6rem", borderRadius: "8px", fontWeight: "700", cursor: "pointer" }}
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleSubmit = () => {
    if (!form.title.trim())   return setError("Please add a title.");
    if (!form.excerpt.trim()) return setError("Please add a short excerpt / summary.");
    if (!form.body.trim())    return setError("Please write the review body.");

    setLoading(true);

    const newPost = {
      id:       Date.now(),
      title:    form.title.trim(),
      category: form.category,
      rating:   form.rating,
      excerpt:  form.excerpt.trim(),
      body:     form.body.trim(),
      cover:    form.cover.trim() || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80",
      author:   user.username || user.email || "Anonymous",
      date:     new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
      readTime: `${Math.max(1, Math.ceil(form.body.split(" ").length / 200))} min read`,
    };

    /* Save to localStorage alongside existing posts */
    const existing = JSON.parse(localStorage.getItem("blog_posts") || "[]");
    localStorage.setItem("blog_posts", JSON.stringify([newPost, ...existing]));

    setLoading(false);
    navigate("/blog");
  };

  /* ── Styles ── */
  const s = {
    page: {
      minHeight: "100vh",
      background: "#060a0f",
      fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
      paddingBottom: "6rem",
    },
    header: {
      background: "linear-gradient(180deg, #0a1628 0%, #060a0f 100%)",
      padding: "5rem 1rem 3rem",
      textAlign: "center",
      borderBottom: "1px solid rgba(245,158,11,0.12)",
    },
    headerLabel: {
      color: "#f59e0b",
      fontSize: "0.75rem",
      fontWeight: "700",
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      marginBottom: "0.8rem",
    },
    headerTitle: {
      color: "#fefce8",
      fontSize: "2.4rem",
      fontWeight: "700",
      marginBottom: "0.5rem",
    },
    headerSub: {
      color: "#6b7280",
      fontSize: "0.95rem",
    },
    inner: {
      maxWidth: "720px",
      margin: "3rem auto 0",
      padding: "0 1.5rem",
    },
    backBtn: {
      background: "transparent",
      border: "1px solid rgba(255,255,255,0.12)",
      color: "#9ca3af",
      padding: "0.4rem 1rem",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "0.88rem",
      marginBottom: "2.5rem",
      display: "inline-block",
      transition: "all 0.2s",
    },
    group: {
      marginBottom: "1.8rem",
    },
    label: {
      display: "block",
      color: "#9ca3af",
      fontSize: "0.8rem",
      fontWeight: "700",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: "0.5rem",
      fontFamily: "'Georgia', sans-serif",
    },
    input: {
      width: "100%",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "10px",
      color: "#f1f5f9",
      padding: "0.75rem 1rem",
      fontSize: "1rem",
      outline: "none",
      fontFamily: "'Palatino Linotype', serif",
      transition: "border-color 0.2s",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "10px",
      color: "#f1f5f9",
      padding: "0.75rem 1rem",
      fontSize: "1rem",
      outline: "none",
      resize: "vertical",
      fontFamily: "'Palatino Linotype', serif",
      lineHeight: "1.8",
      boxSizing: "border-box",
      transition: "border-color 0.2s",
    },
    select: {
      width: "100%",
      background: "#0d1520",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "10px",
      color: "#f1f5f9",
      padding: "0.75rem 1rem",
      fontSize: "1rem",
      outline: "none",
      cursor: "pointer",
      boxSizing: "border-box",
    },
    starsRow: {
      display: "flex",
      gap: "0.5rem",
    },
    starBtn: (active) => ({
      background: "none",
      border: "none",
      fontSize: "1.8rem",
      cursor: "pointer",
      color: active ? "#f59e0b" : "rgba(255,255,255,0.15)",
      transition: "color 0.15s, transform 0.15s",
      padding: 0,
      lineHeight: 1,
    }),
    errorBox: {
      background: "rgba(239,68,68,0.1)",
      border: "1px solid rgba(239,68,68,0.3)",
      borderRadius: "8px",
      color: "#f87171",
      padding: "0.75rem 1rem",
      fontSize: "0.9rem",
      marginBottom: "1.5rem",
    },
    submitBtn: {
      width: "100%",
      background: "linear-gradient(135deg, #f59e0b, #d97706)",
      border: "none",
      color: "#000",
      padding: "1rem",
      borderRadius: "12px",
      fontWeight: "700",
      fontSize: "1rem",
      cursor: "pointer",
      letterSpacing: "0.03em",
      transition: "opacity 0.2s",
      marginTop: "0.5rem",
    },
    hint: {
      color: "#4b5563",
      fontSize: "0.8rem",
      marginTop: "0.4rem",
    },
  };

  return (
    <div style={s.page}>

      {/* ── Header ── */}
      <div style={s.header}>
        <p style={s.headerLabel}>✍️ Share Your Thoughts</p>
        <h1 style={s.headerTitle}>Write a Review</h1>
        <p style={s.headerSub}>Tell the community what you thought of your latest read.</p>
      </div>

      <div style={s.inner}>
        <button
          style={s.backBtn}
          onClick={() => navigate("/blog")}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#f59e0b"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#9ca3af"; }}
        >
          ← Back to Blog
        </button>

        {/* Title */}
        <div style={s.group}>
          <label style={s.label}>Post Title *</label>
          <input
            style={s.input}
            placeholder="e.g. Why 'Americanah' Changed How I See the World"
            value={form.title}
            onChange={e => handleChange("title", e.target.value)}
            onFocus={e => (e.target.style.borderColor = "#f59e0b")}
            onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
          />
        </div>

        {/* Category + Rating row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem", marginBottom: "1.8rem" }}>
          <div>
            <label style={s.label}>Category</label>
            <select
              style={s.select}
              value={form.category}
              onChange={e => handleChange("category", e.target.value)}
            >
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label style={s.label}>Your Rating</label>
            <div style={s.starsRow}>
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  style={s.starBtn(star <= form.rating)}
                  onClick={() => handleChange("rating", star)}
                  onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cover image URL */}
        <div style={s.group}>
          <label style={s.label}>Cover Image URL <span style={{ color: "#4b5563", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(optional)</span></label>
          <input
            style={s.input}
            placeholder="https://…"
            value={form.cover}
            onChange={e => handleChange("cover", e.target.value)}
            onFocus={e => (e.target.style.borderColor = "#f59e0b")}
            onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
          />
          <p style={s.hint}>Leave blank to use a default book image.</p>
        </div>

        {/* Excerpt */}
        <div style={s.group}>
          <label style={s.label}>Short Excerpt / Summary *</label>
          <textarea
            style={{ ...s.textarea, minHeight: "90px" }}
            placeholder="A one or two sentence hook that appears on the blog card…"
            value={form.excerpt}
            onChange={e => handleChange("excerpt", e.target.value)}
            onFocus={e => (e.target.style.borderColor = "#f59e0b")}
            onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
          />
        </div>

        {/* Body */}
        <div style={s.group}>
          <label style={s.label}>Full Review *</label>
          <textarea
            style={{ ...s.textarea, minHeight: "280px" }}
            placeholder="Write your full review here. Share your thoughts, favourite moments, who you'd recommend this book to…"
            value={form.body}
            onChange={e => handleChange("body", e.target.value)}
            onFocus={e => (e.target.style.borderColor = "#f59e0b")}
            onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
          />
        </div>

        {/* Error */}
        {error && <div style={s.errorBox}>⚠️ {error}</div>}

        {/* Submit */}
        <button
          style={s.submitBtn}
          onClick={handleSubmit}
          disabled={loading}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          {loading ? "Publishing…" : "Publish Review ✦"}
        </button>
      </div>
    </div>
  );
};

export default CreatePost;