export default function Preview() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr .8fr",
          gap: 32,
          alignItems: "center",
          padding: 32
        }}
      >
        <div>
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
              background: "rgba(212,175,55,.15)",
              marginBottom: 12
            }}
          >
            ⭐ Melhor de 2025
          </div>

          <h1>Compare bancos, contas e cartões no Brasil</h1>

          <p style={{ fontSize: 17, maxWidth: 520 }}>
            Comparafin é um comparador financeiro independente.
            Compare bancos digitais e tradicionais com clareza,
            transparência e conteúdo editorial de qualidade.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
            <a className="btn" href="/contas">Comparar contas</a>
            <a className="btn" href="/cartoes">Comparar cartões</a>
          </div>
        </div>

        <div
          style={{
            height: 320,
            borderRadius: 20,
            background:
              "linear-gradient(135deg, rgba(26,111,122,.25), rgba(26,111,122,.06))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            color: "#1A6F7A"
          }}
        >
          IMAGE HERO
        </div>
      </section>

      {/* CATEGORIES */}
      <section>
        <h2>O que você deseja comparar?</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 18
          }}
        >
          <div className="card">
            <strong>Contas bancárias</strong>
            <p>Compare taxas, benefícios e serviços.</p>
            <a className="btn" href="/contas">Ver contas</a>
          </div>

          <div className="card">
            <strong>Cartões de crédito</strong>
            <p>Anuidade, limite e benefícios.</p>
            <a className="btn" href="/cartoes">Ver cartões</a>
          </div>

          <div className="card">
            <strong>Guias e artigos</strong>
            <p>Conteúdo editorial para decidir melhor.</p>
            <a className="btn" href="/artigos">Ler artigos</a>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section>
        <h2>Como funciona o Comparafin</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 18
          }}
        >
          <div className="card">
            <strong>1. Compare</strong>
            <p>Analisamos bancos e produtos.</p>
          </div>

          <div className="card">
            <strong>2. Escolha</strong>
            <p>Veja prós, contras e recomendações.</p>
          </div>

          <div className="card">
            <strong>3. Solicite</strong>
            <p>Redirecionamento seguro.</p>
          </div>
        </div>
      </section>

      {/* EDITORIAL */}
      <section>
        <h2>Seleção do editor</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 18
          }}
        >
          <div className="card">
            <strong>Melhores contas digitais em 2025</strong>
            <p>Ranking atualizado com critérios claros.</p>
            <a className="btn" href="#">Ler artigo</a>
          </div>

          <div className="card">
            <strong>Nubank ou Inter?</strong>
            <p>Comparação completa entre os dois.</p>
            <a className="btn" href="#">Ler artigo</a>
          </div>

          <div className="card">
            <strong>Cartão sem anuidade vale a pena?</strong>
            <p>Guia completo para escolher.</p>
            <a className="btn" href="#">Ler artigo</a>
          </div>
        </div>
      </section>
    </>
  );
}
