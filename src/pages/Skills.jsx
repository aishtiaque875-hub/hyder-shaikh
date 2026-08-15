import { Target, Search, PenTool, Clapperboard, Palette, Share2, Check } from 'lucide-react';
import './Skills.css';
import Reveal from '../components/Reveal';

const skills = [
  {
    icon: <Target size={26} />,
    title: 'Meta Ads',
    desc: 'Plan, launch, and optimize Facebook & Instagram ad campaigns focused on conversions and measurable results.',
    items: [
      'Campaign Setup',
      'Sales-Focused Objectives',
      'Audience Targeting',
      'Ad Creative Creation',
      'Campaign Optimization',
      'CPM, CPC, CTR & ROAS Analysis',
    ],
    tools: ['Meta Ads Manager', 'Meta Business Suite', 'Meta Ads Library'],
  },
  {
    icon: <Search size={26} />,
    title: 'SEO',
    desc: 'Improve website visibility through structured keyword research and on-page, off-page, and technical SEO.',
    items: [
      'Keyword Research',
      'Keyword Analysis',
      'On-Page SEO',
      'Off-Page SEO',
      'Backlink Analysis',
      'SEO Reporting',
      'Website SEO Analysis',
    ],
    tools: ['Semrush', 'Google Search Console', 'Ubersuggest', 'Google Keyword Planner', 'Google PageSpeed Insights'],
  },
  {
    icon: <PenTool size={26} />,
    title: 'Content Writing',
    desc: 'Write clear, persuasive content that ranks and converts — from blogs and ad copy to captions.',
    items: [
      'Social Media Content',
      'Blog Writing',
      'SEO Content',
      'Ad Copywriting',
      'Captions',
      'Headlines & CTA Copy',
    ],
    tools: ['Claude', 'Copy.ai', 'QuillBot', 'Grammarly'],
  },
  {
    icon: <Clapperboard size={26} />,
    title: 'Video Editing',
    desc: 'Edit fast-paced short-form videos — reels, reviews, and promos — that hold attention and drive engagement.',
    items: [
      'Reels Editing',
      'Review Videos',
      'Painting Videos',
      'Short-Form Content',
      'Promotional Videos',
      'Social Media Video Editing',
    ],
    tools: ['CapCut', 'Adobe Premiere Pro'],
  },
  {
    icon: <Palette size={26} />,
    title: 'Social Media Design',
    desc: 'Design scroll-stopping, brand-aligned creatives for every platform — from posts to logos.',
    items: [
      'Instagram Post Design',
      'Facebook Post Design',
      'LinkedIn Post Design',
      'Marketing Creatives',
      'Logo Design',
      'Brand-Aligned Visual Design',
    ],
    tools: ['Canva', 'Adobe Photoshop'],
  },
  {
    icon: <Share2 size={26} />,
    title: 'Social Media Management',
    desc: 'Run accounts end-to-end — planning, publishing, engaging, and tracking what works.',
    items: [
      'Instagram Management',
      'Facebook Management',
      'Content Publishing',
      'Community Management',
      'Comments & DM Management',
      'Audience Engagement',
      'Content Planning',
    ],
    tools: ['Meta Business Suite', 'Canva'],
    note: true,
  },
];

const Skills = () => {
  return (
    <div className="section container">
      <Reveal>
        <div className="page-hero">
          <span className="section-tag">WHAT I DO</span>
          <h1 className="page-title">My Skills</h1>
          <p className="text-muted">
            Digital marketing skills built through practical experience, creative execution, and hands-on project work.
          </p>
        </div>
      </Reveal>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <Reveal key={skill.title} delay={(i % 3) * 100}>
            <div className="skill-card">
              <div className="skill-card-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p className="skill-card-desc">{skill.desc}</p>

              <div className="skill-list-title">Key Skills</div>
              <ul className="skill-list">
                {skill.items.map((it) => (
                  <li key={it}><Check size={15} /> {it}</li>
                ))}
              </ul>

              {skill.note && (
                <div className="skill-project-note">
                  <strong>Current Project:</strong> Marketing Insight
                </div>
              )}

              <div className="skill-tools">
                {skill.tools.map((t) => (
                  <span className="skill-tool-chip" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Skills;
