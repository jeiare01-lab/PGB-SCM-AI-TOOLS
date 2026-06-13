import { useState } from "react"
import { C, Hero, Card, CapCard, SectionLabel, H2, AgendaRow, DiscussBox, FacBox, Tabs, KnowledgeCheck, WfStep, SbuRow } from "../components/shared"

const TABS = [
  { id:"overview",    label:"Overview"         },
  { id:"agenda",      label:"Agenda"           },
  { id:"usecases",    label:"Use Cases"        },
  { id:"workflows",   label:"Workflows & UI"   },
  { id:"activities",  label:"Activities"       },
  { id:"check",       label:"Knowledge Check"  },
  { id:"facilitator", label:"Facilitator Guide"},
]

const ROLE_TABS = [
  { id:"ops",  label:"⚙️ Operations / Logistics" },
  { id:"it",   label:"💻 IT / Analyst"            },
  { id:"hc",   label:"👥 HR / Training"           },
  { id:"mgmt", label:"📊 Management"              },
]

const KC = [
  { q:"In Blue Yonder's Demand Planning workflow, what fires when demand cannot be met by existing supply?", opts:["A purchase order","A Constraint Alert","A customer email","A freight invoice"], ans:1 },
  { q:"What does the C3 AI 'Process Extraction Agent' do in the APA workflow?", opts:["Extracts data from spreadsheets","Converts natural language into a structured step-by-step workflow","Trains the ML model","Sends automated emails to vendors"], ans:1 },
  { q:"Which C3 AI workflow is most directly relevant for AMICI's vessel maintenance?", opts:["HR Skills Analytics App","Agentic Process Automation (APA)","Predictive Maintenance workflow","C3 Code App Builder"], ans:2 },
  { q:"What is the key output of a well-written Use Case Brief?", opts:["A technical specification document","A vendor contract","A specific, measurable problem matched to a platform and a KPI","A list of all platform features"], ans:2 },
  { q:"After consensus approval in Blue Yonder, what happens automatically?", opts:["Plan stored in a spreadsheet","Plan auto-generates warehouse tasks, POs, and transport schedules","Finance teams re-enter the plan into NetSuite manually","Platform sends a report to the CEO"], ans:1 },
]

