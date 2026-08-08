const About = () => {
  return (
    <div className="section container">
      <span className="section-tag">WHO I AM</span>
      <h1 className="section-title">About Me</h1>
      
      <div className="card" style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '16px', color: 'var(--accent)' }}>Summary</h2>
        <p className="text-muted" style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
          Motivated and results-driven Digital Marketer currently interning at Israin Solution, with hands-on experience in Meta Ads, SEO, content writing, video editing, and social media management. Skilled in planning, launching, and optimizing Facebook and Instagram advertising campaigns to help businesses achieve measurable marketing goals.
        </p>
        <p className="text-muted" style={{ fontSize: '1.1rem' }}>
          Experienced in creating engaging short-form and long-form video content, writing SEO-friendly copy, designing social media posts, and managing brand community engagement. Holds a Digital Marketing Certificate from Saylani Mass IT Training. Seeking internship and entry-level opportunities to apply skills and contribute to organizational growth.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
        <div className="card">
          <h2 style={{ marginBottom: '16px', color: 'var(--accent)' }}>Work Experience</h2>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Meta Ads Specialist & Content Creator</h3>
          <p className="text-accent" style={{ marginBottom: '16px', fontSize: '0.9rem' }}>Israin Solution | Internship | 2 Months</p>
          <ul className="text-muted" style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Planned, launched, and managed Meta Ads campaigns (Facebook and Instagram) for multiple clients.</li>
            <li>Analyzed key Meta Ads metrics (CPM, CPC, CTR, ROAS) to continuously optimize campaigns.</li>
            <li>Applied SEO principles to improve content visibility and organic reach.</li>
            <li>Wrote engaging ad copy, captions, and content for marketing campaigns.</li>
            <li>Created engaging video content and designed social media posts aligned with brand guidelines.</li>
            <li>Handled community management for client pages and delivered regular performance reports.</li>
          </ul>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div className="card">
            <h2 style={{ marginBottom: '16px', color: 'var(--accent)' }}>Core Skills</h2>
            <ul className="text-muted" style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>Meta Ads (Campaign Management, Audience Targeting)</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Content Writing (Ad Copy, Captions, Blog Content)</li>
              <li>Video Editing (Adobe Premiere Pro, After Effects)</li>
              <li>Social Media Post Design & Management</li>
              <li>Analytics: CPM, CPC, CTR, ROAS, Conversion Tracking</li>
            </ul>
          </div>
          
          <div className="card">
            <h2 style={{ marginBottom: '16px', color: 'var(--accent)' }}>Education & Certifications</h2>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.1rem' }}>Digital Marketing Certificate</h3>
              <p className="text-muted">Saylani Mass IT Training</p>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.1rem' }}>Secondary School Certificate (Matric)</h3>
              <p className="text-muted">Currently completing</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--accent)' }}>Hafiz-e-Quran</h3>
              <p className="text-muted">Completed memorization of the complete Holy Quran (Hifz).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
