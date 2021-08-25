<template>
  <div style="padding: 0;">
    <!-- Main Layout -->
    <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">

      <!-- Header -->
      <q-header elevated style="background: #082032">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Get Statistics</q-toolbar-title>
        </q-toolbar>
      </q-header>
      <!-- End of Header -->


      <!-- Navbar -->
      <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="500">
        <q-scroll-area class="fit" style="background: #334756; color: #ffffff">
          <q-list padding class="menu-list">
            <q-item clickable v-ripple>
              <q-item-section> <b>Welcome Back,</b> Flashdev </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                <router-link to="/#/accounts">Accounts</router-link>
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
                <router-link to="/api">API List</router-link>
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                <router-link to="/posts">Posts</router-link>
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                <router-link to="/posts/add">Create Post</router-link>
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
      <!-- End of NavBar -->


      <!-- Page container -->
      <q-page-container>
        <router-view></router-view>
      </q-page-container>
      <!-- End of Page container -->
      

    </q-layout>
    <!-- End of Main Layout -->
  </div>
</template>

<script>

export default {
  name: 'LayoutDefault',

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      drawer: false,
      miniState: true,
    }
  }
}
</script>

<style scoped>
.q-item-section {
  background: #ffffff;
}

.router-link-exact-active,
.router-link-active,
a,
a:active {
  text-decoration: none;
  color: white;
}
</style>
