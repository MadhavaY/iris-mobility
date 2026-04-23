// Sections: Positioning, Capabilities, Reports, How it works, CTA, Footer
const CAPS = [
  { n:'01', t:'Vehicle detection & tracking', d:'Every car, truck, bus, pedestrian and cyclist — classified, counted, tracked across the whole intersection.', v:'detect' },
  { n:'02', t:'Approach speed', d:'Per-lane speed distributions, 85th-percentile compliance, posted-limit violations — without speed guns or staff in the field.', v:'speed' },
  { n:'03', t:'Near-miss detection', d:'Sub-second conflict events — the leading indicator of crashes. See risk before the crash report lands on your desk.', v:'near' },
  { n:'04', t:'Pedestrian & cyclist safety', d:'Crosswalk usage, yield rates, right-hook conflicts, illegal crossings — the vulnerable road users your plan is trying to protect.', v:'ped' },
  { n:'05', t:'Signal timing insight', d:'Measure how current phases perform against real demand. Recommend retimings backed by weeks of continuous data.', v:'signal' },
  { n:'06', t:'Risk heatmap', d:'Roll 9 safety metrics into one map of your city. Prioritize intersections by risk, not by complaint volume.', v:'heat' },
  { n:'07', t:'Classification mix', d:'Understand who actually uses your streets — by hour, day, and season. Bus lanes, truck routes, micro-mobility: all measured.', v:'class' },
  { n:'08', t:'Turning movement counts', d:'Replace $1,500 manual studies with continuous, automated counts at every approach and exit.', v:'count' },
  { n:'09', t:'Pedestrian clearance', d:'Measure actual crossing times versus posted, for every crosswalk. Meet MUTCD and your ADA obligations.', v:'time' },
];

