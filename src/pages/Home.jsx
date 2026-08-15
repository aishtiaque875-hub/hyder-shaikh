import { ArrowRight, Search, Edit3, Share2, Target, TrendingUp, Users, Zap, PenTool, Layers, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';
import heroImg from '../assets/hero.png';
import Reveal from '../components/Reveal';

const Home = () => {
  return (
    <div className="home-page">
      {/* ============ HERO ============ */}
      <section className="hero-section">
        <div className="abstract-waves">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>

        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-label">Digital Marketer</span>

              <h1 className="hero-title">
                I Build <span className="gradient-text">Data-Driven</span> Marketing That Helps Businesses Grow.
              </h1>

              <p className="hero-description">
                I'm Hyder Shaikh, a Digital Marketer with hands-on experience in Meta Ads, SEO, content creation, video editing, and social media management.
              </p>

              <div className="hero-actions">
                <Link to="/portfolio" className="btn btn-primary-glow btn-pill">
                  View My Work <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn btn-outline btn-pill">
                  Let's Work Together
                </Link>
              </div>

              <div className="hero-tools">
                <span className="hero-tools-label">Platforms</span>
                <span className="hero-tool-chip">Meta Ads</span>
                <span className="hero-tool-chip">SEO</span>
                <span className="hero-tool-chip">Content</span>
                <span className="hero-tool-chip">Video</span>
                <span className="hero-tool-chip">Design</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-ring"></div>
              <div className="hero-portrait-wrap">
                <div className="hero-portrait">
                  <img src={heroImg} alt="Hyder Shaikh - Digital Marketer" />
                </div>
              </div>
              <div className="hero-badge badge-1">
                <Target size={18} /> Meta Ads
              </div>
              <div className="hero-badge badge-2">
                <Search size={18} /> SEO
              </div>
              <div className="hero-badge badge-3">
                <PenTool size={18} /> Content & Creative
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ QUICK STATS ============ */}
      <section className="quick-stats">
        <div className="container">
          <Reveal>
            <div className="quick-stats-grid">
              <div className="quick-stat">
                <div className="quick-stat-value">2+</div>
                <div className="quick-stat-label">Months<br />Internship Experience</div>
              </div>
              <div className="quick-stat-divider"></div>
              <div className="quick-stat">
                <div className="quick-stat-value">6</div>
                <div className="quick-stat-label">Core<br />Marketing Services</div>
              </div>
              <div className="quick-stat-divider"></div>
              <div className="quick-stat">
                <div className="quick-stat-value">3+</div>
                <div className="quick-stat-label">SEO Projects /<br />Websites Worked On</div>
              </div>
              <div className="quick-stat-divider"></div>
              <div className="quick-stat">
                <div className="quick-stat-value">Multi-<br />Platform</div>
                <div className="quick-stat-label">Content &amp; Social<br />Media Experience</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES SNIPPET ============ */}
      <section className="services-snippet section">
        <div className="container">
          <Reveal>
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <h2 className="section-title-large">WHAT I<br />DELIVER</h2>
              <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
                A full range of digital marketing services — from strategy to creative execution — built to reach the right audience and drive measurable results.
              </p>
            </div>
          </Reveal>

          <div className="services-grid">
            <Reveal delay={0}><ServiceCard icon={<Target />} title="Meta Ads Campaigns" desc="Campaign setup, audience targeting, ad creatives, and continuous optimization of CPM, CPC, CTR and ROAS." /></Reveal>
            <Reveal delay={80}><ServiceCard icon={<Search />} title="Search Engine Optimization" desc="Keyword research, on-page and off-page SEO, backlink analysis, and SEO reporting that improves organic visibility." /></Reveal>
            <Reveal delay={160}><ServiceCard icon={<Edit3 />} title="Content Writing" desc="Persuasive ad copy, engaging captions, and SEO-friendly blog content that build trust and drive conversions." /></Reveal>
            <Reveal delay={0}><ServiceCard icon={<Play />} title="Video Editing" desc="Short-form reels, review videos, and promo content edited in CapCut and Premiere Pro to hold attention." /></Reveal>
            <Reveal delay={80}><ServiceCard icon={<Layers />} title="Social Media Design" desc="Brand-aligned Instagram, Facebook and LinkedIn post designs plus marketing creatives and logos." /></Reveal>
            <Reveal delay={160}><ServiceCard icon={<Share2 />} title="Social Media Management" desc="Content planning, publishing, community management, and performance monitoring across platforms." /></Reveal>
          </div>
        </div>
      </section>

      {/* ============ CORE COMPETENCIES ============ */}
      <section className="section bg-card" style={{ padding: '32px 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <Reveal>
            <div className="text-center" style={{ marginBottom: '28px' }}>
              <h2 className="section-title-large" style={{ fontSize: '2.5rem' }}>CORE COMPETENCIES</h2>
              <p className="text-muted">A quick overview of the skills I use in every project.</p>
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
            {['Meta Ads (FB/IG)', 'Audience Targeting', 'ROAS Optimization', 'SEO', 'Content Writing', 'Ad Copywriting', 'Video Editing', 'Social Media Design', 'Community Management', 'Performance Analysis', 'A/B Testing', 'Keyword Research'].map((skill, index) => (
              <span key={index} className="animate-fade-up" style={{
                padding: '12px 24px',
                backgroundColor: 'rgba(0, 240, 255, 0.05)',
                border: '1px solid var(--border-accent)',
                borderRadius: '30px',
                fontSize: '1rem',
                color: 'var(--accent)',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                cursor: 'default',
                animationDelay: `${index * 60}ms`
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent)';
                e.currentTarget.style.color = '#000';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 240, 255, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.05)';
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY WORK WITH ME ============ */}
      <section className="section" style={{ padding: '44px 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="split-grid">
            <Reveal>
              <div>
                <h2 className="section-title-left">WHY WORK<br />WITH ME?</h2>
                <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '30px', lineHeight: '1.8' }}>
                  In a crowded digital space, you need more than generic campaigns. I focus on the balance between creative storytelling and hard data to deliver marketing that performs.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <TrendingUp className="text-accent" size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
                    <div>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Data-Driven Decisions</h4>
                      <p className="text-muted" style={{ fontSize: '0.95rem' }}>Every campaign is backed by analysis of CPM, CPC, CTR, and ROAS to maximize efficiency.</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <Users className="text-accent" size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
                    <div>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Audience-Centric Approach</h4>
                      <p className="text-muted" style={{ fontSize: '0.95rem' }}>I don't just chase clicks — I build communities and target audiences most likely to convert.</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <Zap className="text-accent" size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
                    <div>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Creative + Strategy</h4>
                      <p className="text-muted" style={{ fontSize: '0.95rem' }}>Copy, design, and video built around a clear strategy — so content doesn't just look good, it works.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="quote-card">
                <div style={{ position: 'absolute', top: '-20px', left: '-20px', fontSize: '6rem', color: 'rgba(0, 240, 255, 0.1)', lineHeight: '1', fontFamily: 'serif' }}>"</div>
                <p style={{ fontSize: '1.3rem', fontStyle: 'italic', lineHeight: '1.8', marginBottom: '30px', position: 'relative', zIndex: 1 }}>
                  "Hyder blends analytical Meta Ads strategies with creative video editing and compelling copy to deliver measurable marketing goals."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold' }}>IS</div>
                  <div>
                    <h5 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Israin Solution</h5>
                    <p className="text-accent" style={{ fontSize: '0.85rem' }}>Internship Experience</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="section" style={{ padding: '32px 0' }}>
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <h2 className="cta-banner-title">Let's Build Something That Grows.</h2>
              <p className="text-muted" style={{ maxWidth: '560px', margin: '0 auto 32px' }}>
                Have a project, campaign, or business goal in mind? Let's discuss how digital marketing can help you move forward.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary-glow btn-pill">
                  Let's Work Together <ArrowRight size={18} />
                </Link>
                <Link to="/portfolio" className="btn btn-outline btn-pill">
                  View My Work
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ title, desc, icon }) => (
  <div className="card service-card">
    <div className="service-content-wrapper">
      <div style={{ color: 'var(--accent)', marginBottom: '20px' }}>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
    <Link to="/skills" className="service-link-btn">
      Learn More <ArrowRight size={14} />
    </Link>
  </div>
);

export default Home;
