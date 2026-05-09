import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ChapterPage = () => {
  const { state }    = useLocation();
  const navigate     = useNavigate();
  const product      = state?.product;
  const chapters     = state?.chapters     || [];
  const initialIndex = state?.currentIndex ?? 0;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const topRef = useRef(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentIndex]);

  if (!product || !chapters.length) {
    return (
      <div className="text-white text-center mt-5">
        <p>Story data not found.</p>
        <button className="btn btn-outline-light mt-3" onClick={() => navigate(-1)}>
          ← Go Back
        </button>
      </div>
    );
  }

  const chapter  = chapters[currentIndex];
  const isFirst  = currentIndex === 0;
  const isLast   = currentIndex === chapters.length - 1;
  const progress = ((currentIndex + 1) / chapters.length) * 100;

  const styles = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #080c12 0%, #0f172a 60%, #080c12 100%)',
      padding: '2rem 1rem 5rem',
      fontFamily: "'Georgia', 'Times New Roman', serif",
    },
    inner: {
      maxWidth: '760px',
      margin: '0 auto',
    },
    topBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.8rem',
    },
    backBtn: {
      background: 'transparent',
      border: '1px solid rgba(255,255,255,0.2)',
      color: '#9ca3af',
      padding: '0.45rem 1.1rem',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      transition: 'all 0.2s',
    },
    bookMeta: {
      color: '#6b7280',
      fontSize: '0.82rem',
      textAlign: 'right',
    },
    bookName: {
      color: '#63d2ff',
      display: 'block',
      fontSize: '0.95rem',
      fontWeight: '600',
    },
    progressWrap: {
      height: '3px',
      background: 'rgba(255,255,255,0.08)',
      borderRadius: '2px',
      marginBottom: '2.5rem',
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(90deg, #0ea5e9, #38bdf8)',
      borderRadius: '2px',
      width: `${progress}%`,
      transition: 'width 0.4s ease',
    },
    chapterLabel: {
      color: '#0ea5e9',
      fontSize: '0.78rem',
      fontWeight: '700',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      marginBottom: '0.5rem',
    },
    chapterTitle: {
      color: '#f9fafb',
      fontSize: '1.85rem',
      fontWeight: '700',
      lineHeight: '1.3',
      marginBottom: '1.8rem',
    },
    divider: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '2rem',
    },
    dividerLine: {
      flex: 1,
      height: '1px',
      background: 'rgba(99,210,255,0.15)',
    },
    dividerDot: {
      color: '#63d2ff',
      fontSize: '1.1rem',
    },
    content: {
      color: '#d1d5db',
      fontSize: '1.1rem',
      lineHeight: '2',
      whiteSpace: 'pre-wrap',
      marginBottom: '3rem',
    },
    finishedBox: {
      textAlign: 'center',
      padding: '2rem',
      background: 'rgba(99,210,255,0.05)',
      border: '1px solid rgba(99,210,255,0.2)',
      borderRadius: '12px',
      marginBottom: '2.5rem',
    },
    finishedText: {
      color: '#63d2ff',
      fontSize: '1.1rem',
      marginBottom: '0.4rem',
    },
    navRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem',
      paddingTop: '1.5rem',
      borderTop: '1px solid rgba(99,210,255,0.12)',
    },
    navBtn: (disabled) => ({
      background: disabled
        ? 'rgba(255,255,255,0.04)'
        : 'linear-gradient(90deg, #0ea5e9, #38bdf8)',
      border: disabled ? '1px solid rgba(255,255,255,0.1)' : 'none',
      color: disabled ? '#4b5563' : '#fff',
      padding: '0.7rem 1.8rem',
      borderRadius: '10px',
      fontWeight: '600',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontSize: '0.95rem',
      opacity: disabled ? 0.5 : 1,
    }),
    centerInfo: {
      textAlign: 'center',
      flex: 1,
    },
    pageCounter: {
      color: '#6b7280',
      fontSize: '0.85rem',
      marginBottom: '8px',
    },
    dotsWrap: {
      display: 'flex',
      justifyContent: 'center',
      gap: '6px',
      flexWrap: 'wrap',
    },
    dot: (active) => ({
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: active ? '#38bdf8' : 'rgba(255,255,255,0.15)',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      transition: 'background 0.2s',
    }),
  };

  return (
    <div style={styles.page}>
      <div ref={topRef} style={styles.inner}>

        {/* ── Top Bar ── */}
        <div style={styles.topBar}>
          <button
            style={styles.backBtn}
            onClick={() => navigate(-1)}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#63d2ff'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#9ca3af'; }}
          >
            ← Back
          </button>
          <div style={styles.bookMeta}>
            <span style={styles.bookName}>{product.product_name}</span>
            Chapter {currentIndex + 1} of {chapters.length}
          </div>
        </div>

        {/* ── Progress Bar ── */}
        <div style={styles.progressWrap}>
          <div style={styles.progressFill} />
        </div>

        {/* ── Chapter Heading ── */}
        <p style={styles.chapterLabel}>Chapter {currentIndex + 1}</p>
        <h1 style={styles.chapterTitle}>{chapter.title}</h1>

        <div style={styles.divider}>
          <div style={styles.dividerLine} />
          <span style={styles.dividerDot}>✦</span>
          <div style={styles.dividerLine} />
        </div>

        {/* ── Story Text ── */}
        <div style={styles.content}>{chapter.content}</div>

        {/* ── Finished Banner ── */}
        {isLast && (
          <div style={styles.finishedBox}>
            <p style={styles.finishedText}>🎉 You've reached the end of this story!</p>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>
              Thank you for reading <em>{product.product_name}</em>
            </p>
          </div>
        )}

        {/* ── Prev / Next ── */}
        <div style={styles.navRow}>
          <button
            style={styles.navBtn(isFirst)}
            disabled={isFirst}
            onClick={() => !isFirst && setCurrentIndex(i => i - 1)}
          >
            ← Previous
          </button>

          <div style={styles.centerInfo}>
            <p style={styles.pageCounter}>{currentIndex + 1} / {chapters.length}</p>
            {chapters.length <= 20 && (
              <div style={styles.dotsWrap}>
                {chapters.map((_, i) => (
                  <button
                    key={i}
                    style={styles.dot(i === currentIndex)}
                    onClick={() => setCurrentIndex(i)}
                    title={`Chapter ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          <button
            style={styles.navBtn(isLast)}
            disabled={isLast}
            onClick={() => !isLast && setCurrentIndex(i => i + 1)}
          >
            Next →
          </button>
        </div>

      </div>
    </div>
  );
};

export default ChapterPage;