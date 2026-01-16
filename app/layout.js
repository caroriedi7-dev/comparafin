import "../styles/globals.css";

export const metadata = {
  title: "Comparafin | Comparador bancário",
  description: "Compare contas e cartões bancários no Brasil com transparência."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
