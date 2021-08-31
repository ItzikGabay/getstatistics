/***************************
 *   
 * file: 
 * /views/accounts/Accounts.vue
 *
 * Summary: 
 * List of all accounts of user that is connected.
 *
 * Description: 
 * Showing in table all the accounts connected to user id.
 *
 * Path: 
 * '/accounts',
 *
 * Components used: 
 * components/accounts/List.vue
 *
***************************/ 

<template>
  <div>
    <!-- For test purposes only: -->
      <!-- <p>Here you loading in a table all the accounts that</p>
      <p>the user is connected to.</p>
      <p>data: {{data}}</p>
      <button @click="read()">Click here</button> -->
      <!-- {{accounts}} -->
      <h4 v-if="showButton">Seems that you didnt create your account!</h4>
      <q-btn v-if="showButton" style="background: #FF0080; color: white" label="Create account" @click="goToCreateAccount()"/>
      <List :accountsData="this.getTableData"/>
  </div>
</template>

<script>
import List from '../../components/accounts/List.vue'
import { mapActions, mapState, mapGetters } from 'vuex'


export default {
    name: 'Accounts',
    components: {
      List
    },
    data() {
      return {
        /**
         * accountsData: account list.
         * showButton: if no API is created yet, so show the button.
         */
        accountsData: 'not loaded yet!',
        showButton: false,
      }
    },
    computed: {
      ...mapState("accountStore", ["accounts"]),
      ...mapGetters("accountStore", ["getTableData"]),
    },
    methods: {
      // TODOS: add comments
      ...mapActions("accountStore", ["getUserAccounts"]),
      /**
       * read function - 
       * Reading the data from DB and set it as state,
       * and then reading it from the state.
       */
      async read() {
        await this.getUserAccounts()
        this.accountsData = this.$store.state.accountStore.accounts
        if(this.accountsData.length < 1) this.showButton = true;
      },
      /**
       * goToCreateAccount function -
       * function the redirect in order to create new account
       * to the specific user.
       * @return - redirect to "/accounts/add".
       */
      goToCreateAccount() {
        this.$router.push('/accounts/add')
      }
    },
    /**
     * Whenever view started, call function read
     * in order to get the data.
     */
    async created() {
      let result = await this.getTableData;
        // if(result < 0) {
        //  this.read()
        // }
        // this.accountData = this.$store.state.accountStore.accounts;
        // this.accountsData = this.$store.state.accountStore.accounts;

      // if(this.$state.store.accountStore.accounts < 1) {
      //   return this.read()
      // } else {
      //   let result = this.$state.store.accountStore.accounts;
      // }
      // if(this.accounts < 1) {
      // }
      // this.accountsData = this.accounts;
    }
}
</script>

<style>

</style>