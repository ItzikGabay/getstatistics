// This is local storage functions file.


const localStorageDrivers = {
    select: function(table) {
        var result = localStorage.getItem(table)
        if (result == null) {
            localStorage.setItem('table', '[]')
            result = '[]'
        }
        return JSON.parse(result)
    },
    insert: function(table, lead) {
        // retrieve data from local storage
        var arr = this.select(table)
        // if local-storage is null, make it != null.
        if(arr == null) {
            arr = []
        }
        // lead.id = new Date().getTime()
        // Push the lead to the array
        arr.push(lead)
        // re-push to local storage
        localStorage.setItem(table, JSON.stringify(arr))
    },
    remove: function(table, id) {
        var arr = this.select(table)
        // debugger
        var foundIndex = this._findIndexById(table, id)
        
        if(foundIndex == undefined) {
            return
        }
    
        // remove the item from the array
        arr.splice(foundIndex, 1)
        // update in localstorage
        localStorage.setItem(table, JSON.stringify(arr))
    },
    update: function(table, id, item) {
        var arr = this.select(table)
        var foundIndex = this._findIndexById(table, id)
    
        if(foundIndex === undefined) {
            return
        }
    
        for(var key in item) {
            if (item[key] && key !== 'id') {
                arr[foundIndex][key] = item[key]
            }
        }
    
        // arr[foundIndex] = item;
        localStorage.setItem(table, JSON.stringify(arr))
    },
    getItemByID: function(table, id) {
        var arr = this.select(table)
        return arr.find(function(item) {
            return item.id == id
        })
    },
    _findIndexById: function(table, id) {
        // retrieve data from local storage
        var arr = this.select(table)
        var foundIndex = undefined;
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i]
            // if the id of the item its matching the id of props
            if(item.id === id) {
                // retrieve the index and break the loop
                foundIndex = i;
                break;
            }
        }
        return foundIndex;
    }
}


// insert() ->


// select() -> getting current data (lead object's nested in array) from local-storage


// Remove and item from array of object's - localstorage


module.exports = localStorageDrivers


