import ExpencesIteam from "./ExpencesIteam";
const ListExpences = (props) => {
  return (
    <div>
      <ol>
        {props.items.map((exp) => (
          <ExpencesIteam
            title={exp.title}
            key={exp.id}
            date={exp.date.toISOString()}
            amount={exp.amount}
          ></ExpencesIteam>
        ))}
      </ol>
    </div>
  );
};
export default ListExpences;
