<template>
<div class="q-pa-md">
    <div class="row">
        <div class="col">
            <ApiItem :apiName='fb'/>
        </div>
        <div class="col">
            <ApiItem :apiName='ins'/>
        </div>
        <div class="col">
            <ApiItem :apiName='rm'/>
        </div>
    </div>
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