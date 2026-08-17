import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Hyder Shaikh Logo" className="logo-img" />
          HYDER <span className="logo-accent">SHAIKH</span>
        </Link>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>{l.label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="/cv/Hyder-Shaikh-CV.pdf" download className="btn btn-outline btn-cv">
            <Download size={16} /> CV
          </a>
          <Link to="/contact" className="btn btn-outline btn-call">
            <span>Let's Contact</span>
          </Link>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? 'mobile-menu-open' : ''}`}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <a href="/cv/Hyder-Shaikh-CV.pdf" download onClick={() => setOpen(false)}>
          <Download size={16} /> Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
