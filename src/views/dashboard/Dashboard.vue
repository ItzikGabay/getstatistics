/***************************
 *   
 * file: 
 * /views/accounts/Dashboard.vue
 *
 * Summary: 
 * Mixed component of data to show of this specific account.
 *
 * Description: 
 * Showing stats and API's connected to the user
 *
 * Components used: 
 * components/accounts/Platforms.vue
 * components/accounts/AddApi.vue
 *
***************************/ 

<template>
  <div>
      <p>This is Father Dashboard View</p>
      <Platforms :platformsData="this.platformsConnections"/>
      <hr>
      <AddApi/>
      <hr>
  </div>
</template>

<script>
import Platforms from '../../components/dashboard/Platforms.vue';
import AddApi from '../../components/dashboard/AddApi.vue';
import { mapActions } from 'vuex';

export default {
    name: 'Dashboard',
    data() {
        return {
            platformsConnections: []
        }
  },
    components: {
        Platforms, AddApi
    },
    methods: {
        ...mapActions("accountStore", ["getAccountApiList"]),
    },
    /**
     * When created -> Get API List from the current user
     * and set data the same as state.
     */
    created() {
        this.getAccountApiList({account_id: this.$route.params.id})
        .then(response => {
            let result = this.$store.state.accountStore.currentAccount.platforms_connected;
            this.platformsConnections = result;
        });
  }

}
</script>

<style>

</style>