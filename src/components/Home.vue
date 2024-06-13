<template>
  <div class="container">
    <!-- <header class="text-primary text-center">
      <span class="my-4 text-shadow">Find your Job</span>
    </header>
    <div class="row mb-4">
      <div
        class="col-md-6 text-center py-2 jobs"
        :class="viewComp == 'jobs' || viewComp == '' ? 'active' : ''"
      >
        <router-link to="/jobs" class="h2">Jobs</router-link>
      </div>
      <div
        class="col-md-6 text-center py-2 favs"
        :class="viewComp == 'favourites' ? 'active' : ''"
      >
        <router-link to="/favourites" class="h2">Favourites</router-link>
      </div>
    </div> -->
    <HeaderTabs :viewComp="viewComp"></HeaderTabs>
    <!-- <componenet :is="viewComp" class="tab"></componenet> -->
    <FavouritesList v-if="viewComp == 'favourites'" />
    <JobsList v-else />
  </div>
</template>

<script setup>
import HeaderTabs from "../UI/HeaderTabs.vue";
import JobsList from "./JobsList.vue";
import FavouritesList from "./FavouritesList.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

const routes = useRoute();

const viewComp = ref(routes.path.replace("/", ""));
watch(routes, (newRoute) => {
  viewComp.value = newRoute.path.replace("/", "");
});
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

.active {
  background-color: #b4b4b4;
}

.favicon {
  color: gold;
}

.favicon:hover {
  color: black;
}

header {
  font-size: 4.5rem;
  text-shadow: 3px 3px #ff0000;
}
</style>