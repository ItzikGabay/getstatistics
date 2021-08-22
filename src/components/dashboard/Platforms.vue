/***************************
 *   
 * file: 
 * /components/accounts/Platforms.vue
 *
 * Summary: 
 * Show all platforms of the account
 *
 * Description: 
 * Whenever client ask to see platforms connected, this component is used.
 *
 * Father Components: 
 * views/accounts/Accounts.vue
 *
***************************/ 

<template>
  <div>
    <p>Platforms Connected:</p>
      <div class="flex flex-center">
        <q-card v-for="i in platformsConnections.length" :key="i" class="my-card">
        <q-card-section class="bg-orange-8 text-white">
            <div class="text-h6">{{platformsConnections[i - 1].name }}</div>
            <div class="text-subtitle2">Connected: {{platformsConnections[i - 1].connected }}</div>
        </q-card-section>

        <q-card-actions vertical align="center">
            <q-btn flat>Get Stats</q-btn>
            <q-btn flat>Publish post</q-btn>
        </q-card-actions>
        </q-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Platforms',
  props: ["platformsData"],
  data() {
    /**
     * platformsConnections: List of all the API's connected of specific account.
     */
    return {
      platformsConnections: []
    }
  },
  /**
   * Whenever PlatformsData from father component is changed -> 
   * Change in vue data aswell.
   */
  watch: {
    platformsData() {
      this.platformsConnections = this.platformsData
    }
  }
}
</script>

<style>

</style>