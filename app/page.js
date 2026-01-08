export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>Compare os melhores bancos do Brasil</h1>
          <p>
            Contas e cartões bancários comparados de forma simples,
            transparente e atualizada.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <a className="btn" href="/comptes">Comparar contas</a>
            <a className="btn secondary" href="/cartes">Ver cartões</a>
          </div>
        </div>

        <div className="heroCard">
          <span className="badge">Melhores de 2025</span>
          <p className="small">
            Nubank · Inter · C6 · Itaú · Santander · Banco Pan
          </p>
        </div>
      </section>

      <section>
        <h2>Destaques</h2>

        <div className="grid">
          <div className="card">
            <span className="badge">Conta digital</span>
            <h3>Nubank</h3>
            <p>Conta sem taxa e app líder no Brasil.</p>
            <a className="btn" href="/comptes">Abrir conta</a>
          </div>

          <div className="card">
            <span className="badge">Conta digital</span>
            <h3>Inter</h3>
            <p>Transferências ilimitadas e serviços completos.</p>
            <a className="btn" href="/comptes">Abrir conta</a>
          </div>

          <div className="card">
            <span className="badge">Banco tradicional</span>
            <h3>Itaú</h3>
            <p>Solidez, serviços completos e presença nacional.</p>
            <a className="btn" href="/comptes">Ver opções</a>
          </div>
        </div>
      </section>
    </>
  );
}
