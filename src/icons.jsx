// Icons
const Icon = {
  Eye: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={p.size||22} height={p.size||22}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>),
  Gauge: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={p.size||22} height={p.size||22}><path d="M12 14l4-4"/><circle cx="12" cy="14" r="1.2" fill="currentColor"/><path d="M4 18a8 8 0 1 1 16 0"/></svg>),
  Near: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={p.size||22} height={p.size||22}><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/><circle cx="12" cy="12" r="3"/></svg>),
  Heat: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={p.size||22} height={p.size||22}><path d="M12 3c3 4 5 6 5 10a5 5 0 1 1-10 0c0-4 2-6 5-10Z"/></svg>),
  Walk: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={p.size||22} height={p.size||22}><circle cx="13" cy="4.5" r="1.8"/><path d="M10 22l2-7-2-3 3-3 3 3 3 2M8 10l3-2"/></svg>),
  Signal: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={p.size||22} height={p.size||22}><rect x="8" y="3" width="8" height="18" rx="2"/><circle cx="12" cy="8" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="16" r="1.5"/></svg>),
  Report: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={p.size||22} height={p.size||22}><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>),
  Cloud: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={p.size||22} height={p.size||22}><path d="M7 18a4 4 0 0 1-.8-7.9A5 5 0 0 1 16 8a4 4 0 0 1 1 7.9"/></svg>),
  Edge: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={p.size||22} height={p.size||22}><rect x="3" y="10" width="18" height="10" rx="2"/><path d="M7 10V6h10v4M7 15h.01M11 15h.01"/></svg>),
  Arrow: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={p.size||14} height={p.size||14}><path d="M5 12h14M13 6l6 6-6 6"/></svg>),
};

