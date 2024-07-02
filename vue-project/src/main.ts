import { defineCustomElement } from 'vue';
import App from './App.vue';
import './style.css';

//createApp(App).mount("#app");
const AppElement = defineCustomElement(App);
customElements.define('vue-app', AppElement);