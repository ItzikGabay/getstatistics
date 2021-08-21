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