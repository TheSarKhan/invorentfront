import { Mail, Phone, MapPin, Globe, Share2, GitBranch } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer style={{ background: '#020230', borderTop: '1px solid rgba(185,250,60,0.15)', padding: '60px 24px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 38, height: 38, background: 'linear-gradient(135deg, #B9FA3C, #78fa3c)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, color: '#04045E' }}>I</div>
              <span style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>Invo<span style={{ color: '#B9FA3C' }}>rent</span></span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7, maxWidth: 260, marginBottom: 20 }}>{f.tagline}</p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[Globe, Share2, GitBranch].map((Icon, i) => (
                <button key={i} style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(185,250,60,0.15)'; e.currentTarget.style.borderColor = 'rgba(185,250,60,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  <Icon size={16} color="rgba(255,255,255,0.7)" />
                </button>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {f.navGroups.map(g => (
            <div key={g.title}>
              <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 16 }}>{g.title}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {g.links.map(l => (
                  <button key={l} style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}
                    onMouseEnter={e => e.target.style.color = '#B9FA3C'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                  >{l}</button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div style={{ padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: 24, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          {[
            { icon: Mail, text: 'hello@invorent.az' },
            { icon: Phone, text: '+994 50 000 00 00' },
            { icon: MapPin, text: 'Bakı, Azərbaycan' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon size={16} color="#B9FA3C" />
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>{text}</span>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>{f.copyright}</p>
          <div style={{ display: 'flex', gap: 24 }}>
            {f.legal.map(l => (
              <button key={l} style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                onMouseEnter={e => e.target.style.color = '#B9FA3C'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}
              >{l}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
