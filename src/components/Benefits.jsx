import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 100, suffix: '%', label: 'Real-time Visibility', desc: 'Bütün məlumatlar anlıq olaraq əlçatandır' },
  { value: 80, suffix: '%', label: 'Faster Reporting', desc: 'Hesabat hazırlama müddəti 80% azalır' },
  { value: 3, suffix: 'x', label: 'Higher Investor Confidence', desc: 'İnvestor güvəni 3 qat artır' },
  { value: 95, suffix: '%', label: 'Reduced Manual Errors', desc: 'Manuel xətalar demək olar ki, sıfıra enir' },
];

export default function Benefits() {
  const [ref, inView] = useInView(0.1);

  return (
    <section style={{ padding: '100px 24px', background: 'linear-gradient(180deg, #060670 0%, #04045E 100%)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p style={{ color: '#B9FA3C', fontWeight: 600, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Nəticə</p>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, maxWidth: 520, margin: '0 auto' }}>
            Daha az risk,{' '}
            <span style={{ background: 'linear-gradient(135deg, #B9FA3C, #78fa3c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              daha çox etibar
            </span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(185,250,60,0.15)',
                borderRadius: 20,
                padding: 32,
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, transparent, #B9FA3C, transparent)' }} />

              <div style={{ fontSize: 52, fontWeight: 900, color: '#B9FA3C', lineHeight: 1, marginBottom: 8 }}>
                <AnimatedCounter target={s.value} suffix={s.suffix} duration={1800} />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{s.label}</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>

              <div style={{ position: 'absolute', bottom: -20, right: -20, width: 100, height: 100, background: 'radial-gradient(circle, rgba(185,250,60,0.06) 0%, transparent 70%)', borderRadius: '50%' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
