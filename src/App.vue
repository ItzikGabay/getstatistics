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

            <div v-if="!user">
            <q-item clickable v-ripple>
              <q-item-section><b>Hello</b> Please Register or Log in! </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                <router-link to="/Auth">Log in</router-link>
              </q-item-section>
            </q-item>
            </div>

            
            <div v-if="user">
                          <!-- Account Sections -->


            <q-item clickable v-ripple>
              <q-item-section><b>Welcome Back,</b> {{this.user.displayName}} </q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="this.signOut">
              <q-item-section>Sign Out</q-item-section>
              </q-item>

              <q-expansion-item
              v-if="user" 
              :header-inset-level="0"
              expand-separator
              label="User Account"
              default-opened
              header-class="bg-blue-grey-10 text-primary"
            >

            <q-item clickable v-ripple active>
              <q-item-section avatar>
                <q-icon name="account_circle" />
              </q-item-section>

              <q-item-section>
                <router-link to="/user/profile">Profile</router-link>
              </q-item-section>
            </q-item>

                <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="people" />
              </q-item-section>

              <q-item-section>
                <router-link to="/accounts">Accounts</router-link>
              </q-item-section>
            </q-item>

              <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="person_add" />
              </q-item-section>

              <q-item-section>
                <router-link to="/accounts/add">Add Account</router-link>
              </q-item-section>
            </q-item>

</q-expansion-item>

            <q-expansion-item
              v-if="this.$route.params.id" 
              :header-inset-level="0"
              expand-separator
              label="Statistics"
              default-opened
              header-class="bg-blue-grey-10 text-white"
            >
            
            <q-item v-if="this.$route.params.id" clickable v-ripple >
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>

              <q-item-section>
                <router-link :to="this.dashboardLink">Dashboard</router-link>
              </q-item-section>
            </q-item>

            <q-item v-if="this.$route.params.id" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="api" />
              </q-item-section>

              <q-item-section>
                <router-link :to="this.createApiLink">Add API</router-link>
              </q-item-section>
            </q-item>

            </q-expansion-item>

            <!-- Account Sections -->
            <q-expansion-item
              v-if="this.$route.params.id" 
              :header-inset-level="0"
              expand-separator
              label="Schedule Posts"
              default-opened
              header-class="bg-blue-grey-10 text-white"
            >

            <q-item  v-if="this.$route.params.id" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="today" />
              </q-item-section>

              <q-item-section>
                <router-link :to="this.postsLink">All Posts</router-link>
              </q-item-section>
            </q-item>

            <q-item  v-if="this.$route.params.id" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="post_add" />
              </q-item-section>

              <q-item-section>
                <router-link :to="this.addPostLink">Create Post</router-link>
              </q-item-section>
            </q-item>
            </q-expansion-item>



            <q-expansion-item
              v-if="this.$route.params.id" 
              :header-inset-level="0"
              expand-separator
              label="Audiences"
              header-class="bg-blue-grey-10 text-white"
            >
            </q-expansion-item>


            </div>
          </q-list>
        </q-scroll-area>
      </q-drawer>
      <!-- End of NavBar -->


      <!-- Page container -->
      <q-page-container>
            <q-breadcrumbs>
              <q-breadcrumbs-el icon="home" />
              <q-breadcrumbs-el label="On Progress.." icon="widgets" />
            </q-breadcrumbs>

        <div class="q-pa-md q-pb-md">
        <router-view></router-view>
        </div>
      </q-page-container>
      <!-- End of Page container -->
      

    </q-layout>
    <!-- End of Main Layout -->
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import firebaseInstance from "./middleware/database/index";

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      drawer: false,
      miniState: true,
      user: this.userData,
      accountId: this.$route.params.id,
      show: false,
    }
  },
  computed: {
    dashboardLink() {
      return `/accounts/${this.$route.params.id}/dashboard`
    },
    createApiLink() {
      return `/accounts/${this.$route.params.id}/dashboard/addAPI`
    },
    postsLink() {
      return `/accounts/${this.$route.params.id}/posts`
    },
    addPostLink() {
      return `/accounts/${this.$route.params.id}/posts/add`
    },
    userData() {
      return this.$store.state.userStore.userConnected;
    }
  },
  async created() {
    this.$q.loading.show()
    await this.getUserAccounts()
    this.user = window.user;
    this.$q.loading.hide()
    console.log(this.$store.state.userStore.userConnected);
  },
    methods: {
    ...mapActions("accountStore", ["getUserAccounts", "resetState"]),
    ...mapActions("postsStore", ["getAccountPosts"]),
    ...mapState("accountStore", ["userConnected"]),
    signOut() {
      firebaseInstance.firebase.auth().signOut()
        .then(() =>{
          // console.log(this.userConnected);
          this.resetState()
          this.user = '';
          // location.reload();
          // this.$router.push("/auth")
          this.$router.go("/auth")
          });
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

.q-breadcrumbs {
  margin: 25px 15px 0px 15px;
  padding: 0;
}
</style>
