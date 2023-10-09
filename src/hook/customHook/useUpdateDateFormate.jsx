
const useUpdateDateFormate = (d) => {
  if (d !== "") {
    var time = new Date(d);
    var dd = String(time.getDate()).padStart(2, "0");
    var mm = String(time.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = time.getFullYear();

    time = yyyy + "-" + mm + "-" + dd;
    console.log(time);
    return [time];
  }
  time = "";
  return [time];
};

export default useUpdateDateFormate;