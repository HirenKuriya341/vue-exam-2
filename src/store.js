import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {
      allJobs: [],
      favouriteList: [],
      jobDetails: [],
      error: '',
      isLoading: true
    };
  },
  mutations: {
    setJobs(state, data) {
      state.allJobs = data;
    },
    setJobData(state, data) {
      state.jobDetails = data;
    },
    setError(state, message) {
      state.error = message;
    },
    setLoading(state, val) {
      state.isLoading = val;
    }
  },
  actions: {
    async fetchJobs({ commit }) {
      try {
        commit("setLoading", true);
        const resp = await axios.get("/jobs").then((response) => {
          return response.data
        });
        commit("setJobs", resp);
      } catch (e) {
        commit("setError", e.message);
      } finally {
        commit("setLoading", false);
      }
    },
    editFavouriteList({ state }, jobID) {
      const index = state.favouriteList.indexOf(jobID);
      if (index > -1) {
        state.favouriteList.splice(index, 1); // 1 for remove only 1 item
      } else {
        state.favouriteList.push(jobID);
      }
    },
    async fetchJobDetails({ commit }, jobID) {
      commit('setLoading', true);
      try {
        const resp = await axios.get("/jobs/" + jobID).then((response) => {
          return response.data;
        });
        commit('setJobData', resp);
      } catch (err) {
        console.log(err);
        commit('setError', err.message);
      } finally {
        commit('setLoading', false);
      }
    }
  },
  getters: {
    allJobs(state) {
      return state.allJobs;
    },
    favouriteIDs(state) {
      return state.favouriteList;
    },
    favouriteList(state) {
      let favList = [];
      state.allJobs.filter(job => {
        if (state.favouriteList.includes(job.id)) {
          const jobDetails = {
            id: job.id,
            companyLogo: job.companyLogo,
            companyName: job.companyName,
            reference: job.reference,
            title: job.title
          }
          favList.push(jobDetails);
        }
      });
      return favList;
    },
    jobDetails(state) {
      return state.jobDetails;
    },
    isLoading(state) {
      return state.isLoading;
    }
  },
});
