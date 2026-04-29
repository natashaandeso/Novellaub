import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import Mycarousel from './Mycarousel';

const Getproducts = () => {

  
  // initialize hooks to help you manage the state of your application
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Declare the navigate hook
   const navigate = useNavigate()

  // below we specify the image base url
  const img_url = "https://tashaandeso.alwaysdata.net/static/images/"

  // create a function to help you fetch the products from your API
  const fetchProducts = async() =>{
    try{
      // Update the loading hook
      setLoading(true)

      // interact with your endpoint for fetching the products
      const response = await axios.get("https://tashaandeso.alwaysdata.net/api/get_products")

      // Update the products hook with the response given from the API
      setProducts(response.data)

      // Set the loading hook back to default
      setLoading(false)
    }
    catch(error){
        // if there is an error
        // set the loading back to deafault
        setLoading(false)

        // update the error hook with a message
        setError(error.message)
    }
  }

  // we shall use the useEffect hook. This hook enables us to automatically re-render new features incase of any changes.
  useEffect(() => {
    fetchProducts()
  }, [])

  // console.log(products)




  return (
    
   
    <div className='row  homepg'>
      <section className="row">

       <div className="container mt-5">
  <div className="row align-items-center">
    
    {/* Left Column: The Video */}
    <div className="col-lg-7 col-md-12">
      <video 
        src="/5739808-hd_1920_1080_30fps.mp4" 
        width="100%" 
        height="auto" /* Changed to auto to maintain aspect ratio */
        className="myvideo"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>

    {/* Right Column: Your Content */}
    <div className="col-lg-5 col-md-12 mt-4 mt-lg-0 px-lg-5">
      <h2 className="brand-text">🌸 House of Novels 🌸</h2>
      <p className="text-success">
        Not just stories—vibes.
From late-night reads to all-day obsessions,
this is your space to feel everything, one chapter at a time.

Stay awhile. You’ll like it here.
.
    “A room without books is like a body without a soul.”
      </p>
      <button className="signup-btn border-0">Explore More</button>
    </div>

  </div>
</div>
</section>

<div className="search-hero-section d-flex justify-content-center align-items-center">
  <div className="search-card text-center p-5">
    <h3 className="brand-text mb-4">Find a story that hits different… ✨</h3>
    
    <div className="search-wrapper">
      <input 
        type="text" 
        className="main-search-input" 
        placeholder="Search stories, vibes, and feels" 
      />
      <button className="search-trigger-btn">
        <span>🔍</span>
      </button>
    </div>
    
    <div className="popular-tags mt-3">
      <span className="badge rounded-pill bg-light text-dark mx-1">#AshesofMemory</span>
      <span className="badge rounded-pill bg-light text-dark mx-1">#TheLockwoodCurse</span>
      <span className="badge rounded-pill bg-light text-dark mx-1">#NewArrivals</span>
    </div>
  </div>
</div>
<Mycarousel />

        {loading && <Loader />}
         <h2 className='text-secondary fs-7 fst-italic'>
       Available Delicacies and treats
      </h2>
        <h4 className="text-danger"> {error} </h4>

        {/* map the products fetched from the API to the user interface */}

        {products.map((product) => (
            <div className="col-md-3 justify-content-center mb-3">
            <div className="card shadow">
              <img 
              src={img_url + product.product_photo} 
              alt="product name" 
              className='product_img mt-3'/>

              <div className="card-body">
                <h5 className="text-primary"> {product.product_name} </h5>

                <p className="text-dark"> {product.product_description.slice(0, 100)}... </p>

                <h4 className="text-warning">Kes {product.product_cost} </h4>

                <button className="btn btn-outline-info" onClick={() => navigate("/makepayment", {state : {product}})}>Purchase Now</button>

                
              </div>
              
            </div>
            
        </div>
        )  )}
    </div>
    
    
  )
}

export default Getproducts;