// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vant from 'vant';
import { Popup } from 'vant';
Vue.use(Popup);
import { Toast } from 'vant';
Vue.use(Toast);
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
import { Dialog } from 'vant';
// 全局注册
Vue.use(Dialog);
Vue.use(SwipeItem);
Vue.use(Vant);
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App,
    [Dialog.Component.name]: Dialog.Component
  },
  template: '<App/>'
})
