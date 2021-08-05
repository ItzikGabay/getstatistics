
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
    }
}


/********************************
  * * ---------------------
/********************************/

module.exports = Drivers