const ExpencesIteam = (props) => {
  return (
    <li id={props.keys}>
      <div>{props.date}</div>
      <h2>{props.title}</h2>
      <div>{props.amount}</div>
    </li>
  );
};
export default ExpencesIteam;
