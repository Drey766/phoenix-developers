export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #0D0D0D;
          padding: 40px;
        }
        .footer-inner {
          max-width: 1140px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .footer-brand img {
          height: 38px;
          width: auto;
          opacity: 0.9;
        }
        .footer-brand-text {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .footer-brand-text span {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-top: 2px;
        }
        .footer-links {
          display: flex;
          gap: 24px;
        }
        .footer-link {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #F5A623; }
        @media (max-width: 600px) {
          .footer { padding: 32px 24px; }
          .footer-links { gap: 16px; flex-wrap: wrap; }
        }
      `}</style>
      <footer className="footer">
        <div className="footer-inner">
          <a href="#" className="footer-brand">
            <img src="/phoenix-logo.png" alt="Phoenix Developers" />
            <div className="footer-brand-text">
              Phoenix Developers
              <span>© 2024 · Nairobi, Kenya</span>
            </div>
          </a>
          <div className="footer-links">
            {[
              { label: 'GitHub', url: 'https://github.com/Drey766' },
              { label: 'LinkedIn', url: 'https://linkedin.com/company/phoenix-developers' },
              { label: 'Instagram', url: 'https://instagram.com/andrey_kimarr' },
              { label: 'Email', url: 'mailto:andrewkimani766@gmail.com' },
            ].map(l => (
              <a key={l.label} href={l.url} className="footer-link" target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
