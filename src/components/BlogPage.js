import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* ── Fallback sample posts (shown until real posts are written) ── */
const SAMPLE_POSTS = [
  {
    id: 1,
    title: "Why 'Things Fall Apart' Still Hits Different in 2024",
    excerpt: "Chinua Achebe's masterpiece isn't just historical fiction — it's a mirror held up to every generation that dares to look.",
    author: "Amara K.",
    date: "April 12, 2025",
    category: "Book Review",
    rating: 5,
    readTime: "4 min read",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80",
  },
  {
    id: 2,
    title: "5 African Romance Novels You Need on Your Shelf",
    excerpt: "From Lagos to Nairobi, these love stories will make your heart race and your imagination soar across the continent.",
    author: "Zuri M.",
    date: "March 28, 2025",
    category: "Recommendation",
    rating: 4,
    readTime: "6 min read",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80",
  },
  {
    id: 3,
    title: "The Rise of Afrofuturism in Modern Literature",
    excerpt: "Science fiction is getting an African soul. Here's why the genre's most exciting voices are rewriting the future.",
    author: "Kofi A.",
    date: "March 10, 2025",
    category: "Article",
    rating: 5,
    readTime: "8 min read",
    cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=80",
  },
  {
    id: 4,
    title: "Reading 'Purple Hibiscus' as an Adult vs. a Teenager",
    excerpt: "Chimamanda's debut novel reads completely differently depending on where you are in life. I reread it — here's what changed.",
    author: "Nadia O.",
    date: "February 20, 2025",
    category: "Book Review",
    rating: 5,
    readTime: "5 min read",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
  },
  {
    id: 5,
    title: "How to Build a Reading Habit That Actually Sticks",
    excerpt: "Forget 30-books-a-year challenges. Here's a realistic, sustainable way to read more without burning out.",
    author: "Tendai R.",
    date: "February 5, 2025",
    category: "Recommendation",
    rating: 4,
    readTime: "3 min read",
    cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80",
  },
  {
    id: 6,
    title: "Ngugi wa Thiong'o: The Writer Who Chose His Mother Tongue",
    excerpt: "Why did Kenya's greatest living writer stop writing in English? And what does it mean for African literature today?",
    author: "Amara K.",
    date: "January 18, 2025",
    category: "Article",
    rating: 5,
    readTime: "7 min read",
    cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400&q=80",
  },
];

const CATEGORIES = ["All", "Book Review", "Recommendation", "Article"];

const categoryColor = (cat) => {
  if (cat === "Book Review")    return "#f59e0b";
  if (cat === "Recommendation") return "#34d399";
  if (cat === "Article")        return "#a78bfa";
  return "#63d2ff";
};

const StarRating = ({ rating }) => (
  <span style={{ color: "#f59e0b", fontSize: "0.8rem", letterSpacing: "1px" }}>
    {"★".repeat(rating)}{"☆".repeat(5 - rating)}
  </span>
);

