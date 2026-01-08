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
          <div className="container" style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
            <div className="brand">Comparafin</div>

            <nav style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
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
      </body>
    </html>
  );
}
