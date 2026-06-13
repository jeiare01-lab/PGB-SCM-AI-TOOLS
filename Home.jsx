import { C } from "../components/shared"

const LABS = [
  { id:"lab1", num:"01", label:"Foundations", sub:"What are these platforms?", desc:"Blue Yonder AI, C3 AI & NetSuite — core capabilities, the 3-layer model, and a platform mapping exercise.", color:C.byBlue, meta:"3.5 hrs · 5 sections · Quiz" },
  { id:"lab2", num:"02", label:"Application", sub:"How do they work in practice?", desc:"PGB use cases mapped to all 4 SBUs, role-based workflow walkthroughs with illustrated UI mock-ups, and a Use Case Brief workshop.", color:C.c3Teal, meta:"3.5 hrs · 6 sections · Quiz" },
  { id:"lab3", num:"03", label:"Decision", sub:"What should PGB do?", desc:"Head-to-head comparison, interactive platform decision tool, PGB adoption roadmap workshop, and leadership pitch practice.", color:C.orange, meta:"4 hrs · 7 sections · Final Quiz" },
]

export default function Home({ goto }) {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1.2rem 4rem" }}>

      {/* Hero */}
      <div style={{ background: C.charcoal, borderRadius: 12, padding: "2.5rem 2rem", marginBottom: "2rem", borderTop: `5px solid ${C.orange}` }}>
        <div style={{ color: C.orange, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Primary Group of Builders · 2026</div>
        <h1 style={{ color: "white", fontSize: "2rem", marginBottom: "0.6rem", lineHeight: 1.25 }}>AI Platform Lab Series</h1>
        <p style={{ color: "#AAB", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: 560 }}>
          A three-part facilitator-led learning series covering Blue Yonder AI, C3 AI, and NetSuite — built for all roles across PGB's four SBUs.
        </p>
        <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap", marginTop: "1.2rem" }}>
          {["📍 3 Labs", "⏱ 3–4 hrs each", "👥 Facilitator-Led", "🎯 All Roles · All SBUs"].map((m,i)=>
            <span key={i} style={{ background: "#363842", color: "#DDD", fontSize: "0.78rem", padding: "0.3rem 0.9rem", borderRadius: 8 }}>{m}</span>
          )}
        </div>
      </div>

      {/* Series flow */}
      <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", flexWrap:"wrap", marginBottom:"2rem" }}>
        {LABS.map((lab,i)=>(
          <>
            <div key={lab.id} style={{ background:"white", borderRadius:10, padding:"0.8rem 1rem", boxShadow:"0 2px 6px rgba(0,0,0,0.07)", flex:1, minWidth:160, textAlign:"center", borderTop:`3px solid ${lab.color}` }}>
              <div style={{ fontWeight:700, fontSize:"0.85rem", color:lab.color, marginBottom:"0.2rem" }}>Lab {lab.num}</div>
              <div style={{ fontSize:"0.78rem", color:C.midgray }}>{lab.label}<br/>{lab.sub}</div>
            </div>
            {i < LABS.length-1 && <span style={{ color:C.midgray, fontSize:"1.2rem", flexShrink:0 }}>→</span>}
          </>
        ))}
      </div>

      {/* Lab cards */}
      <h2 style={{ fontSize:"1.4rem", color:C.charcoal, marginBottom:"1rem" }}>Open a Lab</h2>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))", gap:"1rem", marginBottom:"2.5rem" }}>
        {LABS.map(lab=>(
          <div key={lab.id} onClick={()=>goto(lab.id)} style={{
            background:"white", borderRadius:12, padding:"1.5rem",
            boxShadow:"0 3px 12px rgba(0,0,0,0.09)", cursor:"pointer",
            borderTop:`4px solid ${lab.color}`, display:"flex", flexDirection:"column", gap:"0.6rem",
            transition:"transform 0.15s, box-shadow 0.15s"
          }}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.13)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 3px 12px rgba(0,0,0,0.09)"}}
          >
            <div>
              <div style={{ fontSize:"0.7rem", fontWeight:700, color:lab.color, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:"0.3rem" }}>Lab {lab.num} of 3</div>
              <h3 style={{ fontSize:"1rem", color:C.charcoal }}>{lab.label}: {lab.sub}</h3>
            </div>
            <p style={{ fontSize:"0.83rem", color:C.midgray, lineHeight:1.55, flex:1 }}>{lab.desc}</p>
            <div style={{ fontSize:"0.78rem", color:C.midgray }}>{lab.meta}</div>
            <div style={{ background:lab.color, color:"white", padding:"0.5rem 1rem", borderRadius:8, textAlign:"center", fontWeight:700, fontSize:"0.85rem" }}>Open Lab {lab.num} →</div>
          </div>
        ))}
      </div>

      {/* What's in each lab */}
      <h2 style={{ fontSize:"1.4rem", color:C.charcoal, marginBottom:"1rem" }}>What's in Each Lab</h2>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(195px,1fr))", gap:"0.8rem" }}>
        {[
          { icon:"📋", title:"Timed Agenda", desc:"Session schedule with activity types: Lecture, Discussion, Activity, Break." },
          { icon:"📖", title:"Full Content", desc:"Module content with stats, frameworks, and capability cards for delivery or self-review." },
          { icon:"🖥️", title:"UI Mock-Ups", desc:"Illustrated platform navigation mock-ups for Blue Yonder and C3 AI (Lab 2)." },
          { icon:"💬", title:"Discussion Prompts", desc:"Structured questions with facilitator hints for managing group dynamics." },
          { icon:"🎯", title:"Group Activities", desc:"Mapping, brief-writing, roadmap building, and pitch practice workshops." },
          { icon:"✅", title:"Knowledge Checks", desc:"5-question interactive quizzes with instant feedback per lab." },
          { icon:"🤖", title:"Decision Tool", desc:"Interactive 5-question platform selector with tailored recommendations (Lab 3)." },
          { icon:"🧭", title:"Facilitator Guide", desc:"Detailed notes, timing tips, common traps, and a materials checklist." },
        ].map((item,i)=>(
          <div key={i} style={{ background:"white", borderRadius:10, padding:"1rem", boxShadow:"0 2px 6px rgba(0,0,0,0.07)" }}>
            <div style={{ fontSize:"1.4rem", marginBottom:"0.4rem" }}>{item.icon}</div>
            <h4 style={{ fontSize:"0.88rem", marginBottom:"0.2rem" }}>{item.title}</h4>
            <p style={{ fontSize:"0.8rem", color:C.midgray, lineHeight:1.5 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
