import React from 'react';
import { useNavigate } from 'react-router-dom';
import allChapters from './chapters';

const ChapterReader = ({ product, onClose }) => {
  const navigate = useNavigate();

  // ── Look up this book's chapters by product_id ──────────────
  const bookData = allChapters[product.product_id];
  const chapters = bookData?.chapters || [];

  const goToChapter = (index) => {
    navigate('/chapter', {
      state: {
        product,
        chapters,
        currentIndex: index,
      },
    });
  };

  /* ── Styles ───────────────────────────────────────────────── */
  const styles = {
    wrapper: {
      background: 'linear-gradient(135deg, #0d0d0d 0%, #111827 100%)',
      border: '1px solid rgba(99,210,255,0.15)',
      borderRadius: '16px',
      padding: '2rem',
      marginTop: '2rem',
      fontFamily: "'Georgia', 'Times New Roman', serif",
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.5rem',
      borderBottom: '1px solid rgba(99,210,255,0.2)',
      paddingBottom: '1rem',
    },
    bookTitle: {
      color: '#63d2ff',
      fontSize: '1rem',
      margin: 0,
    },
    closeBtn: {
      background: 'transparent',
      border: '1px solid rgba(255,255,255,0.2)',
      color: '#aaa',
      borderRadius: '50%',
      width: '32px',
      height: '32px',
      cursor: 'pointer',
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s',
    },
    chapterLabel: {
      color: '#0ea5e9',
      fontSize: '0.78rem',
      fontWeight: '700',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      marginBottom: '0.4rem',
    },
    chapterTitle: {
      color: '#fff',
      fontSize: '1.4rem',
      fontWeight: '600',
      marginBottom: '1.2rem',
    },
    content: {
      color: '#d1d5db',
      fontSize: '1.05rem',
      lineHeight: '1.9',
      maxHeight: '480px',
      overflowY: 'auto',
      whiteSpace: 'pre-wrap',
      paddingRight: '0.5rem',
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '1.8rem',
      paddingTop: '1.2rem',
      borderTop: '1px solid rgba(99,210,255,0.12)',
    },
    chapterCount: {
      color: '#6b7280',
      fontSize: '0.85rem',
    },
    nextBtn: {
      background: 'linear-gradient(90deg, #0ea5e9, #38bdf8)',
      border: 'none',
      color: '#fff',
      padding: '0.6rem 1.6rem',
      borderRadius: '8px',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '0.95rem',
      transition: 'opacity 0.2s',
    },
    noStory: {
      color: '#f87171',
      textAlign: 'center',
      padding: '2rem 0',
      fontSize: '0.95rem',
    },
  };

  /* ── No story found for this product_id ─────────────────────── */
  if (!chapters.length) {
    return (
      <div style={styles.wrapper}>
        <div style={styles.header}>
          <p style={styles.bookTitle}>📖 {product.product_name}</p>
          <button
            style={styles.closeBtn}
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <p style={styles.noStory}>
          ⚠️ No chapters found for this book (product_id: {product.product_id}).<br />
          Add them to <strong>chapters.js</strong>.
        </p>
      </div>
    );
  }

  const first = chapters[0];

  return (
    <div style={styles.wrapper}>
      {/* ── Header ── */}
      <div style={styles.header}>
        <p style={styles.bookTitle}>📖 {product.product_name}</p>
        <button
          style={styles.closeBtn}
          onClick={onClose}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#63d2ff'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#aaa'; }}
        >
          ✕
        </button>
      </div>

      {/* ── Chapter 1 Preview ── */}
      <p style={styles.chapterLabel}>Chapter 1</p>
      <h4 style={styles.chapterTitle}>{first.title}</h4>
      <div style={styles.content}>{first.content}</div>

      {/* ── Footer ── */}
      <div style={styles.footer}>
        <span style={styles.chapterCount}>
          Chapter 1 of {chapters.length}
        </span>
        {chapters.length > 1 && (
          <button
            style={styles.nextBtn}
            onClick={() => goToChapter(1)}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Next Chapter →
          </button>
        )}
      </div>
    </div>
  );
};

export default ChapterReader;