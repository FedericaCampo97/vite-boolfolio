
import { createWebHashHistory, createRouter } from "vue-router";



import AppMain from "./components/AppMain.vue";
import About from "./components/About.vue";
import Blog from "./components/Blog.vue";
import Contacts from "./components/Contacts.vue";
import Project from "./components/Project.vue";


const routes = [
    { path: '/', component: AppMain },
    { path: '/About', component: About },
    { path: '/Blog', component: Blog },
    { path: '/Contacts', component: Contacts },
    { path: '/project', component: Project },


];


const router = createRouter({

    history: createWebHashHistory(),
    routes
});


export { router }