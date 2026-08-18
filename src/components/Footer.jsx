import { Mail, Phone } from 'lucide-react';
import { InstagramIcon, LinkedInIcon, FacebookIcon } from './SocialIcons';

const Footer = () => {
  return (
    <footer style={{ padding: '48px 0 32px', borderTop: '1px solid var(--border-subtle)', marginTop: '48px', backgroundColor: 'var(--bg-main)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.png" alt="Hyder Shaikh Logo" style={{ width: '36px', height: '36px', objectFit: 'contain', borderRadius: '8px', display: 'block' }} />
          <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-main)', fontSize: '1.5rem', margin: 0 }}>
            Hyder <span className="text-accent">Shaikh</span>
          </h2>
        </div>
        <p className="text-muted" style={{ textAlign: 'center', maxWidth: '400px' }}>
          Digital Marketer helping businesses achieve measurable marketing goals.
        </p>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="mailto:hydershaikhsahab875@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
            <Mail size={18} className="text-accent" /> hydershaikhsahab875@gmail.com
          </a>
          <a href="tel:+923266739989" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
            <Phone size={18} className="text-accent" /> +92 32 66739989
          </a>
        </div>

        <div style={{ display: 'flex', gap: '14px', marginTop: '10px' }}>
          <a
            href="https://www.instagram.com/hafizhydershaikh"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)', padding: '10px', backgroundColor: 'var(--bg-card)', borderRadius: '50%', transition: 'all 0.3s ease' }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#000';
              e.currentTarget.style.backgroundColor = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--text-main)';
              e.currentTarget.style.backgroundColor = 'var(--bg-card)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61577739728113"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)', padding: '10px', backgroundColor: 'var(--bg-card)', borderRadius: '50%', transition: 'all 0.3s ease' }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#000';
              e.currentTarget.style.backgroundColor = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--text-main)';
              e.currentTarget.style.backgroundColor = 'var(--bg-card)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FacebookIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/hydershaikhofficial"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)', padding: '10px', backgroundColor: 'var(--bg-card)', borderRadius: '50%', transition: 'all 0.3s ease' }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#000';
              e.currentTarget.style.backgroundColor = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--text-main)';
              e.currentTarget.style.backgroundColor = 'var(--bg-card)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <LinkedInIcon size={18} />
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', borderTop: '1px solid var(--border-subtle)', paddingTop: '20px', marginTop: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <p className="text-muted" style={{ fontSize: '0.9rem', margin: 0 }}>
            &copy; {new Date().getFullYear()} Hyder Shaikh. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--accent)',
              fontSize: '0.9rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'var(--transition)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#fff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--accent)';
            }}
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
