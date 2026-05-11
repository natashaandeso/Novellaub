import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const categoryColor = (cat) => {
  if (cat === "Book Review")    return "#f59e0b";
  if (cat === "Recommendation") return "#34d399";
  if (cat === "Article")        return "#a78bfa";
  return "#63d2ff";
};

const StarRating = ({ rating }) => (
  <span style={{ color: "#f59e0b", fontSize: "1rem", letterSpacing: "2px" }}>
    {"★".repeat(rating)}{"☆".repeat(5 - rating)}
  </span>
);

const BlogPostDetail = () => {
  const { state } = useLocation();
  const navigate  = useNavigate();
  const post      = state?.post;

  if (!post) {
    return (
      <div className="text-white text-center mt-5">
        <p>Post not found.</p>
        <button className="btn btn-outline-light mt-3" onClick={() => navigate("/blog")}>
          ← Back to Blog
        </button>
      </div>
    );
  }

  const s = {
    page: {
      minHeight: "100vh",
      background: "#060a0f",
      fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
      paddingBottom: "6rem",
    },
    coverWrap: {
      position: "relative",
      height: "420px",
      overflow: "hidden",
    },
    coverImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(0.35)",
    },
    coverOverlay: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "3rem",
      background: "linear-gradient(to top, #060a0f 0%, transparent 60%)",
    },
    badge: {
      display: "inline-block",
      fontSize: "0.72rem",
      fontWeight: "700",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      padding: "0.25rem 0.9rem",
      borderRadius: "50px",
      border: "1px solid",
      marginBottom: "1rem",
      width: "fit-content",
    },
    coverTitle: {
      color: "#fefce8",
      fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
      fontWeight: "700",
      lineHeight: "1.25",
      maxWidth: "800px",
      marginBottom: "1rem",
    },
    coverMeta: {
      display: "flex",
      gap: "1.2rem",
      alignItems: "center",
      flexWrap: "wrap",
      color: "#9ca3af",
      fontSize: "0.88rem",
    },
    inner: {
      maxWidth: "760px",
      margin: "0 auto",
      padding: "3rem 1.5rem 0",
    },
    backBtn: {
      background: "transparent",
      border: "1px solid rgba(255,255,255,0.15)",
      color: "#9ca3af",
      padding: "0.45rem 1.1rem",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "0.88rem",
      marginBottom: "2.5rem",
      display: "inline-block",
      transition: "all 0.2s",
    },
    divider: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      margin: "2rem 0",
    },
    dividerLine: {
      flex: 1,
      height: "1px",
      background: "rgba(245,158,11,0.15)",
    },
    dividerStar: {
      color: "#f59e0b",
      fontSize: "1rem",
    },
    body: {
      color: "#d1d5db",
      fontSize: "1.1rem",
      lineHeight: "2",
      whiteSpace: "pre-wrap",
    },
    ratingBox: {
      background: "rgba(245,158,11,0.06)",
      border: "1px solid rgba(245,158,11,0.2)",
      borderRadius: "12px",
      padding: "1.5rem 2rem",
      marginTop: "3rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "1rem",
    },
    ratingLabel: {
      color: "#9ca3af",
      fontSize: "0.85rem",
      fontFamily: "'Georgia', sans-serif",
      letterSpacing: "0.05em",
    },
    authorBox: {
      marginTop: "3rem",
      paddingTop: "2rem",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      display: "flex",
      gap: "1rem",
      alignItems: "center",
    },
    avatar: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #f59e0b, #d97706)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#000",
      fontWeight: "700",
      fontSize: "1.1rem",
      flexShrink: 0,
    },
    authorName: {
      color: "#f1f5f9",
      fontWeight: "600",
      fontSize: "0.95rem",
    },
    authorDate: {
      color: "#6b7280",
      fontSize: "0.82rem",
    },
  };

  return (
    <div style={s.page}>

      {/* ── Cover Image ── */}
      <div style={s.coverWrap}>
        <img src={post.cover} alt={post.title} style={s.coverImg} />
        <div style={s.coverOverlay}>
          <span style={{ ...s.badge, color: categoryColor(post.category), borderColor: categoryColor(post.category) }}>
            {post.category}
          </span>
          <h1 style={s.coverTitle}>{post.title}</h1>
          <div style={s.coverMeta}>
            <span>By {post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={s.inner}>
        <button
          style={s.backBtn}
          onClick={() => navigate("/blog")}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#f59e0b"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#9ca3af"; }}
        >
          ← Back to Blog
        </button>

        <div style={s.divider}>
          <div style={s.dividerLine} />
          <span style={s.dividerStar}>✦</span>
          <div style={s.dividerLine} />
        </div>

        {/* ── Post Content ── */}
        <div style={s.body}>{post.body || post.excerpt}</div>

        {/* ── Rating ── */}
        <div style={s.ratingBox}>
          <span style={s.ratingLabel}>OVERALL RATING</span>
          <StarRating rating={post.rating} />
        </div>

        {/* ── Author ── */}
        <div style={s.authorBox}>
          <div style={s.avatar}>{post.author?.[0]?.toUpperCase()}</div>
          <div>
            <p style={s.authorName}>{post.author}</p>
            <p style={s.authorDate}>{post.date} · {post.readTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;