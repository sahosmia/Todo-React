
const useDateFormate = (d) => {
  if (d !== "") {
    var time = new Date(d);
    var dd = String(time.getDate()).padStart(2, "0");
    var mm = String(time.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = time.getFullYear();

    time = mm + "/" + dd + "/" + yyyy;
    return [time];
  } 
    time = "";
    return [time];
 

};

export default useDateFormate;