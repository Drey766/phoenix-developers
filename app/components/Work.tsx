const projects = [
  {
    tag: 'Hair Salon',
    name: 'Crown & Glory',
    desc: 'Full e-commerce + appointment booking. 107 products, 24 services, M-Pesa STK Push, WhatsApp alerts, admin dashboard.',
    url: 'https://crownandglory.vercel.app',
    bg: '#0F1922',
    accent: '#F5A623',
    wide: true,
    tech: ['Next.js 14', 'Supabase', 'M-Pesa', 'WhatsApp API'],
  },
  {
    tag: 'Luxury Perfume',
    name: 'Perfume Plug Kenya',
    desc: '151 products with scent pyramids. Dark luxury design, M-Pesa checkout, WhatsApp notifications.',
    url: 'https://perfumeplug.vercel.app',
    bg: '#0D0A1E',
    accent: '#C9A96E',
    wide: false,
    tech: ['Next.js 14', 'Supabase', 'M-Pesa'],
  },
  {
    tag: 'Menswear',
    name: "Men's World Kenya",
    desc: '490 products at KES prices. Full admin, image upload, blog, all e-commerce flows.',
    url: '#',
    bg: '#0F2318',
    accent: '#4ADE80',
    wide: false,
    tech: ['Next.js', 'Tailwind', 'Supabase'],
  },
  {
    tag: 'Electronics',
    name: 'VoltEdge Kenya',
    desc: '910 products with category filtering, search, and admin controls.',
    url: '#',
    bg: '#0A1525',
    accent: '#60A5FA',
    wide: false,
    tech: ['Next.js', 'Supabase'],
  },
  {
    tag: 'Skincare',
    name: 'NT Beauty Kenya',
    desc: '553 Korean skincare products with ingredient highlights and skin-type filtering.',
    url: '#',
    bg: '#1F0A14',
    accent: '#F472B6',
    wide: false,
    tech: ['Next.js', 'Tailwind', 'Supabase'],
  },
];

export default function Work() {
  return (
    <>
      <style>{`
        .work-section {
          max-width: 1140px;
          margin: 0 auto;
          padding: 100px 40px;
        }
        .section-eyebrow {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #6B6B6B;
          margin-bottom: 12px;
        }
        .section-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3.8rem);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: #1A1A1A;
        }
        .work-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .work-header.visible { opacity: 1; transform: translateY(0); }
        .work-header-right {
          font-size: 14px;
          color: #6B6B6B;
          max-width: 320px;
          line-height: 1.6;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .bento-card {
          border-radius: 20px;
          padding: 28px;
          min-height: 260px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-decoration: none;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
          opacity: 0;
          transform: translateY(40px);
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, opacity 0.6s ease, transform 0.6s ease;
        }
        .bento-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 24px 60px rgba(0,0,0,0.25);
        }
        .bento-card.visible { opacity: 1; transform: translateY(0); }
        .bento-card.wide { grid-column: span 2; }

        .card-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 100px;
          margin-bottom: 16px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .card-name {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.02em;
          margin-bottom: 10px;
        }
        .card-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          line-height: 1.6;
        }
        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 24px;
        }
        .card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .tech-pill {
          font-size: 10px;
          color: rgba(255,255,255,0.35);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 3px 8px;
          border-radius: 100px;
        }
        .card-arrow { font-size: 20px; }

        .work-more {
          margin-top: 28px;
          text-align: center;
        }
        .more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #6B6B6B;
          text-decoration: none;
          border: 1px solid #E2DED7;
          padding: 12px 24px;
          border-radius: 100px;
          transition: color 0.2s, border-color 0.2s;
        }
        .more-btn:hover { color: #1A1A1A; border-color: #1A1A1A; }

        @media (max-width: 900px) {
          .bento-grid { grid-template-columns: 1fr 1fr; }
          .bento-card.wide { grid-column: span 2; }
        }
        @media (max-width: 600px) {
          .bento-grid { grid-template-columns: 1fr; }
          .bento-card.wide { grid-column: span 1; }
          .work-section { padding: 60px 24px; }
        }
      `}</style>

      <section id="work" className="work-section">
        <div className="work-header" data-reveal>
          <div>
            <p className="section-eyebrow">Selected work</p>
            <h2 className="section-h2">Real sites,<br />live right now.</h2>
          </div>
          <p className="work-header-right">
            Every project below is deployed and functional — not mockups. Click through and explore them live.
          </p>
        </div>

        <div className="bento-grid">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bento-card ${p.wide ? 'wide' : ''}`}
              style={{ background: p.bg, transitionDelay: `${i * 0.1}s` }}
              data-reveal
            >
              <div>
                <span
                  className="card-tag"
                  style={{ background: p.accent + '22', color: p.accent }}
                >
                  {p.tag}
                </span>
                <h3 className="card-name">{p.name}</h3>
                <p className="card-desc">{p.desc}</p>
              </div>
              <div className="card-footer">
                <div className="card-tech">
                  {p.tech.map(t => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
                <span className="card-arrow" style={{ color: p.accent }}>→</span>
              </div>
            </a>
          ))}
        </div>

        <div className="work-more">
          <a href="https://github.com/Drey766" target="_blank" rel="noopener noreferrer" className="more-btn">
            View more on GitHub →
          </a>
        </div>
      </section>
    </>
  );
}
