
let Drivers = {
/********************************
  * * Creating date string of today: 01/01/1990
/********************************/
    todayDateString: () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
    
        today = mm + '/' + dd + '/' + yyyy;
    
        return [today, dd, mm, yyyy]
    },
    convertToArrDates: (arr, dateStart, dateEnd) => {
      let newResult = {}
        for(let leadInd in arr) {
    
            // temp = '2/08/2021 22:51:39' (String)
            let temp = arr[leadInd].date
    
            // Removing hour time
            temp = temp.split(" ")[0];
    
            // Extracting to array of [day, month, year]
            temp = temp.split("/");
            let day = temp[0]
            // remove the '0' from the begginng
            if(day[0] == '0') day = day[1]
            let month = temp[1]
            if(month[0] == '0') month = month[1]
            let year = temp[2]
    
            // Creating hashmap & bucket's
            if(!newResult[year]) newResult[year] = {}
            if(!newResult[year][month]) newResult[year][month] = {}
            if(!newResult[year][month][day]) newResult[year][month][day] = []
            newResult[year][month][day].push(arr[leadInd])
        }
    
        let data = newResult['2021']['8']
    
        for (const index in data) {
          let dateArr = data[index]
          console.log(dateArr);
        }
    }
}


/********************************
  * * ---------------------
/********************************/

module.exports = Drivers