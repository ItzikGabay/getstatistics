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
                    <q-form
                        @submit="onSubmit"
                        @reset="onReset"
                        class="q-gutter-md"
                        >
                        <q-select rounded standout v-model="model" hint="Choose where you want to connect" :options="options" label="Please choose platform" />

                        <q-input
                            filled
                            v-model="name"
                            label="Key"
                            hint="Key of platform"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type your Key']"
                        />

                        <q-input
                            filled
                            type="number"
                            v-model="age"
                            label="Secret"
                            hint="Secret of platform"
                            lazy-rules
                            :rules="[
                            val => val !== null && val !== '' || 'Please type your Secret',
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
            fixed: false,
            name: null,
            age: null,
            accept: false,
            model: null,
            options: [
                'Google', 'Facebook', 'Twitter', 'Youtube', 'Rav-Meser'
            ]

        }
    },
    methods: {
        onSubmit () {
        if (this.accept !== true) {
            this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
            })
        }
        else {
            this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
            })
        }
        },

        onReset () {
        this.name = null
        this.age = null
        this.accept = false
        }
    }
}
</script>

<style>

</style>