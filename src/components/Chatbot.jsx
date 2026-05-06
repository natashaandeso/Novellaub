// src/Chatbot.jsx
import React, { useState, useEffect, useRef } from 'react';
import { chatData } from './ChatData';

const QUICK_REPLIES = [
  { label: "📖 Tell me a story", value: "tell me a story" },
  { label: "💕 Romance",         value: "love story" },
  { label: "🔍 Mystery",         value: "mystery" },
  { label: "🐉 Fantasy",         value: "fantasy" },
  { label: "👻 Horror",          value: "scary" },
];

const Chatbot = () => {
  const [input, setInput]       = useState("");
  const [messages, setMessages] = useState([]);
  const [open, setOpen]         = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showDot, setShowDot]   = useState(true);
  const messagesEndRef          = useRef(null);
  const inputRef                = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Greeting on first open
  useEffect(() => {
    if (open) {
      setShowDot(false);
      if (messages.length === 0) {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages([{ text: "Welcome, storyteller! 📖 What world shall we explore today?", sender: 'bot' }]);
        }, 900);
      }
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const getResponse = (userInput) => {
    const lower = userInput.toLowerCase();
    const match = chatData.find(item =>
      item.keywords.some(keyword => lower.includes(keyword))
    );
    return match
      ? match.response
      : "I'm not sure about that story yet, but I'm learning! Try asking for a romance, mystery, or fantasy. 📚";
  };

  const handleSend = (text) => {
    const msg = (text || input).trim();
    if (!msg) return;

    setInput("");
    setMessages(prev => [...prev, { text: msg, sender: 'user' }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { text: getResponse(msg), sender: 'bot' }]);
    }, 900);
  };

  return (
    <>
      {/* ── Floating Button ── */}
      <button
        onClick={() => setOpen(v => !v)}
        style={styles.fab}
        aria-label={open ? "Close chat" : "Open Story Assistant"}
      >
        {showDot && !open && <span style={styles.notifDot} />}
        <span style={{ fontSize: 26 }}>{open ? '✕' : '💬'}</span>
      </button>

      {/* ── Chat Window ── */}
      <div style={{ ...styles.chatWindow, ...(open ? styles.chatWindowOpen : {}) }}>

        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerAvatar}>✦</div>
          <div style={{ flex: 1 }}>
            <div style={styles.headerTitle}>NovellaHub Assistant</div>
            <div style={styles.headerSub}>
              <span style={styles.onlineDot} /> Ready to weave tales
            </div>
          </div>
          <button onClick={() => setOpen(false)} style={styles.closeBtn} aria-label="Close">✕</button>
        </div>

        {/* Messages */}
        <div style={styles.messages}>
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                ...styles.msgRow,
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              }}
            >
              {msg.sender === 'bot' && <div style={styles.botAvatar}>✦</div>}
              <div style={msg.sender === 'user' ? styles.userBubble : styles.botBubble}>
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div style={{ ...styles.msgRow, justifyContent: 'flex-start' }}>
              <div style={styles.botAvatar}>✦</div>
              <div style={{ ...styles.botBubble, ...styles.typingBubble }}>
                <span style={styles.dot} className="chatbot-dot" />
                <span style={{ ...styles.dot, animationDelay: '0.2s' }} className="chatbot-dot" />
                <span style={{ ...styles.dot, animationDelay: '0.4s' }} className="chatbot-dot" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        <div style={styles.quickReplies}>
          {QUICK_REPLIES.map(qr => (
            <button key={qr.value} style={styles.qrBtn} onClick={() => handleSend(qr.value)}>
              {qr.label}
            </button>
          ))}
        </div>

        {/* Input */}
        <div style={styles.inputArea}>
          <input
            ref={inputRef}
            style={styles.input}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Ask for a story…"
          />
          <button style={styles.sendBtn} onClick={() => handleSend()} aria-label="Send">➤</button>
        </div>
      </div>

      {/* Keyframe styles injected once */}
      <style>{`
        @keyframes chatbotBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
        @keyframes chatbotPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.35); }
        }
        @keyframes chatbotSlideIn {
          from { opacity: 0; transform: scale(0.85) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .chatbot-dot {
          animation: chatbotBounce 1.2s infinite;
        }
      `}</style>
    </>
  );
};

