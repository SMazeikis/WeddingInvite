import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "../credentials.json"
import router from './router'

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
