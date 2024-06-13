<template>
  <div v-if="favJobs.length > 0" class="row">
    <div
      v-for="job in favouriteList"
      :key="job.id"
      class="card mb-2 py-3 shadow rounded-pill border-0"
    >
      <div class="row no-gutters">
        <div class="col-md-2">
          <img
            :src="job.companyLogo"
            :alt="job.companyName"
            class="img-fluid w-100 rounded-pill"
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
      </div>
    </div>
  </div>
  <div v-else>
    <h5 class="row my-5 h2 shadow rounded-pill py-5">
      <span class="text-center">No favourite jobs yet!</span>
    </h5>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const favouriteList = store.getters.favouriteList;
const favJobs = store.getters.favouriteIDs;

function updateFavourite(id) {
  return store.dispatch("editFavouriteList", id);
}
</script>
