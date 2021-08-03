<template>
<div class="q-pa-md" style="padding: 0;">
    <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">
      <q-header elevated style="background: #082032">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Get Statistics</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
      >
        <q-scroll-area class="fit" style="background: #334756; color: #ffffff">
          <q-list padding class="menu-list">

            <q-item clickable v-ripple>
              <q-item-section>
                <b>Welcome Back,</b> Flashdev
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                <router-link to="/#">Dashboard</router-link>
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                <router-link to="/item/1">Add Item</router-link>
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                <router-link to="/api-list">API List</router-link>
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                <router-link to="/Posts">Posts</router-link>
              </q-item-section>
            </q-item>

          <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                <router-link to="/Posts">Create Post</router-link>
              </q-item-section>
            </q-item>
            
            

          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
    </q-layout>
      </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',

  components: {
    Home
  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      drawer: false,
      miniState: true
    }
  }
}
</script>

<style scoped>
.q-item-section {
  background: #ffffff;
}

.router-link-exact-active, .router-link-active, a, a:active {
  text-decoration: none;
  color: white;
}

</style>
