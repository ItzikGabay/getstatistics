import ravmeserData from './data';

/********************************
  * ! middleware/drivers/index.js
  * * This file created in order to have inner functions to this application.
  * * Here you write all the functions that is only manipulation raw data.
/********************************/


let Drivers = {

   /********************************
     * * Creating date string of today: 01/01/1990
     * @result: [11-07-2021, 11, 07, 2021]
   /********************************/

   todayDateString: () => {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();

      today = mm + '/' + dd + '/' + yyyy;

      return [today, dd, mm, yyyy]
   },


   /********************************
     * * Manipulation array of object to object of {year: month: day: [array of users]} 
     * * & retruning array of month's
     * @result: {data: {obj}, monthsArray: [months]}
   /********************************/

   convertToArrDates: (arr, month, dateEnd) => {
      let newResult = {}
      let monthsArray = []
      for (let leadInd in arr) {

         // temp = '2/08/2021 22:51:39' (String)
         let temp = arr[leadInd].date

         // Removing hour time
         temp = temp.split(" ")[0];

         // Extracting to array of [day, month, year]
         temp = temp.split("/");
         let day = temp[0]
         // remove the '0' from the begginng
         if (day[0] == '0') day = day[1]
         let month = temp[1]

         if (month[0] == '0') month = month[1]
         let year = temp[2]
         if (!monthsArray.includes(month)) monthsArray.push(month)

         // Creating hashmap & bucket's
         if (!newResult[year]) newResult[year] = {}
         if (!newResult[year][month]) newResult[year][month] = {}
         if (!newResult[year][month][day]) newResult[year][month][day] = []
         newResult[year][month][day].push(arr[leadInd])
      }

      // console.log(newResult);

      let data = newResult['2021'][month]
      return {
         data: data,
         monthsArray: monthsArray
      }
   },
   data: ravmeserData,

   /********************************
     * * for testing purposes only.
     * @result: Are you kidding me?
   /********************************/

   test() {
      alert('Test working!')
   }
}

export default Drivers;