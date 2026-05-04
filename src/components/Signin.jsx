import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {

  // Define the two hooks for capturing/storing the users input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // declare the three additional hooks
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // below we have the usNavigate hook to re direct us to another page on success login/signin
  const navigate = useNavigate()

  // below is the function to handle the signin action
  const handlesubmit = async (e) =>{
    // prevent the site from reloading
    e.preventDefault()

    // update the loading hook with a message
    setLoading("Please wait while we authenticate your account...")

    try{
      // Create a  formData object that will hold the email and the password
      const formdata = new FormData()

      // Insert/append the email and the password on the formData created.
      formdata.append("email", email);
      formdata.append("password", password)

      // interact with axios for the response
      const response = await axios.post("https://tashaandeso.alwaysdata.net/api/signin", formdata)

      // set the loading hook back to default
      setLoading("");

      // check whether the user exists as part of your response from the API
      if(response.data.user){
        // if user is there, definately the details entered during sign in are correct
        // local storage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // setSuccess("Login successful")
        // if it is successful, let a person get redirected to another page
        navigate("/");
      }
      else{
        // user is not found, that means the credentials entered on the form are incorrect
        setError("Login Filed. Please try again...")
      }
    }
    catch(error){
      // set loadig back to default
      setLoading("")

      // update the error hook with message
      setError("Oops, an error occured. Try again....")
    }
  }


  return (

    <div className="signin-container d-flex justify-content-center align-items-center">
      <div className="signin-card p-5 shadow-lg text-center">

          <h5 className="text-warning">{loading}</h5>
      <h3 className="text-success">{success}</h3>
      <h4 className="text-danger">{error}</h4>

        <div className="login-icon mb-4">📖</div>
        <h2 className="brand-text mb-2">Welcome Back!</h2>
        <p className="text-muted small mb-4">The next chapter is waiting for you.</p>
        
        <form>
          <div className="input-group-custom mb-3">
            <input type="text" required placeholder="Username" className="form-control-cute" />
          </div>
          
          <div className="input-group-custom mb-4">
            <input type="password" required placeholder="Password" className="form-control-cute" />
          </div>
          
          <button type="submit" className="signin-btn-main w-100 mb-3">
            Open the Hub
          </button>
          
          <div className="form-footer">
            <span className="text-muted small">New reader? </span>
            <a href="/signup" className="signup-link">Create an account</a>
          </div>
        </form>
      </div>
    </div>
  );
};



export default Signin;

// How can you store the users details in the local storage