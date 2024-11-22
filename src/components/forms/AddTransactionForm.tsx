import { useState } from "react";

interface AddTransactionFormProps {
  onSubmit: (amount: string) => void;
}

const AddTransactionForm = ({ onSubmit }: AddTransactionFormProps) => {
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
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;
