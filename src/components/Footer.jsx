import React from 'react';

const Footer = () => {
  return (
    <footer className="novella-footer">
  <div >
    <div className="row py-5 align-items-center">
      {/* Brand & Mission */}
      <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
        <h3 className="brand-text footer-logo">NovellaHub 🦋</h3>
        <p className="footer-tagline">Your next favorite story?
Yeah… it’s probably here.

Start reading, get hooked,
and don’t say we didn’t warn you.
</p>
        
      </div>

      {/* Quick Links */}
      <div className="col-lg-4 text-center mb-4 mb-lg-0">
        <h5 className="footer-title">Sweet Links</h5>
        <ul className="list-unstyled">
          <li><a href="/" className="footer-link">Our Story</a></li>
          <li><a href="/contact" className="footer-link">Say Hello</a></li>
        </ul>
      </div>

   <div className="social-container text-center col-lg-4 mb-4 mb-lg-0">
  <h5 className="footer-title mb-3">Connect with NovellaHub 🦋</h5>
  <div className="social-icons-wrapper d-flex justify-content-center gap-3">
    
    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-pill">
      <img src="/social.png" alt="Instagram" className="social-icon-img" />
      <span className="social-label">Instagram</span>
    </a>

    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-pill">
      <img src="/face-book.png" alt="Facebook" className="social-icon-img" />
      <span className="social-label">Facebook</span>
    </a>

    <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="social-pill">
      <img src="/pinterest.png" alt="Pinterest" className="social-icon-img" />
      <span className="social-label">Pinterest</span>
    </a>

  </div>
</div>
    </div>

    {/* Bottom Bar */}
    <div className="footer-bottom text-center py-3">
      <small>© 2026 NovellaHub. Made with 💖 and sugar.</small>
    </div>
  </div>
</footer>
  );
}

export default Footer;