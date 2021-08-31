/***************************
 *   
 * file: 
 * /views/accounts/Api.vue
 *
 * Summary: 
 * Showing all data of specific API (example: facebook, google, youtube)
 *
 * Description: 
 * Whenever user click on API Id, we using this view.
 *
 * Path: 
 * '/dashboard/:id',
 *
 * Components used: 
 * components/dashboard/Info.vue
 *
***************************/ 

<template>
  <div>
    <p>FATHER API VIEW:</p>
    <hr>
    <Info :apiData="this.apiData"/>
  </div>
</template>

<script>
import Info from '../../components/dashboard/Info.vue';
import { mapActions } from 'vuex';

export default {
    name: 'Api',
    components: {
      Info
    },
    data() {
      /**
       * apiData: Api data from father component view.
       */
      return {
        apiData: 'Not loaded yet.'
      }
  },
    methods: {
    ...mapActions("accountStore", ["getItemSubItemById"]),
    /**
     * read function - 
     * Getting all data from Firestore &
     * update the state from the actions file.
     * @see accountStore.actions.js
     */
    async read() {
      this.$q.loading.show()
      let result = await this.getItemSubItemById(
        {
          account_id: this.$route.params.id, 
          itemSubItemID: this.$route.params.api_id
        });
        this.apiData = this.$store.state.accountStore.currentApi
        this.$q.loading.hide()
    }
  },
  created() {
    this.read()
  }
}
</script>

<style>

</style>