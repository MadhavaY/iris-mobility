// Top-down real intersection with camera sensors at 4 corners, detection arcs,
// and bounding boxes on moving vehicles. Pure SVG — no 3D perspective hacks.

function Intersection() {
  const [phase, setPhase] = React.useState('NS'); // NS or EW green
  const [tick, setTick] = React.useState(0);
  const [t, setT] = React.useState(0); // time in seconds for animation

  React.useEffect(() => {
    const seq = ['NS', 'NS_YEL', 'EW', 'EW_YEL'];
    const dur = { NS: 5000, NS_YEL: 1400, EW: 5000, EW_YEL: 1400 };
    let i = 0;
    const advance = () => {
      setPhase(seq[i]);
      setTimeout(() => { i = (i + 1) % seq.length; advance(); }, dur[seq[i]]);
    };
    advance();
  }, []);

  React.useEffect(() => {
    const id = setInterval(() => setTick(v => v + 1), 1600);
    return () => clearInterval(id);
  }, []);

  // requestAnimationFrame loop for vehicle positions
  React.useEffect(() => {
    let raf, start = performance.now();
    const loop = (now) => {
      setT((now - start) / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const nsGo = phase === 'NS' || phase === 'NS_YEL';
  const ewGo = phase === 'EW' || phase === 'EW_YEL';

  const vph = 1180 + (tick % 50);
  const speed = 28 + (tick % 3);

  return (
    <div className="isx-card">
      <div className="isx-label"><span className="dot"/>LIVE · DAL-07</div>
      <div className="isx-tag">MAIN × 5TH</div>

      <svg className="isx-svg" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
        {/* Grass/ground texture */}
        <defs>
          <pattern id="grass" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
            <rect width="14" height="14" fill="#8B9387"/>
            <circle cx="3" cy="4" r="0.7" fill="#7a8277" opacity="0.5"/>
            <circle cx="10" cy="9" r="0.6" fill="#9aa196" opacity="0.5"/>
            <circle cx="7" cy="12" r="0.5" fill="#7a8277" opacity="0.4"/>
          </pattern>
          <pattern id="asphalt" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="#3d3f3c"/>
            <circle cx="8" cy="12" r="0.6" fill="#4a4c49" opacity="0.6"/>
            <circle cx="24" cy="6" r="0.5" fill="#333430" opacity="0.7"/>
            <circle cx="32" cy="28" r="0.7" fill="#4a4c49" opacity="0.5"/>
            <circle cx="12" cy="32" r="0.5" fill="#333430" opacity="0.7"/>
          </pattern>
          <pattern id="sidewalk" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
            <rect width="26" height="26" fill="#c9c4b5"/>
            <line x1="0" y1="0" x2="26" y2="0" stroke="#b8b2a3" strokeWidth="0.8"/>
            <line x1="0" y1="0" x2="0" y2="26" stroke="#b8b2a3" strokeWidth="0.8"/>
            <line x1="13" y1="0" x2="13" y2="26" stroke="#b8b2a3" strokeWidth="0.5" opacity="0.5"/>
          </pattern>

          {/* Camera detection cone gradient */}
          <radialGradient id="cone" cx="0" cy="0" r="1">
            <stop offset="0%" stopColor="#D9CBA2" stopOpacity="0.5"/>
            <stop offset="70%" stopColor="#D9CBA2" stopOpacity="0.15"/>
            <stop offset="100%" stopColor="#D9CBA2" stopOpacity="0"/>
          </radialGradient>

          {/* Building shadow */}
          <linearGradient id="bldg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d7d2c4"/>
            <stop offset="100%" stopColor="#b8b2a3"/>
          </linearGradient>
        </defs>

        {/* Ground */}
        <rect width="600" height="600" fill="url(#grass)"/>

        {/* Building blocks in corners */}
        <Block x={30} y={30} w={200} h={200} variant="a"/>
        <Block x={370} y={30} w={200} h={200} variant="b"/>
        <Block x={30} y={370} w={200} h={200} variant="c"/>
        <Block x={370} y={370} w={200} h={200} variant="b"/>

        {/* Sidewalks around intersection */}
        <rect x="230" y="30" width="140" height="200" fill="url(#sidewalk)"/>
        <rect x="230" y="370" width="140" height="200" fill="url(#sidewalk)"/>
        <rect x="30" y="230" width="200" height="140" fill="url(#sidewalk)"/>
        <rect x="370" y="230" width="200" height="140" fill="url(#sidewalk)"/>

        {/* Roads (horizontal & vertical) */}
        <rect x="0" y="240" width="600" height="120" fill="url(#asphalt)"/>
        <rect x="240" y="0" width="120" height="600" fill="url(#asphalt)"/>

        {/* Intersection box (asphalt) */}
        <rect x="240" y="240" width="120" height="120" fill="#3d3f3c"/>

        {/* Road curbs (thin darker lines along sidewalk edges) */}
        <line x1="0" y1="240" x2="240" y2="240" stroke="#20221e" strokeWidth="1.2"/>
        <line x1="360" y1="240" x2="600" y2="240" stroke="#20221e" strokeWidth="1.2"/>
        <line x1="0" y1="360" x2="240" y2="360" stroke="#20221e" strokeWidth="1.2"/>
        <line x1="360" y1="360" x2="600" y2="360" stroke="#20221e" strokeWidth="1.2"/>
        <line x1="240" y1="0" x2="240" y2="240" stroke="#20221e" strokeWidth="1.2"/>
        <line x1="360" y1="0" x2="360" y2="240" stroke="#20221e" strokeWidth="1.2"/>
        <line x1="240" y1="360" x2="240" y2="600" stroke="#20221e" strokeWidth="1.2"/>
        <line x1="360" y1="360" x2="360" y2="600" stroke="#20221e" strokeWidth="1.2"/>

        {/* Lane markings */}
        {/* center double yellow */}
        <line x1="298" y1="0" x2="298" y2="240" stroke="#E6C24A" strokeWidth="1.4"/>
        <line x1="302" y1="0" x2="302" y2="240" stroke="#E6C24A" strokeWidth="1.4"/>
        <line x1="298" y1="360" x2="298" y2="600" stroke="#E6C24A" strokeWidth="1.4"/>
        <line x1="302" y1="360" x2="302" y2="600" stroke="#E6C24A" strokeWidth="1.4"/>
        <line x1="0" y1="298" x2="240" y2="298" stroke="#E6C24A" strokeWidth="1.4"/>
        <line x1="0" y1="302" x2="240" y2="302" stroke="#E6C24A" strokeWidth="1.4"/>
        <line x1="360" y1="298" x2="600" y2="298" stroke="#E6C24A" strokeWidth="1.4"/>
        <line x1="360" y1="302" x2="600" y2="302" stroke="#E6C24A" strokeWidth="1.4"/>

        {/* Dashed lane dividers (sub-lanes) */}
        <line x1="270" y1="0" x2="270" y2="240" stroke="#e8e4d7" strokeWidth="1" strokeDasharray="12 10" opacity="0.75"/>
        <line x1="330" y1="0" x2="330" y2="240" stroke="#e8e4d7" strokeWidth="1" strokeDasharray="12 10" opacity="0.75"/>
        <line x1="270" y1="360" x2="270" y2="600" stroke="#e8e4d7" strokeWidth="1" strokeDasharray="12 10" opacity="0.75"/>
        <line x1="330" y1="360" x2="330" y2="600" stroke="#e8e4d7" strokeWidth="1" strokeDasharray="12 10" opacity="0.75"/>
        <line x1="0" y1="270" x2="240" y2="270" stroke="#e8e4d7" strokeWidth="1" strokeDasharray="12 10" opacity="0.75"/>
        <line x1="0" y1="330" x2="240" y2="330" stroke="#e8e4d7" strokeWidth="1" strokeDasharray="12 10" opacity="0.75"/>
        <line x1="360" y1="270" x2="600" y2="270" stroke="#e8e4d7" strokeWidth="1" strokeDasharray="12 10" opacity="0.75"/>
        <line x1="360" y1="330" x2="600" y2="330" stroke="#e8e4d7" strokeWidth="1" strokeDasharray="12 10" opacity="0.75"/>

        {/* Crosswalks (zebra) */}
        <Crosswalk dir="h" x={240} y={230} w={120} />
        <Crosswalk dir="h" x={240} y={362} w={120} />
        <Crosswalk dir="v" x={230} y={240} h={120} />
        <Crosswalk dir="v" x={362} y={240} h={120} />

        {/* Stop bars */}
        <line x1="240" y1="234" x2="300" y2="234" stroke="#ffffff" strokeWidth="2.5"/>
        <line x1="300" y1="366" x2="360" y2="366" stroke="#ffffff" strokeWidth="2.5"/>
        <line x1="234" y1="300" x2="234" y2="360" stroke="#ffffff" strokeWidth="2.5"/>
        <line x1="366" y1="240" x2="366" y2="300" stroke="#ffffff" strokeWidth="2.5"/>

        {/* Detection cones from 4 cameras (shown as faint wedges) */}
        <g opacity="0.6">
          <path d="M 230 230 L 120 330 A 160 160 0 0 1 120 170 Z" fill="url(#cone)"/>
          <path d="M 370 230 L 480 170 A 160 160 0 0 1 480 330 Z" fill="url(#cone)"/>
          <path d="M 230 370 L 120 430 A 160 160 0 0 0 120 270 Z" fill="url(#cone)" transform="rotate(180 230 370)" style={{transformOrigin:'230px 370px'}}/>
          <path d="M 370 370 L 480 430 A 160 160 0 0 0 480 270 Z" fill="url(#cone)" transform="rotate(180 370 370)" style={{transformOrigin:'370px 370px'}}/>
        </g>

        {/* Vehicles */}
        {nsGo ? (
          <>
            <Car dir="S" lane={285} t={t} offset={0} color="#e0ddce"/>
            <Car dir="S" lane={315} t={t} offset={2.2} color="#B14A2B" detect/>
            <Car dir="S" lane={285} t={t} offset={4.5} color="#4F7A99"/>
            <Car dir="N" lane={275} t={t} offset={1.0} color="#2d2e27"/>
            <Car dir="N" lane={325} t={t} offset={3.4} color="#C79A3A" detect/>
          </>
        ) : (
          <>
            <StoppedCar dir="S" lane={285} y={225} color="#e0ddce"/>
            <StoppedCar dir="S" lane={315} y={202} color="#B14A2B"/>
            <StoppedCar dir="N" lane={275} y={375} color="#2d2e27"/>
            <StoppedCar dir="N" lane={325} y={398} color="#C79A3A"/>
          </>
        )}
        {ewGo ? (
          <>
            <Car dir="E" lane={285} t={t} offset={0.5} color="#4F7A99" detect/>
            <Car dir="E" lane={315} t={t} offset={2.8} color="#e0ddce"/>
            <Car dir="W" lane={275} t={t} offset={1.6} color="#2d2e27"/>
            <Car dir="W" lane={325} t={t} offset={3.9} color="#B14A2B"/>
          </>
        ) : (
          <>
            <StoppedCar dir="E" lane={285} x={225}  color="#4F7A99"/>
            <StoppedCar dir="W" lane={325} x={398} color="#B14A2B"/>
          </>
        )}

        {/* Pedestrian */}
        <Pedestrian ewGo={ewGo} t={t}/>

        {/* Camera units at 4 corners — above buildings */}
        <CameraUnit x={230} y={230} rot={-45}/>
        <CameraUnit x={370} y={230} rot={-135}/>
        <CameraUnit x={230} y={370} rot={45}/>
        <CameraUnit x={370} y={370} rot={135}/>

        {/* Traffic signal heads on poles (at stop-bar corners) */}
        <SignalHead x={232} y={230} phase={phase} dir="ns"/>
        <SignalHead x={368} y={370} phase={phase} dir="ns"/>
        <SignalHead x={368} y={230} phase={phase} dir="ew"/>
        <SignalHead x={232} y={370} phase={phase} dir="ew"/>
      </svg>

      <div className="isx-hud">
        <div className="isx-hud-card">
          <div className="label">Vehicles / hr</div>
          <div className="val">{vph.toLocaleString()}</div>
        </div>
        <div className="isx-hud-card">
          <div className="label">Avg speed</div>
          <div className="val">{speed}<span className="unit">mph</span></div>
        </div>
        <div className="isx-hud-card">
          <div className="label">Near-miss · today</div>
          <div className="val"><em>↓ 62%</em></div>
        </div>
      </div>
    </div>
  );
}

function Block({ x, y, w, h, variant }) {
  const palette = {
    a: { fill: '#D4C8A8', roof: '#BFB38E' },
    b: { fill: '#CFC4B1', roof: '#B9AE9A' },
    c: { fill: '#B9AE95', roof: '#A39882' },
  }[variant];
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={palette.fill}/>
      {/* subtle inner divisions for visual interest */}
      <rect x={x + 8} y={y + 8} width={w - 16} height={h - 16} fill="none" stroke={palette.roof} strokeWidth="0.8" opacity="0.6"/>
      {variant === 'a' && (
        <>
          <rect x={x + 30} y={y + 30} width={60} height={80} fill={palette.roof} opacity="0.5"/>
          <rect x={x + 110} y={y + 60} width={70} height={120} fill={palette.roof} opacity="0.4"/>
        </>
      )}
      {variant === 'b' && (
        <>
          <rect x={x + 20} y={y + 80} width={160} height={90} fill={palette.roof} opacity="0.45"/>
          <rect x={x + 60} y={y + 20} width={120} height={50} fill={palette.roof} opacity="0.35"/>
        </>
      )}
      {variant === 'c' && (
        <>
          <rect x={x + 40} y={y + 40} width={120} height={120} fill={palette.roof} opacity="0.5"/>
          <circle cx={x + 100} cy={y + 100} r={20} fill={palette.fill}/>
        </>
      )}
      {/* tree */}
      <circle cx={x + w - 14} cy={y + h - 14} r="8" fill="#4E7A5C" opacity="0.9"/>
      <circle cx={x + 14} cy={y + 14} r="7" fill="#4E7A5C" opacity="0.85"/>
    </g>
  );
}

function Crosswalk({ dir, x, y, w, h }) {
  const stripes = 6;
  if (dir === 'h') {
    const sw = (w - 8) / stripes - 2;
    return (
      <g>
        {[...Array(stripes)].map((_, i) => (
          <rect key={i} x={x + 4 + i * (sw + 2)} y={y} width={sw} height={8} fill="#f0ebde" opacity="0.92"/>
        ))}
      </g>
    );
  }
  const sh = (h - 8) / stripes - 2;
  return (
    <g>
      {[...Array(stripes)].map((_, i) => (
        <rect key={i} x={x} y={y + 4 + i * (sh + 2)} width={8} height={sh} fill="#f0ebde" opacity="0.92"/>
      ))}
    </g>
  );
}

function Car({ dir, lane, t, offset, color, detect }) {
  // Car travels from one edge to the other over `duration` seconds
  const duration = 11;
  const progress = ((t + offset) % duration) / duration;

  let x, y, rot;
  if (dir === 'S') { x = lane; y = -30 + progress * 660; rot = 0; }
  else if (dir === 'N') { x = lane; y = 630 - progress * 660; rot = 180; }
  else if (dir === 'E') { x = -30 + progress * 660; y = lane; rot = 90; }
  else { x = 630 - progress * 660; y = lane; rot = 270; }

  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      {/* shadow */}
      <rect x="-9" y="-15" width="18" height="30" rx="3" fill="#000" opacity="0.22" transform="translate(1.5 1.5)"/>
      <CarBody color={color}/>
      {detect && (
        <g>
          <rect x="-13" y="-19" width="26" height="38" rx="2" fill="none" stroke="#4E7A5C" strokeWidth="1.2"/>
          {/* corner ticks */}
          <path d="M -13 -14 L -13 -19 L -8 -19" fill="none" stroke="#4E7A5C" strokeWidth="1.8"/>
          <path d="M 13 -14 L 13 -19 L 8 -19" fill="none" stroke="#4E7A5C" strokeWidth="1.8"/>
          <path d="M -13 14 L -13 19 L -8 19" fill="none" stroke="#4E7A5C" strokeWidth="1.8"/>
          <path d="M 13 14 L 13 19 L 8 19" fill="none" stroke="#4E7A5C" strokeWidth="1.8"/>
        </g>
      )}
    </g>
  );
}

function StoppedCar({ dir, lane, x, y, color }) {
  let px = x, py = y, rot = 0;
  if (dir === 'S') { px = lane; rot = 0; }
  else if (dir === 'N') { px = lane; rot = 180; }
  else if (dir === 'E') { py = lane; rot = 90; }
  else { py = lane; rot = 270; }
  return (
    <g transform={`translate(${px} ${py}) rotate(${rot})`}>
      <rect x="-9" y="-15" width="18" height="30" rx="3" fill="#000" opacity="0.22" transform="translate(1.5 1.5)"/>
      <CarBody color={color}/>
    </g>
  );
}

function CarBody({ color }) {
  return (
    <g>
      <rect x="-8.5" y="-14" width="17" height="28" rx="3.5" fill={color}/>
      {/* windshield */}
      <rect x="-6.5" y="-11" width="13" height="8" rx="1.5" fill="#2b3a48" opacity="0.8"/>
      {/* rear window */}
      <rect x="-6.5" y="4" width="13" height="6" rx="1.5" fill="#2b3a48" opacity="0.75"/>
      {/* roof line */}
      <line x1="-8" y1="-3" x2="8" y2="-3" stroke="#00000044" strokeWidth="0.5"/>
      <line x1="-8" y1="3" x2="8" y2="3" stroke="#00000044" strokeWidth="0.5"/>
      {/* headlights */}
      <circle cx="-5" cy="-13" r="1.2" fill="#fff6d8"/>
      <circle cx="5" cy="-13" r="1.2" fill="#fff6d8"/>
      {/* tail */}
      <circle cx="-5" cy="13" r="0.9" fill="#c14228"/>
      <circle cx="5" cy="13" r="0.9" fill="#c14228"/>
    </g>
  );
}

function Pedestrian({ ewGo, t }) {
  // Pedestrian crosses the east sidewalk-to-sidewalk when NS is red (ewGo)
  // they walk north-to-south across the top crosswalk
  if (!ewGo) {
    // Waiting on the curb
    return (
      <g transform="translate(245 225)">
        <circle r="3" fill="#2d2e27"/>
        <circle r="2" cy="-1" fill="#f0d2a8"/>
      </g>
    );
  }
  const progress = ((t % 6) / 6);
  const x = 244 + progress * 112;
  return (
    <g transform={`translate(${x} 235)`}>
      <circle r="3.5" fill="#2d2e27"/>
      <circle r="2.2" cy="-1" fill="#f0d2a8"/>
      <rect x="-14" y="-10" width="28" height="20" fill="none" stroke="#4F7A99" strokeWidth="1.2" rx="1"/>
      <path d="M -14 -5 L -14 -10 L -9 -10" fill="none" stroke="#4F7A99" strokeWidth="1.6"/>
      <path d="M 14 -5 L 14 -10 L 9 -10" fill="none" stroke="#4F7A99" strokeWidth="1.6"/>
      <path d="M -14 5 L -14 10 L -9 10" fill="none" stroke="#4F7A99" strokeWidth="1.6"/>
      <path d="M 14 5 L 14 10 L 9 10" fill="none" stroke="#4F7A99" strokeWidth="1.6"/>
    </g>
  );
}

function CameraUnit({ x, y, rot }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      {/* pole/mount shadow */}
      <circle r="9" fill="#000" opacity="0.25"/>
      {/* arm */}
      <rect x="0" y="-1.8" width="18" height="3.6" fill="#2A2B24" rx="1"/>
      {/* camera housing */}
      <rect x="13" y="-5" width="12" height="10" rx="1.5" fill="#13140F"/>
      {/* lens */}
      <circle cx="25" cy="0" r="2.5" fill="#4F7A99"/>
      <circle cx="25" cy="0" r="1.2" fill="#0a0d13"/>
      {/* rec dot */}
      <circle cx="15" cy="-3" r="0.8" fill="#c14228"/>
    </g>
  );
}

function SignalHead({ x, y, phase, dir }) {
  const red = dir === 'ns' ? (phase === 'EW' || phase === 'EW_YEL') : (phase === 'NS' || phase === 'NS_YEL');
  const yel = dir === 'ns' ? (phase === 'NS_YEL') : (phase === 'EW_YEL');
  const grn = dir === 'ns' ? (phase === 'NS') : (phase === 'EW');
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-4" y="-11" width="8" height="22" rx="1.5" fill="#13140F"/>
      <circle cx="0" cy="-7" r="2.2" fill={red ? '#D9482C' : '#2a2a24'}
        style={{ filter: red ? 'drop-shadow(0 0 3px #D9482C)' : 'none' }}/>
      <circle cx="0" cy="0" r="2.2" fill={yel ? '#E6B23A' : '#2a2a24'}
        style={{ filter: yel ? 'drop-shadow(0 0 3px #E6B23A)' : 'none' }}/>
      <circle cx="0" cy="7" r="2.2" fill={grn ? '#4E9A6F' : '#2a2a24'}
        style={{ filter: grn ? 'drop-shadow(0 0 3px #4E9A6F)' : 'none' }}/>
    </g>
  );
}

window.Intersection = Intersection;
