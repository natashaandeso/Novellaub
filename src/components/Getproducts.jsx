import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import Mycarousel from './Mycarousel';
import Footer from './Footer';
import Chatbot from './Chatbot'; // ✅ CHANGE 1: import Chatbot

const Getproducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const img_url = "https://tashaandeso.alwaysdata.net/static/images/";

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://tashaandeso.alwaysdata.net/api/get_products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    return product.product_name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='row homepg'>
      <section className="hero-section">
  <div className="container">
    <div className="row align-items-center hero-grid-row">

      {/* Video Column */}
      <div className="col-lg-7 col-md-12">
        <div className="hero-video-frame">
          <video
            src="/5739808-hd_1920_1080_30fps.mp4"
            width="100%"
            className="myvideo"
            autoPlay muted loop playsInline
          />
        </div>
      </div>

      {/* Content Column */}
      <div className="col-lg-5 col-md-12 mt-5 mt-lg-0 hero-content-col px-lg-5">
        <div className="hero-eyebrow">House of Novels</div>

        <h1 className="hero-title">
          Where every story<br />
          <span className="hero-gradient">finds its reader</span>
        </h1>

        <p className="hero-body">
          "A room without books is like a body without a soul."
          Pick a story and disappear for a while. You'll like it here.
        </p>

        <div className="hero-badges">
          <span className="hero-badge">📖 Read Online</span>
          <span className="hero-badge" style={{ animationDelay: '0.4s' }}>✍️ Publish Your Story</span>
          <span className="hero-badge" style={{ animationDelay: '0.8s' }}>🌍 African Voices</span>
        </div>

        <div className="hero-cta-row">
          <a href="#trending" className="hero-btn-primary">Explore Stories →</a>
          <a href="/about" className="hero-btn-ghost">Learn More</a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat"><span className="hero-stat-num">2,400+</span><span className="hero-stat-lbl">Stories</span></div>
          <div className="hero-stat"><span className="hero-stat-num">180+</span><span className="hero-stat-lbl">Writers</span></div>
          <div className="hero-stat"><span className="hero-stat-num">34</span><span className="hero-stat-lbl">Countries</span></div>
        </div>
      </div>

    </div>
  </div>
</section>

      
      {/* SEARCH SECTION */}
      {/* SEARCH SECTION - CLEAN & SHORT */}
<div className="search-hero-section">
  <div className="text-center w-100 px-3">
    <h3 className="mb-4">Find your next story...</h3>
    
    <div className="d-flex flex-column align-items-center">
      <div className="search-wrapper">
        <input 
          type="text" 
          className="main-search-input" 
          placeholder="Search stories..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="search-icon-inside" style={{ color: '#a29bfe' }}>
          {searchTerm ? (
            <span onClick={() => setSearchTerm("")} style={{cursor:'pointer'}}>✖️</span>
          ) : (
            <span>🔍</span>
          )}
        </div>
      </div>
      
      <div className="popular-tags mt-3">
        <span className="badge rounded-pill mx-1" onClick={() => setSearchTerm("Memory")}>#Memory</span>
        <span className="badge rounded-pill mx-1" onClick={() => setSearchTerm("New")}>#New</span>
      </div>
    </div>
  </div>
</div>

<Mycarousel />
      {loading && <Loader />}

      {/* In your JSX */}
<div className="trending-wrapper mt-5 text-center">
  <span className="trending-badge">
    <i className="ti ti-trending-up" aria-hidden="true"></i>
    Right now
  </span>
  <h2 className="trending-heading">Top Trending</h2>
  <div className="trending-line"></div>
</div>
      <h4 className="text-danger text-center">{error}</h4>

      {/* Products Grid */}
      <div className="row justify-content-center px-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              className="col-lg-3 col-md-4 mb-4"
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
              style={{ cursor: 'pointer' }}
            >
              <div className="card shadow-sm h-100 dark-card">
                <img
                  src={img_url + product.product_photo}
                  className="card-img-top"
                  alt={product.product_name}
                />
                <div className="card-body">
                  <h5 className="brand-text">{product.product_name}</h5>
                  <p className="text-warning">Kes {product.product_cost}</p>
                  <p className="text-secondary">{product.product_description.slice(0, 100)}...</p>
                  <button className="signup-btn border-0 w-100">View Story</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-4">
            <p className="text-muted">No stories found matching "{searchTerm}" 🌙</p>
          </div>
        )}
      </div>

      {/* ✅ CHANGE 2: Chatbot placed here — floats above everything via fixed positioning */}
      <Chatbot />

    </div>
  );
};

export default Getproducts;