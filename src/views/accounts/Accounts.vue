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
 * Components used: 
 * components/accounts/List.vue
 *

 * TODOS:
 * Should to get from firebase all accounts id.
 * then, should to represent in a P tag.
***************************/ 

<template>
  <div>
    <!-- For test purposes only: -->
      <!-- <p>Here you loading in a table all the accounts that</p>
      <p>the user is connected to.</p>
      <p>data: {{data}}</p>
      <button @click="read()">Click here</button> -->

      <h4>Here the lists of accounts:</h4>
      <hr>
      <List :data="this.data"/>
  </div>
</template>

<script>
import List from '../../components/accounts/List.vue'
import { mapActions } from 'vuex'


export default {
    name: 'Accounts',
    components: {
      List
    },
    data() {
      return {
        data: 'not loaded yet!'
      }
    },
    methods: {
      ...mapActions("accountStore", ["test"]),
      async read() {
        await this.test()
        this.data = this.$store.state.accountStore.accounts
      }
    },
    created() {
      this.read()
    }
}
</script>

<style>

</style>