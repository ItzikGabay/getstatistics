<template>
<div class="q-pa-md">
  <div class="q-pa-md q-gutter-sm">
    <q-banner inline-actions rounded class="bg-orange text-white">
      Remember, you always can add more API's to your dashboard.

      <template v-slot:action>
        <q-btn flat label="Add another API" />
        <q-btn flat label="Dismiss" />
      </template>
    </q-banner>
  </div>
<q-btn :loading="loading1" color="secondary" @click="simulateProgress(1)" label="Button" />

    <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
            <ApiItem :apiName='fb'/>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12">
            <ApiItem :apiName='ins'/>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12">
            <ApiItem :apiName='rm'/>
        </div>
    </div>
        <div class="row">
        <div class="col-md-8 offset-md-3">
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