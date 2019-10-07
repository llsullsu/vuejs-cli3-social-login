import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBqKV1WlCRNoBc8dlKxGsJQ1AaJS5CTsok",
  authDomain: "loginsocial-66b23.firebaseapp.com",
  databaseURL: "https://loginsocial-66b23.firebaseio.com",
  projectId: "loginsocial-66b23",
  storageBucket: "",
  messagingSenderId: "1073906599798",
  appId: "1:1073906599798:web:4c4b100a5c9f5a8856dc57",
  measurementId: "G-9H56QZRHFV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

new Vue({
  render: h => h(App),
}).$mount('#app')

