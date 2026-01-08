export default function Comptes() {
  return (
    <>
      <section>
        <h1>Comparar contas bancárias</h1>
        <p>
          Compare os principais bancos do Brasil e escolha a conta ideal
          para o seu perfil.
        </p>
      </section>

      <section className="tableWrap">
        <table>
          <thead>
            <tr>
              <th>Banco</th>
              <th>Tipo</th>
              <th>Conta sem taxa</th>
              <th>Destaque</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nubank</strong></td>
              <td>Digital</td>
              <td>Sim</td>
              <td>App simples e popular</td>
              <td><a className="btn" href="#">Abrir conta</a></td>
            </tr>

            <tr>
              <td><strong>Inter</strong></td>
              <td>Digital</td>
              <td>Sim</td>
              <td>Transferências ilimitadas</td>
              <td><a className="btn" href="#">Abrir conta</a></td>
            </tr>

            <tr>
              <td><strong>C6 Bank</strong></td>
              <td>Digital</td>
              <td>Sim</td>
              <td>Programa de pontos</td>
              <td><a className="btn" href="#">Abrir conta</a></td>
            </tr>

            <tr>
              <td><strong>Banco Pan</strong></td>
              <td>Digital</td>
              <td>Parcial</td>
              <td>Fácil aprovação</td>
              <td><a className="btn" href="#">Abrir conta</a></td>
            </tr>

            <tr>
              <td><strong>Itaú</strong></td>
              <td>Tradicional</td>
              <td>Não</td>
              <td>Banco mais sólido do país</td>
              <td><a className="btn" href="#">Ver opções</a></td>
            </tr>

            <tr>
              <td><strong>Santander</strong></td>
              <td>Tradicional</td>
              <td>Parcial</td>
              <td>Benefícios para clientes</td>
              <td><a className="btn" href="#">Ver opções</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="note">
        ℹ️ Comparafin é um comparador independente.
        Podemos receber comissão por links afiliados, sem custo adicional para você.
      </div>
    </>
  );
}
