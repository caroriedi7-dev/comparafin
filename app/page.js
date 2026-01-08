export default function Home() {
  return (
    <>
      {/* HERO */}
      <section>
        <h1>Compare os melhores bancos do Brasil</h1>
        <p>
          O Comparafin é um comparador independente de contas e cartões
          bancários. Compare taxas, benefícios e condições antes de escolher
          o banco ideal para você.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
          <a className="btn" href="/contas">Comparar contas</a>
          <a className="btn" href="/cartoes">Comparar cartões</a>
        </div>
      </section>

      {/* BANKS */}
      <section>
        <h2>Bancos em destaque</h2>
        <ul>
          <li><strong>Nubank</strong> — Conta digital sem taxa e app líder</li>
          <li><strong>Inter</strong> — Transferências ilimitadas</li>
          <li><strong>C6 Bank</strong> — Programa de pontos</li>
          <li><strong>Itaú</strong> — Banco tradicional mais sólido</li>
          <li><strong>Santander</strong> — Benefícios para clientes</li>
          <li><strong>Banco Pan</strong> — Aprovação facilitada</li>
        </ul>
      </section>

      {/* WHY */}
      <section>
        <h2>Por que usar o Comparafin?</h2>
        <ul>
          <li>✔ Comparações claras e atualizadas</li>
          <li>✔ Sem custo para o usuário</li>
          <li>✔ Comparador independente</li>
          <li>✔ Transparência sobre monetização</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <h2>Comece agora</h2>
        <p>
          Compare contas e cartões bancários e escolha a melhor opção
          para o seu perfil financeiro.
        </p>
        <a className="btn" href="/contas">Ver contas bancárias</a>
      </section>
    </>
  );
}
