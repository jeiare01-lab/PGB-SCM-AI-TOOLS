import { useState } from "react"
import { C, Hero, Card, CapCard, SectionLabel, H2, AgendaRow, DiscussBox, FacBox, Tabs, KnowledgeCheck } from "../components/shared"

const TABS = [
  { id:"overview",    label:"Overview"         },
  { id:"agenda",      label:"Agenda"           },
  { id:"compare",     label:"Comparison"       },
  { id:"decision",    label:"Decision Tool"    },
  { id:"roadmap",     label:"Roadmap"          },
  { id:"check",       label:"Final Quiz"       },
  { id:"facilitator", label:"Facilitator Guide"},
]

const KC = [
  { q:"All three platforms (NetSuite, Blue Yonder AI, C3 AI) share what key characteristic regarding pricing?", opts:["All have free tiers for small teams","None have free tiers — all require vendor engagement","Only NetSuite requires a sales conversation","C3 AI is free for government-linked companies"], ans:1 },
  { q:"According to the PGB adoption roadmap, what is the correct sequence?", opts:["C3 AI → Blue Yonder → NetSuite","Blue Yonder → NetSuite → C3 AI","NetSuite → Blue Yonder AI → C3 AI","All three simultaneously"], ans:2 },
  { q:"What is the 'success gate' before PGB should move from Phase 1 to Phase 2?", opts:["Budget approval from the Board","3 consecutive clean month-end closes with no spreadsheet dependency","A fully trained IT team in Blue Yonder","NetSuite deployed in all 10 subsidiaries simultaneously"], ans:1 },
  { q:"In the Leadership Pitch, what is the fourth and final element?", opts:["Technical deep-dive on platform architecture","List of all platform features","The Ask — what you need from leadership to move forward","A competitor analysis"], ans:2 },
  { q:"Which PGB SBU is recommended as the best starting point for a Blue Yonder AI pilot?", opts:["PSI (training)","PHI (real estate)","AMICI (maritime logistics — freight module)","PSEFI (foundation)"], ans:2 },
]

const DECISION_QS = [
  { q:"Q1. What is the primary nature of your problem?", opts:[ { label:"💰 Financial recording, HR, or payroll", val:"finance" }, { label:"🚚 How goods or materials move (procurement, transport, inventory)", val:"sc" }, { label:"🔮 Predicting failures, risks, or future outcomes", val:"predict" }, { label:"🛠️ Building a custom AI app or automating a workflow", val:"build" }] },
  { q:"Q2. Which SBU does this use case belong to?", opts:[ { label:"🏗️ Construction & Manufacturing (AAC, CSI, PSC)", val:"cnm" }, { label:"🏢 Real Estate (PHI, PPC)", val:"re" }, { label:"⚓ Maritime Logistics (AMICI)", val:"ml" }, { label:"👥 Human Capital Development (SEAMAN, SKILLS, PSEFI, PSI)", val:"hc" }] },
  { q:"Q3. How quickly do you need results?", opts:[ { label:"⚡ Within weeks — we need quick wins", val:"fast" }, { label:"📅 Within months — we can run a proper pilot", val:"mid" }, { label:"🗓️ 1–2 years — this is a strategic investment", val:"long" }] },
  { q:"Q4. What is your team's technical capability?", opts:[ { label:"🙋 Non-technical — we need no-code solutions", val:"none" }, { label:"📊 Moderate — we have analysts and power users", val:"midtech" }, { label:"💻 High — we have data scientists and developers", val:"high" }] },
  { q:"Q5. Does PGB already have clean, centralized data for this problem area?", opts:[ { label:"✅ Yes — data is organized and accessible", val:"yes" }, { label:"⚠️ Partially — some data exists but it's fragmented", val:"partial" }, { label:"❌ No — we need to establish a data foundation first", val:"no" }] },
]

