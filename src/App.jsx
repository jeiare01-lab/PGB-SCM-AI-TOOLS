import { useState } from "react"
import Home from "./pages/Home"
import Lab1 from "./pages/Lab1"
import Lab2 from "./pages/Lab2"
import Lab3 from "./pages/Lab3"

const PAGES = [
  { id: "home", label: "🏠 Home" },
  { id: "lab1", label: "Lab 1 — Foundations" },
  { id: "lab2", label: "Lab 2 — Application" },
  { id: "lab3", label: "Lab 3 — Decision" },
]

export default function App() {
  const [page, setPage] = useState("home")

  return (
    <div style={{ minHeight: "100vh", background: "#F4F5F7", fontFamily: "'Segoe UI', Calibri, sans-serif" }}>
      {/* Global top nav */}
      <nav style={{
        background: "#2B2D35", borderBottom: "3px solid #E85C0D",
        padding: "0 1.2rem", display: "flex", alignItems: "center",
        flexWrap: "wrap", gap: "0.3rem", position: "sticky", top: 0, zIndex: 300
      }}>
        <span style={{ color: "white", fontWeight: 700, fontSize: "0.88rem", padding: "0.7rem 0.6rem 0.7rem 0", marginRight: "0.5rem", whiteSpace: "nowrap" }}>
          🏗 PGB AI Lab Series
        </span>
        {PAGES.map(p => (
          <button key={p.id} onClick={() => setPage(p.id)} style={{
            background: "none", border: "none", color: page === p.id ? "white" : "#AAB",
            fontSize: "0.78rem", padding: "0.7rem 0.6rem", cursor: "pointer",
            borderBottom: page === p.id ? "3px solid #E85C0D" : "3px solid transparent",
            marginBottom: "-3px", fontWeight: page === p.id ? 700 : 400, whiteSpace: "nowrap"
          }}>{p.label}</button>
        ))}
      </nav>

      {page === "home"  && <Home  goto={setPage} />}
      {page === "lab1"  && <Lab1 />}
      {page === "lab2"  && <Lab2 />}
      {page === "lab3"  && <Lab3 />}
    </div>
  )
}
