import { Mail, Phone, ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InstagramIcon, LinkedInIcon, FacebookIcon } from './SocialIcons';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
  ];

  const services = [
    'Meta Ads',
    'SEO',
    'Content Writing',
    'Video Editing',
    'Social Media Management',
    'Social Media Design',
  ];

  const socials = [
    { href: 'https://www.instagram.com/hafizhydershaikh', label: 'Instagram', Icon: InstagramIcon },
    { href: 'https://www.facebook.com/profile.php?id=61577739728113', label: 'Facebook', Icon: FacebookIcon },
    { href: 'https://www.linkedin.com/in/hydershaikhofficial', label: 'LinkedIn', Icon: LinkedInIcon },
  ];

  return (
    <footer className="footer">
      {/* Top CTA Strip */}
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <p className="footer-cta-label">Ready to grow your brand?</p>
            <h3 className="footer-cta-heading">Let's build something that <span className="text-accent">converts.</span></h3>
          </div>
          <Link to="/contact" className="btn btn-primary footer-cta-btn">
            Start a Project <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="footer-main">
        <div className="container footer-grid">

          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon">H</span>
              HYDER <span className="text-accent">SHAIKH</span>
            </Link>
            <p className="footer-tagline">
              Digital Marketer helping businesses achieve measurable growth through data-driven strategies and creative execution.
            </p>
            <div className="footer-socials">
              {socials.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="footer-social-btn">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="footer-link">
                    <span className="footer-link-dot" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/portfolio" className="footer-link">
                    <span className="footer-link-dot" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="footer-col-title">Get In Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <a href="mailto:hydershaikhsahab875@gmail.com" className="footer-contact-item">
                  <Mail size={15} className="footer-contact-icon" />
                  hydershaikhsahab875@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923266739989" className="footer-contact-item">
                  <Phone size={15} className="footer-contact-icon" />
                  +92 32 66739989
                </a>
              </li>
              <li>
                <span className="footer-contact-item">
                  <MapPin size={15} className="footer-contact-icon" />
                  Pakistan
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copyright">
            &copy; {year} <span className="text-accent">Hyder Shaikh</span>. All rights reserved.
          </p>
          <p className="footer-made">
            Built with passion for digital growth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
