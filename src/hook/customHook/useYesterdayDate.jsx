
const useYesterdayDate = () => {
   var day = new Date();
   var prevDay = new Date(day);
   prevDay.setDate(day.getDate() - 1);

   var date = new Date(prevDay);
   var dd = String(date.getDate()).padStart(2, "0");
   var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
   var yyyy = date.getFullYear();

   date = mm + "/" + dd + "/" + yyyy;

   return [date];
};

export default useYesterdayDate;