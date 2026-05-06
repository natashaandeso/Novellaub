import React, { useEffect, useRef } from 'react';

const teamMembers = [
  {
    initials: 'AW',
    name: 'Amara Wanjiku',
    role: 'Founder & Chief Storyteller',
    quote: 'Every book is a door to another world. We build the doorways.',
    color: '#c084fc',
    bg: 'rgba(192,132,252,0.12)',
  },
  {
    initials: 'AB',
    name: 'Abigail Bernard',
    role: 'Head of Curation',
    quote: 'A great story finds you exactly when you need it most.',
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.12)',
  },
  {
    initials: 'NA',
    name: 'Natasha Andeso',
    role: 'Lead Developer',
    quote: 'I code the shelves so stories can breathe freely.',
    color: '#818cf8',
    bg: 'rgba(129,140,248,0.12)',
  },
];

const values = [
  { icon: '📖', title: 'Stories First', desc: 'Every decision we make starts with one question: does this serve the story?' },
  { icon: '🌍', title: 'African Voices', desc: 'We amplify writers from across the continent — raw, real, and unapologetically bold.' },
  { icon: '🔓', title: 'Open Access', desc: 'Great literature shouldn\'t be locked behind geography or economics.' },
  { icon: '✍️', title: 'Writer-Led', desc: 'Our platform is built with writers, not just for them. Your craft shapes our tools.' },
];

