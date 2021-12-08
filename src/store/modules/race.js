import {
  getAllRace1,
  getRaceByCountry1,
  getAllRace2,
  getRaceByCountry2,
} from "@/api/raceApi";
export default {
  namespaced: true,
  actions: {
    async getAllRace1({ commit }) {
      try {
        const { data } = await getAllRace1();
        commit("updateRace1", data);
      } catch (e) {
        console.log(e);
      }
    },
    async getRaceByCountry1({ commit }, country) {
      try {
        const { data } = await getRaceByCountry1(country);
        commit("updateCurrentRace", data);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllRace2({ commit }) {
      try {
        const { data } = await getAllRace2();
        commit("updateRace2", data);
      } catch (e) {
        console.log(e);
      }
    },
    async getRaceByCountry2({ commit }, country) {
      try {
        const { data } = await getRaceByCountry2(country);
        commit("updateCurrentRace", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    updateRace1(state, payload) {
      state.race1 = payload;
    },
    updateCurrentRace(state, payload) {
      state.currentRace = payload;
    },
    updateRace2(state, payload) {
      state.race2 = payload;
    },
  },
  getters: {
    race1: (state) => state.race1,
    race2: (state) => state.race2,
    currentRace: (state) => state.currentRace,
  },
  state: {
    race1: [],
    race2: [],
    currentRace: null,
  },
};
