export default function Home() {
  return (
    <main
      style={{
        background: "#0f0f0f",
        color: "white",
        minHeight: "100vh",
        padding: "80px 20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      {/* HERO */}
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Break Addiction. Build Discipline.
      </h1>

      <p
        style={{
          fontSize: "20px",
          opacity: 0.8,
          maxWidth: "700px",
          margin: "0 auto 40px auto",
          lineHeight: "1.6",
        }}
      >
        Résat helps you eliminate triggers, control urges, and stay consistent
        every single day.
      </p>

      <a
        href="https://github.com/gnoob8144-creator/REsat-app/releases"
        style={{
          background: "#22c55e",
          padding: "16px 32px",
          borderRadius: "10px",
          color: "black",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        Download Android App
      </a>

      {/* WHY SECTION */}
      <div style={{ marginTop: "120px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Why Résat?
        </h2>

        <p
          style={{
            opacity: 0.8,
            fontSize: "18px",
            marginBottom: "30px",
          }}
        >
          Motivation fades. Discipline doesn’t.
        </p>

        <div style={{ fontSize: "18px", lineHeight: "1.8" }}>
          ✓ Website Blocking <br />
          ✓ Urge Control Tools <br />
          ✓ Streak Tracking <br />
          ✓ Discipline System
        </div>
      </div>

      {/* SCREENSHOTS */}
      <div style={{ marginTop: "120px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
          App Preview
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <img
            src="/screenshot1.png"
            style={{
              width: "260px",
              borderRadius: "16px",
              boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
            }}
          />

          <img
            src="/screenshot3.png"
            style={{
              width: "260px",
              borderRadius: "16px",
              boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
            }}
          />
        </div>
      </div>
    </main>
  );
}
