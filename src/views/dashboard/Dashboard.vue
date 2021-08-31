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
 * Path: 
 * '/dashboard',
 *
 * Components used: 
 * components/dashboard/Platforms.vue
 * components/dashboard/AddApi.vue
 *
***************************/ 

<template>
  <div>
      {{this.currentAccount}}
      <Platforms :platformsData="this.currentAccount.platforms_connected"/>
      <AddApi/>
  </div>
</template>

<script>
import Platforms from '../../components/dashboard/Platforms.vue';
import AddApi from '../../components/dashboard/AddApi.vue';
import { mapActions, mapState } from 'vuex';

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
    computed: {
        ...mapState("accountStore", ["accounts", "currentAccount"])
    },
    /**
     * When created -> Get API List from the current user
     * and set data the same as state.
     */
    created() {
        this.getAccountApiList({account_id: this.$route.params.id})
  }

}
</script>

<style>

</style>