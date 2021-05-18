const Today = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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
  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let day = days[d.getDay()];
  let month = months[d.getMonth()];
  return (
    <div className="time text-center sm-text">
      {day}, {date} {month} {year}
    </div>
  );
};

export default Today;
