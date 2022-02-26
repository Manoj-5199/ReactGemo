import "./App.css";
import AddExpences from "./Components/AddExpences";
import ListExpences from "./Components/ListExpences";

import React, { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: Math.random().toString(),
      title: "title",
      amount: 500,
      date: new Date("2020, 2, 20"),
    },
  ]);
  const dataSave = (props) => {
    setData((prev) => {
      return [props, ...prev];
    });
  };
  return (
    <div className="App">
      <AddExpences toSaveData={dataSave} />
      <ListExpences items={data}></ListExpences>
    </div>
  );
}

export default App;
