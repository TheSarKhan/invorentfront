import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FileX, EyeOff, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: FileX,
    title: 'Manual Proseslər',
    desc: 'Excel və dağınıq sistemlər vaxt itkisi yaradır. Hər hesabat üçün saatlar itirilir.',
    color: '#ef4444',
  },
  {
    icon: EyeOff,
    title: 'Şəffaflıq Yoxdur',
    desc: 'İnvestor pulunun hara getdiyini görmür. Real-time məlumat yoxdur.',
    color: '#f59e0b',
  },
  {
    icon: AlertTriangle,
    title: 'Etibar Problemi',
    desc: 'Gec hesabatlar investisiya riskini artırır. Güvən zəifləyir.',
    color: '#B9FA3C',
  },
];

export default function Problem() {
  const [ref, inView] = useInView(0.2);

  return (
    <section style={{ padding: '100px 24px', background: 'linear-gradient(180deg, #080860 0%, #04045E 100%)', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p style={{ color: '#B9FA3C', fontWeight: 600, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Problem</p>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, maxWidth: 600, margin: '0 auto' }}>
            Biznesinizdə görünməyən problemlər{' '}
            <span style={{ background: 'linear-gradient(135deg, #B9FA3C, #78fa3c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              investoru uzaqlaşdırır
            </span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 20,
                  padding: 36,
                  cursor: 'default',
                  transition: 'border-color 0.3s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${p.color}40`}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${p.color}, transparent)`, borderRadius: '20px 20px 0 0' }} />
                <div style={{
                  width: 60, height: 60, borderRadius: 16,
                  background: `${p.color}15`,
                  border: `1px solid ${p.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24,
                }}>
                  <Icon size={28} color={p.color} />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.7 }}>{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
