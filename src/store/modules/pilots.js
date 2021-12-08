import { getAllPilots1, getAllPilots2 } from "@/api/pilotApi";
export default {
  namespaced: true,
  actions: {
    async getAllPilots1({ commit }) {
      try {
        const { data } = await getAllPilots1();
        commit("updatePilots1", data);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllPilots2({ commit }) {
      try {
        const { data } = await getAllPilots2();
        commit("updatePilots2", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    updatePilots1(state, payload) {
      state.pilots1 = payload;
    },
    updatePilots2(state, payload) {
      state.pilots2 = payload;
    },
  },
  getters: {
    pilots1: (state) => state.pilots1,
    pilots2: (state) => state.pilots2,
  },
  state: {
    pilots1: [],
    pilots2: [],
  },
};
