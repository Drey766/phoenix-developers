'use client';
import { useEffect, useRef } from 'react';

const tickerItems = [
  'Crown & Glory Hair Salon', 'Perfume Plug Kenya', "Men's World Kenya",
  'VoltEdge Electronics', 'NT Beauty Kenya', 'Lumat Furniture Kenya',
  'Car Rental Kenya', 'GameStore Kenya', 'Shoe Store Kenya',
];

function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d')!;
    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      dots.forEach(d => { d.x = Math.random() * w; d.y = Math.random() * h; });
    };
    window.addEventListener('resize', resize);

    type Dot = { x: number; y: number; vx: number; vy: number; r: number; opacity: number };
    const dots: Dot[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw connecting lines between nearby dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(245,166,35,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,166,35,${d.opacity})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  );
}

function AnimatedText({ text, delay = 0 }: { text: string; delay?: number }) {
  // Split into words, animate char-by-char within each word, keep words intact
  const words = text.split(' ');
  let charIndex = 0;
  return (
    <>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((ch) => {
            const ci = charIndex++;
            return (
              <span
                key={ci}
                style={{
                  display: 'inline-block',
                  opacity: 0,
                  transform: 'translateY(24px)',
                  animation: `charIn 0.6s cubic-bezier(0.22,1,0.36,1) forwards`,
                  animationDelay: `${delay + ci * 0.04}s`,
                }}
              >
                {ch}
              </span>
            );
          })}
          {/* Space between words */}
          {wi < words.length - 1 && (
            <span style={{ display: 'inline-block', width: '0.28em' }} />
          )}
        </span>
      ))}
    </>
  );
}

const doubled = [...tickerItems, ...tickerItems];

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes charIn {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 64px;
          overflow: hidden;
          background: #F8F6F1;
        }
        .hero-bg-word {
          position: absolute;
          right: -2vw;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Syne', sans-serif;
          font-weight: 900;
          font-size: clamp(9rem, 22vw, 20rem);
          color: #E8E4DC;
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.05em;
        }
        .hero-inner {
          position: relative;
          max-width: 1140px;
          margin: 0 auto;
          padding: 60px 40px;
          width: 100%;
        }
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          opacity: 0;
          animation: fadeSlideUp 0.8s ease forwards 0.4s;
        }
        .hero-eyebrow-line {
          width: 32px; height: 2px; background: #F5A623;
        }
        .hero-eyebrow-text {
          font-size: 12px;
          font-weight: 600;
          color: #6B6B6B;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .hero-h1 {
          font-family: 'Syne', sans-serif;
          font-weight: 900;
          font-size: clamp(3rem, 8.5vw, 7.5rem);
          line-height: 1.0;
          letter-spacing: -0.04em;
          color: #1A1A1A;
          margin-bottom: 32px;
          word-break: keep-all;
          overflow-wrap: normal;
        }
        .hero-h1 > div {
          display: block;
          overflow: hidden;
          padding-bottom: 0.08em;
        }
        .hero-h1 .accent { color: #F5A623; }
        .hero-sub {
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          color: #6B6B6B;
          max-width: 520px;
          line-height: 1.7;
          font-weight: 300;
          opacity: 0;
          animation: fadeSlideUp 0.8s ease forwards 2s;
          margin-bottom: 40px;
        }
        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          opacity: 0;
          animation: fadeSlideUp 0.8s ease forwards 2.2s;
          margin-bottom: 56px;
        }
        .cta-primary {
          background: #1A1A1A;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          padding: 14px 30px;
          border-radius: 100px;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .cta-primary:hover { background: #F5A623; color: #1A1A1A; }
        .cta-secondary {
          border: 1.5px solid #1A1A1A;
          color: #1A1A1A;
          font-size: 14px;
          font-weight: 600;
          padding: 14px 30px;
          border-radius: 100px;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .cta-secondary:hover { border-color: #F5A623; color: #F5A623; }

        .hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          padding-top: 40px;
          border-top: 1px solid #E2DED7;
          opacity: 0;
          animation: fadeSlideUp 0.8s ease forwards 2.4s;
        }
        .stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 900;
          color: #1A1A1A;
          letter-spacing: -0.03em;
        }
        .stat-label { font-size: 13px; color: #6B6B6B; margin-top: 2px; }

        /* Ticker */
        .ticker-strip {
          overflow: hidden;
          border-top: 1px solid #E2DED7;
          border-bottom: 1px solid #E2DED7;
          background: #1A1A1A;
          padding: 14px 0;
          margin-top: 20px;
        }
        .ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          padding-right: 20px;
          color: rgba(255,255,255,0.7);
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
        }
        .ticker-dot { color: #F5A623; font-size: 16px; }

        @media (max-width: 600px) {
          .hero-inner { padding: 40px 24px; }
        }
      `}</style>

      <section className="hero-section">
        <ParticleCanvas />
        <div className="hero-bg-word" aria-hidden="true">DEV</div>

        <div className="hero-inner">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">Web Agency · Nairobi, Kenya</span>
          </div>

          <h1 className="hero-h1">
            <div><AnimatedText text="I build" delay={0.6} /></div>
            <div><AnimatedText text="websites that" delay={1.0} /></div>
            <div>
              <span className="accent"><AnimatedText text="get your" delay={1.3} /></span>
            </div>
            <div><AnimatedText text="business selling." delay={1.6} /></div>
          </h1>

          <p className="hero-sub">
            Full-stack e-commerce for Kenyan small businesses — M-Pesa checkout, WhatsApp order alerts,
            and a full product admin. Launch-ready in weeks, not months.
          </p>

          <div className="hero-ctas">
            <a href="#work" className="cta-primary">See our work →</a>
            <a href="#contact" className="cta-secondary">Get a quote</a>
          </div>

          <div className="hero-stats">
            {[
              { num: '10+', label: 'Portfolio sites built' },
              { num: '5', label: 'Industries covered' },
              { num: 'M-Pesa', label: 'Payments built-in' },
            ].map(s => (
              <div key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="ticker-strip">
          <div className="ticker-inner">
            {doubled.map((item, i) => (
              <span key={i} className="ticker-item">
                <span className="ticker-dot">✦</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