function ByDemandUI() {
  return (
    <div style={{ border:`1px solid #E5E7EB`, borderRadius:10, overflow:"hidden", marginBottom:"1rem", boxShadow:"0 2px 8px rgba(0,0,0,0.07)" }}>
      <div style={{ background:"#003A7A", padding:"0.8rem 1.2rem", display:"flex", alignItems:"center", gap:"0.8rem" }}>
        <span style={{ color:"#88BBFF", fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase" }}>Platform UI</span>
        <span style={{ color:"white", fontSize:"0.88rem", fontWeight:700 }}>Blue Yonder AI — Demand 360 Worksheet</span>
        <span style={{ marginLeft:"auto", fontSize:"0.72rem", color:"#88BBFF" }}>Illustrated mock-up · official documentation</span>
      </div>
      <div style={{ background:"#1A1A2E", padding:"0.4rem 0.8rem", display:"flex", alignItems:"center", gap:"0.4rem" }}>
        {["#FF5F57","#FEBC2E","#28C840"].map((c,i)=><div key={i} style={{ width:10, height:10, borderRadius:"50%", background:c }} />)}
        <div style={{ background:"#2A2A3E", borderRadius:4, flex:1, padding:"0.2rem 0.7rem", fontSize:"0.72rem", color:"#888", fontFamily:"monospace" }}>app.blueyonder.com/demand/demand-360-worksheet</div>
      </div>
      <div style={{ display:"flex", minHeight:340 }}>
        {/* Sidebar */}
        <div style={{ background:"#003A7A", width:175, flexShrink:0, paddingTop:"0.5rem" }}>
          <div style={{ padding:"0.4rem 0.9rem 0.6rem", borderBottom:"1px solid #004488" }}>
            <div style={{ color:"#88BBFF", fontSize:"0.62rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.1em" }}>BLUE YONDER</div>
          </div>
          {[["📊 Demand Planning",true],["📦 Supply Planning",false],["🏭 Warehouse Mgmt",false],["🚛 Transportation",false],["🤖 AI Agents",false],["📈 Analytics",false],["🕸️ Network",false],["⚙️ Settings",false]].map(([label,active],i)=>(
            <div key={i} style={{ padding:"0.5rem 0.9rem", background:active?"#0055AA":"transparent", borderRight:active?"3px solid #00AAFF":"none", borderBottom:"1px solid #004080" }}>
              <span style={{ color:active?"white":"#AACCEE", fontSize:"0.78rem", fontWeight:active?700:400 }}>{label}</span>
            </div>
          ))}
        </div>
        {/* Main */}
        <div style={{ flex:1, padding:"0.9rem", background:"#F0F2F5", overflow:"auto" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"0.7rem", flexWrap:"wrap", gap:"0.3rem" }}>
            <div style={{ fontSize:"0.72rem", color:"#666" }}>Demand Planning &gt; <strong>Demand 360 Worksheet</strong></div>
            <div style={{ display:"flex", gap:"0.3rem" }}>
              {["Run Forecast","Consensus Meeting","Export"].map((btn,i)=>(
                <div key={i} style={{ background:i===0?"#0066CC":"white", color:i===0?"white":"#374151", border:i!==0?"1px solid #CCC":"none", fontSize:"0.7rem", padding:"0.25rem 0.6rem", borderRadius:4, cursor:"pointer" }}>{btn}</div>
              ))}
            </div>
          </div>
          <div style={{ background:"#E8F4FF", border:"1px solid #0066CC", borderRadius:6, padding:"0.45rem 0.8rem", marginBottom:"0.7rem", display:"flex", alignItems:"center", gap:"0.5rem" }}>
            <span>🤖</span>
            <span style={{ fontSize:"0.76rem", color:"#003A7A" }}><strong>AI Planning Agent:</strong> Demand spike detected for SKU-AAC-2247 (+34%). Constraint Alert — stock covers 72%. Recommend alternate supplier pre-order. <span style={{ color:"#0066CC", fontWeight:700, cursor:"pointer" }}>Review →</span></span>
          </div>
          <div style={{ display:"flex", gap:"0.4rem", marginBottom:"0.7rem", flexWrap:"wrap" }}>
            {[["Forecast Accuracy","91.4%","#0066CC","↑ +2.1%","#22C55E"],["Open Constraints","3","#E85C0D","Action required","#E85C0D"],["Consensus","Pending","#F59E0B","2 approvers out","#888"],["SKUs Planned","1,247","#374151","All covered","#22C55E"]].map(([l,v,vc,s,sc],i)=>(
              <div key={i} style={{ background:"white", borderRadius:6, padding:"0.55rem 0.8rem", flex:1, minWidth:90, boxShadow:"0 1px 4px rgba(0,0,0,0.08)" }}>
                <div style={{ fontSize:"0.65rem", color:"#888", marginBottom:"0.15rem" }}>{l}</div>
                <div style={{ fontSize:"1.2rem", fontWeight:700, color:vc }}>{v}</div>
                <div style={{ fontSize:"0.65rem", color:sc }}>{s}</div>
              </div>
            ))}
          </div>
          <div style={{ background:"white", borderRadius:6, boxShadow:"0 1px 4px rgba(0,0,0,0.08)", overflow:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"0.72rem", minWidth:480 }}>
              <thead>
                <tr style={{ background:"#F9FAFB", borderBottom:"2px solid #E5E7EB" }}>
                  {["SKU / Product","Baseline AI","Adjusted","Consensus","Supply Avail.","Status"].map((h,i)=>(
                    <th key={i} style={{ padding:"0.45rem 0.6rem", textAlign:i===0?"left":"center", color:"#374151", fontWeight:700 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["AAC-Cement-40kg","4,200","4,850","—","5,100","OK","#D1FAE5","#065F46"],
                  ["PSC-Steel-Bar-16mm","2,100","2,840","—","2,050","⚠ Constrained","#FEF3C7","#92400E"],
                  ["CSI-Rebar-12mm","3,400","3,400","✓ 3,400","4,200","Approved","#D1FAE5","#065F46"],
                  ["AMICI-Cargo-Fuel","18,500L","19,200L","Pending","22,000L","In Review","#EDE9FE","#5B21B6"],
                ].map(([sku,base,adj,cons,sup,status,sbg,sc],i)=>(
                  <tr key={i} style={{ borderBottom:"1px solid #F3F4F6", background:i%2===1?"#FFFBF5":"white" }}>
                    <td style={{ padding:"0.4rem 0.6rem", fontWeight:600 }}>{sku}</td>
                    <td style={{ padding:"0.4rem 0.6rem", textAlign:"center", color:"#666" }}>{base}</td>
                    <td style={{ padding:"0.4rem 0.6rem", textAlign:"center", color:"#0066CC", fontWeight:600 }}>{adj}</td>
                    <td style={{ padding:"0.4rem 0.6rem", textAlign:"center", color:"#666" }}>{cons}</td>
                    <td style={{ padding:"0.4rem 0.6rem", textAlign:"center" }}>{sup}</td>
                    <td style={{ padding:"0.4rem 0.6rem", textAlign:"center" }}><span style={{ background:sbg, color:sc, padding:"0.12rem 0.45rem", borderRadius:999, fontSize:"0.68rem" }}>{status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div style={{ background:"#F0F2F5", padding:"0.45rem 1rem", borderTop:"1px solid #DDD", fontSize:"0.7rem", color:"#888" }}>
        📌 <strong>Nav path:</strong> Left sidebar → Demand Planning → Demand 360 Worksheet → Review AI Baseline → Run Forecast → Consensus Meeting
      </div>
    </div>
  )
}

function C3PredUI() {
  return (
    <div style={{ border:`1px solid #E5E7EB`, borderRadius:10, overflow:"hidden", marginBottom:"1rem", boxShadow:"0 2px 8px rgba(0,0,0,0.07)" }}>
      <div style={{ background:"#077A76", padding:"0.8rem 1.2rem", display:"flex", alignItems:"center", gap:"0.8rem" }}>
        <span style={{ color:"#AAEAE7", fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase" }}>Platform UI</span>
        <span style={{ color:"white", fontSize:"0.88rem", fontWeight:700 }}>C3 AI — Predictive Maintenance Fleet Dashboard</span>
        <span style={{ marginLeft:"auto", fontSize:"0.72rem", color:"#AAEAE7" }}>Illustrated mock-up · official documentation</span>
      </div>
      <div style={{ background:"#1A1A2E", padding:"0.4rem 0.8rem", display:"flex", alignItems:"center", gap:"0.4rem" }}>
        {["#FF5F57","#FEBC2E","#28C840"].map((c,i)=><div key={i} style={{ width:10, height:10, borderRadius:"50%", background:c }} />)}
        <div style={{ background:"#2A2A3E", borderRadius:4, flex:1, padding:"0.2rem 0.7rem", fontSize:"0.72rem", color:"#888", fontFamily:"monospace" }}>platform.c3.ai/apps/predictive-maintenance</div>
      </div>
      <div style={{ display:"flex", minHeight:360 }}>
        <div style={{ background:"#0B2A29", width:175, flexShrink:0, paddingTop:"0.5rem" }}>
          <div style={{ padding:"0.5rem 0.9rem", borderBottom:"1px solid #1A4A48" }}>
            <div style={{ color:"#0EA5A0", fontSize:"0.62rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.1em" }}>C3 AI PLATFORM</div>
          </div>
          <div style={{ padding:"0.3rem 0.9rem 0.2rem", marginTop:"0.3rem" }}>
            <div style={{ color:"#AADDDD", fontSize:"0.62rem", textTransform:"uppercase", letterSpacing:"0.08em" }}>Applications</div>
          </div>
          {[["🔧 Predictive Maintenance",true],["📦 Inventory Optimization",false],["📊 Supply Chain AI",false],["👥 HR Skills Analytics",false]].map(([label,active],i)=>(
            <div key={i} style={{ padding:"0.45rem 0.9rem", background:active?"#0EA5A0":"transparent", borderRight:active?"3px solid #00FFEE":"none", borderBottom:"1px solid #1A4A48" }}>
              <span style={{ color:active?"white":"#88CCCC", fontSize:"0.78rem", fontWeight:active?700:400 }}>{label}</span>
            </div>
          ))}
          <div style={{ padding:"0.3rem 0.9rem 0.2rem", marginTop:"0.4rem" }}>
            <div style={{ color:"#AADDDD", fontSize:"0.62rem", textTransform:"uppercase", letterSpacing:"0.08em" }}>Development</div>
          </div>
          {["⚡ C3 Code","🔄 APA Workflows","🖥️ C3 AI Studio","🧩 Ex Machina"].map((label,i)=>(
            <div key={i} style={{ padding:"0.45rem 0.9rem", borderBottom:"1px solid #1A4A48" }}>
              <span style={{ color:"#88CCCC", fontSize:"0.78rem" }}>{label}</span>
            </div>
          ))}
        </div>
        <div style={{ flex:1, padding:"0.9rem", background:"#F8FAFA", overflow:"auto" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"0.7rem", flexWrap:"wrap", gap:"0.3rem" }}>
            <div>
              <div style={{ fontSize:"0.7rem", color:"#666" }}>Applications &gt; <strong>Predictive Maintenance</strong> &gt; Fleet Health Dashboard</div>
              <div style={{ fontSize:"0.95rem", fontWeight:700, color:"#0B2A29" }}>AMICI Fleet — Health Monitor</div>
            </div>
            <div style={{ display:"flex", gap:"0.3rem" }}>
              <div style={{ background:"#0EA5A0", color:"white", fontSize:"0.7rem", padding:"0.25rem 0.6rem", borderRadius:4 }}>+ New Work Order</div>
              <div style={{ background:"white", border:"1px solid #CCC", fontSize:"0.7rem", padding:"0.25rem 0.6rem", borderRadius:4 }}>Retrain Model</div>
            </div>
          </div>
          <div style={{ background:"#E6F9F8", border:"1px solid #0EA5A0", borderRadius:6, padding:"0.4rem 0.8rem", marginBottom:"0.7rem", display:"flex", alignItems:"center", gap:"0.5rem" }}>
            <span>🧠</span>
            <span style={{ fontSize:"0.74rem", color:"#065F46" }}><strong>ML Model Status:</strong> Last trained 6 hrs ago · 94.2% accuracy · Next retrain: Tonight 02:00</span>
          </div>
          <div style={{ display:"flex", gap:"0.4rem", marginBottom:"0.7rem", flexWrap:"wrap" }}>
            {[["HEALTHY","12","#D1FAE5","#065F46","Vessels / Assets"],["WATCH","4","#FEF3C7","#D97706","Monitor closely"],["INTERVENE","2","#FEE2E2","#EF4444","Work orders raised"],["Avg Risk","8.3%","white","#0EA5A0","↓ vs 11.2% last mo."]].map(([l,v,bg,vc,s],i)=>(
              <div key={i} style={{ background:bg, borderRadius:6, padding:"0.55rem 0.8rem", flex:1, minWidth:90, boxShadow:"0 1px 4px rgba(0,0,0,0.08)" }}>
                <div style={{ fontSize:"0.62rem", color:vc, marginBottom:"0.15rem", fontWeight:700 }}>{l}</div>
                <div style={{ fontSize:"1.2rem", fontWeight:700, color:vc }}>{v}</div>
                <div style={{ fontSize:"0.65rem", color:vc }}>{s}</div>
              </div>
            ))}
          </div>
          <div style={{ background:"white", borderRadius:6, overflow:"auto", boxShadow:"0 1px 4px rgba(0,0,0,0.08)" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"0.72rem", minWidth:440 }}>
              <thead>
                <tr style={{ background:"#F9FAFB", borderBottom:"2px solid #E5E7EB" }}>
                  {["Asset / Vessel","Failure Risk","RUL (Days)","Last Maintained","Action"].map((h,i)=>(
                    <th key={i} style={{ padding:"0.45rem 0.6rem", textAlign:i===0?"left":"center", color:"#374151", fontWeight:700 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["MV Sta. Clara — Engine","74%","8 days","47 days ago","View WO","#FEE2E2","#991B1B","#EF4444","#0EA5A0"],
                  ["MV San Pedro — Pump","38%","22 days","31 days ago","Schedule","#FEF3C7","#92400E","#D97706","#F59E0B"],
                  ["MV Batangas — Hull","6%","180+ days","12 days ago","Healthy","#D1FAE5","#065F46","#22C55E","#888"],
                  ["PSC Crane Unit 3","29%","35 days","18 days ago","Schedule","#FEF3C7","#92400E","#D97706","#F59E0B"],
                ].map(([asset,risk,rul,maint,action,rbg,rc,rulc,ac],i)=>(
                  <tr key={i} style={{ borderBottom:"1px solid #F3F4F6" }}>
                    <td style={{ padding:"0.4rem 0.6rem", fontWeight:600 }}>{asset}</td>
                    <td style={{ padding:"0.4rem 0.6rem", textAlign:"center" }}><span style={{ background:rbg, color:rc, padding:"0.12rem 0.45rem", borderRadius:999, fontWeight:700 }}>{risk}</span></td>
                    <td style={{ padding:"0.4rem 0.6rem", textAlign:"center", color:rulc, fontWeight:700 }}>{rul}</td>
                    <td style={{ padding:"0.4rem 0.6rem", textAlign:"center", color:"#888" }}>{maint}</td>
                    <td style={{ padding:"0.4rem 0.6rem", textAlign:"center" }}><span style={{ background:ac==="white"?"transparent":ac, color:ac==="#888"?"#888":"white", padding:"0.18rem 0.45rem", borderRadius:4, fontSize:"0.68rem", cursor:"pointer", border:ac==="#888"?"none":"none" }}>{action}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div style={{ background:"#F0F9F8", padding:"0.45rem 1rem", borderTop:"1px solid #C6E8E6", fontSize:"0.7rem", color:"#666" }}>
        📌 <strong>Nav path:</strong> Applications → Predictive Maintenance → Fleet Health Dashboard → Review risk scores → View / create Work Orders
      </div>
    </div>
  )
}

function C3ApaUI() {
  return (
    <div style={{ border:`1px solid #E5E7EB`, borderRadius:10, overflow:"hidden", marginBottom:"1.5rem", boxShadow:"0 2px 8px rgba(0,0,0,0.07)" }}>
      <div style={{ background:"#7A2E06", padding:"0.8rem 1.2rem", display:"flex", alignItems:"center", gap:"0.8rem" }}>
        <span style={{ color:"#FFB899", fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase" }}>Platform UI</span>
        <span style={{ color:"white", fontSize:"0.88rem", fontWeight:700 }}>C3 AI — Agentic Process Automation (APA)</span>
        <span style={{ marginLeft:"auto", fontSize:"0.72rem", color:"#FFB899" }}>Illustrated mock-up · official documentation</span>
      </div>
      <div style={{ background:"#1A1A2E", padding:"0.4rem 0.8rem", display:"flex", alignItems:"center", gap:"0.4rem" }}>
        {["#FF5F57","#FEBC2E","#28C840"].map((c,i)=><div key={i} style={{ width:10, height:10, borderRadius:"50%", background:c }} />)}
        <div style={{ background:"#2A2A3E", borderRadius:4, flex:1, padding:"0.2rem 0.7rem", fontSize:"0.72rem", color:"#888", fontFamily:"monospace" }}>platform.c3.ai/apa/workflows/new</div>
      </div>
      <div style={{ background:"#FFFBF8", padding:"1.2rem" }}>
        <div style={{ marginBottom:"0.9rem" }}>
          <div style={{ fontSize:"0.78rem", fontWeight:700, color:"#374151", marginBottom:"0.4rem" }}>Describe your automation goal:</div>
          <div style={{ background:"white", border:`2px solid ${C.orange}`, borderRadius:8, padding:"0.65rem 1rem", display:"flex", alignItems:"center", gap:"0.5rem", boxShadow:"0 2px 8px rgba(232,92,13,0.1)" }}>
            <span style={{ fontSize:"0.83rem", color:"#374151", flex:1 }}>Notify HR when SEAMAN training enrollment drops below 80% capacity for any upcoming cohort</span>
            <div style={{ background:C.orange, color:"white", fontSize:"0.75rem", fontWeight:700, padding:"0.3rem 0.75rem", borderRadius:6, cursor:"pointer", whiteSpace:"nowrap" }}>Generate →</div>
          </div>
        </div>
        <div style={{ background:"white", borderRadius:8, padding:"1rem", boxShadow:"0 1px 6px rgba(0,0,0,0.07)" }}>
          <div style={{ fontSize:"0.72rem", fontWeight:700, color:C.orange, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:"0.7rem" }}>🤖 Auto-Generated Workflow — Process Extraction Agent</div>
          {[
            { num:1, title:"Trigger: Scheduled check — daily at 06:00 PH Time", sub:"Data source: SEAMAN Training Management System → enrollment records" },
            { num:2, title:"Condition: IF enrollment_rate < 80% FOR any cohort starting within 30 days", sub:"AI evaluates each cohort independently against the threshold" },
            { num:3, title:"Action: Send alert to HR Training Manager + Training Coordinator", sub:"Channels: Email + Teams · Include: cohort name, current %, seats available, deadline" },
            { num:4, title:"Log: Record alert, enrollment snapshot, and timestamp in audit trail", sub:"Full audit trail — traceable per compliance requirements", last:true },
          ].map((s,i)=>(
            <div key={i} style={{ display:"flex", alignItems:"stretch", gap:0, marginBottom:0 }}>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", width:30, flexShrink:0 }}>
                <div style={{ background:s.last?"#22C55E":C.orange, color:"white", width:22, height:22, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.7rem", fontWeight:700 }}>{s.num}</div>
                {!s.last && <div style={{ width:2, flex:1, background:"#E5E7EB", margin:"2px 0" }} />}
              </div>
              <div style={{ paddingLeft:"0.7rem", paddingBottom: s.last?0:"0.7rem", flex:1 }}>
                <div style={{ fontSize:"0.8rem", fontWeight:600, color:"#374151" }}>{s.title}</div>
                <div style={{ fontSize:"0.73rem", color:"#888", marginTop:"0.12rem" }}>{s.sub}</div>
              </div>
            </div>
          ))}
          <div style={{ display:"flex", gap:"0.4rem", marginTop:"0.8rem", flexWrap:"wrap" }}>
            {[["✓ Approve & Test","#0EA5A0","white"],["Edit Step","white","#374151"],["Refine with AI",C.orange,"white"]].map(([label,bg,color],i)=>(
              <div key={i} style={{ background:bg, color, border:bg==="white"?"1.5px solid #CCC":"none", fontSize:"0.73rem", fontWeight:700, padding:"0.32rem 0.75rem", borderRadius:6, cursor:"pointer" }}>{label}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background:"#FFF5EF", padding:"0.45rem 1rem", borderTop:"1px solid #FFD0B0", fontSize:"0.7rem", color:"#666" }}>
        📌 <strong>Nav path:</strong> Left sidebar → APA Workflows → New Workflow → Describe goal → Review steps → Test → Deploy
      </div>
    </div>
  )
}

export default function Lab2() {
  const [tab, setTab] = useState("overview")
  const [role, setRole] = useState("ops")
  const ACC = C.c3Teal

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "1.8rem 1.2rem 4rem" }}>
      <Tabs tabs={TABS} active={tab} onSelect={setTab} accentColor={ACC} />

      {tab === "overview" && (
        <>
          <Hero eyebrow="PGB AI Platform Learning Series · Lab 2 of 3" title="Application: Use Cases & Hands-On Workflows"
            desc="Participants move from understanding to application — walking through real PGB use cases and step-by-step platform workflows, with illustrated UI navigation mock-ups."
            meta={["⏱ 3.5 Hours","👥 Facilitator-Led","🎯 All Roles · All SBUs","📍 Lab 2 of 3"]} accentColor={ACC} />
          <SectionLabel color={ACC}>Lab Objectives</SectionLabel>
          <H2 style={{ marginBottom:"1rem" }}>By the end of this lab, participants will be able to…</H2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))", gap:"1rem" }}>
            <CapCard icon="🗺️" color={ACC} title="Map use cases to SBUs" body="Match at least 3 platform use cases to specific pain points within their own SBU." />
            <CapCard icon="🔄" color={C.byBlue} title="Walk a Blue Yonder workflow" body="Describe the 6 steps of the Demand Planning or Warehouse Management workflow end to end." />
            <CapCard icon="🤖" color={C.c3Teal} title="Walk a C3 AI workflow" body="Describe how the APA workflow or C3 Code app builder works — including what each step produces." />
            <CapCard icon="📝" color={C.orange} title="Draft a use case brief" body="Write a structured one-paragraph use case brief for their SBU for use in a vendor conversation." />
          </div>
        </>
      )}

      {tab === "agenda" && (
        <>
          <SectionLabel color={ACC}>Lab 2 · Half-Day Agenda</SectionLabel>
          <H2 style={{ marginBottom:"0.3rem" }}>Session Schedule</H2>
          <p style={{ fontSize:"0.85rem", color:C.midgray, marginBottom:"1.2rem" }}>Total: 3.5 hours · Builds on Lab 1 foundation</p>
          {[
            { time:"8:00–8:10", title:"Recap & Lab 1 Callback", type:"Discussion", desc:"Quick debrief of Lab 1 takeaways. Facilitator references whiteboard pain points from Lab 1 Discussion 2." },
            { time:"8:10–8:45", title:"Module E: PGB Use Cases — Blue Yonder AI", type:"Lecture", desc:"Real use cases mapped to all 4 SBUs. Emphasis on AMICI freight, AAC/PSC materials, and Demand Planning workflow." },
            { time:"8:45–9:20", title:"Module F: PGB Use Cases — C3 AI", type:"Lecture", desc:"Real use cases mapped to all 4 SBUs. Emphasis on AMICI predictive maintenance and HCDSBU skills analytics." },
            { time:"9:20–9:30", title:"Discussion: Which workflow fits your biggest pain point?", type:"Discussion", desc:"Pairs share: 'If we could implement one workflow tomorrow, it would be X because…'" },
            { time:"9:30–9:45", title:"Break", type:"Break", desc:"Refreshments · Informal Q&A" },
            { time:"9:45–10:00", title:"Workflow Walkthrough: Live Demo", type:"Lecture", desc:"Facilitator walks through one workflow live using the UI mock-ups in the Workflows & UI tab." },
            { time:"10:00–11:00", title:"Activity: 'Pain Point to Platform' Workshop", type:"Activity", desc:"Each participant drafts a use case brief. Groups peer-review. Top briefs presented to the full group." },
            { time:"11:00–11:20", title:"Gallery Walk & Knowledge Check", type:"Discussion", desc:"Briefs posted. Gallery walk + 5-question quiz. Group debrief on common themes." },
            { time:"11:20–11:30", title:"Close & Lab 3 Preview", type:"Lecture", desc:"Lab 3 compares platforms head-to-head and builds PGB's adoption roadmap. Bring your use case briefs." },
          ].map((r,i)=><AgendaRow key={i} {...r} />)}
        </>
      )}

      {tab === "usecases" && (
        <>
          <SectionLabel color={ACC}>Module E & F · Use Cases</SectionLabel>
          <H2 style={{ marginBottom:"1rem" }}>PGB Use Cases by Platform & SBU</H2>
          <h3 style={{ color:C.byBlue, marginBottom:"0.7rem" }}>🔵 Blue Yonder AI — PGB Use Cases</h3>
          <SbuRow sbu="Construction &amp;<br/>Manufacturing<br/><small>(AAC, CSI, PSC)</small>" color={C.byBlue} cases="Materials demand forecasting · Procurement schedule optimization · Warehouse task automation · Supply constraint alerts before orders are confirmed" />
          <SbuRow sbu="Real Estate<br/><small>(PHI, PPC)</small>" color={C.c3Teal} cases="Supplier & subcontractor network coordination · Project logistics planning · Delivery route optimization · Multi-supplier order reconciliation" />
          <SbuRow sbu="Maritime Logistics<br/><small>(AMICI)</small>" color={C.orange} cases="Freight reconciliation for multiple clients · Port-to-port route optimization · 3D cargo load-building · Automated billing discrepancy detection" />
          <SbuRow sbu="Human Capital<br/>Development" color={C.charcoal} cases="Workforce demand planning aligned to project pipelines · Manpower forecasting for SEAMAN, SKILLS, PSEFI · Training schedule load-balancing" />
          <h3 style={{ color:C.c3Teal, marginBottom:"0.7rem", marginTop:"1.5rem" }}>🟢 C3 AI — PGB Use Cases</h3>
          <SbuRow sbu="Construction &amp;<br/>Manufacturing<br/><small>(AAC, CSI, PSC)</small>" color={C.c3Teal} cases="Predictive maintenance for heavy equipment · Anomaly detection in manufacturing quality · AI project risk scoring · EVM analytics with ML cost-at-completion forecasting" />
          <SbuRow sbu="Real Estate<br/><small>(PHI, PPC)</small>" color={C.byBlue} cases="Building performance analytics · AI buyer/tenant demand forecasting · Contract and compliance AI review · Defect detection from site inspection data" />
          <SbuRow sbu="Maritime Logistics<br/><small>(AMICI)</small>" color={C.orange} cases="Vessel & fleet predictive maintenance · Fuel optimization ML models · Safety incident anomaly detection · Voyage cost vs. revenue AI analytics" />
          <SbuRow sbu="Human Capital<br/>Development" color={C.charcoal} cases="AI skills gap assessment for SEAMAN, SKILLS, PSI · Learner performance prediction · Training ROI analytics · Automated competency scoring" />
        </>
      )}

      {tab === "workflows" && (
        <>
          <SectionLabel color={ACC}>Module E & F · Platform UI Navigation</SectionLabel>
          <H2 style={{ marginBottom:"0.5rem" }}>Illustrated UI Mock-Ups</H2>
          <p style={{ fontSize:"0.85rem", color:C.midgray, marginBottom:"1.2rem" }}>High-fidelity navigation mock-ups based on official Blue Yonder and C3 AI platform documentation.</p>
          <ByDemandUI />
          <C3PredUI />
          <C3ApaUI />
          <p style={{ fontSize:"0.78rem", color:C.midgray, marginBottom:"1.5rem", fontStyle:"italic" }}>⚠️ These are illustrated mock-ups based on official platform documentation. Actual interfaces may vary by version and subscription tier.</p>

          <SectionLabel color={ACC}>Step-by-Step Workflows</SectionLabel>
          <H2 style={{ marginBottom:"0.5rem" }}>Role-Based Workflow Guides</H2>
          <Tabs tabs={ROLE_TABS} active={role} onSelect={setRole} accentColor={ACC} />

          {role === "ops" && (
            <>
              <Card accentColor={C.byBlue}>
                <h3 style={{ color:C.byBlue, marginBottom:"0.8rem" }}>🔵 Blue Yonder: Demand Planning (6 Steps)</h3>
                <p style={{ fontSize:"0.8rem", color:C.midgray, marginBottom:"1rem" }}><em>Supply Chain Planners, Procurement Officers — AAC, CSI, PSC, AMICI</em></p>
                <WfStep num={1} color={C.byBlue} title="Log in & Open Demand 360 Workspace" body="Open the Demand 360 Worksheet. View and edit forecasts across product, location, customer, and time in one multi-dimensional workspace." />
                <WfStep num={2} color={C.byBlue} title="Review AI-Generated Baseline Forecast" body="The platform auto-generates a statistical forecast filtering noise and identifying true demand signals — trends, seasonality, and step-changes." />
                <WfStep num={3} color={C.byBlue} title="Apply Demand Sensing & Promotions" body="Layer real-time market signals, promotions, and seasonal events. Model the lift and post-event dip." />
                <WfStep num={4} color={C.byBlue} title="Run Collaborative Consensus Planning" body="Invite sales, finance, and operations into a shared meeting. Output: one agreed plan — not three siloed spreadsheets." />
                <WfStep num={5} color={C.byBlue} title="Validate Against Supply Constraints" body="Platform checks demand against factory capacity and inventory. Constraint Alerts fire before orders are committed — not after." />
                <WfStep num={6} color={C.byBlue} title="Approve & Push to Execution" body="Plan auto-converts into warehouse tasks, purchase orders, and transport schedules. Planning-to-execution collapses from days to minutes." />
              </Card>
              <Card accentColor={C.c3Teal}>
                <h3 style={{ color:C.c3Teal, marginBottom:"0.8rem" }}>🟢 C3 AI: Predictive Maintenance (6 Steps)</h3>
                <p style={{ fontSize:"0.8rem", color:C.midgray, marginBottom:"1rem" }}><em>Engineering, Fleet Management, Site Supervisors — AMICI, PSC, AAC</em></p>
                {[["Connect Equipment Sensor Data","Link vessel or equipment IoT sensors. Set asset types, failure modes, and maintenance cost parameters."],["Train the ML Model on Historical Data","Load historical maintenance records and failure events. The model learns failure patterns specific to your fleet."],["Monitor the Fleet Health Dashboard","View real-time failure probability scores per asset. Color-coded heatmap — green (healthy), amber (watch), red (intervene)."],["Review Auto-Generated Work Orders","When an asset crosses the risk threshold, C3 AI auto-generates a work order with recommended parts and estimated downtime."],["Approve, Schedule & Execute","Supervisor approves. Scheduled during asset's lowest-utilization window. Crew deployed with pre-ordered parts."],["Capture Outcome & Retrain","Post-maintenance outcome is fed back into the model. ML improves with each maintenance cycle."]].map(([t,b],i)=><WfStep key={i} num={i+1} color={C.c3Teal} title={t} body={b} />)}
              </Card>
            </>
          )}

          {role === "it" && (
            <Card accentColor={C.purple}>
              <h3 style={{ color:C.purple, marginBottom:"0.8rem" }}>🟣 C3 AI: Building an App with C3 Code (6 Steps)</h3>
              <p style={{ fontSize:"0.8rem", color:C.midgray, marginBottom:"1rem" }}><em>Business Analysts, IT Teams, Data Scientists — All SBUs</em></p>
              {[["State Your Problem in Natural Language","Open C3 Code and describe the problem: 'Build an equipment health scoring app for AMICI's fleet showing failure probability and triggering maintenance work orders.'"],["C3 Code Generates the Full App","Reads your data models and business rules. Generates: data model, APIs, ML pipelines, agentic workflows, and a complete UI — from one prompt."],["Review & Refine via Natural Language","Inspect all generated components. Request changes conversationally: 'Add a maintenance cost field' or 'Group assets by vessel type.'"],["Connect Live Data & Train the Model","Map operational data sources to the app's data model. Load historical data to train the predictive ML model. Extend via JupyterLab."],["Test & Validate","Run on test data. Check prediction accuracy. Adjust parameters. All experimentation is auto-recorded for auditability."],["Deploy to Production","One-click production deployment. Fully governed: RBAC, audit logging, compliance built-in. Model retrains automatically on new data."]].map(([t,b],i)=><WfStep key={i} num={i+1} color={C.purple} title={t} body={b} />)}
            </Card>
          )}

          {role === "hc" && (
            <Card accentColor={C.gold}>
              <h3 style={{ color:C.gold, marginBottom:"0.8rem" }}>🟡 C3 AI: HR & Skills Analytics App (6 Steps)</h3>
              <p style={{ fontSize:"0.8rem", color:C.midgray, marginBottom:"1rem" }}><em>HR Managers, Training Coordinators — SEAMAN, SKILLS, PSEFI, PSI</em></p>
              {[["Upload Employee Skills & Training Records","Connect competency records, training completion, assessment scores, and certification history to the C3 AI HR app."],["Define Role Competency Frameworks","Set required competency levels per role and program. The app maps each employee's current state against the defined target."],["App Scores Gaps per Person & Team","AI generates a gap score per employee and team. Dashboard: who is ready, who needs development, what skills are critically missing."],["Get Prioritized Training Recommendations","AI recommends highest-priority training interventions per person — ranked by impact on team readiness and cost to close the gap."],["Track Learner Progress","Monitor training completion, assessment results, and competency improvement in real-time. Automated nudges to learners falling behind."],["Report Training ROI","Measure ROI: skills gap closure rate, time-to-competency, cost-per-competency-gain. Executive dashboard ready for quarterly EOS Rock reviews."]].map(([t,b],i)=><WfStep key={i} num={i+1} color={C.gold} title={t} body={b} />)}
            </Card>
          )}

          {role === "mgmt" && (
            <Card accentColor={C.orange}>
              <h3 style={{ color:C.orange, marginBottom:"0.8rem" }}>🟠 C3 AI: Agentic Process Automation (APA) — 6 Steps</h3>
              <p style={{ fontSize:"0.8rem", color:C.midgray, marginBottom:"1rem" }}><em>All Managers — No coding required · Any SBU</em></p>
              {[["Describe Your Goal in Plain Language","Type your objective: 'Automate supplier onboarding approval for PSC' or 'Alert HR when enrollment drops below 80%.' No technical knowledge needed."],["Review Auto-Generated Workflow","A Process Extraction Agent converts your text into a structured step-by-step workflow. Review triggers, actions, conditions, and data sources — all displayed clearly."],["Connect Data Sources","Link to ERP, HR systems, email, spreadsheets, or databases. C3 AI's Type System unifies data across sources without custom integration code."],["Set Triggers & Schedule","Choose: On Demand (manual), Event-Triggered (e.g., invoice received), or Scheduled (e.g., daily 8 AM). All modes available without coding."],["Test in Sandbox","Run in test mode before going live. Every action and AI decision is fully transparent and auditable — traceable to source data."],["Deploy, Monitor & Refine","Go live and monitor on the APA dashboard. Refine conversationally: 'Add an approval step before the PO is sent.' Changes take effect instantly."]].map(([t,b],i)=><WfStep key={i} num={i+1} color={C.orange} title={t} body={b} />)}
            </Card>
          )}
        </>
      )}

      {tab === "activities" && (
        <>
          <SectionLabel color={C.orange}>Lab 2 · Activities</SectionLabel>
          <H2 style={{ marginBottom:"1.2rem" }}>Group Activities</H2>
          <DiscussBox timing="Discussion · After Modules E & F · 10 minutes" question="If your team could implement one workflow from today's session tomorrow — which one, and what would change first?" hint="💬 Do this in pairs first (3 min), then share with the group." />
          <div style={{ background:C.charcoal, borderRadius:10, padding:"1.3rem", marginBottom:"1rem" }}>
            <div style={{ fontSize:"0.7rem", fontWeight:700, color:C.orange, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.5rem" }}>Main Activity · 60 minutes · Individual + Peer Review</div>
            <h3 style={{ color:"white", marginBottom:"0.6rem" }}>"Pain Point to Platform" — Use Case Brief Workshop</h3>
            <p style={{ fontSize:"0.87rem", color:"#CCC", marginBottom:"0.8rem" }}>Each participant drafts a structured use case brief for their SBU. Pairs peer-review. Top 3 briefs presented to the group.</p>
            {["Individual (15 min): Write a use case brief using the template below. Focus on ONE specific problem in your SBU.","Peer Review (15 min): Swap with a partner. Check: Is the problem specific? Platform match correct? ROI measurable?","Revise (10 min): Incorporate feedback. Tighten brief to one paragraph maximum.","Gallery Walk (10 min): Post briefs on walls. Participants read all briefs and place a dot sticker on the most compelling one.","Top 3 Presentations (10 min): Authors of top-voted briefs present in 2 minutes each. Facilitator debriefs common themes."].map((s,i)=>(
              <div key={i} style={{ display:"flex", gap:"0.7rem", marginBottom:"0.6rem", alignItems:"flex-start" }}>
                <div style={{ background:C.orange, color:"white", fontWeight:700, fontSize:"0.8rem", width:22, height:22, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>{i+1}</div>
                <span style={{ color:"#CCC", fontSize:"0.87rem" }}>{s}</span>
              </div>
            ))}
          </div>
          <Card>
            <h3 style={{ marginBottom:"0.8rem" }}>📋 Use Case Brief Template</h3>
            {[["SBU & Role","Which SBU are you representing? What is your role?"],["The Problem","What specific pain point does your SBU face? Be concrete — not 'we have data issues' but 'we spend 3 days reconciling freight billing manually each month.'"],["The Platform Match","Which platform (NetSuite, Blue Yonder AI, or C3 AI) best addresses this — and which specific capability or workflow would you use?"],["Measurable Outcome","What does success look like? State it as a KPI: 'Reduce freight reconciliation time from 3 days to 4 hours.'"],["Who Needs to Be Involved","Which roles or teams must be part of the implementation? Who owns the outcome?"]].map(([label,desc],i)=>(
              <div key={i} style={{ background:"#F4F5F7", padding:"0.75rem", borderRadius:8, marginBottom:"0.5rem" }}>
                <div style={{ fontSize:"0.72rem", fontWeight:700, color:ACC, marginBottom:"0.25rem" }}>{label}</div>
                <div style={{ fontSize:"0.82rem", color:C.midgray }}>{desc}</div>
              </div>
            ))}
          </Card>
        </>
      )}

      {tab === "check" && (
        <>
          <SectionLabel color={ACC}>Lab 2 · Knowledge Check</SectionLabel>
          <H2 style={{ marginBottom:"0.3rem" }}>5-Question Quiz</H2>
          <p style={{ fontSize:"0.85rem", color:C.midgray, marginBottom:"1.2rem" }}>Answer individually, then debrief as a group.</p>
          <KnowledgeCheck questions={KC} accentColor={ACC} />
        </>
      )}

      {tab === "facilitator" && (
        <>
          <SectionLabel color={C.orange}>Facilitator Guide · Lab 2</SectionLabel>
          <H2 style={{ marginBottom:"1.2rem" }}>Facilitation Notes</H2>
          <FacBox label="Before the Session">
            <ul style={{ paddingLeft:"1.1rem", fontSize:"0.85rem", lineHeight:1.7, color:C.darkgray }}>
              <li>Review the use case brief template — prepare 1 example brief yourself as a model.</li>
              <li>Bring Lab 1 whiteboard photos — reference the pain points captured in Discussion 2.</li>
              <li>Prepare dot stickers for the gallery walk (3–5 per participant).</li>
              <li>Set up wall space for brief posting during the gallery walk.</li>
            </ul>
          </FacBox>
          <FacBox label="Managing the Workflow Walkthrough (9:45–10:00)">
            <ul style={{ paddingLeft:"1.1rem", fontSize:"0.85rem", lineHeight:1.7, color:C.darkgray }}>
              <li>Choose the workflow most relevant to your group. For mixed groups: use the C3 AI APA workflow — it's role-agnostic and surprises people with how simple it is.</li>
              <li>Walk through the 'Workflows & UI' tab live on screen. Pause after each step: "Does anyone have a process in their team this reminds you of?"</li>
              <li>Use the UI mock-ups to anchor the steps visually — participants can see exactly where to click.</li>
            </ul>
          </FacBox>
          <FacBox label="Managing the Use Case Brief Activity">
            <ul style={{ paddingLeft:"1.1rem", fontSize:"0.85rem", lineHeight:1.7, color:C.darkgray }}>
              <li>Most common problem: briefs that are too vague. Push back: "Can you give me a number — how long does this take today?"</li>
              <li>During peer review: give partners the three review questions verbally.</li>
              <li>During gallery walk: encourage cross-SBU reading. The strongest ideas often surface across SBU boundaries.</li>
            </ul>
          </FacBox>
          <FacBox label="Closing & Lab 3 Preview">
            <p style={{ fontSize:"0.85rem", lineHeight:1.65, color:C.darkgray }}>Collect the top 3 briefs (or photograph all of them) — they become anchor inputs for Lab 3's roadmap activity. <em>"In Lab 3, we'll compare all three platforms side-by-side, pick the right one for each brief, and build a sequenced PGB adoption roadmap together."</em></p>
          </FacBox>
        </>
      )}
    </div>
  )
}
