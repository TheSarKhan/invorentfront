import React, { useState, useEffect, useRef } from 'react';
import { I18N } from './i18n.js';
import { useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider, TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton } from './TweaksPanel.jsx';

// ===== BRAND MARK (Bridge logo: investor=blue + rental=green) =====
function BrandMark({ size = 30 }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 40 40" aria-label="Invorent" role="img">
      {/* Two pillars rising — investor (blue) and rental (green) */}
      <rect x="4" y="20" width="5" height="14" rx="1.2" fill="#3B5BFF"/>
      <rect x="31" y="20" width="5" height="14" rx="1.2" fill="#1FA664"/>
      {/* Bridge arc connecting them */}
      <path d="M 6.5 22 C 10 8, 30 8, 33.5 22" fill="none" stroke="#0E1430" strokeWidth="3" strokeLinecap="round"/>
      {/* Cable lines */}
      <line x1="13" y1="14.5" x2="13" y2="22" stroke="#0E1430" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="20" y1="11.4" x2="20" y2="22" stroke="#0E1430" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="27" y1="14.5" x2="27" y2="22" stroke="#0E1430" strokeWidth="1.4" strokeLinecap="round"/>
      {/* Deck */}
      <rect x="4" y="22" width="32" height="2.4" rx="1" fill="#0E1430"/>
    </svg>
  );
}

// ===== HERO LOOP SVG =====
function HeroLoops() {
  // Loops live in the right half / background — not over the text column.
  return (
    <div className="hero-loops" aria-hidden="true">
      <svg viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
        {/* soft pastel loop top-right */}
        <path className="loop-path soft" d="M 800 -50 Q 1100 60 1200 220 T 1500 380" style={{strokeWidth: 28}} />
        {/* main blue loop, kept on the right two-thirds */}
        <path className="loop-path blue" d="M 700 820 C 850 600, 1000 900, 1200 700 S 1500 500, 1600 700" style={{strokeWidth: 30}} />
        {/* deeper navy curl bottom-right */}
        <path className="loop-path deep" d="M 1050 200 Q 1300 350 1100 550 Q 950 700 1250 850" style={{strokeWidth: 22, opacity: 0.9}} />
        {/* small green accent bottom-right */}
        <path d="M 950 880 Q 1050 800 1150 880" fill="none" stroke="#1FA664" strokeWidth="14" strokeLinecap="round" opacity="0.85" />
      </svg>
    </div>
  );
}

