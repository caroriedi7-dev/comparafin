import "../styles/globals.css";

export const metadata = {
  title: "Comparafin | Comparador bancário",
  description: "Compare contas e cartões bancários no Brasil com transparência"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <div className="container nav">
            <div className="brand">Comparafin</div>
            <nav className="menu">
              <a href="/">Início</a>
              <a href="/comptes">Contas</a>
              <a href="/cartes">Cartões</a>
              <a href="/a-propos">Sobre</a>
              <a className="btn secondary" href="/comptes">Comparar</a>
            </nav>
          </div>
        </header>

        <main className="container">
          {children}
        </main>

        <footer>
          <div className="container footerGrid">
            <div>
              <strong>Comparafin</strong>
              <p className="small">
                Comparador independente de contas e cartões bancários.
                Podemos receber comissão por links afiliados, sem custo para você.
              </p>
            </div>

            <div className="footerLinks">
              <strong>Produtos</strong>
              <a href="/comptes">Contas</a>
              <a href="/cartes">Cartões</a>
            </div>

            <div className="footerLinks">
              <strong>Institucional</strong>
              <a href="/a-propos">Sobre</a>
            </div>
          </div>

          <div className="container small" style={{ marginTop: 16 }}>
👉 © 2025 Comparafin · Transparência · Afiliados
          </div>
        </footer>
      </body>
    </html>
  );
}
