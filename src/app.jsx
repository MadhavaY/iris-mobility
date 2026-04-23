// App: Nav, Hero, Marquee, composes sections
function App() {
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="wrap">
      <Nav/>
      <Hero/>
      <Marquee/>
      <Positioning/>
      <Capabilities/>
      <DashSection/>
      <Reports/>
      <HowItWorks/>
      <Cta/>
      <Footer/>
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <a href="#" className="logo">
          <img src="assets/iris-logo.png" alt="IRIS"/>
          <span>IRIS Mobility</span>
        </a>
        <div className="nav-links">
          <a href="#platform">Platform</a>
          <a href="#platform-fit">How we fit</a>
          <a href="#reports">Reports</a>
          <a href="#how">Deployment</a>
        </div>
      </div>
      <div className="nav-right">
        <a className="btn" href="#">Sign in</a>
        <a className="btn btn-primary" href="#">Schedule a walkthrough <Icon.Arrow/></a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="hero-copy">
        <div className="eyebrow">AI traffic intelligence</div>
        <h1 className="hero-title">
          Turn the cameras your city already owns into <em>safety instruments.</em>
        </h1>
        <p className="hero-sub">
          IRIS sits on top of your existing intersection feeds and measures nine safety metrics per camera — continuously.
          Near-miss detection, speed, yield rates, signal performance. Grant- and council-ready reports, delivered.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#">Schedule a walkthrough <Icon.Arrow/></a>
          <a className="btn" href="#reports">See a sample report</a>
        </div>
        <div className="hero-meta">
          <div className="meta-item">
            <div className="meta-num"><em>9</em></div>
            <div className="meta-label">safety metrics per camera, continuously</div>
          </div>
          <div className="meta-item">
            <div className="meta-num">6 <span style={{fontSize:16,color:'var(--ink-dim)',fontFamily:'var(--sans)'}}>wk</span></div>
            <div className="meta-label">typical time to live dashboard</div>
          </div>
          <div className="meta-item">
            <div className="meta-num">0</div>
            <div className="meta-label">new cameras or poles required</div>
          </div>
        </div>
      </div>
      <div className="hero-vis"><Intersection/></div>
    </header>
  );
}

function Marquee() {
  const items = [
    { label: 'City of Dallas', italic: 'TX' },
    { label: 'City of Richardson', italic: 'TX' },
    { label: 'North Central Texas COG', italic: '' },
    { label: 'Texas A&M Transportation Institute', italic: '' },
    { label: 'Vision Zero Texas', italic: '' },
    { label: 'City of Plano', italic: 'TX' },
    { label: 'DART Public Safety', italic: '' },
  ];
  const row = (key) => (
    <div className="marquee-inner" key={key}>
      {[...items, ...items].map((it,i) => (
        <div key={i} className="city-badge">
          <span className="city-dot"/>
          {it.label}{it.italic && <em>&nbsp;/ {it.italic}</em>}
        </div>
      ))}
    </div>
  );
  return <div className="marquee">{row('a')}</div>;
}

function DashSection() {
  return (
    <section id="ops" className="dash-section">
      <div className="container">
        <div className="eyebrow">Ops Center</div>
        <h2 className="section-title">One console for your whole network, <em>updating live.</em></h2>
        <p className="section-sub">
          Every intersection, every metric, every event — in one place. Triage near-miss alerts, compare corridors, pull a briefing in a click.
        </p>
        <Dashboard/>
      </div>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
