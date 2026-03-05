export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "white",
        fontFamily: "sans-serif",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      {/* HERO */}
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
          maxWidth: "600px",
          margin: "0 auto 30px auto",
          fontSize: "18px",
          color: "#bbbbbb",
        }}
      >
        Résat helps you eliminate triggers, control urges, and stay consistent
        every single day.
      </p>

      <a href="/resat.apk" download>
        <button
          style={{
            background: "#22c55e",
            border: "none",
            padding: "16px 28px",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Download Android App
        </button>
      </a>

      {/* FEATURES */}
      <div style={{ marginTop: "80px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
          Why Résat Works
        </h2>

        <div
          style={{
            maxWidth: "700px",
            margin: "auto",
            textAlign: "left",
            fontSize: "18px",
            lineHeight: "2",
          }}
        >
          ✓ Block adult websites instantly<br />
          ✓ Control urges before relapse<br />
          ✓ Track your streak progress<br />
          ✓ Build daily discipline habits<br />
          ✓ Works offline and private
        </div>
      </div>

      {/* SCREENSHOTS */}
      <div style={{ marginTop: "80px" }}>
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

      {/* SECOND DOWNLOAD */}
      <div style={{ marginTop: "80px" }}>
        <h2 style={{ marginBottom: "20px" }}>
          Start Your Discipline Journey Today
        </h2>

        <a href="/resat.apk" download>
          <button
            style={{
              background: "#22c55e",
              border: "none",
              padding: "16px 28px",
              borderRadius: "10px",
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Download Résat
          </button>
        </a>
      </div>

      {/* FOOTER */}
      <div
        style={{
          marginTop: "100px",
          fontSize: "14px",
          color: "#888",
        }}
      >
        <p>Résat App © 2026</p>
        <p>Built to help people break addiction and build discipline.</p>
      </div>
    </main>
  );
}