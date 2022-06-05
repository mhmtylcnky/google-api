import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

axios.defaults.headers['X-User-Agent']='desktop',
axios.defaults.headers['X-Proxy-Location']='tr',
axios.defaults.headers['X-RapidAPI-Host']='google-search3.p.rapidapi.com',
axios.defaults.headers['X-RapidAPI-Key']='5e7927d8e0mshff35e02cd371b5cp15d21cjsnda0cd4e9cf11'



createApp(App).mount('#app')
