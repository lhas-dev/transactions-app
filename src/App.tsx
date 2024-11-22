import { useEffect, useState } from "react";
import { Transaction } from "./types";
import getPastTransactions from "./helpers/getPastTransactions";
import TransactionsList from "./components/TransactionsList";
import AddTransactionForm from "./components/AddTransactionForm";
import SearchForm from "./components/SearchForm";
import { v4 as uuid } from "uuid";

export default function App() {
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);

  useEffect(() => {
    const cb = async () => {
      const response = await getPastTransactions();

      setTransactions(response);
    };

    cb();
  }, []);

  const onSearch = (startDate: string, endDate: string) => {
    console.log("startDate", startDate);
    console.log("endDate", endDate);
  };

  const onAdd = (amount: string) => {
    setTransactions((prev) => [
      ...prev,
      {
        id: uuid(),
        amount: parseFloat(amount),
        date: new Date().toISOString().slice(0, 10),
      },
    ]);
  };

  return (
    <div className="App">
      <SearchForm onSubmit={onSearch} />
      <AddTransactionForm onSubmit={onAdd} />
      <TransactionsList transactions={transactions} />
    </div>
  );
}
