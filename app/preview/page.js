export default function Preview() {
  return (
    <>
      <section className="v2-hero">
        <div>
          <div className="v2-selo-inline">⭐ Melhor de 2025</div>
          <h1>Compare as Melhores Contas e Cartões no Brasil</h1>
          <p>
            Comparafin é um comparador financeiro independente. Compare bancos
            digitais e tradicionais com clareza e confiança.
          </p>

          <div className="v2-hero-actions">
            <a className="v2-btn primary" href="/contas">Comparar Contas</a>
            <a className="v2-btn secondary" href="/cartoes">Comparar Cartões</a>
          </div>
        </div>

        <div className="v2-hero-media">
          <div className="v2-selo">
            <div>
              <span>ANÁLISES IMPARCIAIS</span>
              <strong>Comparafin</strong>
              <span>APROVADO</span>
            </div>
          </div>
        </div>
      </section>

      <h2 className="v2-section-title">Escolha o que deseja comparar</h2>
      <div className="v2-grid-2">
        <div className="v2-card v2-feature">
          <div>
            <h3>Contas Bancárias</h3>
            <p>Compare taxas, benefícios e serviços.</p>
            <a className="v2-btn primary" href="/contas">Comparar</a>
          </div>
          <div className="v2-feature-media" />
        </div>

        <div className="v2-card v2-feature">
          <div>
            <h3>Cartões de Crédito</h3>
            <p>Anuidade, limite e benefícios.</p>
            <a className="v2-btn primary" href="/cartoes">Comparar</a>
          </div>
          <div className="v2-feature-media" />
        </div>
      </div>

      <h2 className="v2-section-title">Como funciona?</h2>
      <div className="v2-card">
        <div className="v2-grid-3">
          <div className="v2-step">
            <div className="v2-icon">1</div>
            <div><strong>Pesquise</strong><p>Explore e filtre as opções.</p></div>
          </div>
          <div className="v2-step">
            <div className="v2-icon">2</div>
            <div><strong>Compare</strong><p>Veja benefícios lado a lado.</p></div>
          </div>
          <div className="v2-step">
            <div className="v2-icon">3</div>
            <div><strong>Escolha</strong><p>Solicite com confiança.</p></div>
          </div>
        </div>
      </div>

      <h2 className="v2-section-title">Seleção do editor</h2>
      <div className="v2-grid-3">
        <div className="v2-card">
          <div className="v2-thumb" />
          <strong>Melhores Contas Digitais de 2025</strong>
          <p>Ranking atualizado com critérios claros.</p>
          <a className="v2-btn primary" href="/artigos">Ler</a>
        </div>
        <div className="v2-card">
          <div className="v2-thumb" />
          <strong>Nubank ou Inter: Qual o Melhor?</strong>
          <p>Comparativo completo e atualizado.</p>
          <a className="v2-btn primary" href="/artigos">Ler</a>
        </div>
        <div className="v2-card">
          <div className="v2-thumb" />
          <strong>Cartão Sem Anuidade: Guia Completo</strong>
          <p>Como escolher o melhor cartão.</p>
          <a className="v2-btn primary" href="/artigos">Ler</a>
        </div>
      </div>
    </>
  );
}
