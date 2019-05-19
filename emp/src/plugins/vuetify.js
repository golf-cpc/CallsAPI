import Vue from 'vue'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@cdglib/vuetify-am1-stylus'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.lightBlue.accent4,
    primaryDark: colors.lightBlue.darken3,
    primaryLight: colors.blue.lighten1,
    success: colors.green.darken1,
    error: colors.red.darken1,
    warning: colors.yellow.darken4,
  },
})
