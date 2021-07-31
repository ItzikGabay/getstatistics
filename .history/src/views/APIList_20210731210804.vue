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
        
        <q-btn label="Add New API Connection" color="primary" @click="fixed = true" />
        <q-dialog v-model="fixed">
            <q-card>
                <q-card-section>
                <div class="text-h6">Terms of Agreement</div>
                </q-card-section>

                <q-separator />

                <q-card-section style="max-height: 50vh" class="scroll">
                <p v-for="n in 15" :key="n">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.</p>
                </q-card-section>

                <q-separator />

                <q-card-actions align="right">
                <q-btn flat label="Decline" color="primary" v-close-popup />
                <q-btn flat label="Accept" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
    </q-dialog>

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
            blank: 'Connect to new API Now',
            basic: false,
            fixed: false

        }
    },
    methods: {

    }
}
</script>

<style>

</style>