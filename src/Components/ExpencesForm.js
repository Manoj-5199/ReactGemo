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
        <lable for="title_form">Title: </lable>
        <input
          id="title_form"
          type="text"
          value={title}
          onChange={titleChange}
        ></input>
        <lable for="amount_form">Amount: </lable>
        <input
          id="amount_form"
          type="text"
          value={amount}
          onChange={amountChange}
        ></input>
        <lable for="date_form">Date: </lable>
        <input
          id="date_form"
          type="date"
          value={date}
          onChange={dateChange}
        ></input>
        <button type="submit">Add Expences</button>
      </form>
    </div>
  );
};
export default ExpencesForm;
