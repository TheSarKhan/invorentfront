import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { BarChart3, Users, FileText, Package } from 'lucide-react';

const features = [
  { icon: BarChart3, title: 'ERP Management', desc: 'Bütün əməliyyatları bir yerdən idarə edin' },
  { icon: Users, title: 'Investor Dashboard', desc: 'İnvestorlar üçün şəffaf real-time panel' },
  { icon: FileText, title: 'Real-time Reporting', desc: 'Avtomatik hesabatlar, sıfır gecikmə' },
  { icon: Package, title: 'Equipment Tracking', desc: 'Avadanlıq və aktivləri tam nəzarət altında saxlayın' },
];

function WorkflowDiagram({ inView }) {
  const nodes = [
    { label: 'Business Operations', sub: 'ERP Data' },
    { label: 'Invorent Platform', sub: 'AI Processing', accent: true },
    { label: 'Investor Transparency', sub: 'Real-time Reports' },
  ];

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, flexWrap: 'wrap', rowGap: 20 }}>
      {nodes.map((node, i) => (
        <div key={node.label} style={{ display: 'flex', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            style={{
              background: node.accent
                ? 'linear-gradient(135deg, rgba(185,250,60,0.15), rgba(185,250,60,0.05))'
                : 'rgba(255,255,255,0.05)',
              border: node.accent
                ? '2px solid rgba(185,250,60,0.5)'
                : '1px solid rgba(255,255,255,0.1)',
              borderRadius: 16,
              padding: '20px 28px',
              textAlign: 'center',
              minWidth: 160,
              boxShadow: node.accent ? '0 0 40px rgba(185,250,60,0.15)' : 'none',
            }}
          >
            <p style={{ color: node.accent ? '#B9FA3C' : '#fff', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{node.label}</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{node.sub}</p>
          </motion.div>

          {i < nodes.length - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.2 + 0.3 }}
              style={{ display: 'flex', alignItems: 'center', transformOrigin: 'left' }}
            >
              <div style={{ width: 40, height: 2, background: 'linear-gradient(90deg, rgba(185,250,60,0.5), rgba(185,250,60,0.8))' }} />
              <div style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '8px solid rgba(185,250,60,0.8)' }} />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Solution() {
  const [ref, inView] = useInView(0.15);

  return (
    <section style={{ padding: '100px 24px', background: '#04045E', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(185,250,60,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p style={{ color: '#B9FA3C', fontWeight: 600, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Həll</p>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, maxWidth: 600, margin: '0 auto' }}>
            Invorent bütün prosesləri{' '}
            <span style={{ background: 'linear-gradient(135deg, #B9FA3C, #78fa3c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              bir platformada
            </span>{' '}
            birləşdirir
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', marginBottom: 60 }}>
          {/* Feature list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 8 }}
                  style={{
                    display: 'flex',
                    gap: 16,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 14,
                    padding: '18px 22px',
                    cursor: 'default',
                    transition: 'border-color 0.3s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(185,250,60,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                >
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(185,250,60,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={22} color="#B9FA3C" />
                  </div>
                  <div>
                    <p style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{f.title}</p>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Workflow diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(185,250,60,0.15)',
              borderRadius: 24,
              padding: 40,
            }}
          >
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, textAlign: 'center', marginBottom: 32 }}>İş axını</p>
            <WorkflowDiagram inView={inView} />

            <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { label: 'Automated sync', val: '24/7' },
                { label: 'Data accuracy', val: '99.9%' },
                { label: 'Report speed', val: '<1s' },
                { label: 'Uptime', val: '99.99%' },
              ].map(s => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '12px 16px', textAlign: 'center' }}>
                  <p style={{ color: '#B9FA3C', fontWeight: 800, fontSize: 20 }}>{s.val}</p>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 2 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