function getRecommendation(answers) {
  const q1 = answers.q1, q5 = answers.q5
  if (q1 === "finance" || q5 === "no") return {
    title:"✅ Recommended: NetSuite (Phase 1)",
    body:"Your use case involves financial processes, HR/payroll, or you lack a clean data foundation. NetSuite is the right first step — it establishes the data backbone that Blue Yonder and C3 AI both depend on.",
    note:"Next action: Request a NetSuite demo via oracle.com/netsuite. Identify your finance and IT leads as implementation owners.",
    color:C.red
  }
  if (q1 === "sc" || (answers.q2 === "ml" && q1 !== "predict" && q1 !== "build")) return {
    title:"✅ Recommended: Blue Yonder AI (Phase 2)",
    body:"Your use case involves supply chain movement, logistics, freight, or warehouse management. Blue Yonder is purpose-built for this — especially for AMICI, AAC, and PSC. Ensure NetSuite data is clean before implementation.",
    note:"Next action: Request a Blue Yonder demo via blueyonder.com. Pilot in one SBU (AMICI freight recommended) before full rollout.",
    color:C.byBlue
  }
  if (q1 === "predict" || q1 === "build") return {
    title:"✅ Recommended: C3 AI (Phase 3)",
    body:"Your use case involves prediction, anomaly detection, custom AI application building, or workflow automation. C3 AI is the right fit. Start with a pre-built app (Predictive Maintenance or Skills Analytics) to prove value before building custom.",
    note:"Next action: Contact C3 AI sales (c3.ai) and request a 6-month negotiated pilot. Non-technical teams should start with the APA no-code interface.",
    color:C.c3Teal
  }
  return {
    title:"⚠️ Review your answers",
    body:"Please answer all 5 questions. If your use case spans multiple platforms, start with NetSuite to establish your data foundation, then layer Blue Yonder or C3 AI on top.",
    note:"Tip: If unsure, default to Phase 1 (NetSuite) — lowest risk, highest impact starting point for most PGB SBUs.",
    color:C.midgray
  }
}

