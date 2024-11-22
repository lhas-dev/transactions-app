import { useEffect, useState } from "react";
import { Transaction } from "../types";
import getPastTransactions from "../helpers/getPastTransactions";
import { v4 as uuid } from "uuid";

const useTransactions = () => {
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);
  const [filteredTransactions, setFilteredTransactions] =
    useState<Array<Transaction> | null>();

  useEffect(() => {
    const cb = async () => {
      const response = await getPastTransactions();

      setTransactions(response);
    };

    cb();
  }, []);

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

  const onCheck = (amount: string) => {
    if (amount === "") {
      setFilteredTransactions(null);
      return;
    }
    const compatibleTransactions = transactions.filter(
      (transaction) => transaction.amount === parseFloat(amount)
    );

    setFilteredTransactions(compatibleTransactions);
  };

  const onSearch = (startDate: string, endDate: string) => {
    console.log("startDate", startDate);
    console.log("endDate", endDate);
  };

  return {
    transactions,
    filteredTransactions,
    onAdd,
    onCheck,
    onSearch,
  };
};

export default useTransactions;