// ===== NAV =====
function Nav({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="logo">
          <BrandMark />
          Invorent
        </a>
        <ul className="nav-links">
          <li><a href="#product">{t.nav.product}</a></li>
          <li><a href="#solution">{t.nav.solution}</a></li>
          <li><a href="#pricing">{t.nav.pricing}</a></li>
          <li><a href="#roadmap">{t.nav.roadmap}</a></li>
          <li><a href="#faq">{t.nav.faq}</a></li>
        </ul>
        <div className="nav-actions">
          <div className="lang-toggle">
            <button className={lang === 'az' ? 'active' : ''} onClick={() => setLang('az')}>AZ</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <a href="#cta" className="btn btn-blue">
            {t.nav.demo} <span className="btn-arrow"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}

// ===== HERO =====
function Hero({ t }) {
  return (
    <section className="hero">
      <HeroLoops />
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="display">
            {t.hero.title_a} {t.hero.title_b}{' '}
            <span className="underline-swirl italic-serif accent-blue">{t.hero.title_c}</span>{' '}
            {t.hero.title_d}
          </h1>
          <p className="lead">{t.hero.subtitle}</p>
          <div className="hero-cta">
            <a href="#cta" className="btn btn-primary">
              {t.hero.cta_primary} <span className="btn-arrow"></span>
            </a>
            <a href="#solution" className="btn btn-ghost">{t.hero.cta_secondary}</a>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <div className="num">{t.hero.trust_1}</div>
              <div className="lbl">{t.hero.trust_1_l}</div>
            </div>
            <div className="trust-item">
              <div className="num">{t.hero.trust_2}</div>
              <div className="lbl">{t.hero.trust_2_l}</div>
            </div>
            <div className="trust-item">
              <div className="num">{t.hero.trust_3}</div>
              <div className="lbl">{t.hero.trust_3_l}</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {/* Floating cards composition */}
          <div className="dash-card main">
            <div className="lbl">CASH FLOW · LIVE</div>
            <div className="val">₼ 248,920</div>
            <div className="delta">↗ +12.4% bu həftə</div>
            <div className="mini-chart">
              <svg viewBox="0 0 300 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#3B5BFF" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#3B5BFF" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M 0 90 L 30 80 L 60 85 L 90 60 L 120 65 L 150 40 L 180 50 L 210 30 L 240 45 L 270 20 L 300 25 L 300 120 L 0 120 Z" fill="url(#g1)" />
                <path d="M 0 90 L 30 80 L 60 85 L 90 60 L 120 65 L 150 40 L 180 50 L 210 30 L 240 45 L 270 20 L 300 25" fill="none" stroke="#3B5BFF" strokeWidth="2.5" />
                {[30,60,90,120,150,180,210,240,270].map((x,i) => (
                  <circle key={i} cx={x} cy={[80,85,60,65,40,50,30,45,20][i]} r="3" fill="#F4F1EC" stroke="#3B5BFF" strokeWidth="2" />
                ))}
              </svg>
            </div>
          </div>

          <div className="dash-card float-1">
            <div className="lbl">LAYIHƏLƏR · 12 AKTIV</div>
            <div style={{display:'flex', gap:8, marginTop:14, flexWrap:'wrap'}}>
              <span style={{padding:'4px 10px', background:'#B7E6CB', color:'#0E7A47', borderRadius:999, fontSize:11, fontWeight:600}}>● İcrada 8</span>
              <span style={{padding:'4px 10px', background:'#D8DEFF', color:'#2540D9', borderRadius:999, fontSize:11, fontWeight:600}}>● Plan 3</span>
              <span style={{padding:'4px 10px', background:'#FFE3A8', color:'#855B00', borderRadius:999, fontSize:11, fontWeight:600}}>● Risk 1</span>
            </div>
          </div>

          <div className="dash-card float-2">
            <div className="lbl" style={{opacity:0.85}}>INVESTOR VIEW</div>
            <div style={{fontFamily:'var(--font-display)', fontSize:22, fontWeight:700, lineHeight:1.1, marginTop:8}}>Real-vaxt şəffaflıq</div>
            <div style={{display:'flex', alignItems:'center', gap:6, marginTop:12, fontSize:11, fontFamily:'var(--font-mono)'}}>
              <span style={{width:8, height:8, borderRadius:999, background:'#1FA664', display:'inline-block', boxShadow:'0 0 0 4px rgba(31,166,100,0.3)'}}></span>
              CANLI
            </div>
          </div>

          <a href="#solution" className="discover-pill">
            <span className="dot">↓</span>
            {t.hero.cta_secondary}
          </a>
        </div>
      </div>
    </section>
  );
}

// ===== PARTNERS =====
function Partners({ t }) {
  return (
    <div className="partners">
      <div className="container partners-inner">
        <div className="lead-text">{t.partners.label}</div>
        <div className="partners-logos">
          {t.partners.logos.map((l,i) => (
            <div className="partner-logo" key={i}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== PROBLEM =====
function Problem({ t }) {
  return (
    <section className="problem">
      <div className="container">
        <span className="eyebrow">{t.problem.eyebrow}</span>
        <h2 className="section-title" style={{marginTop:18, maxWidth:'18ch'}}>
          {t.problem.title}
        </h2>
        <p className="lead" style={{marginTop:24}}>{t.problem.lead}</p>
        <div className="problem-grid">
          {t.problem.cards.map((c, i) => (
            <div className="problem-card" key={i}>
              <div className="num">{c.num}</div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== SOLUTION =====
function Solution({ t }) {
  return (
    <section id="solution">
      <div className="container">
        <div style={{maxWidth:'820px'}}>
          <span className="eyebrow">{t.solution.eyebrow}</span>
          <h2 className="section-title" style={{marginTop:18}}>{t.solution.title}</h2>
          <p className="lead" style={{marginTop:24}}>{t.solution.lead}</p>
        </div>
        <div className="solution-grid">
          {t.solution.steps.map((s, i) => (
            <div className="step-card" key={i}>
              <div className="step-num">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== PRODUCT (Dashboard mockup + features) =====
function Product({ t }) {
  return (
    <section id="product" className="product">
      <div className="container">
        <div className="product-head">
          <div>
            <span className="eyebrow">{t.product.eyebrow}</span>
            <h2 className="section-title" style={{marginTop:18, maxWidth:'14ch'}}>{t.product.title}</h2>
          </div>
          <p className="lead">{t.product.lead}</p>
        </div>

        <div className="dashboard-frame">
          <div className="dashboard-inner">
            <div className="dash-sidebar">
              <div className="brand">
                <BrandMark size={20} />
                Invorent
              </div>
              <div className="menu">
                <div className="active"><span className="dot"></span>Dashboard</div>
                <div><span className="dot"></span>Layihələr</div>
                <div><span className="dot"></span>Maliyyə</div>
                <div><span className="dot"></span>Avadanlıq</div>
                <div><span className="dot"></span>Investor</div>
                <div><span className="dot"></span>Hesabatlar</div>
                <div><span className="dot"></span>Komanda</div>
              </div>
            </div>
            <div className="dash-main">
              <div className="sub">PROYEKT · INSAAT-2026</div>
              <h4>Real-vaxt şəffaflıq</h4>
              <div className="dash-stats">
                <div className="dash-stat blue">
                  <div className="l">Cash balance</div>
                  <div className="v">₼248K</div>
                </div>
                <div className="dash-stat green">
                  <div className="l">ROI</div>
                  <div className="v">+18.4%</div>
                </div>
                <div className="dash-stat">
                  <div className="l">Aktiv layihə</div>
                  <div className="v">12</div>
                </div>
              </div>
              <div className="dash-chart">
                <div className="chart-head"><span>MALIYYƏ AXINI · 12 AY</span><span>2026</span></div>
                <svg viewBox="0 0 600 120" preserveAspectRatio="none" style={{width:'100%', height:'70%'}}>
                  <defs>
                    <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#3B5BFF" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#3B5BFF" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M 0 80 L 50 70 L 100 75 L 150 50 L 200 60 L 250 35 L 300 45 L 350 25 L 400 30 L 450 18 L 500 22 L 550 12 L 600 18 L 600 120 L 0 120 Z" fill="url(#g2)" />
                  <path d="M 0 80 L 50 70 L 100 75 L 150 50 L 200 60 L 250 35 L 300 45 L 350 25 L 400 30 L 450 18 L 500 22 L 550 12 L 600 18" fill="none" stroke="#3B5BFF" strokeWidth="2.5" />
                </svg>
              </div>
              <div className="dash-table">
                <div className="row head">
                  <div>Əməliyyat</div>
                  <div>Status</div>
                  <div>Məbləğ</div>
                </div>
                <div className="row">
                  <div>Avadanlıq icarə #4521</div>
                  <div><span className="pill pill-green">Tamam</span></div>
                  <div>₼12,400</div>
                </div>
                <div className="row">
                  <div>İnşaat materialları</div>
                  <div><span className="pill pill-blue">Plan</span></div>
                  <div>₼8,200</div>
                </div>
                <div className="row">
                  <div>Logistik xərclər</div>
                  <div><span className="pill pill-amber">Risk</span></div>
                  <div>₼3,150</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="features-grid">
          {t.product.features.map((f, i) => (
            <div className="feature" key={i}>
              <div className="ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {i === 0 && <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>}
                  {i === 1 && <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 14h6M9 17h3"/></>}
                  {i === 2 && <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/></>}
                  {i === 3 && <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 008 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H2a2 2 0 010-4h.09A1.65 1.65 0 003.6 8a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H8a1.65 1.65 0 001-1.51V2a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V8a1.65 1.65 0 001.51 1H22a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></>}
                  {i === 4 && <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></>}
                  {i === 5 && <><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></>}
                  {i === 6 && <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></>}
                  {i === 7 && <><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>}
                </svg>
              </div>
              <h4>{f.t}</h4>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== TYPES (Hazır vs Fərdi) =====
function Types({ t }) {
  const [tab, setTab] = useState(0);
  return (
    <section>
      <div className="container">
        <span className="eyebrow">{t.types.eyebrow}</span>
        <h2 className="section-title" style={{marginTop:18, maxWidth:'18ch'}}>{t.types.title}</h2>
        <p className="lead" style={{marginTop:24}}>{t.types.lead}</p>

        <div className="tabs">
          <button className={`pkg-tab ${tab === 0 ? 'active' : ''}`} onClick={() => setTab(0)}>{t.types.tabs[0]}</button>
          <button className={`custom-tab ${tab === 1 ? 'active' : ''}`} onClick={() => setTab(1)}>{t.types.tabs[1]}</button>
        </div>

        <div className="compare-grid">
          <div className="compare-card">
            <span className="tag">{t.types.ready.tag}</span>
            <h3>{t.types.ready.title}</h3>
            <p className="desc">{t.types.ready.desc}</p>
            <ul>{t.types.ready.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
          </div>
          <div className="compare-card green">
            <span className="tag">{t.types.custom.tag}</span>
            <h3>{t.types.custom.title}</h3>
            <p className="desc">{t.types.custom.desc}</p>
            <ul>{t.types.custom.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== PRICING =====
function Pricing({ t }) {
  return (
    <section id="pricing">
      <div className="container">
        <span className="eyebrow">{t.pricing.eyebrow}</span>
        <h2 className="section-title" style={{marginTop:18, maxWidth:'14ch'}}>{t.pricing.title}</h2>
        <p className="lead" style={{marginTop:24}}>{t.pricing.lead}</p>
        <div className="pricing-grid">
          {t.pricing.plans.map((p, i) => (
            <div className={`price-card ${p.featured ? 'featured' : ''}`} key={i}>
              <div className="pname">{p.name}</div>
              <div className="pval">{p.price} <span>{p.per}</span></div>
              <p className="pdesc">{p.desc}</p>
              <ul className="pfeats">
                {p.feats.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <a href="#cta" className="pbtn">{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== STATS =====
function Stats({ t }) {
  return (
    <section className="stats">
      <div className="container">
        <span className="eyebrow" style={{color:'rgba(255,255,255,0.85)'}}>{t.stats.eyebrow}</span>
        <h2 className="section-title" style={{marginTop:18, maxWidth:'18ch', color:'#fff'}}>{t.stats.title}</h2>
        <p className="lead" style={{marginTop:24, color:'rgba(255,255,255,0.85)'}}>{t.stats.lead}</p>
        <div className="stats-grid">
          {t.stats.blocks.map((b, i) => (
            <div className="stat-block" key={i}>
              <div className="big">{b.big}</div>
              <div className="lbl">{b.lbl}</div>
              <div className="desc">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== ROADMAP =====
function Roadmap({ t }) {
  return (
    <section id="roadmap">
      <div className="container">
        <span className="eyebrow">{t.roadmap.eyebrow}</span>
        <h2 className="section-title" style={{marginTop:18, maxWidth:'14ch'}}>{t.roadmap.title}</h2>
        <p className="lead" style={{marginTop:24}}>{t.roadmap.lead}</p>
        <div className="roadmap-track">
          <div className="roadmap-line">
            {t.roadmap.phases.map((p, i) => (
              <div className="phase" key={i}>
                <div className="pnum">FAZA {p.n}</div>
                <h4>{p.t}</h4>
                <div className="pdate">{p.d}</div>
                <div className="pgoal">{p.g}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== AUDIENCE =====
function Audience({ t }) {
  return (
    <section>
      <div className="container">
        <span className="eyebrow">{t.audience.eyebrow}</span>
        <h2 className="section-title" style={{marginTop:18, maxWidth:'18ch'}}>{t.audience.title}</h2>
        <div className="audience-grid">
          <div className="audience-card investor">
            <div className="role">{t.audience.investor.role}</div>
            <h3>{t.audience.investor.title}</h3>
            <p>{t.audience.investor.p}</p>
            <ul>{t.audience.investor.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
            <svg className="ill" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M 20 100 Q 60 40 100 100 T 180 100" />
              <path d="M 20 130 Q 60 70 100 130 T 180 130" />
              <circle cx="100" cy="100" r="6" fill="currentColor" />
            </svg>
          </div>
          <div className="audience-card business">
            <div className="role">{t.audience.business.role}</div>
            <h3>{t.audience.business.title}</h3>
            <p>{t.audience.business.p}</p>
            <ul>{t.audience.business.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
            <svg className="ill" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <rect x="40" y="40" width="120" height="120" rx="14" />
              <path d="M 40 100 H 160 M 100 40 V 160" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== FAQ =====
function FAQ({ t }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq">
      <div className="container" style={{maxWidth:'960px'}}>
        <span className="eyebrow">{t.faq.eyebrow}</span>
        <h2 className="section-title" style={{marginTop:18}}>{t.faq.title}</h2>
        <div className="faq-list">
          {t.faq.items.map((item, i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{item.q}</span>
                <span className="toggle">+</span>
              </button>
              <div className="faq-a"><p>{item.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== BIG CTA =====
function BigCTA({ t }) {
  return (
    <section id="cta" className="bigcta">
      <div className="container">
        <span className="eyebrow" style={{color:'var(--blue-soft)'}}>· {t.cta.form_submit.toUpperCase()} ·</span>
        <h2 style={{marginTop:24}}>{t.cta.title}</h2>
        <p>{t.cta.lead}</p>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert(t.cta.form_submit + ' ✓'); }}>
          <input type="text" placeholder={t.cta.form_name} required />
          <input type="text" placeholder={t.cta.form_company} />
          <input type="email" placeholder={t.cta.form_email} required />
          <button type="submit" className="btn btn-blue">{t.cta.form_submit}</button>
        </form>
      </div>
    </section>
  );
}

// ===== FOOTER =====
function Footer({ t }) {
  return (
    <footer>
      <div className="container">
        <div style={{marginTop:0}} className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <BrandMark />
              Invorent
            </a>
            <p className="lead">{t.footer.tagline}</p>
          </div>
          <div className="footer-col">
            <h5>{t.footer.product}</h5>
            <ul>{t.footer.product_links.map((l,i) => <li key={i}><a href="#">{l}</a></li>)}</ul>
          </div>
          <div className="footer-col">
            <h5>{t.footer.company}</h5>
            <ul>{t.footer.company_links.map((l,i) => <li key={i}><a href="#">{l}</a></li>)}</ul>
          </div>
          <div className="footer-col">
            <h5>{t.footer.contact}</h5>
            <ul>{t.footer.contact_links.map((l,i) => <li key={i}><a href="#">{l}</a></li>)}</ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.footer.copy}</span>
          <span>{t.footer.built}</span>
        </div>
      </div>
    </footer>
  );
}

// ===== TWEAKS =====
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primaryBlue": "#3B5BFF",
  "accentGreen": "#1FA664",
  "creamBg": "#F4F1EC",
  "showLoops": true,
  "loopWeight": 26,
  "lang": "az"
}/*EDITMODE-END*/;

function TweaksUI({ tweaks, setTweak }) {
  if (typeof TweaksPanel === 'undefined') return null;
  return (
    <TweaksPanel>
      <TweakSection title="Brand">
        <TweakColor label="Primary blue" value={tweaks.primaryBlue} onChange={(v) => setTweak('primaryBlue', v)} />
        <TweakColor label="Accent green" value={tweaks.accentGreen} onChange={(v) => setTweak('accentGreen', v)} />
        <TweakColor label="Cream BG" value={tweaks.creamBg} onChange={(v) => setTweak('creamBg', v)} />
      </TweakSection>
      <TweakSection title="Loops">
        <TweakToggle label="Show hero loops" value={tweaks.showLoops} onChange={(v) => setTweak('showLoops', v)} />
        <TweakSlider label="Loop weight" value={tweaks.loopWeight} min={10} max={50} step={2} onChange={(v) => setTweak('loopWeight', v)} />
      </TweakSection>
      <TweakSection title="Language">
        <TweakRadio label="Lang" value={tweaks.lang} options={[{value:'az',label:'AZ'},{value:'en',label:'EN'}]} onChange={(v) => setTweak('lang', v)} />
      </TweakSection>
    </TweaksPanel>
  );
}

// ===== APP =====
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const lang = tweaks.lang || 'az';
  const setLang = (l) => setTweak('lang', l);
  const t = I18N[lang];

  // Apply tweaks to CSS vars
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--blue', tweaks.primaryBlue);
    root.style.setProperty('--green', tweaks.accentGreen);
    root.style.setProperty('--cream', tweaks.creamBg);
    document.querySelectorAll('.loop-path').forEach(p => {
      if (!p.style.strokeWidth || !p.dataset.custom) {
        p.setAttribute('stroke-width', tweaks.loopWeight);
      }
    });
    const loops = document.querySelector('.hero-loops');
    if (loops) loops.style.display = tweaks.showLoops ? 'block' : 'none';
  }, [tweaks]);

  return (
    <>
      <Nav lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Partners t={t} />
      <Problem t={t} />
      <Solution t={t} />
      <Product t={t} />
      <Types t={t} />
      <Stats t={t} />
      <Pricing t={t} />
      <Roadmap t={t} />
      <Audience t={t} />
      <FAQ t={t} />
      <BigCTA t={t} />
      <Footer t={t} />
      <TweaksUI tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}

export default App;
