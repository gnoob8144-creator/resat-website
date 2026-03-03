export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
      
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Break the cycle.
        <br />
        Reclaim your focus.
      </h1>

      <p style={{ fontSize: "20px", maxWidth: "600px", opacity: 0.8 }}>
        Rēsat is a discipline system designed to help you quit addiction,
        control urges, and build unstoppable focus.
      </p>

      <a 
        href="https://github.com/gnoob8144-creator/REsat-app/releases"
        style={{
          marginTop: "40px",
          background: "#22c55e",
          padding: "16px 32px",
          borderRadius: "8px",
          color: "black",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "18px"
        }}
      >
        Download Android App
      </a>

      <div style={{ 
  marginTop: "100px", 
  maxWidth: "700px",
  lineHeight: "1.8"
}}>

  <h2 style={{ 
    fontSize: "32px", 
    marginBottom: "20px" 
  }}>
    Why Rēsat?
  </h2>

  <p style={{ 
    opacity: 0.8, 
    fontSize: "18px",
    marginBottom: "30px"
  }}>
    Motivation fades. Discipline doesn’t.
    Rēsat gives you structure, tracking, and tools to break addiction for good.
  </p>

  <div style={{ 
    fontSize: "18px", 
    opacity: 0.9 
  }}>
    ✔ Website blocker<br />
    ✔ Urge control tools<br />
    ✔ Streak tracking<br />
    ✔ Discipline system
  </div>

</div>

    </main>
  );
}