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

  console.log("Current Search:", searchTerm);
console.log("Database Sample:", products[0]);

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
              <h2 className="brand-text rainbow-text">🌸 House of Novels 🌸</h2>
              <p className="text-success">
                  Read. Feel. Repeat.
This isn’t just a website—it’s a whole escape.

Pick a story and disappear for a while.

                Stay awhile. You’ll like it here."A room without a book is like an empty soul"
              </p>
              <button className="signup-btn border-0">Explore More</button>
            </div>
          </div>
        </div>
      </section>

 <Mycarousel />

    {/* SEARCH SECTION */}
<div className="search-hero-section d-flex justify-content-center align-items-center" style={{ zIndex: 1 }}>
  <div className="search-card text-center p-5" style={{ zIndex: 2 }}>
    <h3 className="brand-text mb-4">Find a story that hits different… ✨</h3>
    
    <div className="search-wrapper position-relative" style={{ zIndex: 10 }}>
      <input 
        type="text" 
        className="main-search-input w-100" 
        placeholder="Search stories, vibes, and feels" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ 
          paddingRight: '50px', 
          position: 'relative', 
          zIndex: 11,
          pointerEvents: 'auto' 
        }} 
      />
      
      <div className="search-icon-inside" style={{ zIndex: 12, pointerEvents: 'none' }}>
        {searchTerm ? (
          <span 
            style={{ cursor: 'pointer', pointerEvents: 'auto' }} 
            onClick={() => setSearchTerm("")}
          >✖️</span>
        ) : (
          <span>🔍</span>
        )}
      </div>
    </div>
    
    <div className="popular-tags mt-3">
      <span className="badge rounded-pill bg-light text-dark mx-1" style={{cursor: 'pointer'}} onClick={() => setSearchTerm("Memory")}>#AshesofMemory</span>
      <span className="badge rounded-pill bg-light text-dark mx-1" style={{cursor: 'pointer'}} onClick={() => setSearchTerm("New")}>#NewArrivals</span>
    </div>
  </div>
</div>

     

      {loading && <Loader />}
      
      <h2 className='text-secondary fs-7 fst-italic text-center mt-5'>
        New Arrivals
      </h2>
      
      <h4 className="text-danger text-center"> {error} </h4>

      {/* MAP THE FILTERED PRODUCTS HERE */}
      <div className="row justify-content-center px-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
           // Inside your map function in Getproducts.jsx
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
    <div className="card-body ">
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

           
    </div>
  );
};

export default Getproducts;