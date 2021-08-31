<template>
  <div>
      <p>This is a test</p>
      {{this.posts}}
  </div>
</template>

<script>

import {mapActions, mapMutations, mapState} from 'vuex';

export default {
    name: 'Test',
    data() {
        return {

        }
    },
    computed: {
        ...mapState("postsStore", ["posts"])
    },
    methods: {

    }

}
</script>

<style>

</style>