import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import JobsList from "./components/JobsList.vue";
import FavouritesList from "./components/FavouritesList.vue"
import JobDetails from "./components/JobDetails.vue";
import NotFound from "./components/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: Home, children: [
                { path: '/jobs', component: JobsList },
                { path: '/favourites', component: FavouritesList },
            ],
        },
        { path: '/job-details/:id', component: JobDetails, props: true },
        { path: "/:404(.*)", component: NotFound },
    ]
});

export default router;