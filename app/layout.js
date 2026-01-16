import "../styles/globals.css";

export const metadata = {
  title: "Comparafin | Comparador bancário",
  description: "Compare contas e cartões bancários no Brasil com transparência."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* HEADER */}
        <header>
          <div className="container nav">
            <div className="brand">Comparafin</div>

            <nav>
              <a href="/">Início</a>
              <a href="/contas">Contas</a>
              <a href="/cartoes">Cartões</a>
              <a href="/artigos">Artigos</a>
              <a href="/sobre">Sobre</a>
              <a className="btn" href="/contas">Comparar</a>
            </nav>
          </div>
        </header>

        {/* CONTENT */}
        <main className="container">
          {children}
        </main>

        {/* FOOTER */}
        <footer
          style={{
            marginTop: 48,
            background: "var(--petrol)",
            color: "#fff"
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
              <p style={{ marginTop: 8, color: "rgba(255,255,255,.85)" }}>
                Comparador financeiro independente de contas e cartões bancários no Brasil.
              </p>
              <p style={{ marginTop: 8, fontSize: 13, color: "rgba(255,255,255,.7)" }}>
                Podemos receber comissão por links afiliados, sem custo adicional para você.
              </p>
            </div>

            <div>
              <strong>Comparar</strong>
              <ul>
                <li><a href="/contas">Contas</a></li>
                <li><a href="/cartoes">Cartões</a></li>
              </ul>
            </div>

            <div>
              <strong>Institucional</strong>
              <ul>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="#">Privacidade</a></li>
                <li><a href="#">Termos</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,.15)",
              padding: "12px 0",
              fontSize: 13,
              color: "rgba(255,255,255,.7)"
            }}
          >
            <div className="container">
              © {new Date().getFullYear()} Comparafin · Brasil
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
