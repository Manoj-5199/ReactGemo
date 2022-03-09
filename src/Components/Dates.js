import "./Css/Dates.css";
const Dates = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = props.date.getDate();
  const month = months[props.date.getMonth()];
  const year = props.date.getFullYear();
  return (
    <div className="expecnces_date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year"> {year}</div>
    </div>
  );
};
export default Dates;
