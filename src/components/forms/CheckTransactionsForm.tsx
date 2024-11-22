import { useState } from "react";

interface CheckTransactionsFormProps {
  onSubmit: (amount: string) => void;
}

const CheckTransactionsForm = ({ onSubmit }: CheckTransactionsFormProps) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(amount);
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        placeholder="Amount"
      />
      <button type="submit">Check Transactions</button>
    </form>
  );
};

export default CheckTransactionsForm;
