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

  return (
    <div>
      <input
        value={startDate}
        onChange={(event) => setStartDate(event.target.value)}
        type="date"
        placeholder="Start date"
      />
      <input
        value={endDate}
        onChange={(event) => setEndDate(event.target.value)}
        type="date"
        placeholder="End date"
      />
      <button onClick={() => onSubmit(startDate, endDate)}>
        Filter by date
      </button>
      <button onClick={onClear}>Clear date</button>
    </div>
  );
};

export default SearchForm;
