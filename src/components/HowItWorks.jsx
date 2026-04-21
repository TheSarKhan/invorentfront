import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Smartphone, Eye, TrendingUp } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Smartphone,
    title: 'Biznes proseslərini rəqəmsallaşdırın',
    desc: 'ERP sistemini qurarak bütün əməliyyatları, maliyyəni və avadanlıqları rəqəmsal platformaya köçürün.',
  },
  {
    num: '02',
    icon: Eye,
    title: 'İnvestora real-time giriş verin',
    desc: 'İnvestorlar öz personallaşdırılmış dashboard-ları ilə biznesinizin hər aspektini izləyə bilər.',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Daha çox güvən və investisiya qazanın',
    desc: 'Şəffaflıq etibarı artırır, etibar isə yeni investisiyaları cəlb edir. Böyüməni sürətləndirin.',
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="how-it-works" style={{ padding: '100px 24px', background: '#04045E', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(185,250,60,0.3), transparent)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{ color: '#B9FA3C', fontWeight: 600, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Necə İşləyir</p>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, maxWidth: 500, margin: '0 auto' }}>
            <span style={{ background: 'linear-gradient(135deg, #B9FA3C, #78fa3c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              3 addımda
            </span>{' '}
            şəffaf ekosistem
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Connecting line */}
          <div style={{ position: 'absolute', top: 52, left: '16.66%', right: '16.66%', height: 2, background: 'linear-gradient(90deg, rgba(185,250,60,0.2), rgba(185,250,60,0.6), rgba(185,250,60,0.2))', zIndex: 0 }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, position: 'relative', zIndex: 1 }}>
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  style={{ textAlign: 'center' }}
                >
                  {/* Step circle */}
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      style={{
                        width: 80, height: 80,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #B9FA3C, #78fa3c)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 0 40px rgba(185,250,60,0.3)',
                        position: 'relative',
                      }}
                    >
                      <Icon size={32} color="#04045E" />
                      <div style={{
                        position: 'absolute',
                        top: -6, right: -6,
                        width: 24, height: 24,
                        borderRadius: '50%',
                        background: '#04045E',
                        border: '2px solid #B9FA3C',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 10, fontWeight: 800, color: '#B9FA3C',
                      }}>
                        {i + 1}
                      </div>
                    </motion.div>
                  </div>

                  <div style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20,
                    padding: 28,
                  }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(185,250,60,0.6)', letterSpacing: 2, marginBottom: 12 }}>ADDIM {s.num}</div>
                    <h3 style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
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
