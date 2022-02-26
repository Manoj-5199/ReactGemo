import { useState } from "react";
const ExpencesForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const amountChange = (event) => {
    setAmount(event.target.value);
  };
  const dateChange = (event) => {
    setDate(event.target.value);
  };
  const addExpences = (event) => {
    event.preventDefault();
    const expencesData = {
      id: Math.random().toString(),
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveData(expencesData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      <form onSubmit={addExpences}>
        <div className="mb-3">
          <lable for="title_form">Title: </lable>
          <input
            id="title_form"
            className="form-control"
            type="text"
            value={title}
            onChange={titleChange}
            required
          ></input>
        </div>
        <div className="mb-3">
          <lable for="amount_form" className="form-label">
            Amount:{" "}
          </lable>
          <input
            id="amount_form"
            className="form-control"
            type="text"
            value={amount}
            onChange={amountChange}
            required
          ></input>
        </div>
        <div className="mb-3">
          <lable for="date_form">Date: </lable>
          <input
            id="date_form"
            className="form-control"
            type="date"
            value={date}
            onChange={dateChange}
            required
          ></input>
        </div>
        <button type="submit">Add Expences</button>
      </form>
    </div>
  );
};
export default ExpencesForm;
