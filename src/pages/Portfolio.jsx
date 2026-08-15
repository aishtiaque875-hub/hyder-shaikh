import { Megaphone, Search, PenTool, Clapperboard, Palette, Share2, Check, Wrench, Image, Target, BarChart3, LineChart, Globe, FileText, Link2, Gauge, Users, MessageSquare, CalendarClock, Layers, Sparkles } from 'lucide-react';
import './Portfolio.css';
import Reveal from '../components/Reveal';

const metaAdsWork = [
  { icon: <Target size={18} />, title: 'Campaign objective selection', desc: 'Choosing the right objective for each business goal.' },
  { icon: <Users size={18} />, title: 'Audience research & targeting', desc: 'Finding the people most likely to convert.' },
  { icon: <Sparkles size={18} />, title: 'Ad creative development', desc: 'Visuals and hooks that stop the scroll.' },
  { icon: <FileText size={18} />, title: 'Primary text & headline writing', desc: 'Persuasive copy that drives action.' },
  { icon: <Layers size={18} />, title: 'Campaign setup', desc: 'Clean, trackable account and campaign structure.' },
  { icon: <LineChart size={18} />, title: 'Performance monitoring', desc: 'Ongoing checks on how every ad is performing.' },
  { icon: <Gauge size={18} />, title: 'Optimization', desc: 'Budget, bid, and targeting refinements for better results.' },
  { icon: <BarChart3 size={18} />, title: 'CPM, CPC, CTR, ROAS & frequency analysis', desc: 'Data review to improve efficiency and returns.' },
];

const seoCaseStudies = [
  {
    client: 'PepVial',
    role: 'SEO Work — Website Analysis & Optimization',
    desc: 'Conducted keyword research, on-page and off-page SEO analysis, and evaluated the website\'s technical performance to improve its search visibility.',
    tags: ['Keyword Research', 'On-Page SEO', 'Off-Page SEO', 'Performance Analysis'],
  },
  {
    client: 'PlanetCert',
    role: 'SEO Work — Website Analysis & Optimization',
    desc: 'Performed competitive keyword analysis, SEO structure review, backlink assessment, and on-page optimization to strengthen organic reach.',
    tags: ['Competitor Keywords', 'SEO Structure', 'Backlink Analysis', 'Content Optimization'],
  },
];

const seoWork = [
  {
    icon: <Search size={18} />,
    title: 'Keyword Research',
    items: ['Keyword discovery', 'Search intent analysis', 'Keyword opportunities', 'Competitor keyword analysis'],
  },
  {
    icon: <FileText size={18} />,
    title: 'On-Page SEO',
    items: ['Page/content analysis', 'Meta elements', 'Content optimization', 'Internal linking', 'SEO structure'],
  },
  {
    icon: <Link2 size={18} />,
    title: 'Off-Page SEO',
    items: ['Backlink analysis', 'Backlink opportunities', 'Off-page SEO evaluation'],
  },
  {
    icon: <Gauge size={18} />,
    title: 'Technical / Performance',
    items: ['Website SEO issues', 'Page performance analysis'],
  },
];

const contentCategories = [
  { icon: <Share2 size={18} />, title: 'Social Media Content', items: ['Instagram captions', 'Facebook content', 'LinkedIn content', 'Promotional copy'] },
  { icon: <Globe size={18} />, title: 'Website Content', items: ['Blog writing', 'SEO-friendly website content'] },
  { icon: <Megaphone size={18} />, title: 'Advertising', items: ['Primary ad copy', 'Headlines', 'CTA copy', 'Marketing messaging'] },
];

const videoWork = [
  'Instagram Reels',
  'TikTok-style videos',
  'Promotional videos',
  'Review videos',
  'Painting content',
];

const designWork = [
  { label: 'Instagram Posts' },
  { label: 'LinkedIn Posts' },
  { label: 'Facebook Posts' },
  { label: 'Marketing Creatives' },
  { label: 'Logo Design' },
];

