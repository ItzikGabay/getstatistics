<template>
<div class="q-pa-md">
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Add New API Connection" color="primary" @click="fixed = true" />
    <q-banner inline-actions rounded class="bg-orange text-white">
      Remember, you always can add more API's to your dashboard.

      <template v-slot:action>
        <q-btn flat label="Add another API" />
        <q-btn flat label="Dismiss" />
      </template>
    </q-banner>
  </div>
        
        <q-dialog v-model="fixed">
            <q-card>
                <q-card-section>
                <div class="text-h6">Please provide the following information:</div>
                </q-card-section>

                <q-separator />

                <q-card-section style="max-height: 50vh" class="scroll">
                <p>Platform:</p>
                <p>Key:</p>
                <p>Secret:</p>

<q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

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