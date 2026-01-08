export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "1.2fr .8fr",
        gap: 24,
        alignItems: "center"
      }}>
        {/* TEXTE */}
        <div>
          <h1>Compare os melhores bancos do Brasil</h1>
          <p>
            O Comparafin ajuda você a comparar contas e cartões bancários
            de forma simples, transparente e atualizada.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
            <a className="btn" href="/contas">Comparar contas</a>
            <a className="btn" href="/cartoes">Comparar cartões</a>
          </div>

          <p style={{ marginTop: 12, fontSize: 13, color: "#555" }}>
            +10.000 usuários já compararam bancos com o Comparafin
          </p>
        </div>

        {/* IMAGE PLACEHOLDER */}
        <div style={{
          background: "linear-gradient(135deg, rgba(26,111,122,.15), rgba(26,111,122,.05))",
          borderRadius: 16,
          height: 260,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          color: "#1A6F7A"
        }}>
          IMAGE HERO
        </div>
      </section>

      {/* TOP BANKS */}
      <section>
        <h2>Top bancos em destaque</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16
        }}>
          <div>
            <strong>Nubank</strong>
            <p>Conta digital sem taxa e app líder</p>
          </div>

          <div>
            <strong>Inter</strong>
            <p>Transferências ilimitadas</p>
          </div>

          <div>
            <strong>C6 Bank</strong>
            <p>Programa de pontos</p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section>
        <h2>Por que usar o Comparafin?</h2>
        <ul>
          <li>✔ Comparações claras e atualizadas</li>
          <li>✔ Sem custo para o usuário</li>
          <li>✔ Transparência sobre monetização</li>
          <li>✔ Comparador independente</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Comece agora</h2>
        <p>
          Compare contas e cartões bancários e escolha o banco ideal
          para o seu perfil financeiro.
        </p>
        <a className="btn" href="/contas">Ver contas bancárias</a>
      </section>
    </>
  );
}