const smmResponsibilities = [
  { icon: <CalendarClock size={18} />, title: 'Content planning', desc: 'Building a content plan that keeps pages active and on-message.' },
  { icon: <Layers size={18} />, title: 'Post publishing', desc: 'Scheduling and publishing posts at the right time.' },
  { icon: <Users size={18} />, title: 'Community management', desc: 'Fostering conversations and a loyal audience.' },
  { icon: <MessageSquare size={18} />, title: 'Comments & DM handling', desc: 'Quick, friendly responses to every message.' },
  { icon: <Sparkles size={18} />, title: 'Audience engagement', desc: 'Interactions that keep followers coming back.' },
  { icon: <Layers size={18} />, title: 'Content coordination', desc: 'Keeping content, design, and video in sync.' },
  { icon: <LineChart size={18} />, title: 'Performance monitoring', desc: 'Tracking what works and adjusting the plan.' },
];

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <div className="container">
        <Reveal>
          <div className="page-hero">
            <span className="section-tag">PORTFOLIO &amp; CASE STUDIES</span>
            <h1 className="page-title">My Work &amp; Case Studies</h1>
            <p className="text-muted">
              A closer look at the Meta Ads, SEO, content, video, design, and social media management work I've delivered through hands-on project experience.
            </p>
          </div>
        </Reveal>

        {/* ============ META ADS ============ */}
        <section className="pf-section">
          <Reveal>
            <div className="pf-header">
              <div className="pf-header-icon"><Megaphone size={26} /></div>
              <div>
                <h2 className="pf-title">Meta Ads Campaigns</h2>
                <p className="pf-subtitle">Paid advertising on Facebook &amp; Instagram — planned, launched, and optimized.</p>
              </div>
            </div>
            <p className="pf-intro">
              Hands-on experience running Meta Ads campaigns end-to-end: from choosing the objective and defining the audience to building creatives, launching, monitoring, and optimizing for better performance.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h3 className="section-tag" style={{ marginBottom: '16px' }}>What I Do</h3>
            <div className="pf-grid">
              {metaAdsWork.map((item, i) => (
                <div className="pf-item" key={i}>
                  <span className="pf-item-icon">{item.icon}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <Tools tools={['Meta Ads Manager', 'Meta Business Suite', 'Meta Ads Library']} />
          </Reveal>
        </section>

        {/* ============ SEO ============ */}
        <section className="pf-section">
          <Reveal>
            <div className="pf-header">
              <div className="pf-header-icon"><Search size={26} /></div>
              <div>
                <h2 className="pf-title">Search Engine Optimization</h2>
                <p className="pf-subtitle">Real website projects analyzed and optimized for organic growth.</p>
              </div>
            </div>
            <p className="pf-intro">
              Worked on keyword research, SEO reports, on-page and off-page analysis, and backlinks for the following projects.
            </p>
          </Reveal>

          <div className="pf-case-grid">
            {seoCaseStudies.map((cs, i) => (
              <Reveal key={cs.client} delay={i * 120}>
                <div className="pf-case">
                  <div className="pf-case-banner">
                    <Globe size={30} className="text-accent" />
                    <h3>{cs.client}</h3>
                  </div>
                  <div className="pf-case-body">
                    <div className="pf-case-role">{cs.role}</div>
                    <p>{cs.desc}</p>
                    <div className="pf-case-tags">
                      {cs.tags.map((t) => <span className="pf-tag" key={t}>{t}</span>)}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <h3 className="section-tag" style={{ marginBottom: '16px' }}>Work Included</h3>
            <div className="pf-work-grid">
              {seoWork.map((w, i) => (
                <div className="pf-work-card" key={i}>
                  <div className="pf-work-title">{w.icon} {w.title}</div>
                  <ul className="pf-work-list">
                    {w.items.map((it) => <li key={it}><Check size={15} /> {it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <Tools tools={['Semrush', 'Google Search Console', 'Ubersuggest', 'Google Keyword Planner', 'Google PageSpeed Insights']} />
          </Reveal>
        </section>

        {/* ============ CONTENT WRITING ============ */}
        <section className="pf-section">
          <Reveal>
            <div className="pf-header">
              <div className="pf-header-icon"><PenTool size={26} /></div>
              <div>
                <h2 className="pf-title">Content Writing &amp; Copywriting</h2>
                <p className="pf-subtitle">Words that engage, rank, and convert across every platform.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="pf-work-grid">
              {contentCategories.map((c, i) => (
                <div className="pf-work-card" key={i}>
                  <div className="pf-work-title">{c.icon} {c.title}</div>
                  <ul className="pf-work-list">
                    {c.items.map((it) => <li key={it}><Check size={15} /> {it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <Tools tools={['Claude', 'Copy.ai', 'QuillBot', 'Grammarly']} />
          </Reveal>
        </section>

        {/* ============ VIDEO EDITING ============ */}
        <section className="pf-section">
          <Reveal>
            <div className="pf-header">
              <div className="pf-header-icon"><Clapperboard size={26} /></div>
              <div>
                <h2 className="pf-title">Video Editing &amp; Content Creation</h2>
                <p className="pf-subtitle">Short-form video content edited for reach and retention.</p>
              </div>
            </div>
            <p className="pf-intro">
              Edited short-form social media videos — including painting reels and review reels — designed to grab attention in a fast-scrolling feed.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h3 className="section-tag" style={{ marginBottom: '16px' }}>Work Includes</h3>
            <div className="pf-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              {videoWork.map((v) => (
                <div className="pf-item" key={v}>
                  <span className="pf-item-icon"><Check size={16} /></span>
                  <div><strong>{v}</strong><span>Short-form video content</span></div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <Tools tools={['CapCut', 'Adobe Premiere Pro']} />
          </Reveal>
        </section>

        {/* ============ SOCIAL MEDIA DESIGN ============ */}
        <section className="pf-section">
          <Reveal>
            <div className="pf-header">
              <div className="pf-header-icon"><Palette size={26} /></div>
              <div>
                <h2 className="pf-title">Social Media Post Design</h2>
                <p className="pf-subtitle">Brand-aligned creatives for every platform.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="pf-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              {designWork.map((d) => (
                <div className="pf-item" key={d.label}>
                  <span className="pf-item-icon"><Palette size={16} /></span>
                  <div><strong>{d.label}</strong><span>Social media design work</span></div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <p className="pf-quote">
              Don't just tell visitors you can design. <strong>Show them.</strong><br />
              <span className="text-muted" style={{ fontSize: '0.95rem' }}>Human beings oddly believe their eyes.</span>
            </p>
            <div className="pf-gallery">
              {designWork.map((d) => (
                <div className="pf-gallery-tile" key={d.label}>
                  <Image size={30} />
                  <span>{d.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <Tools tools={['Canva', 'Adobe Photoshop']} />
          </Reveal>
        </section>

        {/* ============ SOCIAL MEDIA MANAGEMENT ============ */}
        <section className="pf-section">
          <Reveal>
            <div className="pf-header">
              <div className="pf-header-icon"><Share2 size={26} /></div>
              <div>
                <h2 className="pf-title">Social Media Management</h2>
                <p className="pf-subtitle">Running real pages — currently managing <span className="text-accent">Marketing Insight</span>.</p>
              </div>
            </div>
            <p className="pf-intro">
              Currently managing Instagram and Facebook pages for Marketing Insight — planning, publishing, and growing an engaged community.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h3 className="section-tag" style={{ marginBottom: '16px' }}>Responsibilities</h3>
            <div className="pf-grid">
              {smmResponsibilities.map((r, i) => (
                <div className="pf-item" key={i}>
                  <span className="pf-item-icon">{r.icon}</span>
                  <div>
                    <strong>{r.title}</strong>
                    <span>{r.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <Tools tools={['Meta Business Suite', 'Canva']} />
          </Reveal>
        </section>
      </div>
    </div>
  );
};

const Tools = ({ tools }) => (
  <div className="pf-tools">
    <span className="pf-tools-label"><Wrench size={16} /> Tools</span>
    {tools.map((t) => <span className="pf-tool-chip" key={t}>{t}</span>)}
  </div>
);

export default Portfolio;
