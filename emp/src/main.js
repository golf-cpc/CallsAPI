import '@babel/polyfill'
import Vue from 'vue';
import Template from '@cdglib/vue-template'
import '@cdglib/vue-template/src/stylus/defaultStyle.styl'
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store/index';

const themeConfig = {
  theme: {
    primary: '#0090E7',
    secondary: '#00897B',
    accent: '#2E7D32',
    error: '#f44336',
    warning: '#FBC02D',
    info: '#2196f3',
    success: '#4caf50',
  },
}

Vue.use(Template, themeConfig)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
