export default function Cartes() {
  return (
    <>
      <section>
        <h1>Comparar cartões bancários</h1>
        <p>
          Compare anuidade, benefícios e condições antes de solicitar
          seu cartão.
        </p>
      </section>

      <section className="tableWrap">
        <table>
          <thead>
            <tr>
              <th>Banco</th>
              <th>Cartão</th>
              <th>Anuidade</th>
              <th>Destaque</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nubank</strong></td>
              <td>Nubank Gold</td>
              <td>R$ 0</td>
              <td>Cartão simples e popular</td>
              <td><a className="btn" href="#">Solicitar</a></td>
            </tr>

            <tr>
              <td><strong>Inter</strong></td>
              <td>Inter Gold</td>
              <td>R$ 0</td>
              <td>Integrado à conta digital</td>
              <td><a className="btn" href="#">Solicitar</a></td>
            </tr>

            <tr>
              <td><strong>C6 Bank</strong></td>
              <td>C6 Platinum</td>
              <td>R$ 0*</td>
              <td>Programa de pontos</td>
              <td><a className="btn" href="#">Solicitar</a></td>
            </tr>

            <tr>
              <td><strong>Banco Pan</strong></td>
              <td>Pan Internacional</td>
              <td>R$ 0</td>
              <td>Aprovação facilitada</td>
              <td><a className="btn" href="#">Solicitar</a></td>
            </tr>

            <tr>
              <td><strong>Itaú</strong></td>
              <td>Itaú Click</td>
              <td>R$ 0*</td>
              <td>Banco tradicional</td>
              <td><a className="btn" href="#">Ver opções</a></td>
            </tr>

            <tr>
              <td><strong>Santander</strong></td>
              <td>SX Santander</td>
              <td>R$ 0*</td>
              <td>Isenção com uso mensal</td>
              <td><a className="btn" href="#">Ver opções</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="note">
        *Isenção de anuidade sujeita a condições de cada banco.
      </div>
    </>
  );
}
