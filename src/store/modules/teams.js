import { getAllTeams1, getAllTeams2, getTeamByUrlName } from "@/api/teamApi";

export default {
  namespaced: true,
  actions: {
    async getAllTeams1({ commit }) {
      try {
        const { data } = await getAllTeams1();
        commit("updateTeams1", data);
      } catch (e) {
        console.log(e);
      }
    },
    async getTeamByUrlName({ commit }, urlName) {
      try {
        const { data } = await getTeamByUrlName(urlName);
        commit("updateCurrentTeam", data);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllTeams2({ commit }) {
      try {
        const { data } = await getAllTeams2();
        commit("updateTeams2", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    updateTeams1(state, payload) {
      state.teams1 = [...payload];
      state.teams1FilteredByLeague1 = [...payload].sort(
        (prev, next) => next.total_score_league1 - prev.total_score_league1
      );
      state.teams1FilteredByLeague2 = [...payload].sort(
        (prev, next) => next.total_score_league2 - prev.total_score_league2
      );
    },
    updateTeams2(state, payload) {
      state.teams2 = [...payload];
      state.teams2FilteredByLeague1 = [...payload].sort(
        (prev, next) => next.total_score_league1 - prev.total_score_league1
      );
      state.teams2FilteredByLeague2 = [...payload].sort(
        (prev, next) => next.total_score_league2 - prev.total_score_league2
      );
      state.teams2FilteredByLeague3 = [...payload].sort(
        (prev, next) => next.total_score_league3 - prev.total_score_league3
      );
    },
    updateCurrentTeam(state, payload) {
      state.currentTeam = payload;
    },
  },
  getters: {
    teams1: (state) => state.teams1,
    teams1FilteredByLeague1: (state) => state.teams1FilteredByLeague1,
    teams1FilteredByLeague2: (state) => state.teams1FilteredByLeague2,
    teams2: (state) => state.teams2,
    teams2FilteredByLeague1: (state) => state.teams2FilteredByLeague1,
    teams2FilteredByLeague2: (state) => state.teams2FilteredByLeague2,
    teams2FilteredByLeague3: (state) => state.teams2FilteredByLeague3,
    currentTeam: (state) => state.currentTeam,
  },
  state: {
    teams1: [],
    teams1FilteredByLeague1: [],
    teams1FilteredByLeague2: [],
    teams2: [],
    teams2FilteredByLeague1: [],
    teams2FilteredByLeague2: [],
    teams2FilteredByLeague3: [],
    currentTeam: null,
  },
};
