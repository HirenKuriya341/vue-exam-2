<template>
  <header class="text-primary text-center">
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
  </div>
</template>

<script setup>
const props = defineProps(["viewComp"]);

const viewComp = props.viewComp;
</script>