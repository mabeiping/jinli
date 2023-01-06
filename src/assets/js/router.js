import {createRouter, createWebHistory} from "vue-router";

const routes = [
    // {
    //     path: "/",
    //     redirect: "/blog"
    // },
    // {
    //     path: "/website",
    //     component: () => import("/src/views/Demo.vue"),
    // },
];

const couter = createRouter({
    history: createWebHistory(),
    routes,
});
export default couter;