// ── Inline styles (no extra CSS file needed) ──────────────────
const styles = {
  fab: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    zIndex: 1050,
    width: 62,
    height: 62,
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
    boxShadow: '0 4px 24px rgba(124,58,237,0.55)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  notifDot: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 12,
    height: 12,
    background: '#f59e0b',
    borderRadius: '50%',
    border: '2px solid #fff',
    animation: 'chatbotPulse 2s infinite',
  },
  chatWindow: {
    position: 'fixed',
    bottom: '6.5rem',
    right: '2rem',
    zIndex: 1049,
    width: 'min(370px, calc(100vw - 2rem))',
    height: 'min(540px, calc(100vh - 9rem))',
    background: 'rgba(15,8,30,0.97)',
    border: '1px solid rgba(168,85,247,0.3)',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
    overflow: 'hidden',
    opacity: 0,
    pointerEvents: 'none',
    transform: 'scale(0.85) translateY(20px)',
    transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease',
    transformOrigin: 'bottom right',
  },
  chatWindowOpen: {
    opacity: 1,
    pointerEvents: 'all',
    transform: 'scale(1) translateY(0)',
    animation: 'chatbotSlideIn 0.3s cubic-bezier(0.34,1.56,0.64,1)',
  },
  header: {
    padding: '0.9rem 1.1rem',
    background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.12))',
    borderBottom: '1px solid rgba(168,85,247,0.2)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flexShrink: 0,
  },
  headerAvatar: {
    width: 38,
    height: 38,
    borderRadius: '50%',
    background: 'linear-gradient(135deg,#7c3aed,#a855f7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    color: 'white',
    flexShrink: 0,
  },
  headerTitle: {
    fontFamily: 'Georgia, serif',
    color: '#e8d5ff',
    fontSize: '0.95rem',
    fontWeight: 600,
    margin: 0,
  },
  headerSub: {
    fontSize: '0.72rem',
    color: '#a78bfa',
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    marginTop: 2,
  },
  onlineDot: {
    width: 7,
    height: 7,
    background: '#4ade80',
    borderRadius: '50%',
    display: 'inline-block',
  },
  closeBtn: {
    background: 'transparent',
    border: 'none',
    color: 'rgba(167,139,250,0.6)',
    cursor: 'pointer',
    fontSize: 15,
    padding: '4px 6px',
    borderRadius: 6,
    flexShrink: 0,
  },
  messages: {
    flex: 1,
    overflowY: 'auto',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.65rem',
    scrollBehavior: 'smooth',
  },
  msgRow: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 8,
    animation: 'chatbotSlideIn 0.28s ease',
  },
  botAvatar: {
    width: 26,
    height: 26,
    borderRadius: '50%',
    background: 'linear-gradient(135deg,#7c3aed,#a855f7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 11,
    color: 'white',
    flexShrink: 0,
  },
  botBubble: {
    maxWidth: '78%',
    padding: '0.55rem 0.85rem',
    borderRadius: '16px 16px 16px 4px',
    background: 'rgba(124,58,237,0.18)',
    border: '1px solid rgba(168,85,247,0.2)',
    color: '#ddd6fe',
    fontSize: '0.85rem',
    lineHeight: 1.55,
    fontFamily: 'Georgia, serif',
  },
  userBubble: {
    maxWidth: '78%',
    padding: '0.55rem 0.85rem',
    borderRadius: '16px 16px 4px 16px',
    background: 'linear-gradient(135deg,#7c3aed,#9333ea)',
    color: 'white',
    fontSize: '0.85rem',
    lineHeight: 1.55,
    boxShadow: '0 2px 10px rgba(124,58,237,0.4)',
  },
  typingBubble: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    padding: '0.7rem 1rem',
  },
  dot: {
    display: 'inline-block',
    width: 7,
    height: 7,
    background: '#a78bfa',
    borderRadius: '50%',
  },
  quickReplies: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    padding: '0 0.9rem 0.6rem',
    flexShrink: 0,
  },
  qrBtn: {
    fontSize: '0.72rem',
    padding: '4px 10px',
    borderRadius: 20,
    cursor: 'pointer',
    background: 'rgba(124,58,237,0.12)',
    border: '1px solid rgba(168,85,247,0.3)',
    color: '#c4b5fd',
    whiteSpace: 'nowrap',
    fontFamily: 'sans-serif',
  },
  inputArea: {
    padding: '0.7rem 0.9rem',
    borderTop: '1px solid rgba(168,85,247,0.15)',
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    flexShrink: 0,
    background: 'rgba(10,5,20,0.5)',
  },
  input: {
    flex: 1,
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(168,85,247,0.25)',
    borderRadius: 24,
    padding: '0.5rem 1rem',
    color: '#e8d5ff',
    fontSize: '0.875rem',
    outline: 'none',
    fontFamily: 'sans-serif',
  },
  sendBtn: {
    width: 36,
    height: 36,
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    background: 'linear-gradient(135deg,#7c3aed,#a855f7)',
    color: 'white',
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 2px 10px rgba(124,58,237,0.4)',
  },
};

export default Chatbot;