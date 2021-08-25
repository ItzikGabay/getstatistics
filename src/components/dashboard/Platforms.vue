/***************************
 *   
 * file: 
 * /components/dashboard/Platforms.vue
 *
 * Summary: 
 * Show all platforms of the account
 *
 * Description: 
 * Whenever client ask to see platforms connected, this component is used.
 *
 * Father Components: 
 * views/dashboard/Dashboard.vue
 *
***************************/ 

<template>
  <div>
    <!-- new changes -->
      <div class="row">
        <div  v-for="i in platformsConnections.length" :key="i" class="col-lg-4 col-md-6 col-sm-12">
                <q-card class="my-card" flat bordered>
                  <q-card-section horizontal>
                    <q-card-section class="q-pt-xs">
                      <div class="text-overline">Connected: {{platformsConnections[i - 1].connected }}</div>
                        <q-btn
                      size="lg"
                      text-color="#FF0080"
                      :label="platformsConnections[i - 1].name"
                      @click="goTo()"
                      flat
                    />
                      <div class="text-caption text-grey">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </div>
                    </q-card-section>

                    <q-card-section class="col-5 flex flex-center">
                      <q-img
                        class="rounded-borders"
                        src="https://cdn.quasar.dev/img/parallax2.jpg"
                      />
                    </q-card-section>
                  </q-card-section>

                  <q-separator />

                  <q-card-actions>
                    <q-btn flat round icon="event" />
                    <q-btn flat @click="goTo()">
                      Publish Post
                    </q-btn>
                    <q-btn flat color="primary" @click="goTo(platformsConnections[i - 1].id)">
                      Get Stats
                    </q-btn>
                  </q-card-actions>
                </q-card>
        </div>
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
  methods: {
    /**
     * goTo function - 
     * redirect after someone clicks on "get stats" on the v-card.
     */
    goTo(platformId) {
      if(!platformId){
        return this.$router.push(`/accounts/${this.$route.params.id}/posts`)
      }   
      this.$router.push(`/accounts/${this.$route.params.id}/dashboard/${platformId}`)
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