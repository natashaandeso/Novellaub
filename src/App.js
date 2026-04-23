import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
// import Addproducts from './components/Addproducts';
// import Getproducts from './components/Getproducts';
// import Makepayment from './components/Makepayment';
// import Notfound from './components/Notfound';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4 fixed-top">
      
      {/* Bakery Name (Left Side) */}
      <a className="navbar-brand fw-bold text-primary brand-text" href="/">
        NovellaHub 🦋
      </a>

      {/* Toggle Button for Mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Links (Right Side) */}
      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/addproducts">Add products</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/signin">Sign In</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/signup">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
      <Routes>
        {/* <Route path="/" element={<Getproducts />} /> */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        {/* <Route path='/addproducts' element={<Addproducts />} />
        <Route path='/makepayment' element={<Makepayment /> } />
        <Route path='*' element={<Notfound />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
