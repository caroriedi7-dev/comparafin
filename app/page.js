export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-lite">
        <div className="hero-lite-content">
          <span className="hero-lite-eyebrow">Comparador financeiro independente</span>

          <h1>Compare contas e cartões bancários</h1>

          <p>
            Compare bancos digitais e tradicionais, taxas e benefícios — de forma
            clara, gratuita e sempre atualizada.
          </p>

          <ul className="hero-lite-list">
            <li>Transparente</li>
            <li>Sem custo</li>
            <li>Atualizado regularmente</li>
          </ul>

          <div className="hero-lite-actions">
            <a className="hero-btn" href="/contas">Comparar contas</a>
            <a className="hero-btn" href="/cartoes">Comparar cartões</a>
          </div>
        </div>

        <div className="hero-lite-image">
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
