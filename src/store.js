import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state() {
        return {
            allJobs: [],
        }
    },
    mutations: {
        setJobs(state, data) {
            state.allJobs = data;
        }
    },
    actions: {
        async fetchJobs({ commit }) {
            await axios.get('/jobs').then((response) => {
                console.log(response);
                commit('setJobs', response.data);
            });
        }
    },
    getters: {
        allJobs(state) {
            return state.allJobs;
        }
    }
});