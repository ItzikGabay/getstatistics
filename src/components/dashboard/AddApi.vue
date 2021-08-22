/***************************
 *   
 * file: 
 * /components/accounts/AddApi.vue
 *
 * Summary: 
 * Add API connection as a form to specific account.
 *
 * Description: 
 * Whenever client ask to add new platform, this component is used.
 *
 * Father Components: 
 * views/accounts/Accounts.vue
 *
***************************/ 

<template>
  <div>
  <p>Adding api:</p>
    <q-input v-model="platform_name" standout hint="API Name"  label="Enter API Name" />
    <q-input v-model="platform_key" standout hint="API Key"  label="Enter API Key" />
    <q-input v-model="platform_secret" standout hint="API Secret"  label="Enter API Secret" />
    <q-btn style="background: #FF0080; color: white" label="Create account" @click="AddApiConnection()"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AddApi',
    data() {
      /**
       * platform_name: User platform name.
       * platform_key: User platform key.
       * platform_secret: User platform secret.
       */
      return {
        platform_name: '',
        platform_key: '',
        platform_secret: '',
      }
    },
    methods: {
      ...mapActions("accountStore", ["addNewApiConnection"]),
      /**
       * AddApiConnection function -
       * Adding API trough store.actions and redirect after success.
       * @return - redirect to "/accounts/:id/dashboard"
       */
        AddApiConnection() {
          let ApiConnectionData = {
            name: this.platform_name,
            connected: false,
            key: this.platform_key,
            secret: this.platform_secret
          }
          this.addNewApiConnection({doc_id: this.$route.params.id, item: ApiConnectionData})
          this.$router.push(`/accounts/${this.$route.params.id}/dashboard/`)
        }
    }
}
</script>

<style>

</style>