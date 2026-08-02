'use client';
import { useState, useEffect, useRef } from 'react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navPrimaryRef = useRef<HTMLDivElement>(null);
  const navSecondaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    setOpen(prev => !prev);
  };

  const closeMenu = () => setOpen(false);

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 500;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .nav-root.scrolled {
          background: rgba(248,246,241,0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #E2DED7;
        }
        .nav-logo {
          text-decoration: none;
          z-index: 600;
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nav-logo-img {
          height: 36px;
          width: auto;
          object-fit: contain;
        }
        .nav-logo-text {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 17px;
          color: #1A1A1A;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .nav-logo-text span {
          display: block;
          font-size: 10px;
          font-weight: 500;
          color: #9B9590;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .desktop-links {
          display: flex;
          align-items: center;
          gap: 36px;
        }
        .desktop-links a {
          font-size: 14px;
          font-weight: 500;
          color: #6B6B6B;
          text-decoration: none;
          position: relative;
          transition: color 0.2s;
        }
        .desktop-links a::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: #F5A623;
          transition: width 0.25s ease;
        }
        .desktop-links a:hover { color: #1A1A1A; }
        .desktop-links a:hover::after { width: 100%; }

        .hire-btn {
          background: #1A1A1A;
          color: #fff !important;
          padding: 10px 22px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, color 0.2s !important;
        }
        .hire-btn:hover { background: #F5A623 !important; color: #1A1A1A !important; }
        .hire-btn::after { display: none !important; }

        .ham-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          width: 36px;
          cursor: pointer;
          z-index: 600;
          position: relative;
          background: none; border: none; padding: 6px;
        }
        .ham-btn span {
          display: block;
          width: 100%; height: 2px;
          background: #1A1A1A;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.645,0.045,0.355,1);
        }
        .ham-btn.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); background: #fff; }
        .ham-btn.open span:nth-child(2) { opacity: 0; }
        .ham-btn.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); background: #fff; }

        /* Mobile fullscreen menu */
        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 550;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .nav-secondary {
          position: absolute;
          inset: 0;
          background: #F5A623;
          height: 0;
          overflow: hidden;
          transition: height 0.45s cubic-bezier(0.77,0,0.175,1);
        }
        .nav-primary {
          position: absolute;
          inset: 0;
          background: #1A1A1A;
          height: 0;
          overflow: hidden;
          transition: height 0.45s cubic-bezier(0.77,0,0.175,1) 0.07s;
        }
        .mobile-menu.open .nav-secondary { height: 100%; }
        .mobile-menu.open .nav-primary { height: 100%; }
        .mobile-menu.open { pointer-events: auto; }

        .nav-links-inner {
          position: relative;
          z-index: 560;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          text-align: center;
        }
        .nav-link {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          opacity: 0;
          transform: translateX(-60px);
          transition: opacity 0.4s ease, transform 0.4s ease, color 0.2s;
          letter-spacing: -0.04em;
        }
        .mobile-menu.open .nav-link {
          opacity: 1;
          transform: translateX(0);
        }
        .mobile-menu.open .nav-link:nth-child(1) { transition-delay: 0.3s, 0.3s, 0s; }
        .mobile-menu.open .nav-link:nth-child(2) { transition-delay: 0.38s, 0.38s, 0s; }
        .mobile-menu.open .nav-link:nth-child(3) { transition-delay: 0.44s, 0.44s, 0s; }
        .mobile-menu.open .nav-link:nth-child(4) { transition-delay: 0.5s, 0.5s, 0s; }
        .nav-link:hover { color: #F5A623; }

        @media (max-width: 768px) {
          .desktop-links { display: none; }
          .ham-btn { display: flex; }
          .nav-root { padding: 0 24px; }
        }
      `}</style>

      <nav className={`nav-root ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo">
          <img src="/phoenix-logo.png" alt="Phoenix Developers" className="nav-logo-img" />
          <div className="nav-logo-text">
            Phoenix Developers
            <span>Nairobi, Kenya</span>
          </div>
        </a>
        <div className="desktop-links">
          {links.map(l => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
          <a href="#contact" className="hire-btn">Get a quote</a>
        </div>
        <button
          className={`ham-btn ${open ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="nav-secondary" ref={navSecondaryRef} />
        <div className="nav-primary" ref={navPrimaryRef} />
        <div className="nav-links-inner">
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav-link" onClick={closeMenu}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
