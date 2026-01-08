import "../styles/globals.css";

export const metadata = {
  title: "Comparafin | Comparador bancário",
  description: "Compare contas e cartões bancários no Brasil com transparência."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <div
            className="container"
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div className="brand">Comparafin</div>

            <nav
              style={{
                display: "flex",
                gap: 14,
                alignItems: "center",
                flexWrap: "wrap"
              }}
            >
              <a href="/">Início</a>
              <a href="/contas">Contas</a>
              <a href="/cartoes">Cartões</a>
              <a href="/sobre">Sobre</a>
              <a className="btn" href="/contas">Comparar</a>
            </nav>
          </div>
        </header>

        <main className="container">
          {children}
        </main>

        <footer
  style={{
    marginTop: 48,
    borderTop: "1px solid var(--border)",
    background: "#fff"
  }}
>
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              gap: 24,
              padding: "32px 0"
            }}
          >
            <div>
              <strong style={{ fontSize: 18 }}>Comparafin</strong>
              <p style={{ marginTop: 8, fontSize: 14 }}>
                Comparador financeiro independente de contas e cartões
                bancários no Brasil.
              </p>
              <p style={{ marginTop: 8, fontSize: 13, color: "#555" }}>
                Podemos receber comissão por links afiliados, sem custo
                adicional para você.
              </p>
            </div>

            <div>
              <strong>Comparar</strong>
              <ul style={{ marginTop: 8 }}>
                <li><a href="/contas">Contas bancárias</a></li>
                <li><a href="/cartoes">Cartões bancários</a></li>
              </ul>
            </div>

            <div>
              <strong>Institucional</strong>
              <ul style={{ marginTop: 8 }}>
                <li><a href="/sobre">Sobre o Comparafin</a></li>
                <li><a href="#">Política de privacidade</a></li>
                <li><a href="#">Termos de uso</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--border)",
              padding: "12px 0",
              fontSize: 13,
              color: "#555"
            }}
          >
            <div className="container">
              © {new Date().getFullYear()} Comparafin · Conteúdo informativo · Brasil
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
