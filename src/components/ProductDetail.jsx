import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  if (!product) return <div className="text-white">Product not found...</div>;

  const img_url = "https://tashaandeso.alwaysdata.net/static/images/";
  const file_url = "https://tashaandeso.alwaysdata.net/static/files/";
  const isLoggedIn = !!localStorage.getItem("user");

  return (
    <div className="container mt-5 pt-5 text-white">
      <button className="btn btn-outline-light mb-4" onClick={() => navigate(-1)}>
        ← Back to Library
      </button>

      <div className="row">
        {/* Left: Big Book Cover */}
        <div className="col-md-5">
          <img 
            src={img_url + product.product_photo} 
            className="img-fluid rounded shadow-lg" 
            alt={product.product_name} 
          />
        </div>

        {/* Right: Details & Actions */}
        <div className="col-md-7 ps-lg-5">
          <h1 className="brand-text display-4">{product.product_name}</h1>
          <h3 className="text-warning mb-4">Kes {product.product_cost}</h3>
          
          <div className="description-box p-3 bg-dark rounded mb-4">
            <h5>Synopsis</h5>
            <p className="text-secondary">{product.product_description}</p>
          </div>

          <div className="action-buttons d-flex gap-3">
            {isLoggedIn ? (
              <>
                <button className="signup-btn border-0 py-3 px-5">Read Online</button>
                <a 
                  href={file_url + product.product_file} 
                  download 
                  className="btn btn-outline-info py-3 px-5"
                >
                  Download PDF
                </a>
              </>
            ) : (
              <div className="alert alert-info w-100 text-center">
                <p className="mb-2">Want to dive into this story?</p>
                <button className="signup-btn border-0" onClick={() => navigate("/signup")}>
                  Sign Up to Unlock Reading 🔓
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;