import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import JobsList from "./components/JobsList.vue";
import FavouritesList from "./components/FavouritesList.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: Home, children: [
                { path: '/jobs', component: JobsList, props: true },
                { path: '/favourites', component: FavouritesList, props: true },
            ]
        },
    ]
});

export default router;