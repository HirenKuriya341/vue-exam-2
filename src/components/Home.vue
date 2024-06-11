<template>
  <div class="container">
    <header class="h1 text-primary text-center">Find your Job</header>
    <div class="row">
      <div class="col-md-6 text-center py-2 jobs" :class="viewComp == 'job' ? 'active' : ''">
        <router-link to="/jobs" class="h2">Jobs</router-link>
      </div>
      <div class="col-md-6 text-center py-2 favs" :class="viewComp == 'fav' ? 'active' : ''">
        <router-link to="/favourites" class="h2">Favourites</router-link>
      </div>
      <!-- <componenet :is="viewComp" class="tab"></componenet> -->
      <FavouritesList v-if="viewComp == 'fav'" />
      <JobsList v-else />
    </div>
  </div>
</template>

<script setup>
import JobsList from "./JobsList.vue";
import FavouritesList from "./FavouritesList.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

const routes = useRoute();

const viewComp = ref(routes.path.trim("/"));
watch(routes, (newRoute) => {
    if (newRoute.path == "/favourites") {
        viewComp.value = "fav";
    } else {
        viewComp.value = "job";
    }
});

/* export default {
  components: {
    JobsList,
    FavouritesList,
  },
  setup() {
    const routes = useRoute();
    const tabs = { JobsList, FavouritesList };
    const viewComp =
      routes.path == "/favourites" ? tabs["FavouritesList"] : tabs["JobsList"];

    return {
      viewComp,
    };
  },
}; */
</script>

<style>
a {
  text-decoration: none;
}

.active,
.jobs:hover,
.favs:hover {
  background-color: #180b0b27;
  border-radius: 3px;
}

.favicon:hover {
  color: gold;
}

</style>