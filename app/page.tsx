export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      padding: "40px"
    }}>
      <div style={{maxWidth: 900, textAlign: "center"}}>

        <h1 style={{fontSize: 56, marginBottom: 20}}>
          REsat
        </h1>

        <p style={{fontSize: 22, opacity: 0.9, marginBottom: 30}}>
          Quit porn. Build discipline. Take your life back.
        </p>

        <a
          href="https://github.com/gnoob8144-creator/REsat-app/releases"
          style={{
            background: "#22c55e",
            padding: "16px 32px",
            borderRadius: 10,
            color: "black",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: 18
          }}
        >
          Download Android App
        </a>

        <div style={{marginTop: 60, opacity: 0.8}}>
          Free • No account needed
        </div>

        <div style={{marginTop: 60}}>

          <h2 style={{fontSize: 32, marginBottom: 20}}>
            Features
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            textAlign: "left"
          }}>

            <div>✔ Website blocker</div>
            <div>✔ Urge control tools</div>
            <div>✔ Progress tracking</div>
            <div>✔ Discipline system</div>

          </div>

        </div>

        <div style={{marginTop: 70, opacity: 0.6}}>
          Launching March 5
        </div>

      </div>
    </main>
  )
}