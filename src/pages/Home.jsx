import { ArrowRight, Search, BarChart3, Edit3, Share2, Monitor, Target } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Background Waves */}
        <div className="abstract-waves">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>

        <div className="container hero-container-centered">
          <div className="hero-content-centered">
            <h1 className="hero-title-centered">
              YOUR SUCCESS<br />
              IS OUR <span className="text-accent">PRIORITY.</span>
            </h1>
            <p className="hero-description-centered">
              Get in touch to see how we can help your business thrive.
            </p>
            <div className="hero-actions-centered">
              <a href="/contact" className="btn btn-primary btn-pill">
                Let's Contact <ArrowRight size={18} />
              </a>
            </div>
            
            <div className="trusted-brands-centered">
              <p className="trusted-title">Trusted by Leading Brands</p>
              <div className="brands-logos">
                <span className="brand-placeholder">Google</span>
                <span className="brand-placeholder">Meta</span>
                <span className="brand-placeholder">LinkedIn</span>
                <span className="brand-placeholder">YouTube</span>
                <span className="brand-placeholder">SEMRUSH</span>
              </div>
            </div>
          </div>
          
          <div className="hero-bottom-text">
            <h2>BRINGING<br/>IDEAS TO LIFE</h2>
            <p>Explore Our Success Stories</p>
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="services-snippet section">
        <div className="container">
          <div className="text-center" style={{marginBottom: '60px'}}>
            <h2 className="section-title-large">OUR EXPERTISE,<br/>YOUR GROWTH</h2>
            <p className="text-muted" style={{maxWidth: '600px', margin: '0 auto'}}>
              From strategy to execution, we offer a full suite of digital services designed to elevate your brand and drive results.
            </p>
          </div>
          
          <div className="services-grid">
            <ServiceCard 
              icon={<Search />}
              title="SEO Optimization"
              desc="Rank higher, drive organic traffic, and grow your online presence."
            />
            <ServiceCard 
              icon={<Target />}
              title="Google Ads"
              desc="Target the right audience and get the best ROI with smart ad campaigns."
            />
            <ServiceCard 
              icon={<BarChart3 />}
              title="Meta Ads"
              desc="Run high-converting Facebook & Instagram ads that bring results."
            />
            <ServiceCard 
              icon={<Edit3 />}
              title="Content Writing"
              desc="Engaging content that builds trust and drives more conversions."
            />
            <ServiceCard 
              icon={<Share2 />}
              title="Social Media Management"
              desc="Manage your social presence and grow your brand online."
            />
            <ServiceCard 
              icon={<Monitor />}
              title="Website Optimization"
              desc="Improve speed, SEO, and user experience for better performance."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ title, desc }) => (
  <div className="card service-card">
    <div className="service-content-wrapper">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
    <a href="/services" className="service-link-btn">
      Get Service <ArrowRight size={14} />
    </a>
  </div>
);

export default Home;
