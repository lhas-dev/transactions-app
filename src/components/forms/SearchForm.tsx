import { useState } from "react";

const SearchForm = ({
  onSubmit,
}: {
  onSubmit: (startDate: string, endDate: string) => void;
}) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const onClear = () => {
    setStartDate("");
    setEndDate("");
    onSubmit("", "");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(startDate, endDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={startDate}
        onChange={(event) => setStartDate(event.target.value)}
        type="date"
        placeholder="Start date"
        required
      />
      <input
        value={endDate}
        onChange={(event) => setEndDate(event.target.value)}
        type="date"
        placeholder="End date"
        required
      />
      <button type="submit">Filter by date</button>
      <button type="button" onClick={onClear}>
        Clear date
      </button>
    </form>
  );
};

export default SearchForm;
