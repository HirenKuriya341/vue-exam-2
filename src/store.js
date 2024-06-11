import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {
      allJobs: [],
      favouriteList: []
    };
  },
  mutations: {
    setJobs(state, data) {
      state.allJobs = data;
    },
  },
  actions: {
    async fetchJobs({ commit }) {
      await axios.get("/jobs").then((response) => {
        console.log(response);
        commit("setJobs", response.data);
      });
    },
    editFavouriteList({ state }, jobID) {
        const index = state.favouriteList.indexOf(jobID);
        if (index > -1) {
            state.favouriteList.splice(index, 1); // 1 for remove only 1 item
        } else {
            state.favouriteList.push(jobID);
        }
    },
  },
  getters: {
    allJobs(state) {
      return state.allJobs;
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
    }
  },
});
