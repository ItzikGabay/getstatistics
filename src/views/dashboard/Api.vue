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
    // alert(this.apiData)
    this.read()
  }
}
</script>

<style>

</style>