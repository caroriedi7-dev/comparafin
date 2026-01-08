export default function Home() {
  return (
    <>
      {/* HERO PREMIUM */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr .8fr",
          gap: 32,
          alignItems: "center",
          padding: 32
        }}
      >
        {/* TEXTE */}
        <div>
          {/* SELO */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "2px solid var(--gold)",
              borderRadius: 999,
              padding: "6px 12px",
              fontWeight: 900,
              fontSize: 12,
              color: "#6a5200",
              background: "rgba(212,175,55,.15)",
              marginBottom: 12
            }}
          >
            ⭐ Melhor de 2025
          </div>

          <h1 style={{ marginBottom: 12 }}>
            Compare contas e cartões bancários no Brasil
          </h1>

          <p style={{ fontSize: 17, maxWidth: 520 }}>
            Comparador financeiro independente. Compare bancos digitais
            e tradicionais, taxas e benefícios — de forma clara,
            gratuita e atualizada.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
            <a className="btn" href="/contas">Comparar contas</a>
            <a className="btn" href="/cartoes">Comparar cartões</a>
          </div>

          <p style={{ marginTop: 14, fontSize: 13, color: "#555" }}>
            ✔ Transparente · ✔ Sem custo · ✔ Atualizado regularmente
          </p>
        </div>

        {/* IMAGE PLACEHOLDER (PREMIUM) */}
        <div
          style={{
            height: 320,
            borderRadius: 20,
            background:
              "linear-gradient(135deg, rgba(26,111,122,.22), rgba(26,111,122,.06))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1A6F7A",
            fontWeight: 900,
            fontSize: 18,
            letterSpacing: ".5px"
          }}
        >
          IMAGE FINTECH
        </div>
      </section>

      {/* TOP PICKS */}
      <section>
        <h2>Top escolhas do Comparafin</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 18
          }}
        >
          <div className="card">
            <span
              style={{
                display: "inline-block",
                fontSize: 12,
                fontWeight: 900,
                color: "#1A6F7A",
                marginBottom: 6
              }}
            >
              Conta digital
            </span>
            <strong>Nubank</strong>
            <p>Conta sem taxa e app líder no Brasil.</p>
            <a className="btn" href="/contas">Ver conta</a>
          </div>

          <div className="card">
            <span
              style={{
                display: "inline-block",
                fontSize: 12,
                fontWeight: 900,
                color: "#1A6F7A",
                marginBottom: 6
              }}
            >
              Custo-benefício
            </span>
            <strong>Inter</strong>
            <p>Transferências ilimitadas e serviços completos.</p>
            <a className="btn" href="/contas">Ver conta</a>
          </div>

          <div className="card">
            <span
              style={{
                display: "inline-block",
                fontSize: 12,
                fontWeight: 900,
                color: "#1A6F7A",
                marginBottom: 6
              }}
            >
              Pontos
            </span>
            <strong>C6 Bank</strong>
            <p>Programa de pontos e opções de cartão.</p>
            <a className="btn" href="/cartoes">Ver cartões</a>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section>
        <h2>Independente e transparente</h2>
        <p>
          O Comparafin é um comparador financeiro independente.
          Podemos receber comissão por links afiliados, sem custo adicional
          para você. Isso não influencia nossas análises.
        </p>
      </section>
    </>
  );
}
