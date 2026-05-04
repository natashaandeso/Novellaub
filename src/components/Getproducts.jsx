import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import Mycarousel from './Mycarousel';
import Footer from './Footer';

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

  // Filter logic stays here (outside return)
  const filteredProducts = products.filter((product) => {
    return product.product_name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='row homepg'>
      <section className="row">
        <div className="container mt-5">
          <div className="row align-items-center">
            {/* Video Column */}
            <div className="col-lg-7 col-md-12">
              <video 
                src="/5739808-hd_1920_1080_30fps.mp4" 
                width="100%" 
                className="myvideo"
                autoPlay muted loop playsInline
              />
            </div>

            {/* Content Column */}
            <div className="col-lg-5 col-md-12 mt-4 mt-lg-0 px-lg-5">
              <h2 className="brand-text">🌸 House of Novels 🌸</h2>
              <p className="text-success">
                Not just stories—vibes. Stay awhile. You’ll like it here.
              </p>
              <button className="signup-btn border-0">Explore More</button>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <div className="search-hero-section d-flex justify-content-center align-items-center">
        <div className="search-card text-center p-5">
          <h3 className="brand-text mb-4">Find a story that hits different… ✨</h3>
          
          <div className="search-wrapper">
            {/* PUT THE INPUT HERE INSIDE THE SEARCH WRAPPER */}
            <input 
              type="text" 
              className="main-search-input" 
              placeholder="Search stories, vibes, and feels" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-trigger-btn">
              <span>🔍</span>
            </button>
          </div>
          
          <div className="popular-tags mt-3">
            <span className="badge rounded-pill bg-light text-dark mx-1">#AshesofMemory</span>
            <span className="badge rounded-pill bg-light text-dark mx-1">#NewArrivals</span>
          </div>
        </div>
      </div>

      <Mycarousel />

      {loading && <Loader />}
      
      <h2 className='text-secondary fs-7 fst-italic text-center mt-5'>
        Available Delicacies and treats
      </h2>
      
      <h4 className="text-danger text-center"> {error} </h4>

      {/* MAP THE FILTERED PRODUCTS HERE */}
      <div className="row justify-content-center px-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-md-3 mb-3" key={product.id}>
              <div className="card shadow">
                <img 
                  src={img_url + product.product_photo} 
                  alt={product.product_name} 
                  className='product_img mt-3'
                />
                <div className="card-body">
                  <h5 className="text-primary">{product.product_name}</h5>
                  <p className="text-secondary">{product.product_description.slice(0, 100)}...</p>
                  <h4 className="text-warning">Kes {product.product_cost}</h4>
                  <button 
                    className="btn btn-outline-info w-100" 
                    onClick={() => navigate("/makepayment", {state: {product}})}
                  >
                    Purchase Now
                  </button>
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

           
    </div>
  );
};

export default Getproducts;