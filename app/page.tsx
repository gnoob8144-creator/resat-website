export default function Home() {
  return (
    <main
      style={{
        background: "#0f0f0f",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      {/* HERO SECTION */}
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Break Addiction. Build Discipline.
      </h1>

      <p
        style={{
          fontSize: "20px",
          maxWidth: "700px",
          margin: "0 auto 40px auto",
          opacity: 0.85,
          lineHeight: 1.6,
        }}
      >
        Rēsat helps you eliminate triggers, control urges, and stay consistent
        every single day.
      </p>

      <a
        href="https://github.com/gnoob8144-creator/REsat-app/releases"
        style={{
          background: "#22c55e",
          padding: "16px 32px",
          borderRadius: "8px",
          color: "black",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        Download Android App
      </a>

      {/* WHY SECTION */}
      <div style={{ marginTop: "100px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Why Rēsat?
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "18px",
            opacity: 0.8,
            lineHeight: 1.7,
          }}
        >
          Motivation fades. Discipline doesn't.
          <br />
          Rēsat gives you structure, tracking, and real tools to break addiction
          permanently.
        </p>
      </div>

      {/* FEATURES */}
      <div
        style={{
          marginTop: "80px",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "left",
          fontSize: "18px",
          lineHeight: 1.8,
        }}
      >
        <div>✔ Website Blocking</div>
        <div>✔ Urge Control Tools</div>
        <div>✔ Streak Tracking</div>
        <div>✔ Discipline System</div>
      </div>

      <div style={{ marginTop: "100px", opacity: 0.6 }}>
        Launching March 5
      </div>
    </main>
  );
}