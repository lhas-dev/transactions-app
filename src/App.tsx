import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Transaction } from "./types";
import getPastTransactions from "./helpers/getPastTransactions";
import TransactionsList from "./components/TransactionsList";
import AddTransactionForm from "./components/forms/AddTransactionForm";
import SearchForm from "./components/forms/SearchForm";
import CheckTransactionsForm from "./components/forms/CheckTransactionsForm";

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

  const onCheck = () => {
    console.log("Checking transactions");
  };

  return (
    <div className="App">
      <SearchForm onSubmit={onSearch} />
      <AddTransactionForm onSubmit={onAdd} />
      <TransactionsList transactions={transactions} />
      <CheckTransactionsForm onSubmit={onCheck} />
    </div>
  );
}
