<template>
  <div v-for="job in allJobs" :key="job.id" class="card tab mb-2">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="..." alt="..." />
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <div class="card-title">Card Title</div>
          <div class="card-text">Card Text</div>
        </div>
      </div>
      <div class="col-md-2 d-flex align-items-center">
        <font-awesome-icon :icon="['far', 'star']" class="favicon fa-2x" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
store.dispatch("fetchJobs");

const allJobs = store.getters.allJobs;
console.log(allJobs);
</script>