import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ padding: '60px 0 40px', borderTop: '1px solid var(--border-subtle)', marginTop: '80px', backgroundColor: 'var(--bg-main)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-main)', fontSize: '1.5rem', margin: 0 }}>HYDER <span className="text-accent">SHAIKH</span></h2>
        <p className="text-muted" style={{ textAlign: 'center', maxWidth: '400px' }}>
          Digital Marketer helping businesses achieve measurable marketing goals.
        </p>
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="mailto:aishtiaque875@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
            <Mail size={18} className="text-accent" /> aishtiaque875@gmail.com
          </a>
          <a href="tel:+923266739989" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
            <Phone size={18} className="text-accent" /> +92 32 66739989
          </a>
        </div>

        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
          <a href="https://www.instagram.com/hafizhydershaikh" target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)', padding: '10px', backgroundColor: 'var(--bg-card)', borderRadius: '50%' }}>
            <span>IG</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61577739728113" target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)', padding: '10px', backgroundColor: 'var(--bg-card)', borderRadius: '50%' }}>
            <span>FB</span>
          </a>
          <a href="https://www.linkedin.com/in/hydershaikhofficial" target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)', padding: '10px', backgroundColor: 'var(--bg-card)', borderRadius: '50%' }}>
            <span>IN</span>
          </a>
        </div>
        
        <p className="text-muted" style={{ marginTop: '20px', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Hyder Shaikh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
