const services = [
  {
    num: '01',
    title: 'E-Commerce Websites',
    desc: 'Full online stores with product catalogues, shopping cart, order management, and a clean admin dashboard so you can manage everything yourself.',
    features: ['Product catalogue', 'Admin dashboard', 'Order management', 'Blog'],
  },
  {
    num: '02',
    title: 'M-Pesa Integration',
    desc: 'Customers pay directly via M-Pesa STK Push — a payment prompt goes straight to their phone. No redirects, no friction.',
    features: ['STK Push checkout', 'Payment confirmation', 'Auto order update', 'Receipts'],
  },
  {
    num: '03',
    title: 'WhatsApp Notifications',
    desc: 'Every new order triggers an instant WhatsApp message — order details, amount paid, and delivery info — to you and your customer.',
    features: ['Instant order alerts', 'Customer receipts', 'Custom templates', 'Business API'],
  },
  {
    num: '04',
    title: 'Appointment Booking',
    desc: 'For salons, clinics, and service businesses — let customers book online, with a full calendar in your admin panel.',
    features: ['Slot management', 'Customer booking', 'Admin calendar', 'Notifications'],
  },
];

export default function Services() {
  return (
    <>
      <style>{`
        .services-section {
          background: #111111;
          padding: 100px 40px;
        }
        .services-inner {
          max-width: 1140px;
          margin: 0 auto;
        }
        .services-header {
          margin-bottom: 56px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .services-header.visible { opacity: 1; transform: none; }
        .services-eyebrow {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 12px;
        }
        .services-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3.8rem);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: #fff;
        }
        .services-h2 span { color: #F5A623; }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .service-card {
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 36px;
          transition: border-color 0.3s ease;
          opacity: 0;
          transform: translateY(40px);
          transition: border-color 0.3s ease, opacity 0.6s ease, transform 0.6s ease;
        }
        .service-card:hover { border-color: rgba(245,166,35,0.35); }
        .service-card.visible { opacity: 1; transform: none; }

        .service-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        .service-num {
          font-family: 'Syne', sans-serif;
          font-size: 4rem;
          font-weight: 900;
          color: rgba(255,255,255,0.06);
          line-height: 1;
          transition: color 0.3s;
        }
        .service-card:hover .service-num { color: rgba(245,166,35,0.15); }
        .service-plus {
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.3);
          font-size: 18px;
          transition: border-color 0.3s, color 0.3s;
        }
        .service-card:hover .service-plus { border-color: #F5A623; color: #F5A623; }

        .service-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }
        .service-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .service-features {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .feature-pill {
          font-size: 11px;
          font-weight: 600;
          color: rgba(245,166,35,0.7);
          border: 1px solid rgba(245,166,35,0.2);
          padding: 4px 12px;
          border-radius: 100px;
        }

        @media (max-width: 700px) {
          .services-grid { grid-template-columns: 1fr; }
          .services-section { padding: 60px 24px; }
        }
      `}</style>

      <section id="services" className="services-section">
        <div className="services-inner">
          <div className="services-header" data-reveal>
            <p className="services-eyebrow">What I build</p>
            <h2 className="services-h2">
              Everything your<br /><span>business needs online.</span>
            </h2>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <div
                key={s.num}
                className="service-card"
                data-reveal
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="service-card-top">
                  <div className="service-num">{s.num}</div>
                  <div className="service-plus">+</div>
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-features">
                  {s.features.map(f => (
                    <span key={f} className="feature-pill">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
