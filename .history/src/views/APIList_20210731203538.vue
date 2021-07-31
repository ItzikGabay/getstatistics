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
        <div class="row justify-center content-center">
        <div class="col">
            <ApiItem :apiName='blank'/>
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
            fb: 'Facebook',
            ins: 'Instagram',
            rm: 'Rav-meser',
            blank: 'Connect to new API Now'

        }
    },
    methods: {

    }
}
</script>

<style>

</style>