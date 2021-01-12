import React, { useState, useEffect } from 'react';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import add from '../../assets/add.svg';

// import api from '../../services/api';

import Header from '../../components/Header';

// import formatValue from '../../utils/formatValue';

import { Container, CardContainer, Card, TableContainer } from './styles';

// interface Transaction {
//   id: string;
//   title: string;
//   value: number;
//   formattedValue: string;
//   formattedDate: string;
//   type: 'income' | 'outcome';
//   category: { title: string };
//   created_at: Date;
// }

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  // const [transactions, setTransactions] = useState<Transaction[]>([]);
  // const [balance, setBalance] = useState<Balance>({} as Balance);
  const [data, setData] = useState('');
  const [valor, setValor] = useState(0);
  const [saldo, setSaldo] = useState(0);
  const [week, setWeek] = useState(0);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      // TODO
    }

    loadTransactions();
  }, []);

  function getDate(): void {
    const date = new Date();
    setData(date.toLocaleDateString('pt-BR'));
    // console.log(date.toLocaleDateString('pt-BR'));
    setValor(valor + 5);
    setSaldo(valor + saldo + 5);
    setWeek(week + 1);

    if (saldo === 6630) {
      alert('Meta alcançada');
    }
  }

  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Valor depositado</p>
              <img src={outcome} alt="Income" />
            </header>
            <h1 data-testid="balance-income">
              R$
              {valor}
              ,00
            </h1>
          </Card>
          <Card>
            <header>
              <p>Saldo</p>
              <img src={income} alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome">
              R$
              {saldo}
              ,00
            </h1>
          </Card>
          <Card total>
            <header>
              <p> Plano Total</p>
              <img src={total} alt=" Plano Total" />
            </header>
            <h1 data-testid="balance-total">R$ 6,890,00</h1>
          </Card>
          <div />
          <div />
          <button type="button" onClick={getDate}>
            <img src={add} alt="add" />
          </button>
        </CardContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Semana</th>
                <th>Valor depositado</th>
                <th>Saldo</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="title">{week}</td>
                <td className="outcome">R$ 5,00</td>
                <td className="income">
                  R$
                  {saldo}
                  ,00
                </td>
                <td>{data}</td>
              </tr>
              {/* <tr>
                <td className="title">Website Hosting</td>
                <td className="outcome">- R$ 1.000,00</td>
                <td>Hosting</td>
                <td>19/04/2020</td>
              </tr> */}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
