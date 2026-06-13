import { useState } from "react"
import { C, Hero, Card, CapCard, SectionLabel, H2, AgendaRow, DiscussBox, FacBox, Tabs, KnowledgeCheck, WfStep } from "../components/shared"

const TABS = [
  { id:"overview",    label:"Overview"         },
  { id:"agenda",      label:"Agenda"           },
  { id:"content",     label:"Content"          },
  { id:"activities",  label:"Activities"       },
  { id:"check",       label:"Knowledge Check"  },
  { id:"facilitator", label:"Facilitator Guide"},
]

const KC = [
  { q:"What category does Blue Yonder AI belong to?", opts:["Cloud ERP (all-in-one)","Supply chain AI specialist","General-purpose AI chatbot","HR management system"], ans:1 },
  { q:"What is the name of Blue Yonder's proprietary AI decision model launched in 2025?", opts:["C3 Loop","SADA Loop","Azure Chain","DeepSCM"], ans:1 },
  { q:"C3 AI's 'C3 Code' (2026) allows users to do what?", opts:["Write Python scripts manually","Deploy NetSuite modules","Describe a problem in natural language and get a production AI app built","Manage warehouse robots via voice"], ans:2 },
  { q:"In the three-layer model, which platform is the 'system of record' that the others sync from?", opts:["Blue Yonder AI","C3 AI","NetSuite","Microsoft Azure"], ans:2 },
  { q:"Which best describes the relationship between NetSuite, Blue Yonder, and C3 AI?", opts:["They are direct competitors — choose only one","Complementary layers: ERP backbone, supply chain execution, and AI intelligence","Blue Yonder replaces both NetSuite and C3 AI","C3 AI is only for government organizations"], ans:1 },
]

