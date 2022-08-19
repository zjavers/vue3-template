import test from '../views/test.vue'
import {
    createRouter,
    createWebHashHistory,
    createWebHistory,
  } from "vue-router";

const routes = [
    {path:'/',component:test}
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;