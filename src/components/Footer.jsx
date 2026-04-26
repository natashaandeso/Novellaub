import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row">

          {/* About Us */}
         <div className="col-md-4 mb-4">
          <h4>About Us</h4>

          <a href="/">
            <img 
              src="/images/blackcake.jfif" 
              alt="Bakery Logo" 
              className="footer-logo"
            />
          </a>

          <p>
            We are passionate about delivering fresh, delicious baked goods 
            made with love. Our mission is to bring joy to every bite and 
            make your moments sweeter.
          </p>
        </div>
          {/* Contact Form */}
          <div className="col-md-4 mb-4">
            <h4>Contact Us</h4>
            <form>
              <input type="text" placeholder="Your Name" className="form-control mb-2" />
              <input type="email" placeholder="Your Email" className="form-control mb-2" />
              <textarea placeholder="Your Message" className="form-control mb-2"></textarea>
              <button className="btn btn-primary w-100">Send</button>
            </form>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4 text-center">
            <h4>Follow Us</h4>
  
  <div className="social-icons">
    
    <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-facebook"></i>
    </a> <br />

    <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-instagram"></i>
    </a> <br />

    <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-twitter"></i>
    </a> <br />

    <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-whatsapp"></i>
    </a> <br />

  </div>

          </div>

        </div>

        <hr />

        <p className="text-center">&copy; 2026 Tasha's Bakery. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;