const AboutUs = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };

  return (
    <div className="about-page">

      {/* ── Floating orbs background ── */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* ── HERO ── */}
      <section className="about-hero" ref={addRef}>
        <div className="hero-eyebrow">✦ Our Story ✦</div>
        <h1 className="hero-title">
          Where Words<br />
          <span className="gradient-text">Find a Home</span>
        </h1>
        <p className="hero-sub">
          NovellaHub was born from a simple, stubborn belief —<br />
          that every story deserves to be read, and every reader deserves to escape.
        </p>
        <div className="hero-scroll">scroll to discover ↓</div>
      </section>

      {/* ── MISSION ── */}
      <section className="about-section mission-section" ref={addRef}>
        <div className="section-inner">
          <div className="mission-text">
            <span className="label-pill">Our Mission</span>
            <h2>A digital sanctuary<br />for readers & writers</h2>
            <p>
              We built NovellaHub because great African stories were scattered, 
              undervalued, and hard to find. We're changing that — one novella, 
              one poem, one writer at a time.
            </p>
            <p>
              Whether you're here to lose yourself in a story or to share one 
              you've been carrying, you've found your place.
            </p>
          </div>
          <div className="mission-card">
            <div className="stat-grid">
              <div className="stat"><span className="stat-num">2,400+</span><span className="stat-label">Stories Published</span></div>
              <div className="stat"><span className="stat-num">180+</span><span className="stat-label">Active Writers</span></div>
              <div className="stat"><span className="stat-num">34</span><span className="stat-label">Countries Reached</span></div>
              <div className="stat"><span className="stat-num">98%</span><span className="stat-label">Reader Satisfaction</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="about-section values-section" ref={addRef}>
        <div className="section-header">
          <span className="label-pill">What We Believe</span>
          <h2>Our Four Pillars</h2>
        </div>
        <div className="values-grid">
          {values.map((v, i) => (
            <div className="value-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="about-section team-section" ref={addRef}>
        <div className="section-header">
          <span className="label-pill">The Humans Behind It</span>
          <h2>Meet the Team</h2>
        </div>
        <div className="team-grid">
          {teamMembers.map((m, i) => (
            <div className="team-card" key={i}>
              <div className="team-avatar" style={{ background: m.bg, color: m.color }}>
                {m.initials}
              </div>
              <h3 style={{ color: m.color }}>{m.name}</h3>
              <span className="team-role">{m.role}</span>
              <p className="team-quote">"{m.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-section cta-section" ref={addRef}>
        <div className="cta-inner">
          <div className="cta-decoration">✦</div>
          <h2>Ready to dive in?</h2>
          <p>Your next favourite story is already waiting for you on the shelf.</p>
          <div className="cta-buttons">
            <a href="/" className="cta-primary">Browse Stories 📚</a>
            <a href="/signup" className="cta-secondary">Join as a Writer ✍️</a>
          </div>
        </div>
      </section>

      {/* ── STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .about-page {
          font-family: 'DM Sans', sans-serif;
          background: #0a0514;
          color: #e8d5ff;
          min-height: 100vh;
          padding-top: 80px;
          position: relative;
          overflow-x: hidden;
        }

        /* ── Orbs ── */
        .orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
          opacity: 0.25;
        }
        .orb-1 { width: 500px; height: 500px; background: #7c3aed; top: -100px; left: -150px; }
        .orb-2 { width: 400px; height: 400px; background: #db2777; top: 40%; right: -100px; }
        .orb-3 { width: 350px; height: 350px; background: #4f46e5; bottom: 10%; left: 20%; }

        /* ── Fade-in sections ── */
        .about-section, .about-hero {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
          position: relative; z-index: 1;
        }
        .about-section.visible, .about-hero.visible {
          opacity: 1; transform: translateY(0);
        }

        /* ── Hero ── */
        .about-hero {
          text-align: center;
          padding: 5rem 2rem 4rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .hero-eyebrow {
          font-size: 0.8rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #a78bfa;
          margin-bottom: 1.5rem;
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 600;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #f3e8ff;
        }
        .gradient-text {
          background: linear-gradient(135deg, #c084fc, #f472b6, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-sub {
          font-size: 1.1rem;
          color: rgba(232,213,255,0.65);
          line-height: 1.8;
          max-width: 560px;
          margin: 0 auto 2.5rem;
          font-weight: 300;
        }
        .hero-scroll {
          font-size: 0.78rem;
          letter-spacing: 0.15em;
          color: rgba(167,139,250,0.5);
          text-transform: uppercase;
          animation: pulse 2.5s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; } 50% { opacity: 1; }
        }

        /* ── Sections ── */
        .about-section { padding: 5rem 2rem; max-width: 1100px; margin: 0 auto; }
        .section-header { text-align: center; margin-bottom: 3rem; }
        .section-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          color: #f3e8ff;
          margin-top: 0.75rem;
        }

        /* Label pill */
        .label-pill {
          display: inline-block;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c084fc;
          border: 1px solid rgba(192,132,252,0.3);
          border-radius: 20px;
          padding: 4px 14px;
          background: rgba(192,132,252,0.08);
        }

        /* ── Mission ── */
        .section-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 768px) { .section-inner { grid-template-columns: 1fr; gap: 2.5rem; } }

        .mission-text .label-pill { margin-bottom: 1rem; display: inline-block; }
        .mission-text h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          color: #f3e8ff;
          line-height: 1.2;
          margin: 0.5rem 0 1.5rem;
        }
        .mission-text p {
          color: rgba(232,213,255,0.65);
          line-height: 1.8;
          margin-bottom: 1rem;
          font-size: 1rem;
        }
        .mission-card {
          background: rgba(124,58,237,0.1);
          border: 1px solid rgba(168,85,247,0.2);
          border-radius: 20px;
          padding: 2.5rem;
        }
        .stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .stat { display: flex; flex-direction: column; gap: 4px; }
        .stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          font-weight: 600;
          background: linear-gradient(135deg, #c084fc, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stat-label { font-size: 0.78rem; color: rgba(232,213,255,0.5); letter-spacing: 0.05em; }

        /* ── Values ── */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 1.5rem;
        }
        .value-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(168,85,247,0.15);
          border-radius: 16px;
          padding: 2rem 1.5rem;
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }
        .value-card:hover {
          transform: translateY(-6px);
          border-color: rgba(192,132,252,0.4);
          background: rgba(124,58,237,0.1);
        }
        .value-icon { font-size: 2rem; margin-bottom: 1rem; }
        .value-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          color: #e8d5ff;
          margin-bottom: 0.6rem;
        }
        .value-card p { font-size: 0.9rem; color: rgba(232,213,255,0.55); line-height: 1.7; margin: 0; }

        /* ── Team ── */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }
        .team-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(168,85,247,0.15);
          border-radius: 20px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: transform 0.25s ease, border-color 0.25s;
        }
        .team-card:hover { transform: translateY(-6px); border-color: rgba(192,132,252,0.35); }
        .team-avatar {
          width: 72px; height: 72px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem; font-weight: 600;
          margin: 0 auto 1.25rem;
          border: 2px solid currentColor;
        }
        .team-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          margin-bottom: 0.25rem;
        }
        .team-role {
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(232,213,255,0.4);
          display: block;
          margin-bottom: 1rem;
        }
        .team-quote {
          font-size: 0.9rem;
          font-style: italic;
          color: rgba(232,213,255,0.6);
          line-height: 1.7;
          margin: 0;
          font-family: 'Playfair Display', serif;
        }

        /* ── CTA ── */
        .cta-section { text-align: center; padding-bottom: 6rem; }
        .cta-inner {
          background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(219,39,119,0.15));
          border: 1px solid rgba(168,85,247,0.25);
          border-radius: 24px;
          padding: 4rem 2rem;
          position: relative;
          overflow: hidden;
        }
        .cta-decoration {
          font-size: 4rem;
          color: rgba(192,132,252,0.15);
          position: absolute;
          top: -10px; right: 30px;
          font-family: serif;
        }
        .cta-inner h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          color: #f3e8ff;
          margin-bottom: 0.75rem;
        }
        .cta-inner p {
          color: rgba(232,213,255,0.6);
          font-size: 1rem;
          margin-bottom: 2rem;
        }
        .cta-buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .cta-primary {
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          color: white;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(124,58,237,0.4);
        }
        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(124,58,237,0.55);
          color: white;
          text-decoration: none;
        }
        .cta-secondary {
          background: transparent;
          color: #c084fc;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          border: 1px solid rgba(192,132,252,0.35);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: background 0.2s, border-color 0.2s;
        }
        .cta-secondary:hover {
          background: rgba(192,132,252,0.1);
          border-color: rgba(192,132,252,0.6);
          color: #c084fc;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;