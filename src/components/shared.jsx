// ── Shared style tokens ───────────────────────────────────────────────────────
export const C = {
  charcoal:"#2B2D35", orange:"#E85C0D", byBlue:"#0066CC", c3Teal:"#0EA5A0",
  red:"#CC0000", gold:"#F59E0B", white:"#FFFFFF", light:"#F4F5F7",
  midgray:"#6B7280", darkgray:"#374151", purple:"#7C3AED",
}

// ── Reusable UI primitives ────────────────────────────────────────────────────
export function Hero({ eyebrow, title, desc, meta, accentColor = C.byBlue }) {
  return (
    <div style={{ background: C.charcoal, borderRadius: 12, padding: "2rem 1.5rem", marginBottom: "1.8rem", borderTop: `5px solid ${accentColor}` }}>
      <div style={{ color: accentColor, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>{eyebrow}</div>
      <h2 style={{ color: "white", fontSize: "1.7rem", marginBottom: "0.5rem", lineHeight: 1.25 }}>{title}</h2>
      {desc && <p style={{ color: "#AAB", fontSize: "0.9rem", lineHeight: 1.6 }}>{desc}</p>}
      {meta && (
        <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap", marginTop: "1rem" }}>
          {meta.map((m, i) => <span key={i} style={{ background: "#363842", color: "#DDD", fontSize: "0.78rem", padding: "0.3rem 0.8rem", borderRadius: 8 }}>{m}</span>)}
        </div>
      )}
    </div>
  )
}

export function Card({ children, accentColor, style = {} }) {
  return (
    <div style={{
      background: "white", borderRadius: 10, padding: "1.3rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.07)", marginBottom: "1rem",
      borderTop: accentColor ? `3px solid ${accentColor}` : undefined,
      ...style
    }}>{children}</div>
  )
}

export function CapCard({ icon, color, title, body }) {
  return (
    <div style={{ background: "white", borderRadius: 10, padding: "1.2rem", boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
      <div style={{ width: 36, height: 36, borderRadius: "50%", background: color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", marginBottom: "0.6rem" }}>{icon}</div>
      <h4 style={{ fontSize: "0.9rem", marginBottom: "0.3rem" }}>{title}</h4>
      <p style={{ fontSize: "0.82rem", color: C.midgray, lineHeight: 1.55 }}>{body}</p>
    </div>
  )
}

export function SectionLabel({ color, children }) {
  return <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem", color }}>{children}</div>
}

export function H2({ children, style = {} }) {
  return <h2 style={{ fontSize: "1.5rem", color: C.charcoal, marginBottom: "0.3rem", ...style }}>{children}</h2>
}

export function AgendaRow({ time, title, type, desc }) {
  const typeColors = { Lecture: C.byBlue, Discussion: C.c3Teal, Activity: C.orange, Break: C.midgray }
  return (
    <div style={{ display: "flex", gap: 0, marginBottom: "0.6rem", borderRadius: 10, overflow: "hidden", boxShadow: "0 1px 5px rgba(0,0,0,0.07)" }}>
      <div style={{ background: C.charcoal, color: "white", fontWeight: 700, fontSize: "0.78rem", padding: "0.75rem 0.8rem", minWidth: 90, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", lineHeight: 1.3 }}>{time}</div>
      <div style={{ background: "white", padding: "0.75rem 1rem", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
          <strong style={{ fontSize: "0.9rem", color: C.charcoal }}>{title}</strong>
          {type && <span style={{ background: typeColors[type] || C.midgray, color: "white", fontSize: "0.68rem", fontWeight: 700, padding: "0.12rem 0.45rem", borderRadius: 999 }}>{type}</span>}
        </div>
        {desc && <p style={{ fontSize: "0.8rem", color: C.midgray, marginTop: "0.25rem" }}>{desc}</p>}
      </div>
    </div>
  )
}

export function DiscussBox({ timing, question, hint, color = C.c3Teal }) {
  return (
    <div style={{ background: "#E6F9F8", borderRadius: 10, padding: "1.2rem", marginBottom: "0.8rem", borderLeft: `4px solid ${color}` }}>
      <div style={{ fontSize: "0.68rem", fontWeight: 700, color, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>{timing}</div>
      <p style={{ fontSize: "0.9rem", color: C.charcoal, fontWeight: 500 }}>{question}</p>
      {hint && <p style={{ fontSize: "0.8rem", color: C.midgray, marginTop: "0.4rem" }}>{hint}</p>}
    </div>
  )
}

export function FacBox({ label, children }) {
  return (
    <div style={{ background: "#FFF5EF", borderRadius: 10, padding: "1.2rem", marginBottom: "0.8rem", borderLeft: `4px solid ${C.orange}` }}>
      <div style={{ fontSize: "0.68rem", fontWeight: 700, color: C.orange, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{label}</div>
      {children}
    </div>
  )
}

export function WfStep({ num, color, title, body }) {
  return (
    <div style={{ display: "flex", gap: "0.8rem", marginBottom: "0.9rem", alignItems: "flex-start" }}>
      <div style={{ background: color, color: "white", fontWeight: 700, width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", flexShrink: 0, marginTop: 2 }}>{num}</div>
      <div>
        <h4 style={{ fontSize: "0.9rem", marginBottom: "0.2rem" }}>{title}</h4>
        <p style={{ fontSize: "0.82rem", color: C.midgray, lineHeight: 1.55 }}>{body}</p>
      </div>
    </div>
  )
}

export function SbuRow({ sbu, color, cases }) {
  return (
    <div style={{ display: "flex", marginBottom: "0.7rem", borderRadius: 10, overflow: "hidden", boxShadow: "0 1px 5px rgba(0,0,0,0.07)" }}>
      <div style={{ background: color, color: "white", fontWeight: 700, fontSize: "0.8rem", padding: "0.8rem 1rem", minWidth: 155, display: "flex", alignItems: "center", lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: sbu }} />
      <div style={{ background: "white", padding: "0.8rem 1rem", flex: 1, fontSize: "0.83rem", color: C.darkgray, lineHeight: 1.5, display: "flex", alignItems: "center" }}>{cases}</div>
    </div>
  )
}

// ── Tabs helper ───────────────────────────────────────────────────────────────
export function Tabs({ tabs, active, onSelect, accentColor }) {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.2rem" }}>
      {tabs.map(t => (
        <button key={t.id} onClick={() => onSelect(t.id)} style={{
          background: active === t.id ? accentColor : "white",
          border: `2px solid ${active === t.id ? accentColor : "#E5E7EB"}`,
          color: active === t.id ? "white" : C.darkgray,
          padding: "0.4rem 0.9rem", borderRadius: 999, cursor: "pointer",
          fontSize: "0.8rem", fontWeight: 600, transition: "all 0.15s"
        }}>{t.label}</button>
      ))}
    </div>
  )
}

// ── Knowledge Check ───────────────────────────────────────────────────────────
export function KnowledgeCheck({ questions, accentColor }) {
  const [cur, setCur] = useState(0)
  const [score, setScore] = useState(0)
  const [picked, setPicked] = useState(null)
  const [done, setDone] = useState(false)

  function pick(i) {
    if (picked !== null) return
    setPicked(i)
    if (i === questions[cur].ans) setScore(s => s + 1)
    setDone(true)
  }

  function next() {
    setCur(c => c + 1)
    setPicked(null)
    setDone(false)
  }

  function reset() {
    setCur(0); setScore(0); setPicked(null); setDone(false)
  }

  if (cur >= questions.length) {
    const pct = score / questions.length
    return (
      <div style={{ textAlign: "center", background: "white", borderRadius: 12, padding: "2rem", boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}>
        <div style={{ fontSize: "2.5rem", fontWeight: 700, color: accentColor }}>{score}/{questions.length}</div>
        <p style={{ margin: "0.8rem 0", fontWeight: 600 }}>{pct >= 0.8 ? "🏆 Excellent!" : pct >= 0.6 ? "👍 Good work!" : "📚 Review the content and try again."}</p>
        <button onClick={reset} style={{ background: accentColor, color: "white", border: "none", padding: "0.55rem 1.2rem", borderRadius: 8, cursor: "pointer", fontWeight: 700 }}>Retake</button>
      </div>
    )
  }

  const q = questions[cur]
  return (
    <div>
      <div style={{ fontSize: "0.8rem", color: C.midgray, marginBottom: "0.8rem" }}>Question {cur + 1} of {questions.length} · Score: {score}</div>
      <div style={{ background: "white", borderRadius: 10, padding: "1.2rem", boxShadow: "0 2px 6px rgba(0,0,0,0.07)" }}>
        <div style={{ fontSize: "0.92rem", fontWeight: 600, marginBottom: "0.8rem", color: C.charcoal }}>{q.q}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {q.opts.map((o, i) => {
            let bg = "white", border = "#E5E7EB", color = C.darkgray
            if (picked !== null) {
              if (i === q.ans) { bg = "#E6F9F8"; border = C.c3Teal }
              else if (i === picked) { bg = "#FEF2F2"; border = "#EF4444" }
            }
            return (
              <div key={i} onClick={() => pick(i)} style={{
                padding: "0.6rem 0.9rem", borderRadius: 8, border: `2px solid ${border}`,
                background: bg, cursor: picked === null ? "pointer" : "default",
                fontSize: "0.85rem", color, transition: "all 0.15s"
              }}>{o}</div>
            )
          })}
        </div>
        {done && (
          <div style={{ marginTop: "0.6rem" }}>
            <div style={{ padding: "0.5rem 0.8rem", borderRadius: 6, background: picked === q.ans ? "#D1FAE5" : "#FEE2E2", color: picked === q.ans ? "#065F46" : "#991B1B", fontSize: "0.82rem", marginBottom: "0.5rem" }}>
              {picked === q.ans ? "✅ Correct!" : `❌ Correct: ${q.opts[q.ans]}`}
            </div>
            <button onClick={next} style={{ background: accentColor, color: "white", border: "none", padding: "0.5rem 1.1rem", borderRadius: 8, cursor: "pointer", fontWeight: 700, fontSize: "0.85rem" }}>
              {cur + 1 < questions.length ? "Next →" : "See Results →"}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
