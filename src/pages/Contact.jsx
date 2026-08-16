import { useState } from 'react';
import { Mail, Phone, ArrowRight, Send, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, LinkedInIcon, FacebookIcon } from '../components/SocialIcons';
import './Contact.css';
import Reveal from '../components/Reveal';

const serviceOptions = [
  'Meta Ads',
  'SEO',
  'Content Writing',
  'Video Editing',
  'Social Media Management',
  'Social Media Design',
  'Other',
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', service: serviceOptions[0], message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const data = new FormData();
    data.append('name', form.name);
    data.append('email', form.email);
    data.append('_subject', `Project Inquiry - ${form.service} (${form.name})`);
    data.append('Service Needed', form.service);
    data.append('message', form.message);
    data.append('_captcha', 'false');
    data.append('_template', 'table');

    try {
      await fetch('https://formsubmit.co/hydershaikhsahab875@gmail.com', {
        method: 'POST',
        body: data,
      });
      setSent(true);
    } catch (err) {
      console.error('FormSubmit error:', err);
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="section contact-section">
      <div className="container">
        <Reveal>
          <div className="page-hero">
            <span className="section-tag">CONTACT</span>
            <h1 className="page-title">Let's Build Something That Grows.</h1>
            <p className="text-muted">
              Have a project, campaign, or business goal in mind? Let's discuss how digital marketing can help you move forward.
            </p>
          </div>
        </Reveal>

        <div className="contact-grid">
          {/* Left: info */}
          <Reveal>
            <div>
              <h2 className="contact-info-title">Get In<br /><span className="text-accent">Touch</span></h2>
              <p className="contact-info-desc">
                Whether it's a Meta Ads campaign, an SEO project, content, video, or design - tell me about it and I'll get back to you quickly.
              </p>

              <div className="contact-item">
                <div className="contact-item-icon"><Mail size={20} /></div>
                <div>
                  <div className="contact-item-label">Email</div>
                  <a href="mailto:hydershaikhsahab875@gmail.com">hydershaikhsahab875@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon"><Phone size={20} /></div>
                <div>
                  <div className="contact-item-label">Phone</div>
                  <a href="tel:+923266739989">+92 32 66739989</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon"><Send size={20} /></div>
                <div>
                  <div className="contact-item-label">Social</div>
                  <div className="contact-socials" style={{ marginTop: '0' }}>
                    <a className="contact-social" href="https://www.linkedin.com/in/hydershaikhofficial" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon size={18} /></a>
                    <a className="contact-social" href="https://www.instagram.com/hafizhydershaikh" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon size={18} /></a>
                    <a className="contact-social" href="https://www.facebook.com/profile.php?id=61577739728113" target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon size={18} /></a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={150}>
            <div className="contact-form-card">
              {sent ? (
                <div className="contact-success">
                  <div className="contact-success-icon"><CheckCircle2 size={32} /></div>
                  <h3 style={{ fontSize: '1.4rem' }}>Message Sent!</h3>
                  <p className="text-muted">
                    Thanks, {form.name || 'there'}! Your message has been sent. I'll get back to you as soon as possible.
                  </p>
                  <button className="btn btn-outline btn-pill" onClick={() => { setSent(false); setForm({ name: '', email: '', service: serviceOptions[0], message: '' }); }} style={{ marginTop: '8px' }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="service">Service Needed</label>
                    <select id="service" name="service" value={form.service} onChange={handleChange}>
                      {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="message">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, goals, and timeline..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button className="btn btn-primary-glow btn-pill contact-submit" type="submit" disabled={sending} style={{ opacity: sending ? 0.6 : 1, cursor: sending ? 'not-allowed' : 'pointer' }}>
                    {sending ? 'Sending...' : "Let's Work Together"} <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
