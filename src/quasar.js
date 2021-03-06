import Vue from 'vue'

import './styles/quasar.styl'
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import Quasar from 'quasar'

Vue.use(Quasar, {
  config: {},
  iconSet: iconSet,
  build: {
    rtl: true
  },
  framework: {
    lang: 'he'
  }
 })