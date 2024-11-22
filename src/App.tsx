import TransactionsList from "./components/TransactionsList";
import AddTransactionForm from "./components/forms/AddTransactionForm";
import SearchForm from "./components/forms/SearchForm";
import CheckTransactionsForm from "./components/forms/CheckTransactionsForm";
import useTransactions from "./hooks/useTransactions";

export default function App() {
  const { transactions, filteredTransactions, onAdd, onCheck, onSearch } =
    useTransactions();

  return (
    <div className="App">
      <SearchForm onSubmit={onSearch} />
      <AddTransactionForm onSubmit={onAdd} />
      <TransactionsList
        transactions={
          filteredTransactions ? filteredTransactions : transactions
        }
      />
      <CheckTransactionsForm onSubmit={onCheck} />
    </div>
  );
}
