export default function Cartoes() {
  return (
    <>
      <section>
        <h1>Comparar cartões bancários</h1>
        <p>
          Compare anuidade, benefícios e condições antes de solicitar seu
          cartão.
        </p>
      </section>

      <section style={{ marginTop: 18 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14
          }}
        >
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, padding: 14 }}>
            <div style={{ fontSize: 12, fontWeight: 900, marginBottom: 8, color: "var(--petrol)" }}>
              Destaque 2025
            </div>
            <h3 style={{ margin: "0 0 6px" }}>Nubank</h3>
            <p style={{ margin: "0 0 12px" }}>Cartão sem anuidade e app líder.</p>
            <a className="btn" href="#">Solicitar</a>
          </div>

          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, padding: 14 }}>
            <div style={{ fontSize: 12, fontWeight: 900, marginBottom: 8, color: "var(--petrol)" }}>
              Melhor custo-benefício
            </div>
            <h3 style={{ margin: "0 0 6px" }}>Inter</h3>
            <p style={{ margin: "0 0 12px" }}>Cartão integrado à conta digital.</p>
            <a className="btn" href="#">Solicitar</a>
          </div>

          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, padding: 14 }}>
            <div style={{ fontSize: 12, fontWeight: 900, marginBottom: 8, color: "var(--petrol)" }}>
              Pontos
            </div>
            <h3 style={{ margin: "0 0 6px" }}>C6 Bank</h3>
            <p style={{ margin: "0 0 12px" }}>Programa de pontos e benefícios.</p>
            <a className="btn" href="#">Solicitar</a>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 18, background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#fbfaf8" }}>
              <th style={{ padding: 12, textAlign: "left" }}>Banco</th>
              <th style={{ padding: 12, textAlign: "left" }}>Anuidade</th>
              <th style={{ padding: 12, textAlign: "left" }}>Destaque</th>
              <th style={{ padding: 12 }}></th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Nubank", "R$ 0", "Cartão simples e popular"],
              ["Inter", "R$ 0", "Integrado à conta digital"],
              ["C6 Bank", "R$ 0*", "Programa de pontos"],
              ["Banco Pan", "R$ 0", "Aprovação facilitada"],
              ["Itaú", "R$ 0*", "Banco tradicional"],
              ["Santander", "R$ 0*", "Isenção sob condições"]
            ].map(([banco, anuidade, destaque]) => (
              <tr key={banco} style={{ borderTop: "1px solid var(--border)" }}>
                <td style={{ padding: 12, fontWeight: 900 }}>{banco}</td>
                <td style={{ padding: 12 }}>{anuidade}</td>
                <td style={{ padding: 12 }}>{destaque}</td>
                <td style={{ padding: 12, textAlign: "right" }}>
                  <a className="btn" href="#">Solicitar</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={{ marginTop: 12 }}>
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, padding: 12, fontSize: 13 }}>
          ℹ️ *Isenção de anuidade pode depender de condições do banco.
          Comparafin pode receber comissão por links afiliados, sem custo para você.*
        </div>
      </section>
    </>
  );
}
