<template>
  <div v-for="job in allJobs" :key="job.id" class="card mb-2">
    <div class="row no-gutters">
      <div class="col-md-1">
        <img :src="job.companyLogo" :alt="job.companyName" class="img-fluid w-100" />
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <div class="card-title">{{ job.title }}</div>
          <div class="card-text"><span class="text-muted">Company:</span> {{ job.companyName }} <span class="text-muted">Reference:</span> {{ job.reference }}</div>
        </div>
      </div>
      <div class="col-md-2 d-flex align-items-center">
        <font-awesome-icon :icon="['far', 'star']" class="favicon fa-2x" @click="updateFavourite(job.id)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const allJobs = store.getters.allJobs;

function updateFavourite(id) {
  return store.dispatch("editFavouriteList", id);
}
</script>