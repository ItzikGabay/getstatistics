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
      <Platforms :platformsData="this.currentAccount.platforms_connected"/>
      <div v-if="this.currentAccount.platforms_connected.length < 1">
            <q-banner rounded class="bg-yellow-8 text-white">

            Seems that you didnt create your connections yet.
            Please add one in order to start using this app.

            </q-banner>
          <AddApi/>
      </div>
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