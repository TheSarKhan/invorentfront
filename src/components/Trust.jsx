import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Shield, Zap, Lock, Layers } from 'lucide-react';

const items = [
  { icon: Shield, title: 'Secure Infrastructure', desc: 'Enterprise-grade şifrələmə və təhlükəsizlik protokolları' },
  { icon: Zap, title: 'Real-time Data Sync', desc: 'Məlumatlar millisaniyələr içərisində sinxronlaşır' },
  { icon: Lock, title: 'Role-based Access', desc: 'Hər istifadəçiyə yalnız öz roluna uyğun giriş' },
  { icon: Layers, title: 'Scalable Architecture', desc: 'Biznesiniz böyüdükcə platform da genişlənir' },
];

export default function Trust() {
  const [ref, inView] = useInView(0.15);

  return (
    <section style={{ padding: '100px 24px', background: '#04045E', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(185,250,60,0.3), transparent)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p style={{ color: '#B9FA3C', fontWeight: 600, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Güvən</p>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, maxWidth: 520, margin: '0 auto' }}>
            <span style={{ background: 'linear-gradient(135deg, #B9FA3C, #78fa3c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Şəffaflıq
            </span>{' '}
            üzərində qurulmuş texnologiya
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                style={{
                  display: 'flex',
                  gap: 16,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 16,
                  padding: '24px 22px',
                  cursor: 'default',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(185,250,60,0.3)';
                  e.currentTarget.style.background = 'rgba(185,250,60,0.05)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                }}
              >
                <div style={{
                  width: 48, height: 48,
                  borderRadius: 12,
                  background: 'rgba(185,250,60,0.1)',
                  border: '1px solid rgba(185,250,60,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={22} color="#B9FA3C" />
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compliance badges row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: 52, display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}
        >
          {['SOC 2 Compliant', 'ISO 27001', 'GDPR Ready', '256-bit SSL', '99.99% Uptime'].map(badge => (
            <div key={badge} style={{
              background: 'rgba(185,250,60,0.08)',
              border: '1px solid rgba(185,250,60,0.25)',
              borderRadius: 40,
              padding: '8px 20px',
              color: '#B9FA3C',
              fontSize: 13,
              fontWeight: 600,
            }}>
              ✓ {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
