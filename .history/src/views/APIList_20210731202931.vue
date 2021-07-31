<template>
<div>
<ApiItem :apiName='facebook'/>
<ApiItem :apiName='google'/>
<ApiItem :apiName='rav-meser'/>
</div>
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
            fb: 'facebook',
            ins: 'instagram',
            rm: 'rav-meser'

        }
    },
    methods: {

    }
}
</script>

<style>

</style>