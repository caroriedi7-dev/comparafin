export default function Preview() {
  return (
    <>
      <section className="heroLight">
        <div>
          <h1>Compare contas e cartões bancários</h1>

          <p>
            Comparador financeiro independente. Compare bancos digitais e tradicionais, taxas e benefícios — de forma clara, gratuita e atualizada.
          </p>

          <div className="heroChecks">
            <span>✔ Transparente</span>
            <span>·</span>
            <span>✔ Sem custo</span>
            <span>·</span>
            <span>✔ Atualizado regularmente</span>
          </div>

          <div className="heroActions">
            <a className="btn" href="/contas">Comparar contas</a>
            <a className="btn" href="/cartoes">Comparar cartões</a>
          </div>
        </div>

        <div className="heroMedia">IMAGE FINTECH</div>
      </section>

      {/* le reste de la page (l'autre modèle) reste en dessous, on le remet après validation */}
    </>
  );
}
