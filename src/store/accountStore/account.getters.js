/***************************
 *   
 * file: 
 * /store/accountStore/getters.js
 *
 * Summary: 
 * Vuex Getters store file.
 *
 *
***************************/

export default {
    getTableData: (state) => {
        let newData = []
        for (let i in state.accounts) {
            newData.push({ name: state.accounts[i].name, info: 'test', accountId: state.accounts[i].accountId })
        }
        return newData;
    }
}