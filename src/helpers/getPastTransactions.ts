import { Transaction } from "../types";

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
};

export default getPastTransactions;
