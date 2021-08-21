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
      return {
        platform_name: '',
        platform_key: '',
        platform_secret: '',
      }
    },
    methods: {
      ...mapActions("accountStore", ["addNewApiConnection"]),
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