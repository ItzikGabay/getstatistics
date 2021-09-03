<template>
  <div class="getWhiteBackground q-pa-md">
      <Info :userData="this.getUser"/>
  </div>
</template>

<script>
import Info from '../../components/user/Info.vue'

export default {
name: 'Profile',
    components: {
        Info
    },
    data() {
        return {
            dense: false
        }
    },
    computed: {
        getUser() {
            return JSON.parse(localStorage.getItem('user'))
        }
    },
}
</script>

<style>

</style>