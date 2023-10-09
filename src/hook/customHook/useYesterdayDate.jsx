
const useYesterdayDate = () => {
   var day = new Date();
   var prevDay = new Date(day);
   prevDay.setDate(day.getDate() - 1);

   var yesterday_date = new Date(prevDay);
   var dd = String(yesterday_date.getDate()).padStart(2, "0");
   var mm = String(yesterday_date.getMonth() + 1).padStart(2, "0"); //January is 0!
   var yyyy = yesterday_date.getFullYear();

   yesterday_date = mm + "/" + dd + "/" + yyyy;

   console.log(yesterday_date);
   return [yesterday_date];
};

export default useYesterdayDate;