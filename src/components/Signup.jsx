import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  // initialize the hooks
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  // Define the three states an application will move to
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Below is a function that will handle the submit action
  const handleSubmit = async(e) =>{
    // Below will prevent our site from reloading
    e.preventDefault()

    // Update our loading hook with a message that will be displayed to the users who are trying to register
    setLoading("Please wait as registration is in progress...")

    try{
      // create a form data object that will enable you to capture the four details enterded on the form
      const formdata = new FormData();

      // insert the four details (username, email, password, phone) interms of key- value pairs
      formdata.append("username", username);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("phone", phone);

      // by use of axios, we can access the method post
      const response =await axios.post("https://tashaandeso.alwaysdata.net/api/signup", formdata)

      // set back the loading to default
      setLoading("");

      // just incase everything goes on well, update the success hook with a message
      setSuccess(response.data.message)

      // clear your hooks
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");

      setTimeout(() => {
    setSuccess("");
  }, 5000);
    }
    catch(error){
      // set the loading back to default
      setLoading("");

      // update the error hook with the message given ack from the response
      setError(error.message)
    }

  }
  

  return (
    
    <div className="signup-wrapper d-flex align-items-center justify-content-center">
      <div className="signup-container animate__animated animate__fadeInUp">

           <h5 className="text-warning">{loading}</h5>
      <h3 className="text-success">{success}</h3>
      <h4 className="text-danger">{error}</h4>

        <div className="row g-0">
          {/* Left Side: Aesthetic Image/Color */}
          <div className="col-lg-5 d-none d-lg-block signup-accent">
             <div className="accent-content">
                <h2>Welcome to the Library 📖</h2>
                <p>Every great story starts with a single click.</p>
             </div>
          </div>

          {/* Right Side: The Form */}
          <div className="col-lg-7 p-5">
            <h3 className="brand-text mb-4">Create your account ✨</h3>
            <form>
              <div className="mb-3">
                <label className="form-label small-text">Full Name</label>
                <input type="text" className="form-control cute-input" placeholder="e.g. Jane Austen" />
              </div>

              <div className="mb-3">
                <label className="form-label small-text">Email Address</label>
                <input type="email" className="form-control cute-input" placeholder="name@vibes.com" />
              </div>

              <div className="mb-4">
                <label className="form-label small-text">Password</label>
                <input type="password" className="form-control cute-input" placeholder="••••••••" />
              </div>

              <button type="submit" className="signup-btn w-100 py-3 shadow-lg">
                Begin the Journey 🦋
              </button>
              
              <p className="text-center mt-4 small text-muted">
                Already have an account? <a href="/Signin" className="text-purple">Sign In</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Signup;

// Research on Axios module in reactjs