export default function Lab3() {
  const [tab, setTab] = useState("overview")
  const [dtAnswers, setDtAnswers] = useState({})
  const [dtResult, setDtResult] = useState(null)
  const ACC = C.orange

  function pickAnswer(q, val) {
    setDtAnswers(prev => ({ ...prev, [q]: val }))
    setDtResult(null)
  }

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "1.8rem 1.2rem 4rem" }}>
      <Tabs tabs={TABS} active={tab} onSelect={setTab} accentColor={ACC} />

      {tab === "overview" && (
        <>
          <Hero eyebrow="PGB AI Platform Learning Series · Lab 3 of 3" title="Decision: Compare, Select & Build PGB's AI Roadmap"
            desc="The capstone lab. Participants compare all three platforms head-to-head, apply a structured decision framework to their SBU use cases, and collaboratively build PGB's sequenced AI adoption roadmap."
            meta={["⏱ 3.5–4 Hours","👥 Facilitator-Led","🎯 All Roles · All SBUs","📍 Capstone Lab"]} accentColor={ACC} />
          <SectionLabel color={ACC}>Lab Objectives</SectionLabel>
          <H2 style={{ marginBottom:"1rem" }}>By the end of this lab, participants will be able to…</H2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))", gap:"1rem", marginBottom:"1.5rem" }}>
            <CapCard icon="⚖️" color={ACC} title="Compare all three platforms" body="Articulate key differences across pricing, focus, AI approach, and PGB fit using the comparison table." />
            <CapCard icon="🎯" color={C.byBlue} title="Apply a decision framework" body="Use the 5-question decision tool to recommend the right platform for a specific use case brief." />
            <CapCard icon="🗺️" color={C.c3Teal} title="Co-build an adoption roadmap" body="Sequence the Lab 2 use case briefs into a phased PGB adoption roadmap with KPIs and ownership." />
            <CapCard icon="📣" color={C.gold} title="Formulate a recommendation" body="Draft a clear, evidence-based platform recommendation that could be presented to PGB leadership." />
          </div>
          <Card accentColor={ACC}>
            <h4 style={{ color:ACC, marginBottom:"0.5rem" }}>📌 What to Bring from Lab 2</h4>
            <p style={{ fontSize:"0.87rem", lineHeight:1.65 }}>Participants should bring their completed Use Case Brief from Lab 2. The brief is the key input to today's decision framework and roadmap activity. If a participant missed Lab 2, use the Activities tab in Lab 2 and allow 10 minutes at the start to draft a brief.</p>
          </Card>
        </>
      )}

      {tab === "agenda" && (
        <>
          <SectionLabel color={ACC}>Lab 3 · Half-Day Agenda</SectionLabel>
          <H2 style={{ marginBottom:"0.3rem" }}>Session Schedule</H2>
          <p style={{ fontSize:"0.85rem", color:C.midgray, marginBottom:"1.2rem" }}>Total: 3.5–4 hours · Capstone lab</p>
          {[
            { time:"8:00–8:15", title:"Recap & Brief Review", type:"Discussion", desc:"Quick Lab 2 debrief. Participants pair up and share their use case briefs. Facilitator selects 2–3 as anchors for today." },
            { time:"8:15–8:50", title:"Module G: Head-to-Head Comparison", type:"Lecture", desc:"Full three-way comparison: NetSuite vs Blue Yonder AI vs C3 AI. Pricing, access, feature matrix, and layer model." },
            { time:"8:50–9:10", title:"Module H: Platform Selection Framework", type:"Lecture", desc:"5-question decision tool. Walk through two worked examples using real use case brief scenarios." },
            { time:"9:10–9:25", title:"Activity Part 1: Apply the Decision Tool", type:"Activity", desc:"Individual: run your Lab 2 brief through the decision tool. Pair up: agree on a platform recommendation." },
            { time:"9:25–9:40", title:"Break", type:"Break", desc:"Refreshments · Stretch · Informal discussion" },
            { time:"9:40–10:30", title:"Activity Part 2: PGB Roadmap Workshop", type:"Activity", desc:"Full group co-builds a sequenced PGB AI adoption roadmap across 3 phases." },
            { time:"10:30–11:00", title:"Leadership Pitch Practice", type:"Activity", desc:"Each SBU team delivers a 3-minute platform recommendation pitch to the 'executive panel.'" },
            { time:"11:00–11:20", title:"Final Knowledge Check & Series Debrief", type:"Discussion", desc:"5-question final quiz. 'What will you do differently in your SBU within 30 days?' Commitments captured." },
            { time:"11:20–11:30", title:"Graduation & Next Steps", type:"Lecture", desc:"Series wrap-up. Next steps: which briefs are elevated to leadership, pilot request process, and ownership." },
          ].map((r,i)=><AgendaRow key={i} {...r} />)}
        </>
      )}

      {tab === "compare" && (
        <>
          <SectionLabel color={ACC}>Module G · Head-to-Head Comparison</SectionLabel>
          <H2 style={{ marginBottom:"1rem" }}>Three-Platform Comparison</H2>
          <h3 style={{ marginBottom:"0.7rem" }}>Pricing & Access</h3>
          <div style={{ background:"white", borderRadius:10, overflow:"hidden", boxShadow:"0 2px 8px rgba(0,0,0,0.07)", marginBottom:"1.5rem" }}>
            <table style={{ width:"100%", borderCollapse:"collapse" }}>
              <thead>
                <tr>
                  {[["Factor",C.charcoal],["🔴 NetSuite",C.red],["🔵 Blue Yonder AI",C.byBlue],["🟢 C3 AI",C.c3Teal]].map(([h,bg],i)=>(
                    <th key={i} style={{ padding:"0.75rem 0.9rem", background:bg, color:"white", textAlign:"left", fontSize:"0.85rem", fontWeight:700 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pricing Model","Per-user + modules","Custom enterprise","Custom enterprise"],
                  ["Entry Cost","~$30K–75K/yr","Undisclosed (enterprise)","$250K–500K pilot"],
                  ["Free Tier","❌ Demo only","❌ Demo only","❌ Demo only"],
                  ["Best Trial Option","Free demo (self-request)","Free demo (sales-gated)","6-month pilot (negotiated)"],
                  ["AI Included?","✅ Built-in","✅ Core","✅ Core"],
                ].map((row,i)=>(
                  <tr key={i} style={{ borderBottom:"1px solid #F3F4F6" }}>
                    {row.map((cell,j)=>(<td key={j} style={{ padding:"0.65rem 0.9rem", fontSize:"0.82rem", fontWeight:j===0?600:400, background:j===0?"#F9FAFB":"white", color:j===0?C.charcoal:C.darkgray }}>{cell}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 style={{ marginBottom:"0.7rem" }}>Feature & Fit</h3>
          <div style={{ background:"white", borderRadius:10, overflow:"hidden", boxShadow:"0 2px 8px rgba(0,0,0,0.07)", marginBottom:"1.5rem" }}>
            <table style={{ width:"100%", borderCollapse:"collapse" }}>
              <thead>
                <tr>
                  {[["Capability",C.charcoal],["🔴 NetSuite",C.red],["🔵 Blue Yonder",C.byBlue],["🟢 C3 AI",C.c3Teal]].map(([h,bg],i)=>(
                    <th key={i} style={{ padding:"0.7rem 0.9rem", background:bg, color:"white", textAlign:"left", fontSize:"0.82rem", fontWeight:700 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Financials & Accounting","✅ Best-in-class","❌","⚠️ Analytics only"],
                  ["HR & Payroll","✅ Full suite","❌","⚠️ AI apps only"],
                  ["Supply Chain Planning","⚠️ Basic","✅ Best-in-class","⚠️ Forecasting AI"],
                  ["Warehouse Management","⚠️ Add-on","✅ Deep + robotics","❌"],
                  ["Predictive Maintenance","❌","❌","✅ Best-in-class"],
                  ["Custom AI App Building","⚠️ Limited","❌","✅ Best-in-class"],
                  ["Natural Language Interface","✅ Ask Oracle","⚠️ Agent-based","✅ C3 Code + APA"],
                  ["ERP System of Record","✅ Yes","❌","❌"],
                ].map((row,i)=>(
                  <tr key={i} style={{ borderBottom:"1px solid #F3F4F6" }}>
                    {row.map((cell,j)=>(<td key={j} style={{ padding:"0.6rem 0.9rem", fontSize:"0.82rem", fontWeight:j===0?600:400, background:j===0?"#F9FAFB":"white", color:j===0?C.charcoal:C.darkgray }}>{cell}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 style={{ marginBottom:"0.7rem" }}>The Three-Layer Model</h3>
          {[
            { label:"Layer 1 — ERP Backbone", name:"NetSuite", desc:"Single source of truth: financials, HR, payroll, procurement, and inventory across all 10 PGB subsidiaries.", color:C.red, nameColor:"#FF9999" },
            { label:"Layer 2 — Supply Chain", name:"Blue Yonder AI", desc:"Demand forecasting, warehouse automation, freight reconciliation for AMICI, AAC, and PSC.", color:C.byBlue, nameColor:"#88BBFF" },
            { label:"Layer 3 — AI Intelligence", name:"C3 AI", desc:"Predictive maintenance, skills analytics, and custom AI apps across all four PGB SBUs.", color:C.c3Teal, nameColor:"#88EEEA" },
          ].map((l,i)=>(
            <div key={i}>
              <div style={{ background:C.charcoal, borderRadius:10, padding:"1rem 1.2rem", display:"flex", gap:"0.8rem", alignItems:"center", flexWrap:"wrap" }}>
                <div style={{ background:l.color, color:"white", fontWeight:700, fontSize:"0.78rem", padding:"0.3rem 0.8rem", borderRadius:999, whiteSpace:"nowrap" }}>{l.label}</div>
                <div style={{ color:"white", fontSize:"0.85rem", flex:1, minWidth:180 }}><strong style={{ color:l.nameColor }}>{l.name}</strong> — {l.desc}</div>
              </div>
              {i < 2 && <div style={{ textAlign:"center", color:C.midgray, margin:"0.25rem 0", fontSize:"0.85rem" }}>↕</div>}
            </div>
          ))}
        </>
      )}

      {tab === "decision" && (
        <>
          <SectionLabel color={ACC}>Module H · Platform Selection</SectionLabel>
          <H2 style={{ marginBottom:"0.3rem" }}>5-Question Decision Tool</H2>
          <p style={{ fontSize:"0.85rem", color:C.midgray, marginBottom:"1.5rem" }}>Answer based on your use case brief. The tool recommends the best platform fit.</p>
          {DECISION_QS.map((dq, qi) => (
            <div key={qi} style={{ background:"white", borderRadius:10, padding:"1.2rem", marginBottom:"0.8rem", boxShadow:"0 2px 6px rgba(0,0,0,0.07)" }}>
              <div style={{ fontSize:"0.92rem", fontWeight:600, marginBottom:"0.8rem", color:C.charcoal }}>{dq.q}</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
                {dq.opts.map(opt => {
                  const qKey = `q${qi+1}`
                  const selected = dtAnswers[qKey] === opt.val
                  return (
                    <div key={opt.val} onClick={() => pickAnswer(qKey, opt.val)} style={{
                      padding:"0.5rem 0.9rem", borderRadius:8, border:`2px solid ${selected ? ACC : "#E5E7EB"}`,
                      background:selected ? ACC : "white", color:selected ? "white" : C.darkgray,
                      cursor:"pointer", fontSize:"0.83rem", transition:"all 0.15s"
                    }}>{opt.label}</div>
                  )
                })}
              </div>
            </div>
          ))}
          <button onClick={() => setDtResult(getRecommendation(dtAnswers))} style={{
            background:ACC, color:"white", border:"none", padding:"0.6rem 1.4rem",
            borderRadius:8, cursor:"pointer", fontWeight:700, fontSize:"0.9rem", marginBottom:"1rem"
          }}>Get My Recommendation →</button>
          {dtResult && (
            <div style={{ background:C.charcoal, borderRadius:10, padding:"1.3rem", borderTop:`3px solid ${dtResult.color}` }}>
              <h4 style={{ color:"white", marginBottom:"0.5rem", fontSize:"1rem" }}>{dtResult.title}</h4>
              <p style={{ fontSize:"0.87rem", color:"#BBB", lineHeight:1.6, marginBottom:"0.8rem" }}>{dtResult.body}</p>
              <div style={{ background:"#444", borderRadius:8, padding:"0.7rem 1rem", fontSize:"0.82rem", color:"#CCC" }}>{dtResult.note}</div>
            </div>
          )}
        </>
      )}

      {tab === "roadmap" && (
        <>
          <SectionLabel color={ACC}>Activity Part 2 · Roadmap Workshop</SectionLabel>
          <H2 style={{ marginBottom:"0.3rem" }}>PGB AI Adoption Roadmap</H2>
          <p style={{ fontSize:"0.85rem", color:C.midgray, marginBottom:"1.5rem" }}>The sequenced 3-phase strategy for PGB to adopt AI platforms — from foundation to intelligence.</p>
          {[
            { num:1, label:"Phase 1 — Months 1–12", title:"Establish the Foundation", platform:"NetSuite", color:C.red, bg:"#FFF5F5", items:[
              { strong:"Goal:", rest:" Single source of truth for all 10 PGB subsidiaries — financials, HR, payroll, inventory, and procurement records." },
              { strong:"Who leads:", rest:" Finance, HR, IT across all SBUs" },
              { strong:"KPIs:", rest:" Time to close books (↓), payroll error rate (↓), inventory record accuracy (↑)" },
              { strong:"Entry point:", rest:" ~$30–75K/yr · Request demo at oracle.com/netsuite" },
              { strong:"Success gate:", rest:" 3 consecutive clean month-end closes with no spreadsheet dependency before Phase 2." },
            ]},
            { num:2, label:"Phase 2 — Months 12–24", title:"Scale Operations", platform:"Blue Yonder AI", color:C.byBlue, bg:"#EBF3FF", items:[
              { strong:"Goal:", rest:" Supply chain intelligence layered on clean NetSuite data — demand forecasting, warehouse AI, freight reconciliation." },
              { strong:"Who leads:", rest:" AMICI operations, AAC/PSC procurement and logistics teams" },
              { strong:"KPIs:", rest:" Forecast accuracy % (↑), freight billing errors (↓), warehouse throughput (↑)" },
              { strong:"Entry point:", rest:" Enterprise contract · Pilot in AMICI freight module first" },
              { strong:"Success gate:", rest:" Measurable improvement in 2 of 3 KPIs within 6 months of go-live before Phase 3." },
            ]},
            { num:3, label:"Phase 3 — Months 24–36+", title:"Add AI Intelligence", platform:"C3 AI", color:C.c3Teal, bg:"#E6F9F8", items:[
              { strong:"Goal:", rest:" Predictive intelligence and custom AI apps across all SBUs — maintenance, skills analytics, risk scoring, and beyond." },
              { strong:"Who leads:", rest:" All SBUs · Engineering, HR, operations, training teams" },
              { strong:"KPIs:", rest:" Equipment uptime % (↑), skills gap closure rate (↑), AI app time-to-value (↓)" },
              { strong:"Entry point:", rest:" 6-month negotiated pilot · $250–500K · Start with Predictive Maintenance (AMICI) or Skills Analytics (HCDSBU)" },
              { strong:"Success gate:", rest:" At least 1 production AI app delivering measurable ROI before scaling to additional SBUs." },
            ]},
          ].map((ph, pi) => (
            <div key={pi}>
              <div style={{ background:ph.bg, borderRadius:10, padding:"1.2rem", marginBottom:"0.4rem" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.8rem", marginBottom:"0.8rem" }}>
                  <div style={{ background:ph.color, color:"white", fontWeight:700, width:36, height:36, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem", flexShrink:0 }}>{ph.num}</div>
                  <div>
                    <div style={{ fontSize:"0.68rem", fontWeight:700, color:ph.color, textTransform:"uppercase", letterSpacing:"0.1em" }}>{ph.label}</div>
                    <h3 style={{ margin:0, fontSize:"1rem" }}>{ph.title} <span style={{ color:ph.color }}>({ph.platform})</span></h3>
                  </div>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:"0.35rem" }}>
                  {ph.items.map((item,i)=>(
                    <div key={i} style={{ display:"flex", gap:"0.5rem", alignItems:"flex-start", fontSize:"0.85rem" }}>
                      <div style={{ width:7, height:7, borderRadius:"50%", background:ph.color, flexShrink:0, marginTop:5 }} />
                      <span><strong>{item.strong}</strong>{item.rest}</span>
                    </div>
                  ))}
                </div>
              </div>
              {pi < 2 && <div style={{ textAlign:"center", color:C.midgray, margin:"0.2rem 0", fontSize:"0.82rem" }}>↓ data becomes clean and connected ↓</div>}
            </div>
          ))}

          <div style={{ background:C.charcoal, borderRadius:10, padding:"1.3rem", marginTop:"1.5rem" }}>
            <div style={{ fontSize:"0.7rem", fontWeight:700, color:C.orange, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.5rem" }}>Roadmap Workshop · 50 minutes</div>
            <h3 style={{ color:"white", marginBottom:"0.6rem" }}>Build PGB's Roadmap Together</h3>
            {["Post briefs (10 min): Each participant places their use case brief under Phase 1, 2, or 3. Use the Decision Tool recommendation to guide placement.","Review & negotiate (15 min): Group reviews all placements. If two people placed similar briefs in different phases, discuss and align.","Assign ownership (10 min): For each use case — who owns it? Who are the key stakeholders? What's the first action?","Identify quick wins (10 min): Within Phase 1, identify the 1 use case pilotable within 90 days. Circle it — this is PGB's immediate next step.","Name the roadmap (5 min): Give PGB's AI adoption roadmap a name that reflects its ambition. Present to the group."].map((s,i)=>(
              <div key={i} style={{ display:"flex", gap:"0.7rem", marginBottom:"0.6rem", alignItems:"flex-start" }}>
                <div style={{ background:C.orange, color:"white", fontWeight:700, fontSize:"0.8rem", width:22, height:22, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>{i+1}</div>
                <span style={{ color:"#CCC", fontSize:"0.87rem" }}>{s}</span>
              </div>
            ))}
          </div>

          <div style={{ background:C.charcoal, borderRadius:10, padding:"1.3rem", marginTop:"1rem" }}>
            <div style={{ fontSize:"0.7rem", fontWeight:700, color:C.orange, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.5rem" }}>Leadership Pitch · 30 minutes · High-Stakes Practice</div>
            <h3 style={{ color:"white", marginBottom:"0.6rem" }}>"Elevator Pitch to the Board" Exercise</h3>
            <p style={{ fontSize:"0.87rem", color:"#CCC", marginBottom:"0.8rem" }}>Each SBU team prepares and delivers a 3-minute pitch recommending one platform for one specific use case — to the "executive panel."</p>
            <div style={{ background:"#444", borderRadius:8, padding:"0.9rem 1rem" }}>
              <div style={{ color:"white", fontSize:"0.85rem", fontWeight:700, marginBottom:"0.5rem" }}>Pitch structure (3 minutes):</div>
              {[["🟠 The Problem (30 sec)","What pain does your SBU face today? Give a number."],["🟠 The Platform (60 sec)","Which platform, which capability, and why it fits."],["🟠 The Outcome (45 sec)","What measurable result do you expect? What's the KPI?"],["🟠 The Ask (45 sec)","What do you need from leadership to move forward?"]].map(([t,d],i)=>(
                <div key={i} style={{ display:"flex", gap:"0.6rem", marginBottom:"0.4rem", fontSize:"0.83rem" }}>
                  <strong style={{ color:C.orange, whiteSpace:"nowrap" }}>{t}</strong>
                  <span style={{ color:"#CCC" }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {tab === "check" && (
        <>
          <SectionLabel color={ACC}>Lab 3 · Final Knowledge Check</SectionLabel>
          <H2 style={{ marginBottom:"0.3rem" }}>5-Question Final Quiz</H2>
          <p style={{ fontSize:"0.85rem", color:C.midgray, marginBottom:"1.2rem" }}>The capstone check — covering all three labs.</p>
          <KnowledgeCheck questions={KC} accentColor={ACC} />
        </>
      )}

      {tab === "facilitator" && (
        <>
          <SectionLabel color={C.orange}>Facilitator Guide · Lab 3</SectionLabel>
          <H2 style={{ marginBottom:"1.2rem" }}>Facilitation Notes</H2>
          <FacBox label="Before the Session">
            <ul style={{ paddingLeft:"1.1rem", fontSize:"0.85rem", lineHeight:1.7, color:C.darkgray }}>
              <li>Review all Lab 2 use case briefs before this session. Group them roughly by phase to speed up the roadmap activity.</li>
              <li>Prepare the 3-phase roadmap on a large sheet of paper — three columns labeled Phase 1/2/3 with the platform name.</li>
              <li>Invite a senior PGB leader to attend the Leadership Pitch segment — it raises stakes and sharpens pitches dramatically.</li>
              <li>Prepare dot stickers for brief placement and different-colored stickers for ownership marking.</li>
            </ul>
          </FacBox>
          <FacBox label="Running the Decision Tool (Module H)">
            <ul style={{ paddingLeft:"1.1rem", fontSize:"0.85rem", lineHeight:1.7, color:C.darkgray }}>
              <li>Walk through 2 worked examples before participants use it independently.</li>
              <li>Example 1: AMICI freight reconciliation → Q1: SC → Recommendation: Blue Yonder AI, Freight module.</li>
              <li>Example 2: HCDSBU skills gap → Q1: Predict → Q4: None → Recommendation: C3 AI Skills Analytics, APA entry point.</li>
            </ul>
          </FacBox>
          <FacBox label="Managing the Roadmap Workshop">
            <ul style={{ paddingLeft:"1.1rem", fontSize:"0.85rem", lineHeight:1.7, color:C.darkgray }}>
              <li>Most common issue: participants want to put everything in Phase 3. Redirect: "Can this be done with what we already have in Phase 1?"</li>
              <li>Conflicts over phase placement are healthy — let them negotiate briefly, then move on.</li>
              <li>The "quick win" in Step 4 is the most important output of the whole lab. Make it concrete: specific use case, specific team, specific first action.</li>
            </ul>
          </FacBox>
          <FacBox label="Running the Leadership Pitch">
            <ul style={{ paddingLeft:"1.1rem", fontSize:"0.85rem", lineHeight:1.7, color:C.darkgray }}>
              <li>Give 5 minutes prep time. Run pitches back-to-back with strict timing — use a visible timer.</li>
              <li>As the "executive panel," ask one hard question per pitch: "What happens if we don't do this?" or "What's the biggest risk?"</li>
            </ul>
          </FacBox>
          <FacBox label="Closing the Series">
            <p style={{ fontSize:"0.85rem", lineHeight:1.65, color:C.darkgray }}>Ask every participant to complete: <em>"Because of this lab series, I will _________ within the next 30 days."</em> Go around the room. Capture the commitments. Share them with participants after the session as a follow-up accountability nudge. This single closing ritual has more long-term impact than most of the lecture content.</p>
          </FacBox>
          <Card accentColor={ACC}>
            <h4 style={{ marginBottom:"0.6rem", color:ACC }}>Series Completion Checklist</h4>
            <div style={{ display:"flex", flexDirection:"column", gap:"0.3rem", fontSize:"0.85rem" }}>
              {["All use case briefs collected and photographed","PGB roadmap photographed and digitized","30-day commitments captured and shared with participants","Top 3 use case briefs flagged for leadership elevation","'Quick win' use case assigned to an owner with a due date","Knowledge Check scores recorded for completion tracking","Certificates distributed (if applicable)"].map((item,i)=>(
                <label key={i} style={{ display:"flex", gap:"0.5rem", alignItems:"center" }}>
                  <input type="checkbox" /> {item}
                </label>
              ))}
            </div>
          </Card>
        </>
      )}
    </div>
  )
}
