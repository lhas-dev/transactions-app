import { Transaction } from "../types";

const TransactionsList = ({
  transactions,
}: {
  transactions: Array<Transaction>;
}) => {
  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p>
            <strong>ID:</strong>
            {transaction.id}
          </p>
          <p>
            <strong>Amount:</strong>
            {transaction.amount}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default TransactionsList;
