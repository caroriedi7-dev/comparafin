export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "1.3fr .7fr",
        gap: 32,
        alignItems: "center",
        padding: "32px"
      }}>
        {/* LEFT */}
        <div>
          <span style={{
            display: "inline-block",
            fontSize: 12,
            fontWeight: 900,
            color: "#1A6F7A",
            marginBottom: 8
          }}>
            COMPARADOR FINANCEIRO
          </span>

          <h1 style={{ marginBottom: 12 }}>
            Compare contas e cartões bancários no Brasil
          </h1>

          <p style={{ fontSize: 17, maxWidth: 520 }}>
            Compare bancos digitais e tradicionais de forma clara,
            independente e gratuita. Escolha a melhor opção para o
            seu perfil financeiro.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
            <a className="btn" href="/contas">Comparar contas</a>
            <a className="btn" href="/cartoes">Comparar cartões</a>
          </div>

          <p style={{ marginTop: 14, fontSize: 13, color: "#555" }}>
            ✔ Comparações imparciais · ✔ Sem custo · ✔ Atualizado regularmente
          </p>
        </div>

        {/* RIGHT IMAGE PLACEHOLDER */}
        <div style={{
          background: "linear-gradient(135deg, rgba(26,111,122,.25), rgba(26,111,122,.05))",
          borderRadius: 20,
          height: 300,
          display: "flex",
          align
