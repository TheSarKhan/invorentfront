import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

function DashboardMockup() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'relative', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)', border: '1px solid rgba(185,250,60,0.2)', borderRadius: 24, padding: 24, maxWidth: 480, width: '100%' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginBottom: 2 }}>{h.dashboardTitle}</p>
          <p style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>{h.dashboardSub}</p>
        </div>
        <div style={{ background: 'rgba(185,250,60,0.15)', border: '1px solid rgba(185,250,60,0.3)', borderRadius: 20, padding: '4px 12px', fontSize: 12, color: '#B9FA3C', fontWeight: 600 }}>
          {h.dashboardLive}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 20 }}>
        {[
          { label: 'Revenue', value: '$2.4M', change: '+18%' },
          { label: 'ROI', value: '32%', change: '+5%' },
          { label: 'Assets', value: '147', change: '+12' },
        ].map(card => (
          <div key={card.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 12 }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginBottom: 4 }}>{card.label}</p>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, marginBottom: 2 }}>{card.value}</p>
            <p style={{ color: '#B9FA3C', fontSize: 11, fontWeight: 600 }}>{card.change}</p>
          </div>
        ))}
      </div>

      <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 16, marginBottom: 16 }}>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginBottom: 12 }}>{h.dashboardChartTitle}</p>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 60 }}>
          {[40, 65, 50, 80, 70, 95].map((hv, i) => (
            <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${hv}%` }} transition={{ duration: 0.8, delay: i * 0.1 + 0.5 }}
              style={{ flex: 1, background: i === 5 ? 'linear-gradient(180deg, #B9FA3C, #78fa3c)' : 'rgba(185,250,60,0.3)', borderRadius: 4, minHeight: 4 }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
          {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => (
            <span key={m} style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10 }}>{m}</span>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10 }}>
        {[
          { label: 'Excavators', status: h.equipmentActive, count: 12 },
          { label: 'Cranes', status: h.equipmentMaintenance, count: 3 },
        ].map(eq => (
          <div key={eq.label} style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: 10 }}>
            <p style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>{eq.label}</p>
            <p style={{ color: eq.status === h.equipmentActive ? '#B9FA3C' : '#f59e0b', fontSize: 11, marginTop: 2 }}>● {eq.status}</p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 20, fontWeight: 800, marginTop: 4 }}>{eq.count}</p>
          </div>
        ))}
      </div>

      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', top: -16, right: -16, background: 'linear-gradient(135deg, #B9FA3C, #78fa3c)', color: '#04045E', fontWeight: 800, fontSize: 12, padding: '8px 14px', borderRadius: 20, boxShadow: '0 4px 20px rgba(185,250,60,0.4)' }}
      >
        {h.dashboardBadge}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section id="hero" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #04045E 0%, #0A0A78 50%, #080860 100%)', display: 'flex', alignItems: 'center', padding: '100px 24px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(185,250,60,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(10,10,120,0.6) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
        <div>
          <motion.div {...fadeUp(0.1)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(185,250,60,0.1)', border: '1px solid rgba(185,250,60,0.3)', borderRadius: 20, padding: '6px 16px', marginBottom: 24 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#B9FA3C', display: 'inline-block' }} />
            <span style={{ color: '#B9FA3C', fontSize: 13, fontWeight: 600 }}>{h.badge}</span>
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 900, lineHeight: 1.1, color: '#fff', marginBottom: 24, letterSpacing: '-1px' }}>
            {h.headline1}{' '}
            <span style={{ background: 'linear-gradient(135deg, #B9FA3C, #78fa3c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {h.headline2}
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.3)} style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>
            {h.sub}
          </motion.p>

          <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button className="btn-primary">{h.cta1} <ArrowRight size={18} /></button>
            <button className="btn-secondary"><Play size={16} /> {h.cta2}</button>
          </motion.div>

        </div>

        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} style={{ display: 'flex', justifyContent: 'center' }}>
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
