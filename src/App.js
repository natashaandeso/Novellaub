import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
import AboutUs from './components/AboutUs'; // ✅ 1. Import
import ContactUs from './components/ContactUs';
import ChapterPage from './components/ChapterPage';

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top nav-card">
      <div className="container-fluid px-4">

        <a className="navbar-brand brand-text" href="/">
          ✨NovellaHub <span className="butterfly">🦋</span>
        </a>
        <Chatbot />

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="d-flex flex-column align-items-end w-100 mt-2 mt-lg-0">
            <ul className="navbar-nav mb-1">

              <li className="nav-item">
                <a className="nav-link custom-link home" href="/">Home</a>
              </li>

              {/* ✅ 2. About Us navbar link — visible to everyone */}
              <li className="nav-item">
                <a className="nav-link custom-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
              <a className="nav-link custom-link" href="/contact">Contact Us</a>
              </li>

              {user && (
                <li className="nav-item">
                  <a className="nav-link custom-link addproduct" href="/addproducts">
                    Add Products
                  </a>
                </li>
              )}

              {user ? (
                <>
                  <li className="nav-item d-flex align-items-center">
                    <span className="nav-link text-success fst-italic">
                      👋 {user.username}
                    </span>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link custom-link btn btn-link"
                      onClick={handleLogout}
                      style={{ textDecoration: 'none' }}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                <a className="nav-link custom-link" href="/signin">Sign In</a>
              </li>
                  <li className="nav-item">
                <a className="nav-link custom-link" href="/signup">Sign Up</a>
              </li>
                </>
              )}

              <li className="nav-item ms-lg-3">
                <ThemeToggle />
              </li>

            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Getproducts />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/themetoggle' element={<ThemeToggle />} />
        <Route path='/addproducts' element={<Addproducts />} />
        <Route path='/makepayment' element={<Makepayment />} />
        <Route path='/make-payment' element={<Makepayment />} />
        <Route path='/about' element={<AboutUs />} /> {/* ✅ 3. Route */}
        <Route path='/contact' element={<ContactUs />} />
        <Route path='*' element={<Notfound />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/chapter" element={<ChapterPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;