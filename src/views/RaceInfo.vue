<template>
  <div class="il-wrapper">
    <header-banner />
    <div class="il-container">
      <navigation :color="'lightGrey'" />
      <div v-if="loading">
        <v-progress-circular indeterminate></v-progress-circular>
      </div>
      <div v-if="currentRace && loading === false" class="il-race-info">
        <div class="il-race-info__name">
          {{ currentRace.name }}
        </div>
        <v-img
          class="il-race-info__flag"
          :src="$options.getFlagImage(currentRace.country_flag)"
        ></v-img>
      </div>
      <v-simple-table class="il-table" v-if="currentRace && loading === false">
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
            >
              <td
                class="il-table-col"
                :class="
                  $options.getClassByPosition(Number(result.race_position) - 1)
                "
              >
                {{ result.race_position }}
              </td>
              <td
                class="il-table-col"
                :class="
                  $options.getClassByPosition(Number(result.race_position) - 1)
                "
              >
                {{ result.pilot }}
              </td>
              <td
                class="il-table-col"
                :class="
                  $options.getClassByPosition(Number(result.race_position) - 1)
                "
              >
                {{ result.team }}
              </td>
              <td
                class="il-table-col"
                :class="
                  $options.getClassByPosition(Number(result.race_position) - 1)
                "
              >
                {{ result.qualifying_position }}
              </td>
              <td
                class="il-table-col"
                :class="
                  $options.getClassByPosition(Number(result.race_position) - 1)
                "
              >
                {{ result.best_lap }}
              </td>
              <td
                class="il-table-col"
                :class="
                  $options.getClassByPosition(Number(result.race_position) - 1)
                "
              >
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
import { getClassByPosition, getFlagImage } from "@/helpers";

export default {
  name: "RaceInfo",
  POSITIONS,
  getClassByPosition,
  getFlagImage,
  components: { FooterInfo, Navigation, HeaderBanner },
  props: {
    country: {
      type: String,
      required: true,
    },
    isArchive: {
      type: Boolean,
      required: true,
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
.il-race-info__name {
  width: 96%;
  font-weight: 700;
  font-size: 24px;
}
.il-race-info__flag.il-race-info__flag.il-race-info__flag.il-race-info__flag {
  width: 50px;
  height: 32px;
}
</style>
