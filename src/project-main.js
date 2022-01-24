import { createApp } from 'vue'
import Project from './project-App.vue'
import router from "./router/project";

createApp(Project).use(router).mount('#project')