// Capability visuals (simple, on-brand SVGs)
function CapVisual({ kind }) {
  const stroke = "#2A2B24", green = "#2F4A3A", rust = "#B14A2B", amber = "#C79A3A", sky = "#4F7A99";
  if (kind === 'detect') {
    return (
      <svg viewBox="0 0 160 100" width="160" height="100">
        <rect x="18" y="44" width="38" height="22" rx="3" fill={sky}/>
        <rect x="15" y="26" width="44" height="13" fill="none" stroke={green} strokeDasharray="3 2" strokeWidth="1"/>
        <text x="18" y="22" fill={green} fontFamily="ui-monospace" fontSize="8">SEDAN · 0.98</text>
        <rect x="82" y="36" width="48" height="28" rx="3" fill={rust}/>
        <rect x="79" y="18" width="54" height="14" fill="none" stroke={amber} strokeDasharray="3 2" strokeWidth="1"/>
        <text x="82" y="14" fill={amber} fontFamily="ui-monospace" fontSize="8">SUV · 0.94</text>
        <circle cx="60" cy="82" r="3.5" fill={stroke}/>
        <text x="48" y="78" fill={stroke} fontFamily="ui-monospace" fontSize="7">PED</text>
      </svg>
    );
  }
  if (kind === 'speed') {
    return (
      <svg viewBox="0 0 160 100" width="160" height="100">
        <path d="M 30 80 A 40 40 0 0 1 130 80" fill="none" stroke="#e5e0d1" strokeWidth="5"/>
        <path d="M 30 80 A 40 40 0 0 1 108 52" fill="none" stroke={green} strokeWidth="5" strokeLinecap="round"/>
        <line x1="80" y1="80" x2="104" y2="58" stroke={stroke} strokeWidth="2"/>
        <circle cx="80" cy="80" r="3.5" fill={stroke}/>
        <text x="80" y="95" textAnchor="middle" fill={stroke} fontFamily="Fraunces" fontSize="16" fontStyle="italic">31 mph</text>
      </svg>
    );
  }
  if (kind === 'near') {
    return (
      <svg viewBox="0 0 160 100" width="160" height="100">
        <rect x="12" y="42" width="36" height="18" rx="2" fill={sky}/>
        <rect x="100" y="52" width="18" height="36" rx="2" fill={rust}/>
        <path d="M 52 55 L 98 62" stroke={rust} strokeWidth="1.5" strokeDasharray="3 3"/>
        <text x="58" y="48" fill={rust} fontFamily="ui-monospace" fontSize="8">ΔT 0.4s</text>
        <circle cx="75" cy="60" r="16" fill="none" stroke={rust} strokeWidth="1" strokeDasharray="2 2" opacity="0.5"/>
      </svg>
    );
  }
  if (kind === 'ped') {
    return (
      <svg viewBox="0 0 160 100" width="160" height="100">
        {[...Array(6)].map((_,i)=>(
          <rect key={i} x={30 + i*10} y="30" width="5" height="40" fill="#e5e0d1"/>
        ))}
        <circle cx="110" cy="40" r="4" fill={stroke}/>
        <path d="M 110 45 L 110 60 M 106 52 L 114 52 M 106 68 L 110 60 L 114 68" stroke={stroke} strokeWidth="1.5" fill="none"/>
        <rect x="96" y="24" width="30" height="48" fill="none" stroke={green} strokeWidth="1" strokeDasharray="3 2"/>
      </svg>
    );
  }
  if (kind === 'signal') {
    return (
      <svg viewBox="0 0 160 100" width="160" height="100">
        <rect x="65" y="20" width="30" height="60" rx="4" fill={stroke}/>
        <circle cx="80" cy="33" r="6" fill={rust}/>
        <circle cx="80" cy="50" r="6" fill="#3a3a33"/>
        <circle cx="80" cy="67" r="6" fill="#3a3a33"/>
        <path d="M 115 50 L 135 50 M 130 45 L 135 50 L 130 55" stroke={green} strokeWidth="1.5" fill="none"/>
        <text x="120" y="42" fill={green} fontFamily="ui-monospace" fontSize="7">+ 8%</text>
      </svg>
    );
  }
  if (kind === 'heat') {
    return (
      <svg viewBox="0 0 160 100" width="160" height="100">
        {[...Array(42)].map((_,i)=>{
          const r = Math.floor(i/7), c = i%7;
          const v = Math.sin(r*1.3 + c*0.9) * 0.5 + 0.5;
          let fill = "#e5e0d1";
          if (v > 0.3) fill = "#C4D1B8";
          if (v > 0.5) fill = green;
          if (v > 0.75) fill = amber;
          if (v > 0.9) fill = rust;
          return <rect key={i} x={20 + c*18} y={20 + r*12} width={15} height={9} fill={fill} rx="1"/>
        })}
      </svg>
    );
  }
  if (kind === 'class') {
    return (
      <svg viewBox="0 0 160 100" width="160" height="100">
        <rect x="18" y="40" width="28" height="16" rx="2" fill={sky}/>
        <text x="18" y="34" fill={stroke} fontFamily="ui-monospace" fontSize="7">SEDAN 68%</text>
        <rect x="58" y="38" width="34" height="18" rx="2" fill={rust}/>
        <text x="58" y="32" fill={stroke} fontFamily="ui-monospace" fontSize="7">SUV 24%</text>
        <rect x="104" y="34" width="42" height="22" rx="2" fill={stroke}/>
        <text x="104" y="28" fill={stroke} fontFamily="ui-monospace" fontSize="7">TRUCK 6%</text>
        <circle cx="32" cy="78" r="4" fill={green}/>
        <text x="40" y="82" fill={stroke} fontFamily="ui-monospace" fontSize="7">PED 2%</text>
        <circle cx="92" cy="78" r="3" fill={amber}/>
        <text x="100" y="82" fill={stroke} fontFamily="ui-monospace" fontSize="7">CYCLIST 0.3%</text>
      </svg>
    );
  }
  if (kind === 'count') {
    return (
      <svg viewBox="0 0 160 100" width="160" height="100">
        {[12,18,24,33,28,46,55,68,82,70,56,44,40,50,62,72,88,94,70,50,32,24].map((h,i)=>(
          <rect key={i} x={10 + i*6.5} y={92 - h*0.8} width="5" height={h*0.8} fill={i > 15 ? amber : green} rx="1"/>
        ))}
      </svg>
    );
  }
  if (kind === 'time') {
    return (
      <svg viewBox="0 0 160 100" width="160" height="100">
        <circle cx="80" cy="50" r="32" fill="none" stroke="#e5e0d1" strokeWidth="5"/>
        <path d="M 80 18 A 32 32 0 0 1 108 66" fill="none" stroke={green} strokeWidth="5" strokeLinecap="round"/>
        <text x="80" y="48" textAnchor="middle" fill={stroke} fontFamily="Fraunces" fontSize="18" fontStyle="italic">2.3s</text>
        <text x="80" y="62" textAnchor="middle" fill={stroke} fontFamily="ui-monospace" fontSize="7">avg clearance</text>
      </svg>
    );
  }
  return null;
}

window.Icon = Icon;
window.CapVisual = CapVisual;
