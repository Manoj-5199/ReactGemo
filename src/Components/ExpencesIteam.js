import Dates from "./Dates";
import "./Css/ExpencesItem.css";
const ExpencesIteam = (props) => {
  return (
    <div id={props.keys} className="expences_item">
      <div id="date_exp">
        <div>
          <Dates date={props.date} />
        </div>
        <div className="expences_title">
          <h2>{props.title}</h2>
        </div>
        <div className="expences_amount">{props.amount}</div>
      </div>
    </div>
  );
};
export default ExpencesIteam;
