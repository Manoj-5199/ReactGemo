import ExpencesForm from "./ExpencesForm";
const AddExpences = () => {
  const saveData = (expData) => {
    const expenData = {
      ...expData,
      id: Math.random().toString(),
    };
    console.log(expenData);
  };
  return (
    <div>
      <ExpencesForm onSaveData={saveData} />
    </div>
  );
};
export default AddExpences;
