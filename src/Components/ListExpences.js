import ExpencesIteam from "./ExpencesIteam";
import "./Css/ListExpences.css";
const ListExpences = (props) => {
  return (
    <div className="list_expences">
      {props.items.map((exp) => (
        <ExpencesIteam
          title={exp.title}
          key={exp.id}
          date={exp.date}
          amount={exp.amount}
        ></ExpencesIteam>
      ))}
    </div>
  );
};
export default ListExpences;
