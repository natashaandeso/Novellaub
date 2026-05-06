import React, { useState, useEffect, useRef } from 'react';

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
];

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(''); // 'sending' | 'sent' | 'error'
  const [focused, setFocused] = useState('');
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

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    // Simulate sending — replace with your actual API call
    setTimeout(() => setStatus('sent'), 1800);
  };

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

      {/* ── FORM + SIDE ── */}
      <section className="ct-section ct-main-section" ref={addRef}>
        <div className="ct-main-inner">

          {/* Left side copy */}
          <div className="ct-side">
            <span className="ct-label-pill">Send a Message</span>
            <h2 className="ct-side-title">Every message<br />is a new chapter</h2>
            <p className="ct-side-body">
              Whether you're a reader who got lost in a story, a writer who wants 
              to publish, or a curious soul with questions — we read every single message.
            </p>
            <div className="ct-divider" />
            <div className="ct-social-row">
              <span className="ct-social-label">Find us on</span>
              <div className="ct-socials">
                <a href="#" className="ct-social-btn">𝕏 Twitter</a>
                <a href="#" className="ct-social-btn">📘 Facebook</a>
                <a href="#" className="ct-social-btn">📸 Instagram</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="ct-form-wrap">
            {status === 'sent' ? (
              <div className="ct-success">
                <div className="ct-success-icon">📬</div>
                <h3>Message received!</h3>
                <p>Thank you, <strong>{form.name}</strong>. We'll get back to you at <strong>{form.email}</strong> within 24 hours.</p>
                <button className="ct-reset-btn" onClick={() => { setForm({ name:'', email:'', subject:'', message:'' }); setStatus(''); }}>
                  Send Another ✦
                </button>
              </div>
            ) : (
              <form className="ct-form" onSubmit={handleSubmit} noValidate>

                <div className="ct-row">
                  <div className={`ct-field ${focused === 'name' ? 'ct-focused' : ''}`}>
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Jane Austen"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused('')}
                      required
                    />
                  </div>
                  <div className={`ct-field ${focused === 'email' ? 'ct-focused' : ''}`}>
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="jane@stories.com"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                      required
                    />
                  </div>
                </div>

                <div className={`ct-field ${focused === 'subject' ? 'ct-focused' : ''}`}>
                  <label>Subject <span className="ct-optional">(optional)</span></label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="I have a story idea..."
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused('')}
                  />
                </div>

                <div className={`ct-field ${focused === 'message' ? 'ct-focused' : ''}`}>
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us everything. We're great listeners..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    required
                  />
                </div>

                {status === 'error' && (
                  <p className="ct-error">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  className="ct-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <span className="ct-sending">
                      <span className="ct-dot" /><span className="ct-dot" /><span className="ct-dot" />
                      Sending...
                    </span>
                  ) : (
                    'Send Message ✦'
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* ── FAQ STRIP ── */}
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
            ].map((item, i) => (
              <div className="ct-faq-card" key={i}>
                <div className="ct-faq-q">✦ {item.q}</div>
                <div className="ct-faq-a">{item.a}</div>
              </div>
            ))}
          </div>
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

        /* Orbs */
        .ct-orb {
          position: fixed; border-radius: 50%;
          filter: blur(90px); pointer-events: none; z-index: 0; opacity: 0.2;
        }
        .ct-orb-1 { width: 520px; height: 520px; background: #6d28d9; top: -120px; left: -160px; }
        .ct-orb-2 { width: 380px; height: 380px; background: #be185d; top: 35%; right: -80px; }
        .ct-orb-3 { width: 300px; height: 300px; background: #1d4ed8; bottom: 15%; left: 25%; }

        /* Fade-in */
        .ct-hero, .ct-section {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
          position: relative; z-index: 1;
        }
        .ct-hero.ct-visible, .ct-section.ct-visible {
          opacity: 1; transform: translateY(0);
        }

        /* Hero */
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

        /* Section */
        .ct-section { padding: 3.5rem 2rem; max-width: 1080px; margin: 0 auto; }

        /* Label pill */
        .ct-label-pill {
          display: inline-block; font-size: 0.7rem; letter-spacing: 0.15em;
          text-transform: uppercase; color: #c084fc;
          border: 1px solid rgba(192,132,252,0.3); border-radius: 20px;
          padding: 4px 14px; background: rgba(192,132,252,0.07);
        }

        /* Contact cards */
        .ct-cards {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem;
        }
        .ct-card {
          border-radius: 18px; padding: 1.75rem 1.5rem;
          transition: transform 0.25s ease;
          animation: ctFadeUp 0.6s ease both;
        }
        .ct-card:hover { transform: translateY(-5px); }
        .ct-card-icon { font-size: 1.8rem; margin-bottom: 0.9rem; }
        .ct-card-label { font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 500; margin-bottom: 0.4rem; }
        .ct-card-value { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; color: #f5f0ff; margin-bottom: 0.25rem; }
        .ct-card-sub { font-size: 0.8rem; color: rgba(237,224,255,0.45); }

        /* Main section */
        .ct-main-inner {
          display: grid; grid-template-columns: 1fr 1.4fr; gap: 5rem; align-items: start;
        }
        @media (max-width: 768px) { .ct-main-inner { grid-template-columns: 1fr; gap: 3rem; } }

        .ct-side-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          color: #f5f0ff; line-height: 1.2; margin: 0.75rem 0 1rem;
        }
        .ct-side-body {
          font-size: 0.95rem; color: rgba(237,224,255,0.55);
          line-height: 1.85; font-weight: 300; margin-bottom: 1.5rem;
        }
        .ct-divider {
          height: 1px; background: linear-gradient(90deg, rgba(168,85,247,0.4), transparent);
          margin-bottom: 1.5rem;
        }
        .ct-social-label {
          font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(237,224,255,0.4); display: block; margin-bottom: 0.75rem;
        }
        .ct-socials { display: flex; gap: 0.6rem; flex-wrap: wrap; }
        .ct-social-btn {
          font-size: 0.8rem; padding: 5px 14px; border-radius: 20px;
          border: 1px solid rgba(168,85,247,0.25);
          background: rgba(168,85,247,0.07); color: #c084fc;
          text-decoration: none; transition: background 0.2s, border-color 0.2s;
        }
        .ct-social-btn:hover {
          background: rgba(168,85,247,0.18); border-color: rgba(192,132,252,0.5); color: #c084fc;
        }

        /* Form */
        .ct-form-wrap {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(168,85,247,0.18);
          border-radius: 24px; padding: 2.5rem;
        }
        .ct-form { display: flex; flex-direction: column; gap: 1.25rem; }
        .ct-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        @media (max-width: 520px) { .ct-row { grid-template-columns: 1fr; } }

        .ct-field { display: flex; flex-direction: column; gap: 6px; }
        .ct-field label {
          font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(237,224,255,0.5); font-weight: 500;
        }
        .ct-optional { font-size: 0.68rem; color: rgba(237,224,255,0.3); text-transform: none; letter-spacing: 0; }

        .ct-field input, .ct-field textarea {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(168,85,247,0.2);
          border-radius: 12px; padding: 0.65rem 1rem;
          color: #f5f0ff; font-family: 'Jost', sans-serif;
          font-size: 0.95rem; outline: none; resize: vertical;
          transition: border-color 0.2s, background 0.2s;
        }
        .ct-field input::placeholder, .ct-field textarea::placeholder {
          color: rgba(237,224,255,0.22);
        }
        .ct-focused input, .ct-focused textarea {
          border-color: rgba(192,132,252,0.55);
          background: rgba(192,132,252,0.06);
        }

        .ct-submit {
          margin-top: 0.5rem;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          border: none; border-radius: 50px;
          padding: 0.85rem 2rem; color: white;
          font-family: 'Jost', sans-serif; font-size: 1rem; font-weight: 500;
          cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(124,58,237,0.4); letter-spacing: 0.03em;
        }
        .ct-submit:hover:not(:disabled) {
          transform: translateY(-2px); box-shadow: 0 8px 28px rgba(124,58,237,0.55);
        }
        .ct-submit:disabled { opacity: 0.7; cursor: not-allowed; }

        .ct-sending { display: flex; align-items: center; gap: 8px; justify-content: center; }
        .ct-dot {
          width: 7px; height: 7px; background: white; border-radius: 50%;
          animation: ctBounce 1.2s infinite;
          display: inline-block;
        }
        .ct-dot:nth-child(2) { animation-delay: 0.2s; }
        .ct-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes ctBounce {
          0%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-6px); }
        }

        .ct-error { color: #f87171; font-size: 0.85rem; margin: 0; }

        /* Success state */
        .ct-success {
          text-align: center; padding: 3rem 1.5rem;
          display: flex; flex-direction: column; align-items: center; gap: 1rem;
        }
        .ct-success-icon { font-size: 3.5rem; animation: ctPop 0.5s ease; }
        @keyframes ctPop { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .ct-success h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem; color: #f5f0ff; margin: 0;
        }
        .ct-success p { color: rgba(237,224,255,0.6); font-size: 0.95rem; margin: 0; line-height: 1.7; }
        .ct-success strong { color: #c084fc; }
        .ct-reset-btn {
          margin-top: 0.5rem; background: transparent;
          border: 1px solid rgba(192,132,252,0.35); border-radius: 50px;
          padding: 0.6rem 1.8rem; color: #c084fc; cursor: pointer;
          font-family: 'Jost', sans-serif; font-size: 0.9rem;
          transition: background 0.2s, border-color 0.2s;
        }
        .ct-reset-btn:hover { background: rgba(192,132,252,0.1); border-color: rgba(192,132,252,0.55); }

        /* FAQ */
        .ct-faq-section { padding-bottom: 6rem; }
        .ct-faq-inner { max-width: 900px; margin: 0 auto; }
        .ct-faq-head { text-align: center; margin-bottom: 2.5rem; }
        .ct-faq-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.7rem, 3.5vw, 2.5rem);
          color: #f5f0ff; margin-top: 0.75rem;
        }
        .ct-faq-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 1rem;
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

        @keyframes ctFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;