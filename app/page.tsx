export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      fontFamily: "sans-serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px"
    }}>
      <div style={{maxWidth: 700, textAlign: "center"}}>
        
        <h1 style={{fontSize: 48, marginBottom: 10}}>
          RESAT
        </h1>

        <p style={{fontSize: 20, opacity: 0.8}}>
          Quit porn. Build discipline. Track your streak.
        </p>

        <div style={{marginTop: 30}}>
          <a 
            href="https://github.com/gnoob8144-creator/REsat-app/releases"
            style={{
              background: "#22c55e",
              padding: "14px 28px",
              borderRadius: 8,
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: 18
            }}
          >
            Download Android App
          </a>
        </div>

        <div style={{marginTop: 40, opacity: 0.7}}>
          Free • No account needed
        </div>

      </div>
    </main>
  );
} 