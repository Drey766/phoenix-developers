'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email) return;
    setLoading(true);
    // TODO: wire up EmailJS or Resend here
    await new Promise(r => setTimeout(r, 900));
    setSent(true);
    setLoading(false);
  };

  return (
    <>
      <style>{`
        .contact-section {
          padding: 100px 40px;
          background: #F8F6F1;
        }
        .contact-inner {
          max-width: 1140px;
          margin: 0 auto;
        }
        .contact-headline {
          text-align: center;
          margin-bottom: 64px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .contact-headline.visible { opacity: 1; transform: none; }
        .contact-eyebrow {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #6B6B6B;
          margin-bottom: 12px;
        }
        .contact-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 9vw, 7rem);
          font-weight: 900;
          line-height: 0.92;
          letter-spacing: -0.05em;
          color: #1A1A1A;
        }
        .contact-h2 span { color: #F5A623; }
        .contact-sub {
          font-size: 15px;
          color: #6B6B6B;
          max-width: 400px;
          margin: 20px auto 0;
          line-height: 1.7;
        }

        .contact-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          max-width: 900px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
        }
        .contact-body.visible { opacity: 1; transform: none; }

        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .form-input, .form-textarea {
          width: 100%;
          border: 1.5px solid #E2DED7;
          background: #fff;
          border-radius: 14px;
          padding: 14px 18px;
          font-size: 14px;
          font-family: 'Inter', sans-serif;
          color: #1A1A1A;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input::placeholder, .form-textarea::placeholder { color: #B5B0A8; }
        .form-input:focus, .form-textarea:focus { border-color: #F5A623; }
        .form-textarea { resize: none; }
        .form-submit {
          width: 100%;
          background: #1A1A1A;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          padding: 16px;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .form-submit:hover:not(:disabled) { background: #F5A623; color: #1A1A1A; }
        .form-submit:disabled { opacity: 0.5; cursor: not-allowed; }

        .sent-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 48px 0;
        }
        .sent-emoji { font-size: 3rem; margin-bottom: 16px; }
        .sent-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 900;
          color: #1A1A1A;
          margin-bottom: 8px;
        }
        .sent-sub { font-size: 14px; color: #6B6B6B; }

        .contact-alts {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .contact-alts h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 8px;
        }
        .contact-alt-card {
          display: flex;
          align-items: center;
          gap: 14px;
          border: 1.5px solid #E2DED7;
          background: #fff;
          border-radius: 14px;
          padding: 16px 18px;
          text-decoration: none;
          transition: border-color 0.2s;
        }
        .contact-alt-card:hover { border-color: #F5A623; }
        .contact-alt-icon { font-size: 1.4rem; }
        .contact-alt-label { font-size: 11px; color: #9B9590; }
        .contact-alt-value {
          font-size: 13px;
          font-weight: 600;
          color: #1A1A1A;
          transition: color 0.2s;
        }
        .contact-alt-card:hover .contact-alt-value { color: #F5A623; }

        .contact-note {
          background: rgba(245,166,35,0.08);
          border: 1px solid rgba(245,166,35,0.25);
          border-radius: 14px;
          padding: 18px;
          margin-top: 6px;
          font-size: 13px;
          color: #1A1A1A;
          line-height: 1.6;
        }
        .contact-note strong { font-family: 'Syne', sans-serif; }

        @media (max-width: 700px) {
          .contact-body { grid-template-columns: 1fr; gap: 40px; }
          .contact-section { padding: 60px 24px; }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div className="contact-headline" data-reveal>
            <p className="contact-eyebrow">Let's work together</p>
            <h2 className="contact-h2">Ready to go<br /><span>online?</span></h2>
            <p className="contact-sub">
              Tell us about your business and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="contact-body" data-reveal>
            {/* Form */}
            <div>
              {sent ? (
                <div className="sent-state">
                  <div className="sent-emoji">🎉</div>
                  <div className="sent-title">Got it!</div>
                  <div className="sent-sub">We'll get back to you within 24 hours.</div>
                </div>
              ) : (
                <div className="form-fields">
                  {[
                    { key: 'name', placeholder: 'Your name', type: 'text' },
                    { key: 'email', placeholder: 'Email address', type: 'email' },
                    { key: 'business', placeholder: 'Type of business (e.g. salon, boutique)', type: 'text' },
                  ].map(f => (
                    <input
                      key={f.key}
                      type={f.type}
                      placeholder={f.placeholder}
                      className="form-input"
                      value={form[f.key as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    />
                  ))}
                  <textarea
                    rows={4}
                    placeholder="What do you need? The more detail, the better."
                    className="form-input form-textarea"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                  <button
                    className="form-submit"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send message →'}
                  </button>
                </div>
              )}
            </div>

            {/* Alternatives */}
            <div className="contact-alts">
              <h3>Prefer to reach out directly?</h3>
              {[
                { icon: '💬', label: 'WhatsApp', value: '+254 700 000 000', href: 'https://wa.me/254700000000' },
                { icon: '✉️', label: 'Email', value: 'andrewkimani766@gmail.com', href: 'mailto:andrewkimani766@gmail.com' },
                { icon: '🔗', label: 'LinkedIn', value: 'andrew-kimani', href: 'https://linkedin.com/in/andrew-kimani' },
              ].map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-alt-card">
                  <span className="contact-alt-icon">{c.icon}</span>
                  <div>
                    <div className="contact-alt-label">{c.label}</div>
                    <div className="contact-alt-value">{c.value}</div>
                  </div>
                </a>
              ))}
              <div className="contact-note">
                <strong>Typical turnaround:</strong> most sites are live within 2–4 weeks of your first conversation with us.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
