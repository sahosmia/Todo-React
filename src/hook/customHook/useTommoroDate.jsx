
const useTommoroDate = () => {
    var day = new Date();

    var nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);

  var next_date = new Date(nextDay);
  var dd = String(next_date.getDate()).padStart(2, "0");
  var mm = String(next_date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = next_date.getFullYear();

  next_date = mm + "/" + dd + "/" + yyyy;
// console.log(next_date);
  return [next_date];
};

export default useTommoroDate;