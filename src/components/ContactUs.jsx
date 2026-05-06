import React, { useEffect, useRef } from 'react';

const contactMethods = [
  {
    icon: '✉️',
    label: 'Email Us',
    value: 'hello@novellahub.com',
    sub: 'We reply within 24 hours',
    color: '#c084fc',
    bg: 'rgba(192,132,252,0.1)',
    border: 'rgba(192,132,252,0.25)',
  },
  {
    icon: '💬',
    label: 'Live Chat',
    value: 'Available in the app',
    sub: 'Mon – Fri, 9am – 6pm EAT',
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.1)',
    border: 'rgba(244,114,182,0.25)',
  },
  {
    icon: '📍',
    label: 'Find Us',
    value: 'Nairobi, Kenya',
    sub: 'The heart of African stories',
    color: '#818cf8',
    bg: 'rgba(129,140,248,0.1)',
    border: 'rgba(129,140,248,0.25)',
  },
  {
    icon: '📞',
    label: 'Call Us',
    value: '+254 700 000 000',
    sub: 'Mon – Fri, 9am – 6pm EAT',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.1)',
    border: 'rgba(52,211,153,0.25)',
  },
];

const ContactUs = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('ct-visible')),
      { threshold: 0.12 }
    );
    sectionsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = el => { if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el); };

  return (
    <div className="ct-page">

      {/* Background orbs */}
      <div className="ct-orb ct-orb-1" />
      <div className="ct-orb ct-orb-2" />
      <div className="ct-orb ct-orb-3" />

      {/* ── HERO ── */}
      <section className="ct-hero" ref={addRef}>
        <div className="ct-eyebrow">✦ Get In Touch ✦</div>
        <h1 className="ct-hero-title">
          We'd Love to<br />
          <span className="ct-gradient">Hear From You</span>
        </h1>
        <p className="ct-hero-sub">
          Got a story idea, a bug to report, or just want to say hello?<br />
          Our team of bookworms is always happy to chat.
        </p>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="ct-section ct-cards-section" ref={addRef}>
        <div className="ct-cards">
          {contactMethods.map((m, i) => (
            <div
              className="ct-card"
              key={i}
              style={{
                background: m.bg,
                border: `1px solid ${m.border}`,
                animationDelay: `${i * 0.12}s`,
              }}
            >
              <div className="ct-card-icon">{m.icon}</div>
              <div className="ct-card-label" style={{ color: m.color }}>{m.label}</div>
              <div className="ct-card-value">{m.value}</div>
              <div className="ct-card-sub">{m.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOCIAL + TAGLINE ── */}
      <section className="ct-section ct-social-section" ref={addRef}>
        <div className="ct-social-inner">
          <div className="ct-social-text">
            <span className="ct-label-pill">Stay Connected</span>
            <h2 className="ct-social-title">Find us on social media</h2>
            <p className="ct-social-body">
              Follow us for new story drops, writer spotlights, reading challenges,
              and a community that actually gets your book obsession.
            </p>
            <div className="ct-socials">
              <a href="#" className="ct-social-btn">𝕏 Twitter</a>
              <a href="#" className="ct-social-btn">📘 Facebook</a>
              <a href="#" className="ct-social-btn">📸 Instagram</a>
              <a href="#" className="ct-social-btn">▶️ TikTok</a>
            </div>
          </div>
          <div className="ct-quote-card">
            <div className="ct-quote-mark">"</div>
            <p className="ct-quote-text">
              A reader lives a thousand lives before he dies. The man who never reads lives only one.
            </p>
            <span className="ct-quote-author">— George R.R. Martin</span>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ct-section ct-faq-section" ref={addRef}>
        <div className="ct-faq-inner">
          <div className="ct-faq-head">
            <span className="ct-label-pill">Quick Answers</span>
            <h2 className="ct-faq-title">Common Questions</h2>
          </div>
          <div className="ct-faq-grid">
            {[
              { q: 'How do I publish my story?', a: 'Sign up as a writer, go to Add Products, upload your PDF and cover image. That\'s it!' },
              { q: 'Is reading free?', a: 'Browsing and reading online is free. Downloading PDFs requires a small M-Pesa payment per book.' },
              { q: 'Can I write in Swahili?', a: 'Absolutely! We celebrate all African languages. Swahili, Kikuyu, Yoruba — bring your voice.' },
              { q: 'How long does support take?', a: 'We respond to all emails within 24 hours on weekdays. Usually much faster!' },
              { q: 'Can I read on mobile?', a: 'Yes! NovellaHub works beautifully on any device — phone, tablet, or desktop.' },
              { q: 'How do I reset my password?', a: 'Head to the Sign In page and click "Forgot password" — we\'ll send a reset link to your email.' },
            ].map((item, i) => (
              <div className="ct-faq-card" key={i}>
                <div className="ct-faq-q">✦ {item.q}</div>
                <div className="ct-faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ct-section ct-cta-section" ref={addRef}>
        <div className="ct-cta-inner">
          <h2 className="ct-cta-title">Still have questions?</h2>
          <p className="ct-cta-sub">
            Drop us an email and we'll get back to you within 24 hours.
          </p>
          <a href="mailto:hello@novellahub.com" className="ct-cta-btn">
            Email Us Directly ✦
          </a>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500&display=swap');

        .ct-page {
          font-family: 'Jost', sans-serif;
          background: #080412;
          color: #ede0ff;
          min-height: 100vh;
          padding-top: 88px;
          position: relative;
          overflow-x: hidden;
        }

        .ct-orb {
          position: fixed; border-radius: 50%;
          filter: blur(90px); pointer-events: none; z-index: 0; opacity: 0.2;
        }
        .ct-orb-1 { width: 520px; height: 520px; background: #6d28d9; top: -120px; left: -160px; }
        .ct-orb-2 { width: 380px; height: 380px; background: #be185d; top: 35%; right: -80px; }
        .ct-orb-3 { width: 300px; height: 300px; background: #1d4ed8; bottom: 15%; left: 25%; }

        .ct-hero, .ct-section {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
          position: relative; z-index: 1;
        }
        .ct-hero.ct-visible, .ct-section.ct-visible {
          opacity: 1; transform: translateY(0);
        }

        .ct-hero {
          text-align: center; padding: 4.5rem 2rem 3rem;
          max-width: 720px; margin: 0 auto;
        }
        .ct-eyebrow {
          font-size: 0.72rem; letter-spacing: 0.25em; text-transform: uppercase;
          color: #a78bfa; margin-bottom: 1.5rem;
        }
        .ct-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 6.5vw, 5rem);
          font-weight: 600; line-height: 1.1; color: #f5f0ff; margin-bottom: 1.25rem;
        }
        .ct-gradient {
          background: linear-gradient(130deg, #a855f7, #ec4899, #6366f1);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ct-hero-sub {
          font-size: 1.05rem; color: rgba(237,224,255,0.6);
          line-height: 1.85; font-weight: 300; max-width: 500px; margin: 0 auto;
        }

        .ct-section { padding: 3.5rem 2rem; max-width: 1080px; margin: 0 auto; }

        .ct-label-pill {
          display: inline-block; font-size: 0.7rem; letter-spacing: 0.15em;
          text-transform: uppercase; color: #c084fc;
          border: 1px solid rgba(192,132,252,0.3); border-radius: 20px;
          padding: 4px 14px; background: rgba(192,132,252,0.07);
        }

        /* ── Contact cards ── */
        .ct-cards {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem;
        }
        .ct-card {
          border-radius: 18px; padding: 1.75rem 1.5rem;
          transition: transform 0.25s ease;
          animation: ctFadeUp 0.6s ease both;
        }
        .ct-card:hover { transform: translateY(-6px); }
        .ct-card-icon { font-size: 1.8rem; margin-bottom: 0.9rem; }
        .ct-card-label { font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 500; margin-bottom: 0.4rem; }
        .ct-card-value { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; color: #f5f0ff; margin-bottom: 0.25rem; }
        .ct-card-sub { font-size: 0.8rem; color: rgba(237,224,255,0.45); }

        /* ── Social section ── */
        .ct-social-inner {
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
        }
        @media (max-width: 768px) { .ct-social-inner { grid-template-columns: 1fr; gap: 2.5rem; } }

        .ct-social-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          color: #f5f0ff; line-height: 1.2; margin: 0.75rem 0 1rem;
        }
        .ct-social-body {
          font-size: 0.95rem; color: rgba(237,224,255,0.55);
          line-height: 1.85; font-weight: 300; margin-bottom: 1.5rem;
        }
        .ct-socials { display: flex; gap: 0.6rem; flex-wrap: wrap; }
        .ct-social-btn {
          font-size: 0.8rem; padding: 6px 16px; border-radius: 20px;
          border: 1px solid rgba(168,85,247,0.25);
          background: rgba(168,85,247,0.07); color: #c084fc;
          text-decoration: none; transition: background 0.2s, border-color 0.2s;
        }
        .ct-social-btn:hover {
          background: rgba(168,85,247,0.2); border-color: rgba(192,132,252,0.5); color: #e8d5ff;
        }

        /* Quote card */
        .ct-quote-card {
          background: rgba(124,58,237,0.1);
          border: 1px solid rgba(168,85,247,0.2);
          border-radius: 20px; padding: 2.5rem;
          position: relative;
        }
        .ct-quote-mark {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5rem; line-height: 1; color: rgba(192,132,252,0.3);
          position: absolute; top: 0.5rem; left: 1.5rem;
        }
        .ct-quote-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem; font-style: italic;
          color: #e8d5ff; line-height: 1.7;
          margin: 1.5rem 0 1rem; position: relative; z-index: 1;
        }
        .ct-quote-author {
          font-size: 0.8rem; color: #a78bfa;
          letter-spacing: 0.08em;
        }

        /* ── FAQ ── */
        .ct-faq-section { padding-bottom: 4rem; }
        .ct-faq-inner { max-width: 900px; margin: 0 auto; }
        .ct-faq-head { text-align: center; margin-bottom: 2.5rem; }
        .ct-faq-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.7rem, 3.5vw, 2.5rem);
          color: #f5f0ff; margin-top: 0.75rem;
        }
        .ct-faq-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 1rem;
        }
        @media (max-width: 480px) { .ct-faq-grid { grid-template-columns: 1fr; } }
        .ct-faq-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(168,85,247,0.15);
          border-radius: 16px; padding: 1.5rem;
          transition: border-color 0.2s, background 0.2s;
        }
        .ct-faq-card:hover {
          border-color: rgba(192,132,252,0.35);
          background: rgba(124,58,237,0.08);
        }
        .ct-faq-q {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem; color: #e8d5ff; margin-bottom: 0.6rem; font-weight: 600;
        }
        .ct-faq-a { font-size: 0.9rem; color: rgba(237,224,255,0.55); line-height: 1.75; }

        /* ── CTA ── */
        .ct-cta-section { padding-bottom: 6rem; }
        .ct-cta-inner {
          text-align: center;
          background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(219,39,119,0.15));
          border: 1px solid rgba(168,85,247,0.25);
          border-radius: 24px; padding: 4rem 2rem;
        }
        .ct-cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          color: #f5f0ff; margin-bottom: 0.75rem;
        }
        .ct-cta-sub {
          color: rgba(237,224,255,0.6); font-size: 1rem; margin-bottom: 2rem;
        }
        .ct-cta-btn {
          display: inline-block;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          color: white; text-decoration: none;
          padding: 0.85rem 2.5rem; border-radius: 50px;
          font-size: 1rem; font-weight: 500;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(124,58,237,0.4);
        }
        .ct-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(124,58,237,0.55);
          color: white; text-decoration: none;
        }

        @keyframes ctFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;