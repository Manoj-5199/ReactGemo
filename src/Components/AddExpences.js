import ExpencesForm from "./ExpencesForm";
import "./Css/AddExpences.css";

const AddExpences = (props) => {
  const saveData = (expData) => {
    const expenData = {
      ...expData,
    };
    console.log(expenData);
    props.toSaveData(expenData);
  };
  return (
    <div id="expences_form">
      <ExpencesForm onSaveData={saveData} />
    </div>
  );
};
export default AddExpences;
