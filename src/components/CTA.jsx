import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLang } from '../context/LanguageContext';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTA() {
  const { t } = useLang();
  const [ref, inView] = useInView(0.2);
  const c = t.cta;

  return (
    <section style={{ padding: '100px 24px', background: 'linear-gradient(180deg, #04045E 0%, #060670 100%)', position: 'relative', overflow: 'hidden' }}>
      <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
        style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', background: 'linear-gradient(135deg, rgba(185,250,60,0.1), rgba(185,250,60,0.03))', border: '1px solid rgba(185,250,60,0.25)', borderRadius: 32, padding: '72px 48px', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 500, background: 'radial-gradient(circle, rgba(185,250,60,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(185,250,60,0.15)', border: '1px solid rgba(185,250,60,0.4)', borderRadius: 20, padding: '6px 18px', marginBottom: 28 }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#B9FA3C', display: 'inline-block' }} />
          <span style={{ color: '#B9FA3C', fontSize: 13, fontWeight: 600 }}>{c.badge}</span>
        </motion.div>

        <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 20, letterSpacing: '-0.5px' }}>
          {c.headline1}{' '}
          <span style={{ background: 'linear-gradient(135deg, #B9FA3C, #78fa3c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{c.headline2}</span>
        </h2>

        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>{c.sub}</p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary" style={{ fontSize: 16, padding: '16px 36px' }}>
            <Calendar size={20} /> {c.btn1} <ArrowRight size={18} />
          </button>
          <button className="btn-secondary" style={{ fontSize: 16, padding: '14px 36px' }}>{c.btn2}</button>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, marginTop: 24 }}>{c.note}</p>
      </motion.div>
    </section>
  );
}