export default function Lab1() {
  const [tab, setTab] = useState("overview")
  const ACC = C.byBlue

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "1.8rem 1.2rem 4rem" }}>
      <Tabs tabs={TABS} active={tab} onSelect={setTab} accentColor={ACC} />

      {/* ── OVERVIEW ── */}
      {tab === "overview" && (
        <>
          <Hero eyebrow="PGB AI Platform Learning Series · Lab 1 of 3" title="Foundations: Understanding AI Platforms"
            desc="Participants gain a clear understanding of what Blue Yonder AI, C3 AI, and NetSuite are — where they come from, what problems they solve, and why they matter to PGB."
            meta={["⏱ 3–4 Hours","👥 Facilitator-Led","🎯 All Roles · All SBUs","📍 Lab 1 of 3"]} accentColor={ACC} />
          <SectionLabel color={ACC}>Lab Objectives</SectionLabel>
          <H2 style={{ marginBottom:"1rem" }}>By the end of this lab, participants will be able to…</H2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))", gap:"1rem", marginBottom:"1.5rem" }}>
            <CapCard icon="🧠" color={ACC} title="Define the three platforms" body="Explain in plain language what Blue Yonder AI, C3 AI, and NetSuite each are — and what category they belong to." />
            <CapCard icon="🏭" color={C.c3Teal} title="Identify core capabilities" body="Name at least 3 key capabilities of each platform and link them to a real PGB business function." />
            <CapCard icon="🗺️" color={C.orange} title="Understand the layer model" body="Describe how NetSuite, Blue Yonder, and C3 AI relate as a three-layer enterprise stack." />
            <CapCard icon="💡" color={C.gold} title="Recognize PGB relevance" body="Connect at least one platform capability to a specific challenge in their own SBU." />
          </div>
          <Card accentColor={C.orange}>
            <h3 style={{ marginBottom:"0.8rem" }}>🧭 Lab Series Overview</h3>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:"0.8rem" }}>
              {[
                { label:"Lab 1 — Foundations", desc:"What are the platforms? Capabilities, NetSuite context, and the 3-layer model.", color:ACC, active:true },
                { label:"Lab 2 — Application",  desc:"Real PGB use cases, hands-on workflow walkthroughs, UI mock-ups, Use Case Brief workshop.", color:C.midgray, active:false },
                { label:"Lab 3 — Decision",     desc:"Head-to-head comparison, decision tool, roadmap building, and pitch practice.", color:C.midgray, active:false },
              ].map((s,i)=>(
                <div key={i} style={{ background: s.active ? "#EBF3FF" : "#F4F5F7", padding:"0.9rem", borderRadius:8 }}>
                  <div style={{ fontWeight:700, color:s.color, fontSize:"0.85rem", marginBottom:"0.3rem" }}>{s.label}</div>
                  <div style={{ fontSize:"0.8rem", color:C.midgray }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}

      {/* ── AGENDA ── */}
      {tab === "agenda" && (
        <>
          <SectionLabel color={ACC}>Lab 1 · Half-Day Agenda</SectionLabel>
          <H2 style={{ marginBottom:"0.3rem" }}>Session Schedule</H2>
          <p style={{ fontSize:"0.85rem", color:C.midgray, marginBottom:"1.2rem" }}>Total: 3.5 hours · Facilitator-led · All roles welcome</p>
          {[
            { time:"8:00–8:15", title:"Welcome & Lab Series Introduction", type:"Lecture", desc:"Facilitator introduces the 3-Lab series and expectations. Icebreaker: 'Name one technology that changed how your team works.'" },
            { time:"8:15–8:45", title:"Module A: The AI Platform Landscape", type:"Lecture", desc:"What is enterprise AI? The difference between ERP, supply chain AI, and AI application platforms. Why PGB should care now." },
            { time:"8:45–9:15", title:"Module B: Blue Yonder AI Deep Dive", type:"Lecture", desc:"Origin, SADA Loop agents, Cognitive Solutions 2025, Supply Chain Knowledge Graph. Key stats and PGB relevance." },
            { time:"9:15–9:25", title:"Discussion: Blue Yonder & Your SBU", type:"Discussion", desc:"Small group: 'Which Blue Yonder capability is most relevant to your team — and why?'" },
            { time:"9:25–9:55", title:"Module C: C3 AI Deep Dive", type:"Lecture", desc:"Origin, product family, Agentic AI Platform, C3 Code (2026), and pre-built industry applications." },
            { time:"9:55–10:10", title:"Break", type:"Break", desc:"Refreshments · Stretch · Informal Q&A" },
            { time:"10:10–10:35", title:"Module D: NetSuite & the 3-Layer Model", type:"Lecture", desc:"What NetSuite is, AI built-in at no cost, and how all three platforms form a complementary stack." },
            { time:"10:35–11:10", title:"Activity: Platform Mapping Exercise", type:"Activity", desc:"Teams map each platform to PGB SBUs. Groups present their top 2 matches." },
            { time:"11:10–11:25", title:"Knowledge Check & Debrief", type:"Discussion", desc:"5-question quiz, then facilitator-led debrief. Key takeaways and preview of Lab 2." },
            { time:"11:25–11:30", title:"Close & Lab 2 Preview", type:"Lecture", desc:"Lab 2 covers real PGB use cases and workflow walkthroughs. Bring your SBU's current pain points." },
          ].map((r,i)=><AgendaRow key={i} {...r} />)}
        </>
      )}

      {/* ── CONTENT ── */}
      {tab === "content" && (
        <>
          <SectionLabel color={ACC}>Module A</SectionLabel>
          <H2 style={{ marginBottom:"0.3rem" }}>The AI Platform Landscape</H2>
          <p style={{ fontSize:"0.85rem", color:C.midgray, marginBottom:"1rem" }}>30 minutes · Lecture</p>
          <Card>
            <h3 style={{ marginBottom:"0.5rem" }}>What is Enterprise AI?</h3>
            <p style={{ fontSize:"0.88rem", lineHeight:1.65 }}>Enterprise AI refers to <strong>AI systems built specifically for business operations</strong> — not consumer apps, not research models. These platforms connect to your company's data, workflows, and decision-making processes, generating value through automation, prediction, and optimization at scale.</p>
          </Card>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))", gap:"1rem", marginBottom:"1.8rem" }}>
            <CapCard icon="🗃️" color={C.red} title="ERP Systems" body="The system of record. Manages financials, HR, payroll, inventory, and procurement. Example: NetSuite. AI is built-in to automate and predict within existing data." />
            <CapCard icon="🚚" color={ACC} title="Supply Chain AI" body="Specialist platforms that orchestrate how goods and materials move. Example: Blue Yonder AI. Purpose-built ML for demand, logistics, and warehouse execution." />
            <CapCard icon="🤖" color={C.c3Teal} title="AI Application Platforms" body="Build-and-deploy platforms for custom enterprise AI apps. Example: C3 AI. For predictive maintenance, risk scoring, HR analytics, or any intelligence layer." />
          </div>

          <SectionLabel color={ACC} >Module B</SectionLabel>
          <H2 style={{ marginBottom:"0.3rem" }}>Blue Yonder AI Deep Dive</H2>
          <p style={{ fontSize:"0.85rem", color:C.midgray, marginBottom:"1rem" }}>30 minutes · Lecture</p>
          <div style={{ display:"flex", gap:"0.8rem", flexWrap:"wrap", marginBottom:"1.2rem" }}>
            {[["28","Apps unified (2025)"],["23M+","Warehouse tasks optimized"],["3,000+","Enterprise clients"],["1985","Founded · Panasonic"]].map(([n,l],i)=>(
              <div key={i} style={{ background:[ACC,C.orange,C.c3Teal,C.charcoal][i], color:"white", borderRadius:10, padding:"0.9rem 1.1rem", flex:1, minWidth:120, textAlign:"center" }}>
                <div style={{ fontSize:"1.7rem", fontWeight:700 }}>{n}</div>
                <div style={{ fontSize:"0.72rem", opacity:0.85, marginTop:"0.15rem" }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))", gap:"1rem", marginBottom:"1.8rem" }}>
            <CapCard icon="📊" color={ACC} title="Demand & Supply Planning" body="ML forecasting across 8,000+ workstreams. Dynamically adjusts to market shifts in minutes, not weeks." />
            <CapCard icon="🏭" color={C.c3Teal} title="Warehouse & Robotics Mgmt" body="AI task orchestration, robot sequencing, and route optimization. 23M+ tasks handled in 2025." />
            <CapCard icon="🚛" color={C.orange} title="Freight & Logistics" body="Simultaneous freight reconciliation for multiple clients. 3D load-building and transport optimization." />
            <CapCard icon="🤖" color={C.purple} title="5 AI Agents (Cognitive)" body="Purpose-built autonomous agents using the SADA Loop decision model — machine speed, supply chain precision." />
            <CapCard icon="🕸️" color={C.gold} title="Supply Chain Knowledge Graph" body="Connects all supply chain entities in real-time via Snowflake & RelationalAI collaboration." />
            <CapCard icon="🌐" color={C.charcoal} title="Multi-Enterprise Network" body="Single platform connecting manufacturers, wholesalers, retailers, and transporters — eliminating silos." />
          </div>

          <SectionLabel color={C.c3Teal}>Module C</SectionLabel>
          <H2 style={{ marginBottom:"0.3rem" }}>C3 AI Deep Dive</H2>
          <p style={{ fontSize:"0.85rem", color:C.midgray, marginBottom:"1rem" }}>30 minutes · Lecture</p>
          <Card accentColor={C.c3Teal}>
            <p style={{ fontSize:"0.88rem", lineHeight:1.65 }}>C3 AI (NYSE: AI) is the <strong>enterprise AI application software company</strong> — an end-to-end platform for developing, deploying, and operating AI applications across any industry. Founded in 2009 by Tom Siebel. Its 2026 product <strong>C3 Code</strong> lets users describe a business problem in natural language and autonomous agents build and deploy a production AI application.</p>
          </Card>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))", gap:"1rem", marginBottom:"1.8rem" }}>
            <CapCard icon="🗄️" color={C.c3Teal} title="C3 AI Type System" body="Unified data layer connecting all enterprise data sources without custom integration code." />
            <CapCard icon="🧠" color={ACC} title="Pre-Built ML Models" body="Validated algorithms for anomaly detection, demand forecasting, predictive maintenance, and more." />
            <CapCard icon="⚡" color={C.orange} title="C3 Code (2026)" body="Natural language → production AI app. Agents design, code, test, and deploy automatically." />
            <CapCard icon="🛠️" color={C.gold} title="Deep / Low / No-Code Studio" body="Visual Studio for developers, C3 AI Studio for analysts, Ex Machina for non-technical users." />
          </div>

          <SectionLabel color={C.red}>Module D</SectionLabel>
          <H2 style={{ marginBottom:"0.3rem" }}>NetSuite & the 3-Layer Model</H2>
          <p style={{ fontSize:"0.85rem", color:C.midgray, marginBottom:"1rem" }}>25 minutes · Lecture</p>
          <Card>
            <p style={{ fontSize:"0.88rem", lineHeight:1.65 }}>NetSuite (Oracle) is the <strong>world's #1 cloud ERP</strong>, serving 43,000+ companies. Unlike Blue Yonder and C3 AI, NetSuite is the <em>system of record</em> — covering financials, HR, payroll, CRM, inventory, and procurement in one system. AI is built in at no extra cost. The three platforms form a natural complementary stack, not competitors.</p>
          </Card>
          {[
            { label:"Layer 1 — ERP Backbone", name:"NetSuite", desc:"Financials, HR, payroll, procurement records, and inventory across all 10 PGB subsidiaries. Single source of truth.", color:C.red, nameColor:"#FF9999" },
            { label:"Layer 2 — Supply Chain Execution", name:"Blue Yonder AI", desc:"Demand forecasting, warehouse AI, freight reconciliation for AMICI, AAC, and PSC.", color:ACC, nameColor:"#88BBFF" },
            { label:"Layer 3 — AI Intelligence", name:"C3 AI", desc:"Predictive maintenance, skills analytics, custom AI apps across all four PGB SBUs.", color:C.c3Teal, nameColor:"#88EEEA" },
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

      {/* ── ACTIVITIES ── */}
      {tab === "activities" && (
        <>
          <SectionLabel color={C.orange}>Lab 1 · Activities</SectionLabel>
          <H2 style={{ marginBottom:"1.2rem" }}>Group Activities & Discussions</H2>
          <DiscussBox timing="Discussion 1 · After Module B · 10 minutes" question="Which Blue Yonder AI capability is most relevant to your team — and what specific problem would it solve?" hint="💬 Prompt by SBU: 'What about AMICI logistics? What about AAC materials planning?'" />
          <DiscussBox timing="Discussion 2 · After Module C · 10 minutes" question="If C3 AI could build any AI application for your SBU automatically — what would you ask it to build first?" hint="💬 Capture responses on whiteboard — they feed directly into Lab 3's roadmap activity." color={C.purple} />
          <div style={{ background:C.charcoal, borderRadius:10, padding:"1.3rem", marginBottom:"1rem" }}>
            <div style={{ fontSize:"0.7rem", fontWeight:700, color:C.orange, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.5rem" }}>Main Activity · 35 minutes · Team Exercise</div>
            <h3 style={{ color:"white", marginBottom:"0.6rem" }}>Platform Mapping Worksheet</h3>
            <p style={{ fontSize:"0.87rem", color:"#CCC", marginBottom:"0.8rem" }}>Teams match each AI platform to PGB's SBUs and identify the top use case. Each team presents their #1 pick.</p>
            {["Divide into 4 groups — one per SBU (Construction & Mfg, Real Estate, Maritime Logistics, Human Capital Dev).",
              "Each group fills the mapping table: For each platform (NetSuite, Blue Yonder, C3 AI) — rate relevance (H/M/L) and write one specific use case.",
              "Each group selects their TOP 1 platform-to-SBU match and prepares a 2-minute pitch: 'We believe [Platform] is most important for our SBU because…'",
              "Groups present in turn. Facilitator builds a consolidated class view.",
              "Debrief: What patterns emerged? Any surprises? What questions remain for Lab 2?"
            ].map((s,i)=>(
              <div key={i} style={{ display:"flex", gap:"0.7rem", marginBottom:"0.6rem", alignItems:"flex-start" }}>
                <div style={{ background:C.orange, color:"white", fontWeight:700, fontSize:"0.8rem", width:22, height:22, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>{i+1}</div>
                <span style={{ color:"#CCC", fontSize:"0.87rem" }}>{s}</span>
              </div>
            ))}
          </div>
          <Card>
            <h3 style={{ marginBottom:"0.8rem" }}>📋 Platform Mapping Table</h3>
            <p style={{ fontSize:"0.82rem", color:C.midgray, marginBottom:"0.8rem" }}>Complete for your SBU. Rate: H = High · M = Medium · L = Low</p>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"0.82rem" }}>
              <thead>
                <tr>
                  {["Platform","Relevance (H/M/L)","Specific Use Case","Who uses this?"].map((h,i)=>(
                    <th key={i} style={{ padding:"0.5rem 0.7rem", textAlign:"left", background:[C.charcoal,C.red,ACC,C.c3Teal][i], color:"white", fontSize:"0.82rem" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {["NetSuite (ERP)","Blue Yonder AI","C3 AI"].map((p,i)=>(
                  <tr key={i} style={{ borderBottom:"1px solid #F3F4F6" }}>
                    <td style={{ padding:"0.45rem 0.7rem", fontWeight:600 }}>{p}</td>
                    <td style={{ padding:"0.45rem 0.7rem", color:C.midgray, fontStyle:"italic" }}>Enter rating</td>
                    <td style={{ padding:"0.45rem 0.7rem", color:C.midgray, fontStyle:"italic" }}>Enter use case</td>
                    <td style={{ padding:"0.45rem 0.7rem", color:C.midgray, fontStyle:"italic" }}>Enter role</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </>
      )}

      {/* ── KNOWLEDGE CHECK ── */}
      {tab === "check" && (
        <>
          <SectionLabel color={ACC}>Lab 1 · Knowledge Check</SectionLabel>
          <H2 style={{ marginBottom:"0.3rem" }}>5-Question Quiz</H2>
          <p style={{ fontSize:"0.85rem", color:C.midgray, marginBottom:"1.2rem" }}>Answer individually, then debrief as a group.</p>
          <KnowledgeCheck questions={KC} accentColor={ACC} />
        </>
      )}

      {/* ── FACILITATOR ── */}
      {tab === "facilitator" && (
        <>
          <SectionLabel color={C.orange}>Facilitator Guide · Lab 1</SectionLabel>
          <H2 style={{ marginBottom:"1.2rem" }}>Facilitation Notes</H2>
          <FacBox label="Before the Session">
            <ul style={{ paddingLeft:"1.1rem", fontSize:"0.85rem", lineHeight:1.7, color:C.darkgray }}>
              <li>Print or share the Platform Mapping Worksheet — one per participant.</li>
              <li>Prepare a whiteboard for capturing Discussion 2 responses (pain points → Lab 3 input).</li>
              <li>Confirm room setup allows 4 small-group breakouts during the mapping activity.</li>
              <li>Have this site open on a screen or projector for content delivery.</li>
            </ul>
          </FacBox>
          <FacBox label="Opening (8:00–8:15)">
            <p style={{ fontSize:"0.85rem", lineHeight:1.65, color:C.darkgray }}>Start with the icebreaker: <em>"Name one technology that changed how your team works."</em> Frame the series: Lab 1 = What are the platforms. Lab 2 = How do they work in practice. Lab 3 = What should PGB do. Tell participants their input in Lab 1 shapes Lab 3's roadmap.</p>
          </FacBox>
          <FacBox label="Managing Discussion 1">
            <ul style={{ paddingLeft:"1.1rem", fontSize:"0.85rem", lineHeight:1.7, color:C.darkgray }}>
              <li>If silence: prompt by SBU — "What does AMICI spend the most time doing manually in logistics?"</li>
              <li>If one person dominates: "Great point — what does the Real Estate team think?"</li>
              <li>Capture the top 2–3 capabilities mentioned — reference these during the mapping activity.</li>
            </ul>
          </FacBox>
          <FacBox label="Managing Discussion 2">
            <ul style={{ paddingLeft:"1.1rem", fontSize:"0.85rem", lineHeight:1.7, color:C.darkgray }}>
              <li>Encourage bold, even unrealistic ideas. "If budget was no object…"</li>
              <li>Write every response verbatim on the whiteboard. These feed Lab 3's roadmap workshop.</li>
              <li>Common answers: "Track equipment health," "predict project overruns," "automate training enrollment."</li>
            </ul>
          </FacBox>
          <FacBox label="Closing & Lab 2 Preview">
            <p style={{ fontSize:"0.85rem", lineHeight:1.65, color:C.darkgray }}>Ask: <em>"What is one thing you learned today that surprised you?"</em> Quick round-robin. Then: <em>"In Lab 2, we'll walk through exactly how each platform works — step by step. Bring your team's biggest operational headache."</em></p>
          </FacBox>
          <Card accentColor={ACC}>
            <h4 style={{ marginBottom:"0.6rem", color:ACC }}>Materials Checklist</h4>
            <div style={{ display:"flex", flexDirection:"column", gap:"0.3rem", fontSize:"0.85rem" }}>
              {["Platform Mapping Worksheet (printed, 1 per participant)","Whiteboard or flip chart + markers","Site open on projector/screen","Knowledge Check on devices","Timer visible to participants","Name tags if cross-SBU group"].map((item,i)=>(
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
