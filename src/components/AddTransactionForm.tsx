import { useState } from "react";

const AddTransactionForm = ({ onSubmit }) => {
  const [amount, setAmount] = useState("");

  return (
    <form onSubmit={onSubmit}>
      <input type="number" placeholder="Amount" />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;
