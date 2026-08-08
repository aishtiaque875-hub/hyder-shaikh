import { ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="section container">
      <span className="section-tag">FEATURED WORK</span>
      <h1 className="section-title">Portfolio & Case Studies</h1>
      <p className="text-muted" style={{ marginBottom: '40px', maxWidth: '800px', fontSize: '1.1rem' }}>
        A selection of digital marketing campaigns and projects where data-driven strategies met creative execution to deliver tangible business results.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        
        {/* Case Study 1 */}
        <div className="card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '220px', backgroundColor: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '0' }}>3.2X</h2>
              <p style={{ color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Return on Ad Spend</p>
            </div>
          </div>
          <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '0.75rem', padding: '4px 10px', backgroundColor: 'rgba(0, 240, 255, 0.1)', color: 'var(--accent)', borderRadius: '20px', border: '1px solid var(--border-accent)' }}>Meta Ads</span>
              <span style={{ fontSize: '0.75rem', padding: '4px 10px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '20px', border: '1px solid var(--border-subtle)' }}>Lead Gen</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>E-Commerce Conversion Campaign</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '24px', flexGrow: 1 }}>
              Restructured audience targeting and refreshed ad creatives for a local brand, reducing Cost Per Click (CPC) by 40% and achieving a 3.2X ROAS within the first month.
            </p>
            <button className="btn btn-outline" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Read Full Case Study <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '220px', backgroundColor: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '0' }}>+186%</h2>
              <p style={{ color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Organic Traffic Growth</p>
            </div>
          </div>
          <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '0.75rem', padding: '4px 10px', backgroundColor: 'rgba(0, 240, 255, 0.1)', color: 'var(--accent)', borderRadius: '20px', border: '1px solid var(--border-accent)' }}>SEO</span>
              <span style={{ fontSize: '0.75rem', padding: '4px 10px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '20px', border: '1px solid var(--border-subtle)' }}>Content Writing</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Organic Visibility Overhaul</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '24px', flexGrow: 1 }}>
              Implemented a comprehensive on-page SEO strategy and published targeted blog content, resulting in a massive 186% increase in organic search traffic over 6 months.
            </p>
            <button className="btn btn-outline" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Read Full Case Study <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className="card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '220px', backgroundColor: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '0' }}>10k+</h2>
              <p style={{ color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Video Views per Post</p>
            </div>
          </div>
          <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '0.75rem', padding: '4px 10px', backgroundColor: 'rgba(0, 240, 255, 0.1)', color: 'var(--accent)', borderRadius: '20px', border: '1px solid var(--border-accent)' }}>Video Editing</span>
              <span style={{ fontSize: '0.75rem', padding: '4px 10px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '20px', border: '1px solid var(--border-subtle)' }}>Social Media</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Short-Form Viral Content</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '24px', flexGrow: 1 }}>
              Produced, edited, and distributed highly engaging Instagram Reels and TikToks for a client, consistently achieving over 10k views and significantly boosting brand awareness.
            </p>
            <button className="btn btn-outline" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Read Full Case Study <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
