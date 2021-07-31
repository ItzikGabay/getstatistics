<template>
<div class="q-pa-md">

  <div class="q-pa-md q-gutter-sm">
    <q-banner rounded class="bg-purple-8 text-white">

      Remember, you always can add more 's to your dashboard.

      <template v-slot:action>
        <q-btn flat color="white" label="Continue as a Guest" />
        <q-btn flat color="white" label="Sign in" />
      </template>
    </q-banner>
  </div>

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