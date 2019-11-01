import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import firebase from 'firebase/app';
import 'firebase/firestore';

import VueTextareaAutosize from 'vue-textarea-autosize';
Vue.use(VueTextareaAutosize);

const firebaseConfig = {
  apiKey: "SU API KEY XXXXXX",
  authDomain: "SU DOMINIO AUTH XXXXX",
  databaseURL: "SU URL DE LA BASE DE DATOS XXXXXX",
  projectId: "SU PROJECT ID",
  storageBucket: "SU STORAGE",
  messagingSenderId: "ID",
  appId: "APP ID"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