/* ════════════════════════════════════════════════════════════════ */
const BlogPage = () => {
  const navigate    = useNavigate();
  const isLoggedIn  = !!localStorage.getItem("user");
  const user        = JSON.parse(localStorage.getItem("user") || "{}");

  const [posts,         setPosts]         = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search,        setSearch]        = useState("");
  const [featured,      ...rest]          = posts;

  /* Load posts: merge sample + user-written (stored in localStorage) */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("blog_posts") || "[]");
    setPosts([...saved, ...SAMPLE_POSTS]);
  }, []);

  const filtered = (activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory))
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()) ||
                 p.excerpt.toLowerCase().includes(search.toLowerCase()));

  const featuredPost = filtered[0];
  const gridPosts    = filtered.slice(1);

  /* ── Styles ── */
  const s = {
    page: {
      minHeight: "100vh",
      background: "#060a0f",
      paddingBottom: "5rem",
      fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
    },
    hero: {
      background: "linear-gradient(180deg, #0a1628 0%, #060a0f 100%)",
      padding: "5rem 1rem 3rem",
      textAlign: "center",
      borderBottom: "1px solid rgba(245,158,11,0.15)",
      position: "relative",
      overflow: "hidden",
    },
    heroDecor: {
      position: "absolute",
      top: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "600px",
      height: "600px",
      background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
      pointerEvents: "none",
    },
    heroLabel: {
      color: "#f59e0b",
      fontSize: "0.75rem",
      fontWeight: "700",
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      marginBottom: "1rem",
      fontFamily: "'Georgia', sans-serif",
    },
    heroTitle: {
      color: "#fefce8",
      fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
      fontWeight: "700",
      lineHeight: "1.15",
      marginBottom: "1rem",
    },
    heroSub: {
      color: "#9ca3af",
      fontSize: "1.05rem",
      maxWidth: "520px",
      margin: "0 auto 2rem",
      lineHeight: "1.7",
    },
    writeBtn: {
      background: "linear-gradient(135deg, #f59e0b, #d97706)",
      border: "none",
      color: "#000",
      padding: "0.75rem 2rem",
      borderRadius: "50px",
      fontWeight: "700",
      fontSize: "0.95rem",
      cursor: "pointer",
      letterSpacing: "0.03em",
      boxShadow: "0 4px 20px rgba(245,158,11,0.3)",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    inner: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1.5rem",
    },
    toolbar: {
      display: "flex",
      gap: "1rem",
      alignItems: "center",
      flexWrap: "wrap",
      padding: "2rem 0 1.5rem",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      marginBottom: "2.5rem",
    },
    categoryBtn: (active) => ({
      background: active ? "#f59e0b" : "transparent",
      border: `1px solid ${active ? "#f59e0b" : "rgba(255,255,255,0.12)"}`,
      color: active ? "#000" : "#9ca3af",
      padding: "0.4rem 1.1rem",
      borderRadius: "50px",
      cursor: "pointer",
      fontSize: "0.85rem",
      fontWeight: active ? "700" : "400",
      transition: "all 0.2s",
    }),
    searchInput: {
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "50px",
      color: "#fff",
      padding: "0.4rem 1.2rem",
      fontSize: "0.88rem",
      outline: "none",
      marginLeft: "auto",
      width: "220px",
    },
    /* Featured card */
    featuredCard: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "0",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(245,158,11,0.2)",
      borderRadius: "20px",
      overflow: "hidden",
      marginBottom: "3rem",
      cursor: "pointer",
      transition: "transform 0.3s, box-shadow 0.3s",
    },
    featuredImg: {
      width: "100%",
      height: "100%",
      minHeight: "340px",
      objectFit: "cover",
    },
    featuredBody: {
      padding: "2.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    featuredBadge: {
      display: "inline-block",
      fontSize: "0.72rem",
      fontWeight: "700",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      marginBottom: "1rem",
      padding: "0.25rem 0.8rem",
      borderRadius: "50px",
      border: "1px solid",
    },
    featuredTitle: {
      color: "#fefce8",
      fontSize: "1.7rem",
      fontWeight: "700",
      lineHeight: "1.3",
      marginBottom: "1rem",
    },
    featuredExcerpt: {
      color: "#9ca3af",
      fontSize: "1rem",
      lineHeight: "1.7",
      marginBottom: "1.5rem",
    },
    featuredMeta: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      flexWrap: "wrap",
    },
    metaText: {
      color: "#6b7280",
      fontSize: "0.82rem",
    },
    /* Grid */
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      gap: "1.8rem",
    },
    card: {
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: "16px",
      overflow: "hidden",
      cursor: "pointer",
      transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
    },
    cardImg: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    cardBody: {
      padding: "1.4rem",
    },
    cardBadge: (cat) => ({
      display: "inline-block",
      fontSize: "0.68rem",
      fontWeight: "700",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: categoryColor(cat),
      marginBottom: "0.6rem",
    }),
    cardTitle: {
      color: "#f1f5f9",
      fontSize: "1.05rem",
      fontWeight: "700",
      lineHeight: "1.4",
      marginBottom: "0.6rem",
    },
    cardExcerpt: {
      color: "#6b7280",
      fontSize: "0.88rem",
      lineHeight: "1.6",
      marginBottom: "1rem",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
    cardFooter: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    emptyState: {
      textAlign: "center",
      padding: "5rem 1rem",
      color: "#4b5563",
    },
  };

  const openPost = (post) => navigate("/blog/post", { state: { post } });

  return (
    <div style={s.page}>

      {/* ── Hero ── */}
      <div style={s.hero}>
        <div style={s.heroDecor} />
        <p style={s.heroLabel}>✦ The Reading Room ✦</p>
        <h1 style={s.heroTitle}>Book Reviews &<br />Recommendations</h1>
        <p style={s.heroSub}>
          Honest takes on the stories that move us — written by readers, for readers.
        </p>
        {isLoggedIn ? (
          <button
            style={s.writeBtn}
            onClick={() => navigate("/blog/create")}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(245,158,11,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(245,158,11,0.3)"; }}
          >
            ✍️ Write a Review
          </button>
        ) : (
          <p style={{ color: "#6b7280", fontSize: "0.88rem", marginTop: "0.5rem" }}>
            <span
              style={{ color: "#f59e0b", cursor: "pointer", textDecoration: "underline" }}
              onClick={() => navigate("/signin")}
            >
              Sign in
            </span>{" "}
            to write a review
          </p>
        )}
      </div>

      {/* ── Content ── */}
      <div style={s.inner}>

        {/* ── Toolbar ── */}
        <div style={s.toolbar}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              style={s.categoryBtn(activeCategory === cat)}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
          <input
            style={s.searchInput}
            placeholder="Search posts…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {filtered.length === 0 ? (
          <div style={s.emptyState}>
            <p style={{ fontSize: "3rem", marginBottom: "1rem" }}>📭</p>
            <p style={{ fontSize: "1.1rem" }}>No posts found.</p>
          </div>
        ) : (
          <>
            {/* ── Featured Post ── */}
            {featuredPost && (
              <div
                style={s.featuredCard}
                onClick={() => openPost(featuredPost)}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <img src={featuredPost.cover} alt={featuredPost.title} style={s.featuredImg} />
                <div style={s.featuredBody}>
                  <span style={{
                    ...s.featuredBadge,
                    color: categoryColor(featuredPost.category),
                    borderColor: categoryColor(featuredPost.category),
                  }}>
                    ✦ Featured · {featuredPost.category}
                  </span>
                  <h2 style={s.featuredTitle}>{featuredPost.title}</h2>
                  <p style={s.featuredExcerpt}>{featuredPost.excerpt}</p>
                  <div style={s.featuredMeta}>
                    <StarRating rating={featuredPost.rating} />
                    <span style={s.metaText}>By {featuredPost.author}</span>
                    <span style={s.metaText}>·</span>
                    <span style={s.metaText}>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
            )}

            {/* ── Card Grid ── */}
            <div style={s.grid}>
              {gridPosts.map(post => (
                <div
                  key={post.id}
                  style={s.card}
                  onClick={() => openPost(post)}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)";
                    e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.4)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <img src={post.cover} alt={post.title} style={s.cardImg} />
                  <div style={s.cardBody}>
                    <span style={s.cardBadge(post.category)}>{post.category}</span>
                    <h3 style={s.cardTitle}>{post.title}</h3>
                    <p style={s.cardExcerpt}>{post.excerpt}</p>
                    <div style={s.cardFooter}>
                      <StarRating rating={post.rating} />
                      <span style={s.metaText}>{post.readTime}</span>
                    </div>
                    <p style={{ ...s.metaText, marginTop: "0.5rem" }}>
                      By {post.author} · {post.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPage;