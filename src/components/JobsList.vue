<template>
  <div class="row">
    <div
      v-for="job in allJobs"
      :key="job.id"
      class="card mb-3 py-3 shadow rounded-pill border-0"
    >
      <div class="row no-gutters">
        <div class="col-md-2">
          <img
            :src="job.companyLogo"
            :alt="job.companyName"
            class="img-fluid w-75 rounded-pill"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <div class="card-title h4">
              <router-link :to="'/job-details/' + job.id">{{ job.title }}</router-link>
            </div>
            <div class="card-text">
              <div class="mb-2">
                <span class="text-muted">Company:</span> {{ job.companyName }}
              </div>
              <div class="mb-2">
                <span class="text-muted">Reference:</span> {{ job.reference }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1 d-flex align-items-center">
          <font-awesome-icon
            :icon="favJobs.includes(job.id) ? ['fas', 'star'] : ['far', 'star']"
            class="favicon fa-2x"
            @click="updateFavourite(job.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const allJobs = store.getters.allJobs;
const favJobs = store.getters.favouriteIDs;

function updateFavourite(id) {
  return store.dispatch("editFavouriteList", id);
}
</script>