import { Briefcase, GraduationCap, BookOpen, Heart } from 'lucide-react';
import Reveal from '../components/Reveal';

const About = () => {
  return (
    <div className="section container">
      <Reveal>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span className="section-tag">ABOUT ME</span>
          <h1 className="section-title-large">Digital Marketing With<br />Strategy, Creativity &amp; Data.</h1>
        </div>
      </Reveal>

      {/* About text */}
      <Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '820px', margin: '0 auto 40px' }}>
          <p className="text-muted" style={{ fontSize: '1.12rem', lineHeight: '1.9' }}>
            I'm <strong style={{ color: 'var(--accent)' }}>Hyder Shaikh</strong>, a Digital Marketer with hands-on experience in Meta Ads, SEO, content writing, video editing, social media management, and creative content production.
          </p>
          <p className="text-muted" style={{ fontSize: '1.12rem', lineHeight: '1.9' }}>
            During my internship at <strong>Israin Solution</strong>, I worked on Meta Ads campaigns, audience targeting, ad creatives, performance analysis, SEO activities, content creation, social media management, and client-focused marketing tasks.
          </p>
          <p className="text-muted" style={{ fontSize: '1.12rem', lineHeight: '1.9' }}>
            My approach combines creative execution with data-driven decision making to help businesses improve their online presence, reach the right audience, and achieve measurable marketing objectives.
          </p>
        </div>
      </Reveal>

      {/* 3 cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '28px' }}>

        <Reveal>
          <div className="card about-card">
            <div className="about-card-icon"><Briefcase size={26} /></div>
            <h2 className="about-card-title">Experience</h2>
            <h3 className="about-card-subtitle">Meta Ads Specialist &amp; Content Creator</h3>
            <p className="text-muted">Israin Solution · 2 Months Internship</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="card about-card">
            <div className="about-card-icon"><GraduationCap size={26} /></div>
            <h2 className="about-card-title">Certification</h2>
            <h3 className="about-card-subtitle">Digital Marketing Certificate</h3>
            <p className="text-muted">Saylani Mass IT Training</p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="card about-card">
            <div className="about-card-icon"><BookOpen size={26} /></div>
            <h2 className="about-card-title">Education</h2>
            <h3 className="about-card-subtitle">Secondary School Certificate</h3>
            <p className="text-muted">Currently Completing Matric</p>
          </div>
        </Reveal>

      </div>

      {/* Personal discipline */}
      <Reveal>
        <div className="card" style={{ maxWidth: '820px', margin: '0 auto', padding: '32px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          <div className="about-card-icon" style={{ flexShrink: 0 }}><Heart size={24} /></div>
          <div>
            <h2 className="about-card-title" style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Personal Discipline</h2>
            <h3 className="about-card-subtitle" style={{ fontSize: '1.05rem' }}>Hafiz-e-Quran</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Completed the memorization of the complete Holy Quran (Hifz) — a reflection of strong discipline, intense focus, memory retention, and dedication that I bring into every project I work on.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default About;
