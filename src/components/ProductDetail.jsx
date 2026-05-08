import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { state }  = useLocation();
  const navigate   = useNavigate();
  const product    = state?.product;

  if (!product) return <div className="text-white text-center mt-5">Product not found...</div>;

  const img_url  = "https://tashaandeso.alwaysdata.net/static/images/";
  const file_url = "https://tashaandeso.alwaysdata.net/static/files/";

  const isLoggedIn = !!localStorage.getItem("user");

  const handleReadOnline = () => {
    if (product.product_file) {
      window.open(file_url + product.product_file, "_blank");
    } else {
      alert("PDF file not found for this product.");
    }
  };

  // ✅ Passes { product } to match Makepayment's: const { product } = useLocation().state || {}
  const handleDownload = () => {
    navigate("/makepayment", { state: { product } });
  };

  const goToSignin = () => {
    navigate("/signin", { state: { fromProduct: product } });
  };

  const goToSignup = () => {
    navigate("/signup", { state: { fromProduct: product } });
  };

  return (
    <div className="container mt-5 pt-5 text-white">
      <button className="btn btn-outline-light mb-4" onClick={() => navigate(-1)}>
        ← Back to Library
      </button>

      <div className="row">
        <div className="col-md-5">
          <img
            src={img_url + product.product_photo}
            className="img-fluid rounded shadow-lg"
            alt={product.product_name}
            style={{ minHeight: '400px', objectFit: 'cover', width: '100%' }}
          />
        </div>

        <div className="col-md-7 ps-lg-5 mt-4 mt-md-0">
          <h1 className="brand-text display-4">{product.product_name}</h1>
          <h3 className="text-warning mb-4">Kes {product.product_cost}</h3>

          <div className="description-box p-3 bg-dark rounded mb-4">
            <h5>Synopsis</h5>
            <p className="text-secondary">{product.product_description}</p>
          </div>

          <div className="action-buttons d-flex gap-3 flex-wrap">
            {isLoggedIn ? (
              <>
                

                {/* ✅ Navigates to Makepayment page with product in state */}
                <button className="btn btn-outline-info py-3 px-5" onClick={handleDownload}>
                  Download PDF 💳
                </button>
              </>
            ) : (
              <div className="alert alert-info w-100 text-center">
                <p className="mb-3">Want to dive into this story? 📚</p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <button className="signup-btn border-0 px-4 py-2" onClick={goToSignup}>
                    Sign Up to Unlock 🔓
                  </button>
                  <button className="btn btn-outline-light px-4 py-2" onClick={goToSignin}>
                    Already have an account? Sign In
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;