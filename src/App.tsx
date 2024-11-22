import { useEffect, useState } from 'react';

interface Transaction {
  id: number;
  amount: number;
}

const getPastTransactions = async () => {
  return [
    {
      id: 1,
      amount: 100,
    },
    {
      id: 2,
      amount: 100,
    },
  ] as Array<Transaction>;
}

const TransactionsList = ({ transactions }: { transactions: Array<Transaction> }) => {

  return (
    <ul>{transactions.map(transaction => (
      <li key={transaction.id}>
        <p>
          <strong>ID:</strong>{transaction.id}
        </p>
        <p>
          <strong>Amount:</strong>{transaction.amount}
        </p>
      </li>
    ))}</ul>
  )
}

const SearchForm = ({ onSubmit }: { onSubmit: (value: string) => void }) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <input value={value} onChange={event => setValue(event.target.value)} type="number" placeholder="Target value" />
      <button onClick={() => onSubmit(value)}>Check Transactions</button>
    </div>
  )
}

const AddNewTransactionForm = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');

  return (
    <form onSubmit={onSubmit}>
      <input type="number" placeholder="Amount" />
      <button type="submit">Add Transaction</button>
    </form>
  )
}

export default function App() {
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);

  useEffect(() => {
    const cb = async () => {
      const response = await getPastTransactions();

      setTransactions(response);
    };

    cb();
  }, []);

  const onSubmit = (value: string) => {
    console.log('search', value);
  };

  return (
    <div className="App">
      <SearchForm onSubmit={onSubmit} />
      <AddNewTransactionForm onAdd={onAdd} />
      <TransactionsList transactions={transactions} />
    </div>
  );
}
