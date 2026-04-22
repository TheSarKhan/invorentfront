import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLang } from '../context/LanguageContext';
import { Smartphone, Eye, TrendingUp } from 'lucide-react';

const icons = [Smartphone, Eye, TrendingUp];

export default function HowItWorks() {
  const { t } = useLang();
  const [ref, inView] = useInView(0.15);
  const h = t.howItWorks;

  return (
    <section id="how-it-works" style={{ padding: '100px 24px', background: '#04045E', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(185,250,60,0.3), transparent)' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 72 }}>
          <p style={{ color: '#B9FA3C', fontWeight: 600, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>{h.label}</p>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, maxWidth: 500, margin: '0 auto' }}>
            <span style={{ background: 'linear-gradient(135deg, #B9FA3C, #78fa3c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{h.headline1}</span>{' '}
            {h.headline2}
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: 52, left: '16.66%', right: '16.66%', height: 2, background: 'linear-gradient(90deg, rgba(185,250,60,0.2), rgba(185,250,60,0.6), rgba(185,250,60,0.2))', zIndex: 0 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, position: 'relative', zIndex: 1 }}>
            {h.steps.map((step, i) => {
              const Icon = icons[i];
              const num = String(i + 1).padStart(2, '0');
              return (
                <motion.div key={step.title} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.2 }} style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
                    <motion.div whileHover={{ scale: 1.1 }} style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #B9FA3C, #78fa3c)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px rgba(185,250,60,0.3)', position: 'relative' }}>
                      <Icon size={32} color="#04045E" />
                      <div style={{ position: 'absolute', top: -6, right: -6, width: 24, height: 24, borderRadius: '50%', background: '#04045E', border: '2px solid #B9FA3C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: '#B9FA3C' }}>
                        {i + 1}
                      </div>
                    </motion.div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 28 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(185,250,60,0.6)', letterSpacing: 2, marginBottom: 12 }}>{h.stepLabel} {num}</div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 12, lineHeight: 1.3 }}>{step.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
