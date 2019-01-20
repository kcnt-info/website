import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import settings from './vuetify-settings'

export default ({ env }) => {
  Vue.use(
    Vuetify,
    settings({
      isProd: env === 'production'
    })
  )
}