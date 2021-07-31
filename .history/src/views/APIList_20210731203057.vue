<template>
<div class="q-pa-md">
<ApiItem :apiName='fb'/>
<ApiItem :apiName='ins'/>
<ApiItem :apiName='rm'/>
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