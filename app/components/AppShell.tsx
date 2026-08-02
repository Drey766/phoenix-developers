'use client';
import { useEffect, useRef, useState } from 'react';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursor2Ref = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Custom cursor
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
      if (cursor2Ref.current) {
        setTimeout(() => {
          if (cursor2Ref.current) {
            cursor2Ref.current.style.left = e.clientX + 'px';
            cursor2Ref.current.style.top = e.clientY + 'px';
          }
        }, 80);
      }
    };

    // Hover effects on links/buttons
    const addHover = () => {
      cursorRef.current && (cursorRef.current.style.transform = 'translate(-50%,-50%) scale(2)');
      cursor2Ref.current && (cursor2Ref.current.style.transform = 'translate(-50%,-50%) scale(0.5)');
    };
    const removeHover = () => {
      cursorRef.current && (cursorRef.current.style.transform = 'translate(-50%,-50%) scale(1)');
      cursor2Ref.current && (cursor2Ref.current.style.transform = 'translate(-50%,-50%) scale(1)');
    };

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    // Loader: hide after 2.5s
    const timer = setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.classList.add('hidden');
      }
      document.body.classList.add('loaded');
      setLoaded(true);
    }, 2600);

    return () => {
      document.removeEventListener('mousemove', move);
      clearTimeout(timer);
    };
  }, []);

  // Intersection Observer for scroll reveals
  useEffect(() => {
    if (!loaded) return;
    const els = document.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = '1';
          (e.target as HTMLElement).style.transform = 'translateY(0)';
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [loaded]);

  return (
    <>
      {/* Loader */}
      <div className="loader" ref={loaderRef}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <img
            src="/phoenix-logo.png"
            alt="Phoenix Developers"
            style={{
              height: '80px',
              width: 'auto',
              animation: 'loaderPulse 1.5s ease-in-out infinite',
            }}
          />
          <style>{`
            @keyframes loaderPulse {
              0%, 100% { opacity: 0.4; transform: scale(0.97); }
              50% { opacity: 1; transform: scale(1); }
            }
            @keyframes loaderFadeIn {
              from { opacity: 0; transform: translateY(6px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          <div style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '18px',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.02em',
            animation: 'loaderFadeIn 0.6s ease forwards 0.3s',
            opacity: 0,
          }}>
            Phoenix Developers
          </div>
          <div style={{
            fontSize: '11px',
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            animation: 'loaderFadeIn 0.6s ease forwards 0.5s',
            opacity: 0,
          }}>
            Nairobi, Kenya
          </div>
        </div>
      </div>

      {/* Custom cursors */}
      <div className="cursor" ref={cursorRef} />
      <div className="cursor2" ref={cursor2Ref} />

      {children}
    </>
  );
}
