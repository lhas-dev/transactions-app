import { Transaction } from "../types";
import { v4 as uuid } from "uuid";

const getPastTransactions = async () => {
  return [
    {
      id: uuid(),
      amount: 100,
      date: "2024-11-22",
    },
    {
      id: uuid(),
      amount: 200,
      date: "2024-11-21",
    },
  ] as Array<Transaction>;
};

export default getPastTransactions;
