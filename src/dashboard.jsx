// Live operations dashboard (light palette)
function Dashboard() {
  const [tab, setTab] = React.useState('heat');
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => { const i = setInterval(()=>setTick(v=>v+1), 2200); return ()=>clearInterval(i); }, []);

  const heatData = React.useMemo(() => {
    const arr = [];
    for (let r=0;r<7;r++) for (let c=0;c<24;c++){
      const rush = (c>=7&&c<=9)||(c>=16&&c<=19) ? 0.55 : 0;
      const wknd = (r===0||r===6) ? -0.22 : 0;
      const rnd = Math.sin(r*31+c*7)*0.3+0.4;
      arr.push(Math.max(0, Math.min(1, rnd+rush+wknd)));
    }
    return arr;
  }, []);
  const heatColor = (v) => {
    if (v<0.15) return "#EFE9DF";
    if (v<0.35) return "#D5DDC7";
    if (v<0.55) return "#A8BB9A";
    if (v<0.75) return "#D9B26A";
    return "#C4613F";
  };

  const bars = [8,14,20,28,24,40,50,63,78,68,54,47,45,52,60,68,85,92,74,48,30,22,15,11];
  const nowBar = tick % 24;

  const feed = [
    { time: '14:32:07', tag: 'NEAR-MISS', type: 'red',   text: 'SB left-turn vs NB thru · MAIN × 5TH' },
    { time: '14:28:44', tag: 'SPEED',     type: 'amber', text: '38 mph in 25 zone · CEDAR AVE' },
    { time: '14:21:19', tag: 'YIELD',     type: 'amber', text: 'Driver failed to yield · CROSSWALK-E' },
    { time: '14:14:02', tag: 'NEAR-MISS', type: 'red',   text: 'Pedestrian vs RH turn · ELM × 12TH' },
    { time: '14:06:55', tag: 'SPEED',     type: 'amber', text: '41 mph in 30 zone · SAUNDERS ST' },
  ];

  return (
    <div className="dash-stage">
      <div className="dash-chrome">
        <div className="dash-chrome-left">
          <span className="dash-live-dot"/>
          IRIS OPS CENTER · connected to 42 intersections
        </div>
        <div className="dash-tabs">
          <div className={`dash-tab ${tab==='heat'?'active':''}`} onClick={()=>setTab('heat')}>Risk Heatmap</div>
          <div className={`dash-tab ${tab==='vol'?'active':''}`} onClick={()=>setTab('vol')}>Volume</div>
          <div className={`dash-tab ${tab==='feed'?'active':''}`} onClick={()=>setTab('feed')}>Live Events</div>
        </div>
      </div>

      <div className="dash-grid">
        <div className="dash-panel wide" style={{ gridRow: 'span 2' }}>
          <h4>Risk heatmap — 7d × 24h <span style={{color:'var(--ink-dim)'}}>MAIN × 5TH</span></h4>
          <div className="heatmap">
            {heatData.map((v,i)=>(
              <div key={i} className="heat-cell" style={{ background: heatColor(v) }}/>
            ))}
          </div>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:10,fontFamily:'var(--mono)',fontSize:10,color:'var(--ink-mute)'}}>
            <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:10,marginTop:20,fontFamily:'var(--mono)',fontSize:10,color:'var(--ink-mute)'}}>
            <span>LOW</span>
            <div style={{flex:1,height:6,borderRadius:3,background:'linear-gradient(90deg,#EFE9DF,#A8BB9A,#D9B26A,#C4613F)'}}/>
            <span>HIGH</span>
          </div>
        </div>

        <div className="dash-panel">
          <h4>Vehicles / hour <span className="pill">LIVE</span></h4>
          <div className="bars">
            {bars.map((h,i)=>(
              <div key={i} className={`bar ${i===nowBar?'hot':''}`} style={{height:`${h}%`}}/>
            ))}
          </div>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:8,fontFamily:'var(--mono)',fontSize:10,color:'var(--ink-mute)'}}>
            <span>00</span><span>06</span><span>12</span><span>18</span><span>24</span>
          </div>
        </div>

        <div className="dash-panel">
          <h4>Pedestrian yield rate</h4>
          <Donut value={68} tick={tick}/>
        </div>

        <div className="dash-panel">
          <h4>Near-miss · last 24h</h4>
          <div className="big"><em>14</em></div>
          <div className="delta-good">↓ 34% vs baseline</div>
          <div style={{marginTop:14,display:'grid',gridTemplateColumns:'1fr auto',gap:'4px 10px',fontSize:12,color:'var(--ink-2)'}}>
            <span>SB left turn</span><span style={{color:'var(--ink)'}}>7</span>
            <span>Ped conflict</span><span style={{color:'var(--ink)'}}>4</span>
            <span>Rear-end risk</span><span style={{color:'var(--ink)'}}>3</span>
          </div>
        </div>

        <div className="dash-panel">
          <h4>Avg. approach speed</h4>
          <div className="big">29<span style={{fontSize:14,color:'var(--ink-mute)',marginLeft:6,fontFamily:'var(--sans)'}}>mph</span></div>
          <div className="sub">Threshold 30 mph</div>
          <div style={{marginTop:18,height:6,background:'#EFE9DF',borderRadius:3,position:'relative'}}>
            <div style={{position:'absolute',left:0,top:0,bottom:0,width:'72%',borderRadius:3,background:'linear-gradient(90deg,#2F4A3A,#C79A3A)'}}/>
            <div style={{position:'absolute',left:'80%',top:-6,bottom:-6,width:2,background:'#B14A2B'}}/>
          </div>
        </div>

        <div className="dash-panel full">
          <h4>Live event feed <span style={{color:'var(--ink-dim)'}}>5 events · last 30 min</span></h4>
          {feed.map((f,i)=>(
            <div key={i} className="feed-item">
              <span className="feed-time">{f.time}</span>
              <span>{f.text}</span>
              <span className={`feed-tag ${f.type}`}>{f.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Donut({ value, tick }) {
  const r = 34, c = 2*Math.PI*r;
  const live = value + ((tick%4)-2);
  const off = c * (1 - live/100);
  return (
    <div style={{display:'flex',alignItems:'center',gap:14}}>
      <svg width="92" height="92" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#EFE9DF" strokeWidth="8"/>
        <circle cx="50" cy="50" r={r} fill="none" stroke="#2F4A3A" strokeWidth="8"
          strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round"
          transform="rotate(-90 50 50)" style={{transition:'stroke-dashoffset 1s ease'}}/>
        <text x="50" y="55" textAnchor="middle" fill="#13140F" fontSize="17" fontFamily="Fraunces" fontStyle="italic">{live}%</text>
      </svg>
      <div>
        <div style={{fontSize:12,color:'var(--ink-dim)'}}>yielded to pedestrians</div>
        <div className="delta-good" style={{marginTop:4}}>↑ 12% since install</div>
      </div>
    </div>
  );
}

window.Dashboard = Dashboard;
