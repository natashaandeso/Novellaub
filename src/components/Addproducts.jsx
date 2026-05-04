import React, { useRef, useState } from 'react'
import Loader from './Loader';
import axios from 'axios';

const Addproducts = () => {
  const [preview, setPreview] = useState(null);
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");
  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handler for Image Preview (Instant)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductPhoto(file); // Save the file for upload
      setPreview(URL.createObjectURL(file)); // Show the preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors

    try {
      const formdata = new FormData();
      formdata.append("product_name", product_name);
      formdata.append("product_description", product_description);
      formdata.append("product_cost", product_cost);
      formdata.append("product_photo", product_photo);

      const response = await axios.post("https://tashaandeso.alwaysdata.net/api/add_product", formdata);

      setLoading(false);
      setSuccess("Product added successfully! ✨");
      
      // Reset everything
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto("");
      setPreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";

      setTimeout(() => setSuccess(""), 5000);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="add-product-page d-flex align-items-center justify-content-center">
      {loading && <Loader />}
      
      <div className="form-container shadow-lg">
        {/* Alerts for User Feedback */}
        {success && <div className="alert alert-success m-3">{success}</div>}
        {error && <div className="alert alert-danger m-3">{error}</div>}

        <div className="row g-0">
          <div className="col-md-5 preview-section d-flex flex-column align-items-center justify-content-center p-4">
            <h4 className="brand-text mb-4">Product Cover</h4>
            <div className="image-placeholder shadow-sm">
              {preview ? (
                <img src={preview} alt="Preview" className="img-fluid rounded" style={{maxHeight: '100%'}}/>
              ) : (
                <div className="text-center text-muted">
                  <i className="fa-solid fa-cloud-arrow-up fs-1 mb-2"></i>
                  <p>No image selected</p>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-7 p-5">
            <h2 className="brand-text mb-2">Add New Novel ✨</h2>
            
            {/* Added onSubmit here */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-bold">Product Name</label>
                <input 
                  type="text" 
                  className="form-control custom-input" 
                  value={product_name} // Linked to state
                  placeholder='Enter name or novel title'
                  onChange={(e) => setProductName(e.target.value)} 
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Price (Kes)</label>
                  <input 
                    type="number" 
                    className="form-control custom-input" 
                    value={product_cost} // Linked to state
                    placeholder='Enter the book price'
                    onChange={(e) => setProductCost(e.target.value)} 
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Description</label>
                <textarea 
                  className="form-control custom-input" 
                  rows="3" 
                  value={product_description} // Linked to state
                  placeholder='Enter book description'
                  onChange={(e) => setProductDescription(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="form-label fw-bold">Upload Photo</label>
                <input 
                  type="file" 
                  className="form-control custom-input" 
                  ref={fileInputRef}
                  onChange={handleImageChange} // Call the preview handler
                  required
                /> 
              </div>

              <button type="submit" className="signup-btn w-100 border-0 py-2">
                List Product 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addproducts;