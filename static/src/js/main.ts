import { createApp } from 'vue'
import { MyService } from './MyService';
import App from './App.vue'

const app = createApp(App);
app.provide<MyService>("MyService", new MyService());
app.mount('#app')
