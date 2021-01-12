import React, { useState, useEffect } from 'react';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

// import api from '../../services/api';

import Header from '../../components/Header';

// import formatValue from '../../utils/formatValue';

import { Container, Form, CardContainer, Card, TableContainer } from './styles';

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

const Deposit: React.FC = () => {
  // const [transactions, setTransactions] = useState<Transaction[]>([]);
  // const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      // TODO
    }

    loadTransactions();
  }, []);

  return (
    <>
      <Header size="small" />
      <Container>
        <Form>
          <h1>Faça seu Depósito</h1>

          <input name="name" />
          <input name="email" />
        </Form>
        {/* <CardContainer>
          <Card>
            <header>
              <p>Valor depositado</p>
              <img src={outcome} alt="Income" />
            </header>
            <h1 data-testid="balance-income">R$ 5,00</h1>
          </Card>
          <Card>
            <header>
              <p>Saldo</p>
              <img src={income} alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome">R$ 5,00</h1>
          </Card>
          <Card total>
            <header>
              <p>Total</p>
              <img src={total} alt="Total" />
            </header>
            <h1 data-testid="balance-total">R$ 6,890,00</h1>
          </Card>
        </CardContainer> */}

        {/* <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Semana</th>
                <th>Valor depositado</th>
                <th>Ação</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="title">
                  <input type="text" />
                </td>
                <td className="outcome">
                  <input type="text" />
                </td>

                <td>
                  <button type="submit">Depositar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </TableContainer> */}
      </Container>
    </>
  );
};

export default Deposit;
