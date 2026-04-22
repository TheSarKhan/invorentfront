import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLang } from '../context/LanguageContext';
import { LayoutDashboard, DollarSign, FileBarChart, Cpu, Bell, Brain } from 'lucide-react';

const icons = [LayoutDashboard, DollarSign, FileBarChart, Cpu, Bell, Brain];

export default function Features() {
  const { t } = useLang();
  const [ref, inView] = useInView(0.1);
  const f = t.features;

  return (
    <section id="features" style={{ padding: '100px 24px', background: 'linear-gradient(180deg, #04045E 0%, #060670 100%)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ color: '#B9FA3C', fontWeight: 600, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>{f.label}</p>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, maxWidth: 500, margin: '0 auto' }}>
            {f.headline1}{' '}
            <span style={{ background: 'linear-gradient(135deg, #B9FA3C, #78fa3c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{f.headline2}</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {f.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={card.title} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -6, scale: 1.02 }}
                style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 32, cursor: 'default', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(185,250,60,0.3)'; e.currentTarget.style.background = 'rgba(185,250,60,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              >
                <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(185,250,60,0.12)', border: '1px solid rgba(185,250,60,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Icon size={24} color="#B9FA3C" />
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{card.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.7 }}>{card.desc}</p>
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: 80, height: 80, background: 'radial-gradient(circle, rgba(185,250,60,0.06) 0%, transparent 70%)', borderRadius: '50%' }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
