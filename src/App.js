import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
import Notfound from './components/Notfound';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ProductDetail from './components/ProductDetail';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top nav-card">
  <div className="container-fluid px-4">
    {/* Animated Brand */}
    <a className="navbar-brand brand-text" href="/">
      ✨NovellaHub <span className="butterfly">🦋</span>
    </a>

    <button
      className="navbar-toggler border-0"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarContent">
  {/* This wrapper forces everything inside to stack vertically */}
  <div className="d-flex flex-column align-items-end w-100 mt-2 mt-lg-0">
    
    {/* Row 1: The Links */}
    <ul className="navbar-nav mb-1">
      <li className="nav-item">
        <a className="nav-link custom-link home" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link custom-link addproduct" href="/addproducts">Add Products</a>
      </li>
      <li className="nav-item">
        <a className="nav-link custom-link signin" href="/signin">Sign In</a>
      </li>
      <li className="nav-item">
        <a className="nav-link signup-btn custom-link" href="/signup">Sign Up</a>
      </li>
      <li className="nav-item ms-lg-3">
        <ThemeToggle />
      </li>
    </ul>

    {/* Row 2: The Search Bar (Now vertically underneath) */}
    {/* <form className="search-container">
      <input 
        type="text" 
        className="search-input" 
        placeholder="Find your next story... 🔍" 
      />
    </form> */}
    
  </div>
</div>
  </div>
</nav>
      
    <Routes>
        <Route path="/" element={<Getproducts />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/themetoggle' element={<ThemeToggle />} />
        <Route path='/addproducts' element={<Addproducts />} />
        <Route path='/makepayment' element={<Makepayment /> } />
        <Route path='*' element={<Notfound />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
