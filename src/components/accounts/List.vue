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
  <div class="q-pa-md">
    <q-table
      title="Accounts"
      :data="data"
      :columns="columns"
      row-key="name"
      @row-click="goTo"
    />
  </div>
<!-- End Table of accounts -->
</div>
  
</template>

<script>
export default {
    name: 'List',
    props: ["accountsData"],
    data() {
      return {
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
        test: '1'
      }
    },
    methods: {
      goTo(event, row){
        this.$router.push(`/accounts/${row.accountId}`)
      }
    },
    watch: {
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