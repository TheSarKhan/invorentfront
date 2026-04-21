import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { HardHat, Truck, Factory, ShoppingCart } from 'lucide-react';

const industries = [
  {
    icon: HardHat,
    title: 'Construction',
    desc: 'Tikinti layihələrini, resursları və büdcəni tam nəzarətlə idarə edin.',
    color: '#f59e0b',
  },
  {
    icon: Truck,
    title: 'Equipment Rental',
    desc: 'Avadanlıq icarəsi biznesini real-time izləyin, rentabelliyi artırın.',
    color: '#B9FA3C',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    desc: 'İstehsal prosesini rəqəmsallaşdırın, investor şəffaflığını təmin edin.',
    color: '#60a5fa',
  },
  {
    icon: ShoppingCart,
    title: 'Trading',
    desc: 'Ticarət əməliyyatlarını, inventarı və gəliri anlıq izləyin.',
    color: '#a78bfa',
  },
];

export default function Industries() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="industries" style={{ padding: '100px 24px', background: '#04045E', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(185,250,60,0.3), transparent)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p style={{ color: '#B9FA3C', fontWeight: 600, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Sahələr</p>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, maxWidth: 520, margin: '0 auto' }}>
            Müxtəlif sahələr üçün{' '}
            <span style={{ background: 'linear-gradient(135deg, #B9FA3C, #78fa3c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              uyğun həll
            </span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8, scale: 1.03 }}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 20,
                  padding: 32,
                  textAlign: 'center',
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${ind.color}40`;
                  e.currentTarget.style.boxShadow = `0 20px 60px ${ind.color}15`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: 72, height: 72,
                  borderRadius: '50%',
                  background: `${ind.color}15`,
                  border: `2px solid ${ind.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <Icon size={32} color={ind.color} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{ind.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.7 }}>{ind.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
