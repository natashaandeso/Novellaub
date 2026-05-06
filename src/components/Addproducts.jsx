import axios from 'axios';
import React, { useState } from 'react';

const AddProducts = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCost, setProductCost] = useState("");
  
  // State for both files
  const [productPhoto, setProductPhoto] = useState(null);
  const [productFile, setProductFile] = useState(null); // The PDF file
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Use FormData to send files
    const formData = new FormData();
    formData.append("product_name", productName);
    formData.append("product_description", productDescription);
    formData.append("product_cost", productCost);
    formData.append("product_photo", productPhoto);
    formData.append("product_file", productFile); // Append the PDF

    try {
      const response = await axios.post("https://tashaandeso.alwaysdata.net/api/add_product", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setMessage("Novel added successfully! ✨");
      setLoading(false);
    } catch (error) {
      setMessage("Error: " + error.message);
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 text-white">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-dark p-5 rounded shadow">
          <h2 className="brand-text text-center mb-4">Add New Novel 📖</h2>
          
          {message && <p className="alert alert-info text-center">{message}</p>}

          <form onSubmit={handleSubmit}>
            <input 
              type="text" placeholder="Novel Title" className="form-control mb-3"
              onChange={(e) => setProductName(e.target.value)} required 
            />
            
            <textarea 
              placeholder="Description/Synopsis" className="form-control mb-3"
              onChange={(e) => setProductDescription(e.target.value)} required 
            />
            
            <input 
              type="number" placeholder="Price (Kes)" className="form-control mb-3"
              onChange={(e) => setProductCost(e.target.value)} required 
            />

            <label className="text-secondary small mb-1">Book Cover Image</label>
            <input 
              type="file" accept="image/*" className="form-control mb-3"
              onChange={(e) => setProductPhoto(e.target.files[0])} required 
            />

            <label className="text-warning small mb-1">Novel PDF File</label>
            <input 
              type="file" accept=".pdf" className="form-control mb-4"
              onChange={(e) => setProductFile(e.target.files[0])} required 
            />

            <button className="signup-btn w-100 border-0 py-3" disabled={loading}>
              {loading ? "Uploading..." : "Publish to NovellaHub"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;