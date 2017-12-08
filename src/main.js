import Vue from 'vue'
import Router from 'vue-router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import App from './App.vue'
import './assets/css/font-awesome.min.css'

Vue.use(Mint);


new Vue({
  el: '#app',
  render: h => h(App)
})
