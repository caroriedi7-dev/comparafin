export default function Home() {
  return (
    <section>
      <h1>Compare os melhores bancos do Brasil</h1>
      <p>
        Comparador independente de contas e cartões bancários.
        Encontre a melhor opção para o seu perfil.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <a className="btn" href="/contas">Comparar contas</a>
        <a className="btn" href="/cartoes">Ver cartões</a>
      </div>
    </section>
  );
}
