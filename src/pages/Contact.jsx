const Contact = () => {
  return (
    <div className="section container">
      <span className="section-tag">LET'S CONNECT</span>
      <h1 className="section-title">Contact Me</h1>
      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p className="text-muted" style={{ marginBottom: '20px' }}>
          Fill out the form below or reach out directly:<br />
          <strong>Email:</strong> aishtiaque875@gmail.com <br />
          <strong>Phone:</strong> +92 32 66739989
        </p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', backgroundColor: '#222', color: 'white' }} />
          <input type="email" placeholder="Your Email" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', backgroundColor: '#222', color: 'white' }} />
          <textarea placeholder="How can I help you?" rows="4" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', backgroundColor: '#222', color: 'white' }}></textarea>
          <button className="btn btn-primary" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
