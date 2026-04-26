import React, { useRef, useState } from 'react'
import Loader from './Loader';
import axios from 'axios';

const Addproducts = () => {
  
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
    <div class="container justify-content-center col-md-6 signin">
  <div class="heading">Add Your Treat Or Delicacy 🍰</div>

        {/* bind the loading hook */}
        {loading && <Loader />}
      <h3 className="text-success">{success}</h3>
      <h4 className="text-danger">{error}</h4>
      
 <form class="form" onSubmit={handleSubmit}>

     <input type="text"
          placeholder='Enter the product name 🍰'
          className='form-control' 
          required
          value={product_name}
          onChange={(e) => setProductName(e.target.value)}/> <br />

          {/* {product_name} */}

          <input type="text" 
          placeholder='Enter the product Description'
          className='form-control'
          required
          value={product_description}
          onChange={(e) => setProductDescription(e.target.value)}/> <br />

          {/* {product_description} */}

          <input type="text"
          placeholder='Enter the price of the product'
          className='form-control'
          required
          value={product_cost}
          onChange={(e) => setProductCost(e.target.value)} /> <br />

          {/* {product_cost} */}

          <label className='text-primary'>Product Photo</label>
          <input type="file" 
          className='form-control'
          required
          accept='image/*'
          ref={fileInputRef}
          onChange={(e) => setProductPhoto(e.target.files[0])}/>
          <br />

    
    <input value="Add Product" type="submit" class="login-button" />
  </form>
 
</div>
  )
}

export default Addproducts;