import { Search, BarChart3, Edit3, Share2, Monitor, Target } from 'lucide-react';
import '../pages/Home.css';

const Services = () => {
  return (
    <div className="section container">
      <span className="section-tag">WHAT I DO</span>
      <h1 className="section-title">My Services</h1>
      <p className="text-muted" style={{ marginBottom: '40px', maxWidth: '800px', fontSize: '1.1rem' }}>
        As a Digital Marketer, I offer a comprehensive suite of services designed to elevate your brand's online presence, engage your target audience, and drive measurable growth.
      </p>
      
      <div className="services-grid">
        <div className="card service-card">
          <div className="service-content-wrapper">
            <Target className="text-accent" size={32} style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Meta Ads Campaigns</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem' }}>
              Strategic planning, launching, and management of Facebook and Instagram ad campaigns. I focus on precise audience targeting, A/B testing, and continuous optimization of key metrics (ROAS, CTR, CPC) to maximize your return on ad spend.
            </p>
          </div>
        </div>

        <div className="card service-card">
          <div className="service-content-wrapper">
            <Search className="text-accent" size={32} style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Search Engine Optimization (SEO)</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem' }}>
              Applying proven SEO principles to improve your website's organic visibility. From keyword research to on-page optimization, I ensure your content ranks higher on search engines and attracts the right audience.
            </p>
          </div>
        </div>

        <div className="card service-card">
          <div className="service-content-wrapper">
            <Edit3 className="text-accent" size={32} style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Content Writing & Copywriting</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem' }}>
              Crafting compelling ad copy, engaging social media captions, and SEO-friendly blog content that resonates with your audience and drives conversions while maintaining your unique brand voice.
            </p>
          </div>
        </div>

        <div className="card service-card">
          <div className="service-content-wrapper">
            <Monitor className="text-accent" size={32} style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Video Editing & Content Creation</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem' }}>
              Producing high-quality short-form (Reels/TikToks) and long-form video content using Adobe Premiere Pro and After Effects. Visual storytelling that captures attention in a fast-scrolling feed.
            </p>
          </div>
        </div>

        <div className="card service-card">
          <div className="service-content-wrapper">
            <Share2 className="text-accent" size={32} style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Social Media Management</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem' }}>
              End-to-end management of your social profiles. From designing eye-catching posts to active community management, responding to DMs, and building a loyal audience for your brand.
            </p>
          </div>
        </div>

        <div className="card service-card">
          <div className="service-content-wrapper">
            <BarChart3 className="text-accent" size={32} style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Analytics & Reporting</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem' }}>
              Delivering transparent, regular performance reports with actionable insights. I track conversion data and campaign health so you always know exactly how your marketing investment is performing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
