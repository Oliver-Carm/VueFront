import { createRouter, createWebHistory  } from "vue-router";

import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home"

const routes = [
    {
        name: 'Login',
        path: '/',
        component: Login 
    },
    {
        name: 'Register',
        path: '/register',
        component: Register 
    },
    {
        name: 'Home',
        path: '/home',
        component: Home 
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router