import { Link, NavLink } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">H</span>
          HYDER <span className="logo-accent">SHAIKH</span>
        </Link>
        
        <ul className="nav-links">
          <li><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
          <li><NavLink to="/services" className={({isActive}) => isActive ? "active" : ""}>Services</NavLink></li>
          <li><NavLink to="/portfolio" className={({isActive}) => isActive ? "active" : ""}>Portfolio</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink></li>
        </ul>
        
        <a href="/contact" className="btn btn-outline btn-call">
          <span>Let's Contact</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
