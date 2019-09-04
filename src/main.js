import Vue from 'vue'
import App from './App.vue'
import router from './components/AppRoutes'
import PortalVue from 'portal-vue'
import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueTimeago from 'vue-timeago'
import InfiniteLoading from 'vue-infinite-loading';

Vue.config.productionTip = false
Vue.use(PortalVue)
Vue.use(BootstrapVue)
Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'fr', // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    'fr-FR': require('date-fns/locale/fr'),
    // ja: require('date-fns/locale/ja')
  }
})
Vue.use(InfiniteLoading, {
  props: {
    spinner: 'default',
    /* other props need to configure */
  },
  system: {
    throttleLimit: 50,
    /* other settings need to configure */
  },
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
