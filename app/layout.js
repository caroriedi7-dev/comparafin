import "../styles/globals.css";

export const metadata = {
  title: "Comparafin | Comparador bancário",
  description: "Compare contas e cartões bancários no Brasil"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <div className="container nav">
            <div className="brand">Comparafin</div>
          </div>
        </header>

        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
