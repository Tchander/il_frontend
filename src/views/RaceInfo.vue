<template>
  <div class="il-wrapper">
    <header-banner />
    <div class="il-container">
      <navigation :color="'lightGrey'" />
      <div v-if="loading">
        <v-progress-circular indeterminate></v-progress-circular>
      </div>
      <div
        v-if="currentRace && loading === false"
        class="il-race-info"
        :class="
          isArchive
            ? 'il-race-info--league_' + leagueForArchive
            : 'il-race-info--league_' + leagueForTable
        "
      >
        <div class="il-race-info__name">
          {{ currentRace.name }}
        </div>
        <v-img
          class="il-race-info__flag"
          :src="$options.getFlagImage(currentRace.country_flag)"
        ></v-img>
      </div>
      <v-simple-table
        class="il-table"
        v-if="currentRace && loading === false"
        :class="
          isArchive
            ? 'il-table--league_' + leagueForArchive
            : 'il-table--league_' + leagueForTable
        "
      >
        <template v-slot:default>
          <thead>
            <tr class="il-table-head">
              <th class="text-center">Поз.</th>
              <th class="text-center">Пилот</th>
              <th class="text-center">Команда</th>
              <th class="text-center">Позиция на старте</th>
              <th class="text-center">Лучший круг</th>
              <th class="text-center">Очки</th>
            </tr>
          </thead>
          <tbody class="il-table-body">
            <tr
              class="il-table-row"
              v-for="(result, index) in filterResultsByLeague(
                currentRace.results
              )"
              :key="index"
              :style="$options.teamColor(result.team)"
            >
              <td class="il-table-col">
                {{ result.race_position }}
              </td>
              <td class="il-table-col">
                {{ result.pilot }}
              </td>
              <td class="il-table-col">
                {{ result.team }}
              </td>
              <td class="il-table-col">
                {{ result.qualifying_position }}
              </td>
              <td class="il-table-col">
                {{ result.best_lap }}
              </td>
              <td class="il-table-col">
                <div v-if="result.score % 1 !== 0">
                  {{ result.score }}
                </div>
                <div v-else>
                  {{ parseInt(result.score) }}
                </div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <footer-info :color="'lightGrey'" />
  </div>
</template>

<script>
import FooterInfo from "@/components/FooterInfo";
import Navigation from "@/components/Navigation";
import HeaderBanner from "@/components/HeaderBanner";
import { mapActions, mapGetters, mapState } from "vuex";
import { POSITIONS } from "@/const";
import { getFlagImage, teamColor } from "@/helpers";

export default {
  name: "RaceInfo",
  POSITIONS,
  getFlagImage,
  teamColor,
  components: { FooterInfo, Navigation, HeaderBanner },
  props: {
    country: {
      type: String,
      required: true,
    },
    isArchive: {
      type: Boolean,
      default: () => false,
    },
    leagueForArchive: {
      type: Number,
    },
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapGetters("race", {
      currentRace: "currentRace",
    }),
    ...mapState("leagueForTable", {
      leagueForTable: "leagueForTable",
    }),
  },
  methods: {
    ...mapActions("race", ["getRaceByCountry1", "getRaceByCountry2"]),
    ...mapActions("leagueForTable", ["switchLeagueNumber"]),
    filterResultsByLeague(results) {
      if (this.isArchive) {
        return results.filter((res) => res.league === this.leagueForArchive);
      }
      return results.filter((res) => res.league === this.leagueForTable);
    },
    changeLeagueNumber() {
      const { league } = this.$route.query;
      if (league) {
        this.switchLeagueNumber(Number(league));
      }
    },
  },
  created() {
    this.changeLeagueNumber();
  },
  async mounted() {
    if (this.isArchive) {
      await this.getRaceByCountry1(this.country);
    } else {
      await this.getRaceByCountry2(this.country);
    }
    this.loading = false;
  },
};
</script>

<style scoped>
.il-race-info {
  width: 100%;
  display: flex;
  align-items: center;
  background: #242c41;
  margin-bottom: 20px;
  padding: 6px;
}
.il-race-info--league_1 {
  background: #02407b;
  border: 3px solid #fff;
}
.il-race-info--league_2 {
  background: #68100f;
  border: 3px solid #fff;
}
.il-race-info--league_3 {
  background: #02701a;
  border: 3px solid #fff;
}
.il-race-info__name {
  width: 96%;
  font-weight: 700;
  font-size: 24px;
}
.il-race-info__flag.il-race-info__flag.il-race-info__flag.il-race-info__flag {
  width: 50px;
  height: 32px;
}
.il-table--league_1.il-table--league_1.il-table--league_1 {
  border: 3px solid #02407b;
}
.il-table--league_2.il-table--league_2.il-table--league_2 {
  border: 3px solid #68100f;
}
.il-table--league_3.il-table--league_3.il-table--league_3 {
  border: 3px solid #02701a;
}
</style>
