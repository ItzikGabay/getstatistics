<template>
  <div>
  <p>This is info paragraph</p>
  {{apiData}}
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Info',
  data() {
    return {
      apiData: 'Not loaded yet.'
    }
  },
  methods: {
    ...mapActions("accountStore", ["getItemSubItemById"]),
    async read() {
      let result = await this.getItemSubItemById(
        {
          account_id: this.$route.params.id, 
          itemSubItemID: this.$route.params.api_id
        });
        this.apiData = this.$store.state.accountStore.currentApi[0]
        
    }
  },
  created() {
    this.read()
  }
}
</script>

<style>

</style>