const maxW: React.CSSProperties = { maxWidth: 760, margin: "0 auto", padding: "0 24px" };

const accentBar: React.CSSProperties = {
  display: "block",
  width: 40,
  height: 3,
  background: "#b89c6e",
  marginBottom: 20,
};

export default function Home() {
  return (
    <main style={{ background: "#fff", color: "#1a1a1a" }}>

      {/* ── HERO ── */}
      <header
        style={{
          background: "linear-gradient(160deg, #1a1a1a 0%, #2e2e2e 100%)",
          color: "#fff",
          padding: "96px 24px 80px",
          textAlign: "center",
        }}
      >
        <div style={maxW}>
          <p
            style={{
              letterSpacing: "0.18em",
              fontSize: 11,
              textTransform: "uppercase",
              color: "#b89c6e",
              marginBottom: 18,
              marginTop: 0,
            }}
          >
            Hundesalon · Wien
          </p>
          <h1
            data-edit-id="hero-title"
            style={{
              fontSize: "clamp(38px, 7vw, 58px)",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              margin: "0 0 20px",
              lineHeight: 1.1,
            }}
          >
            Jacopos Hundesalon
          </h1>
          <p
            data-edit-id="hero-subtitle"
            style={{
              fontSize: 19,
              color: "#c9c9c9",
              marginTop: 0,
              marginBottom: 36,
              lineHeight: 1.6,
            }}
          >
            Professionelle Pflege &amp; Styling für Ihren Vierbeiner — liebevoll &amp; mit Erfahrung.
          </p>
          <button
            data-edit-id="hero-cta"
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "15px 38px",
              border: 0,
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "0.06em",
              cursor: "pointer",
              borderRadius: 4,
              textTransform: "uppercase",
            }}
          >
            Termin buchen
          </button>
        </div>
      </header>

      {/* ── ÜBER UNS ── */}
      <section style={{ padding: "72px 24px" }}>
        <div style={maxW}>
          <span style={accentBar} />
          <h2
            data-edit-id="about-title"
            style={{ fontSize: 30, margin: "0 0 16px", fontWeight: 700 }}
          >
            Über uns
          </h2>
          <p
            data-edit-id="about-text"
            style={{ lineHeight: 1.8, color: "#444", fontSize: 17, margin: 0 }}
          >
            Willkommen bei Jacopos Hundesalon! Seit über 10 Jahren kümmern wir uns mit Herz
            und Fachkenntnis um das Wohlbefinden Ihres Hundes. Jeder Hund wird bei uns
            individuell betreut — sanft, stressfrei und mit viel Liebe zum Detail.
          </p>
        </div>
      </section>

      {/* ── ÖFFNUNGSZEITEN ── */}
      <section style={{ background: "#faf7f2", padding: "64px 24px" }}>
        <div style={maxW}>
          <span style={accentBar} />
          <h2
            data-edit-id="hours-title"
            style={{ fontSize: 30, margin: "0 0 24px", fontWeight: 700 }}
          >
            Öffnungszeiten
          </h2>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              background: "#fff",
              border: "1px solid #e8e0d4",
              borderRadius: 8,
              padding: "18px 28px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <span style={{ fontSize: 24 }}>🕘</span>
            <p data-edit-id="hours" style={{ fontSize: 17, margin: 0, color: "#333" }}>
              Di–Fr 9–18 Uhr, Sa 9–14 Uhr
            </p>
          </div>
        </div>
      </section>

      {/* ── LEISTUNGEN & PREISE ── */}
      <section style={{ padding: "72px 24px" }}>
        <div style={maxW}>
          <span style={accentBar} />
          <h2
            data-edit-id="prices-title"
            style={{ fontSize: 30, margin: "0 0 32px", fontWeight: 700 }}
          >
            Leistungen &amp; Preise
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 16 }}>
            <li
              data-edit-id="price-1"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#faf7f2",
                border: "1px solid #ede8df",
                borderRadius: 8,
                padding: "18px 24px",
              }}
            >
              <span style={{ fontSize: 16, fontWeight: 600 }}>🐾 Baden &amp; Föhnen</span>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#b89c6e" }}>ab 35 €</span>
            </li>
            <li
              data-edit-id="price-2"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#faf7f2",
                border: "1px solid #ede8df",
                borderRadius: 8,
                padding: "18px 24px",
              }}
            >
              <span style={{ fontSize: 16, fontWeight: 600 }}>✂️ Scheren &amp; Trimmen</span>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#b89c6e" }}>ab 55 €</span>
            </li>
            <li
              data-edit-id="price-3"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#faf7f2",
                border: "1px solid #ede8df",
                borderRadius: 8,
                padding: "18px 24px",
              }}
            >
              <span style={{ fontSize: 16, fontWeight: 600 }}>🐕 Komplett-Pflege</span>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#b89c6e" }}>ab 80 €</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: "#1a1a1a",
          color: "#aaa",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <p
          data-edit-id="contact"
          style={{ margin: 0, fontSize: 15, lineHeight: 1.7 }}
        >
          Hundestraße 7, 1080 Wien · 01 987 65 43 · hallo@jacopos-hundesalon.at
        </p>
      </footer>
    </main>
  );
}
