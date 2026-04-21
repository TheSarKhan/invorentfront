import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Monitor, Smartphone, Users } from 'lucide-react';

function MockupCard({ title, icon: Icon, children, delay, floating }) {
  return (
    <motion.div
      animate={floating ? { y: [0, -10, 0] } : {}}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: floating * 0.5 }}
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
      }}
    >
      {/* Title bar */}
      <div style={{ padding: '14px 18px', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#ef4444', '#f59e0b', '#22c55e'].map(c => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <Icon size={14} color="rgba(255,255,255,0.5)" />
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{title}</span>
      </div>
      <div style={{ padding: 20 }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function PlatformPreview() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="platform" style={{ padding: '100px 24px', background: 'linear-gradient(180deg, #04045E 0%, #080860 100%)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{ color: '#B9FA3C', fontWeight: 600, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Platform Preview</p>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, maxWidth: 520, margin: '0 auto' }}>
            Platformanı{' '}
            <span style={{ background: 'linear-gradient(135deg, #B9FA3C, #78fa3c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              iş üzərində
            </span>{' '}
            görün
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, alignItems: 'start' }}>
          {/* Web ERP */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <MockupCard title="Web ERP" icon={Monitor} floating={1}>
              <div style={{ marginBottom: 14 }}>
                <div style={{ height: 8, background: 'rgba(185,250,60,0.3)', borderRadius: 4, marginBottom: 8 }} />
                <div style={{ height: 8, background: 'rgba(255,255,255,0.1)', borderRadius: 4, width: '75%', marginBottom: 8 }} />
                <div style={{ height: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 4, width: '60%' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
                {[['$128K', 'Revenue'], ['$34K', 'Expenses']].map(([v, l]) => (
                  <div key={l} style={{ background: 'rgba(185,250,60,0.08)', borderRadius: 10, padding: 10 }}>
                    <div style={{ color: '#B9FA3C', fontWeight: 800, fontSize: 16 }}>{v}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {['Construction A', 'Equipment B', 'Trading C'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 10px', background: 'rgba(255,255,255,0.04)', borderRadius: 8 }}>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>{item}</span>
                    <span style={{ color: '#B9FA3C', fontSize: 11, fontWeight: 600 }}>Active</span>
                  </div>
                ))}
              </div>
            </MockupCard>
          </motion.div>

          {/* Investor panel — center, larger */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginTop: -20 }}
          >
            <MockupCard title="Investor Panel" icon={Users} floating={0}>
              <div style={{ textAlign: 'center', marginBottom: 16, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ color: '#B9FA3C', fontSize: 28, fontWeight: 900 }}>$2.4M</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>Total Portfolio Value</div>
                <div style={{ color: '#22c55e', fontSize: 13, fontWeight: 600, marginTop: 4 }}>↑ +18.2% this quarter</div>
              </div>

              {/* Mini chart */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginBottom: 8 }}>Portfolio Performance</div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 50 }}>
                  {[30, 50, 40, 70, 60, 85, 95].map((h, i) => (
                    <div key={i} style={{ flex: 1, background: i === 6 ? '#B9FA3C' : 'rgba(185,250,60,0.25)', borderRadius: 3, height: `${h}%` }} />
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { label: 'Construction Fund', pct: 45, color: '#B9FA3C' },
                  { label: 'Equipment Rental', pct: 30, color: '#60a5fa' },
                  { label: 'Trading', pct: 25, color: '#a78bfa' },
                ].map(item => (
                  <div key={item.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>{item.label}</span>
                      <span style={{ color: item.color, fontSize: 12, fontWeight: 600 }}>{item.pct}%</span>
                    </div>
                    <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 2 }}>
                      <div style={{ height: '100%', width: `${item.pct}%`, background: item.color, borderRadius: 2 }} />
                    </div>
                  </div>
                ))}
              </div>
            </MockupCard>
          </motion.div>

          {/* Mobile app */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ marginTop: 20 }}
          >
            <MockupCard title="Mobile App" icon={Smartphone} floating={2}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, padding: 10, background: 'rgba(185,250,60,0.08)', borderRadius: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #B9FA3C, #78fa3c)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: '#04045E', fontWeight: 800, fontSize: 14 }}>A</span>
                </div>
                <div>
                  <div style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>Akif M.</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>Investor</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { icon: '📊', label: 'Portfolio', val: '$2.4M' },
                  { icon: '📈', label: 'ROI', val: '+32%' },
                  { icon: '🏗', label: 'Projects', val: '7 active' },
                  { icon: '⚡', label: 'Alerts', val: '2 new' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', background: 'rgba(255,255,255,0.04)', borderRadius: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 16 }}>{item.icon}</span>
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>{item.label}</span>
                    </div>
                    <span style={{ color: '#B9FA3C', fontWeight: 700, fontSize: 13 }}>{item.val}</span>
                  </div>
                ))}
              </div>
            </MockupCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
