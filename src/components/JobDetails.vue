<template>
  <div v-if="loading" class="container">
    <div class="loader">
      <div class="loader__inner">Loading...</div>
    </div>
  </div>
  <div v-else class="container">
    <div class="row">
      <div class="col-md-2">
        <router-link to="/" class="btn btn-primary">Back</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2">
        <img
          :src="jobDetails.companyLogo"
          :alt="job.companyName"
          class="img-fluid"
        />
      </div>
      <div class="col-md-10"></div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  props: ["id"],
  setup(props) {
    const store = useStore();
    const jobID = props.id;
    const jobDetails = ref();


    const loading = ref(store.getters.isLoading);
    store.dispatch("fetchJobDetails", jobID);
    jobDetails.value = computed(() => store.getters.jobDetails);

    return {
      jobDetails,
      loading,
    };
  },
};
</script>