import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Xüsusiyyətlər', href: '#features' },
  { label: 'Necə İşləyir', href: '#how-it-works' },
  { label: 'Sahələr', href: '#industries' },
  { label: 'Platform', href: '#platform' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(4,4,94,0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(185,250,60,0.15)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 38, height: 38,
            background: 'linear-gradient(135deg, #B9FA3C, #78fa3c)',
            borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: 18, color: '#04045E',
          }}>
            I
          </div>
          <span style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
            Invo<span style={{ color: '#B9FA3C' }}>rent</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} style={{
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: 15,
              fontWeight: 500,
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = '#B9FA3C'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button className="btn-primary" style={{ padding: '10px 20px', fontSize: 14 }}>Demo İstəyin</button>
          <button
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'none' }}
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ background: 'rgba(4,4,94,0.98)', borderBottom: '1px solid rgba(185,250,60,0.2)', overflow: 'hidden' }}
          >
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {navLinks.map(l => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 500 }}>
                  {l.label}
                </a>
              ))}
              <button className="btn-primary" style={{ marginTop: 8 }}>Demo İstəyin</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
