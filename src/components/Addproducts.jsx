import React, { useRef, useState } from 'react'
import Loader from './Loader';
import axios from 'axios';

const Addproducts = () => {
  
  const [preview, setPreview] = useState(null);
  // introduce the hooks
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");
  const fileInputRef = useRef(null)

  // declare the additional hook to manage the state of the application
  const [loading, setLoading] = useState(false);
  const [success, setSuccess]  = useState("");
  const [error, setError] = useState("");

  // create a function that will handle the submit function
  const handleSubmit = async (e) =>{
    // prevent the site from reloading
    e.preventDefault()


    // set loading hook with a message (activate it)
    setLoading(true)

    try{
      // create a form data
      const formdata = new FormData()

      // append the details to the form data created
      formdata.append("product_name", product_name);
      formdata.append("product_description", product_description);
      formdata.append("product_cost", product_cost);
      formdata.append("product_photo", product_photo);

      // interact with axios to help you use the method post
      const response = await axios.post("https://tashaandeso.alwaysdata.net/api/add_product", formdata)

      // set the loading hook back to ddefault
      setLoading(false)

      // update the success hook with a message
      setSuccess(response.data.message)
      
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }

      // clearing the hooks (setting them back to default/empty)
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto("");

      // e.target.reset()
      if (fileInputRef.current){
        fileInputRef.current.value ="";
      }
      setTimeout(() => {
    setSuccess("");
  }, 5000);
    }
    catch(error){
      // set loading hookback to default
      setLoading(false)

      // handle unautjorized errors
        setError(error.message);
    }


  }



  return (
    <div className="add-product-page d-flex align-items-center justify-content-center">
      <div className="form-container shadow-lg">
        <div className="row g-0">
          
          {/* Left Side: Image Preview Area */}
          <div className="col-md-5 preview-section d-flex flex-column align-items-center justify-content-center p-4">
            <h4 className="brand-text mb-4">Product Cover</h4>
            <div className="image-placeholder shadow-sm">
              {preview ? (
                <img src={preview} alt="Preview" className="img-fluid rounded" />
              ) : (
                <div className="text-center text-muted">
                  <i className="fa-solid fa-cloud-arrow-up fs-1 mb-2"></i>
                  <p>No image selected</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Form Fields */}
          <div className="col-md-7 p-5">
            <h2 className="brand-text mb-2">Add New Delicacy ✨</h2>
            <p className="text-muted small mb-4">Fill in the details to list your new story or treat.</p>
            
            <form>
              <div className="mb-3">
                <label className="form-label fw-bold">Product Name</label>
                <input type="text" className="form-control custom-input" placeholder="e.g. Midnight Velvet Cake" />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Category</label>
                  <select className="form-select custom-input">
                    <option>Select Category</option>
                    <option>Classic Novels</option>
                    <option>Sweet Treats</option>
                    <option>Artisan Coffee</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Price (Kes)</label>
                  <input type="number" className="form-control custom-input" placeholder="0.00" onChange={(e) => setProductCost(e.target.value)} />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Description</label>
                <textarea className="form-control custom-input" rows="3" placeholder="Tell the story of this product..."></textarea>
              </div>

              <div className="mb-4">
                <label className="form-label fw-bold">Upload Photo</label>
                <input type="file" className="form-control custom-input"onChange={(e) => setProductPhoto(e.target.files[0])}/> 
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