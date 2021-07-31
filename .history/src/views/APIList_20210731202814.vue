<template>
  <ApiItem :apiName='facebook'/>
  <ApiItem :apiName='instagram'/>
  <ApiItem :apiName='google'/>
</template>

<script>
import ApiItem from '../components/ApiItem.vue'

export default {
    name: 'ApiList',
    components: {
        ApiItem
    },
    data() {
        return {
            facebook: 'facebook'
        }
    },
    methods: {

    }
}
</script>

<style>

</style>