function Capabilities() {
  return (
    <section id="platform" className="cap-section">
      <div className="container">
        <div className="eyebrow">The platform</div>
        <h2 className="section-title">Nine safety metrics, per camera, <em>continuously.</em></h2>
        <p className="section-sub">
          Traditional intersection studies are episodic, expensive, and counts-only.
          IRIS replaces them with always-on computer vision — running on the cameras your city already owns.
        </p>
        <div className="cap-grid">
          {CAPS.map(c => (
            <div key={c.n} className="cap-card">
              <div className="cap-visual"><CapVisual kind={c.v}/></div>
              <div className="cap-num">{c.n}</div>
              <h3 className="cap-title">{c.t}</h3>
              <p className="cap-desc">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Positioning() {
  return (
    <section id="platform-fit" className="position-section">
      <div className="container">
        <div className="eyebrow">How we fit</div>
        <h2 className="section-title">We sit on top of the infrastructure you <em>already have.</em></h2>
        <p className="section-sub">
          No new poles. No new trenching. No rip-and-replace.
          IRIS plugs into your existing traffic cameras and runs either in our cloud or on a small box at the edge — your choice.
        </p>

        <div className="position-grid">
          <div className="position-diagram">
            <div className="pd-row">
              <div className="pd-label">Your infra</div>
              <div className="pd-content">Existing intersection cameras + ITS network</div>
            </div>
            <div className="pd-row">
              <div className="pd-label">IRIS</div>
              <div className="pd-content iris">
                <span><em>IRIS</em> · cloud or on-prem edge</span>
                <img src="assets/iris-logo.png" alt="" className="iris-mark"/>
              </div>
            </div>
            <div className="pd-row">
              <div className="pd-label">You see</div>
              <div className="pd-content">Ops Center · alerts · grant &amp; council reports</div>
            </div>
          </div>

          <div className="position-copy">
            <div className="feature">
              <div className="feature-num">A</div>
              <div>
                <h4 className="feature-title">Camera-agnostic.</h4>
                <p className="feature-desc">RTSP, ONVIF or direct feed — we work with Axis, Bosch, Pelco, Hikvision, Iteris and most municipal DVR systems in use today.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-num">B</div>
              <div>
                <h4 className="feature-title">Deploy in our cloud.</h4>
                <p className="feature-desc">We pull your feeds over a secure VPN tunnel, run inference in our SOC-2 environment, and return clean structured data. Zero on-site hardware.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-num">C</div>
              <div>
                <h4 className="feature-title">Or deploy on your edge.</h4>
                <p className="feature-desc">For CJIS-sensitive or air-gapped networks, we drop a small NVIDIA-based edge appliance in the cabinet. Footage never leaves your network.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-num">D</div>
              <div>
                <h4 className="feature-title">Live in weeks, not years.</h4>
                <p className="feature-desc">Most agencies go from kickoff to live dashboard in under six weeks. No new procurement for cameras, poles, or fiber.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reports() {
  return (
    <section id="reports" className="reports-section">
      <div className="container">
        <div className="eyebrow">Grant &amp; council ready</div>
        <h2 className="section-title">Reports the funder and the council <em>actually read.</em></h2>
        <p className="section-sub">
          Every metric IRIS captures rolls into formats your team already has to produce —
          Safe Streets for All applications, Vision Zero action-plan updates, council briefings, TxDOT &amp; FHWA reporting.
        </p>

        <div className="reports-grid">
          <div className="report-stack">
            <div className="report-mock back"/>
            <div className="report-mock">
              <div className="rm-head">
                <div>
                  <div className="rm-title">Quarterly Safety Brief <em>— Q3</em></div>
                  <div style={{fontFamily:'var(--sans)', fontSize:13, color:'var(--ink-dim)', marginTop:6}}>Prepared for City Council · District 4</div>
                </div>
                <div className="rm-meta">CONFIDENTIAL<br/>IRIS · 42 sites</div>
              </div>

              <div className="rm-metrics">
                <div className="rm-metric"><div className="n"><em>↓ 34%</em></div><div className="l">near-miss events vs. baseline</div></div>
                <div className="rm-metric"><div className="n">68%</div><div className="l">pedestrian yield rate</div></div>
                <div className="rm-metric"><div className="n">29<span style={{fontSize:14,color:'var(--ink-dim)',fontFamily:'var(--sans)'}}> mph</span></div><div className="l">avg approach speed</div></div>
              </div>

              <div className="rm-section">
                <h5>NEAR-MISS TREND · 12 WEEKS</h5>
                <div className="rm-chart">
                  {[60,58,52,55,48,44,40,38,34,31,28,26].map((h,i)=><span key={i} style={{height:`${h}%`}}/>)}
                </div>
              </div>

              <div className="rm-section">
                <h5>RECOMMENDED ACTIONS</h5>
                <ul className="rm-bullets">
                  <li>· Retime SB left-turn at Main × 5th (projected −18% conflicts)</li>
                  <li>· Add LPI at Elm × 12th crosswalk</li>
                  <li>· Reduce posted limit on Cedar Ave corridor</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="feature" style={{borderTop:'1px solid var(--line)'}}>
              <div className="feature-num">01</div>
              <div>
                <h4 className="feature-title">SS4A grant applications.</h4>
                <p className="feature-desc">Hard crash, near-miss, and exposure data formatted to the exact fields USDOT requires. Supporting exhibits generated automatically.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-num">02</div>
              <div>
                <h4 className="feature-title">Council &amp; public briefings.</h4>
                <p className="feature-desc">Before/after comparisons, corridor heatmaps, district-level rollups — one-click export to PDF or slides. Plain language, not engineer-speak.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-num">03</div>
              <div>
                <h4 className="feature-title">Vision Zero action-plan updates.</h4>
                <p className="feature-desc">Quarterly progress against your high-injury-network goals, automatically. Keep the commitment honest.</p>
              </div>
            </div>
            <div className="feature" style={{borderBottom:'1px solid var(--line)'}}>
              <div className="feature-num">04</div>
              <div>
                <h4 className="feature-title">MUTCD &amp; ADA compliance.</h4>
                <p className="feature-desc">Pedestrian clearance times, signal phase compliance, and accessibility checks — documented continuously, not once a decade.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n:'01', t:'Connect your feeds', d:'RTSP, ONVIF or direct pull from your existing traffic cameras — typically over VPN. No on-site hardware required.' },
    { n:'02', t:'We calibrate the scene', d:'Our computer-vision models adapt to each camera angle, lens distortion and sight line. Takes a day per intersection.' },
    { n:'03', t:'Continuous inference', d:'24/7 processing in the IRIS cloud or on an NVIDIA edge box. Footage is never stored longer than needed for training.' },
    { n:'04', t:'Data &amp; reports, daily', d:'Live dashboard, alerts, and grant/council-ready reports delivered to your inbox — SS4A, Vision Zero, MUTCD.' },
  ];
  return (
    <section id="how" className="how-section">
      <div className="container">
        <div className="eyebrow">How it works</div>
        <h2 className="section-title">From your existing cameras to council-ready insight <em>in six weeks.</em></h2>
        <div className="how-steps">
          {steps.map(s=>(
            <div key={s.n} className="how-step">
              <div className="how-num">{s.n}</div>
              <h3 className="how-title">{s.t}</h3>
              <p className="how-desc" dangerouslySetInnerHTML={{__html:s.d}}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="cta-section">
      <div className="cta-eyebrow">Ready when you are</div>
      <h2 className="cta-title">Make every camera in your city <em>a safety instrument.</em></h2>
      <p className="cta-sub">
        Send us a sample RTSP feed — in one week we'll show you the insight your cameras are already capable of producing.
      </p>
      <div className="cta-actions">
        <a className="btn btn-primary" href="#">Schedule a walkthrough <Icon.Arrow/></a>
        <a className="btn" href="#">Request a sample report</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="foot-grid">
        <div className="foot-col">
          <div className="logo" style={{marginBottom:14}}>
            <img src="assets/iris-logo.png" alt="IRIS"/>
            <span>IRIS Mobility</span>
          </div>
          <p className="foot-brand">
            AI-powered traffic intelligence for safer streets.
            Sitting on top of the camera infrastructure cities already own.
          </p>
        </div>
        <div className="foot-col">
          <h5>Platform</h5>
          <ul>
            <li><a href="#">Detection</a></li>
            <li><a href="#">Near-miss</a></li>
            <li><a href="#">Signal timing</a></li>
            <li><a href="#">Reports</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Solutions</h5>
          <ul>
            <li><a href="#">SS4A grants</a></li>
            <li><a href="#">Vision Zero</a></li>
            <li><a href="#">Signal retiming</a></li>
            <li><a href="#">Council briefings</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Company</h5>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Privacy &amp; Ethics</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 IRIS Mobility, Inc.</span>
        <span>AUSTIN · DALLAS · ATLANTA</span>
      </div>
    </footer>
  );
}

window.Capabilities = Capabilities;
window.Positioning = Positioning;
window.Reports = Reports;
window.HowItWorks = HowItWorks;
window.Cta = Cta;
window.Footer = Footer;
