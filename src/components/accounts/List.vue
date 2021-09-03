/***************************
 *   
 * file: 
 * /components/accounts/List.vue
 *
 * Summary: 
 * Show all accounts as a component.
 *
 * Description: 
 * Whenever client ask to see accounts, we use this component
 *
 * Father Components: 
 * views/accounts/Accounts.vue
 *
***************************/ 

<template>
<div>
<!-- Table of accounts -->
    <q-table
      title="Accounts"
      :data="accountsData"
      :columns="columns"
      row-key="name"
      @row-click="goTo"
    />
  </div>
<!-- End Table of accounts -->
  
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: 'List',
    props: ["accountsData"],
    data() {
      return {
        /**
        * columns: Table columns
        * data: Table data
        */
        columns: [
          {
          name: 'Account ID',
          field: 'accountId',
          label: 'Account ID',
          align: 'left',
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 20px',
          headerClasses: 'bg-primary text-white'
        },
          {
          name: 'name',
          field: 'name',
          label: 'Account Name',
          align: 'left',
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 20px',
          headerClasses: 'bg-primary text-white'
        },
        {
          name: 'info',
          field: 'info',
          label: 'Info',
          align: 'left',
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 20px',
          headerClasses: 'bg-primary text-white'
        }],
        data: [{name: 'Loading..', info: 'Loading..'}],
      }
    },
    computed: {
      newListRender: () => {
        // return this.accountsData;
      let newData = []
      //   for(let i in this.accountsData) {
      //     newData.push({name: this.accountsData[i].name, info: 'test', accountId: this.accountsData[i].accountId})
      //   }
        return newData
      }
    },
    methods: {
      ...mapMutations("postsStore", ["resetPostsState"]),
      /**
      * Whenever user clicks, this function will redirect him to accounts/:accountId
      * @return - redirect to "/accounts/:id/dashboard"
      */
      goTo(event, row){
        // TODOS: Save to state
        // 
        this.resetPostsState()
        this.$router.push(`/accounts/${row.accountId}/dashboard`);
      },
      /**
       * test() function
       * @desc should give you number
       * @params Array - the numbrer
       * @return Object - random number
       *
       */
    },
    watch: {
    /**
    * Whenever parent data "accountsData" changed -> update the child.
    * & create new object for table.
    */
      accountsData() {
        let newData = []
        for(let i in this.accountsData) {
          newData.push({name: this.accountsData[i].name, info: 'test', accountId: this.accountsData[i].accountId})
          this.test = this.accountsData
        }
        this.data = newData
      }
    }
}
</script>

<style>

</style>