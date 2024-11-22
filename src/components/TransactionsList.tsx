import { Transaction } from "../types";

const TransactionsList = ({
  transactions,
}: {
  transactions: Array<Transaction>;
}) => {
  if (transactions.length === 0)
    return <div>No matching transactions found.</div>;

  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p>
            <strong>Transaction ID:</strong>
            {transaction.id}
          </p>
          <p>
            <strong>Amount:</strong>
            {transaction.amount}
          </p>
          <p>
            <strong>Date:</strong>
            {transaction.date}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default TransactionsList;
