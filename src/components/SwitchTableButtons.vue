<template>
  <div class="il-league-buttons">
    <v-btn
      @click="switchTable($options.LEAGUES.FIRST)"
      :class="{ active: leagueForTable === $options.LEAGUES.FIRST }"
      class="il-league__btn"
      >Лига 1
    </v-btn>
    <v-btn
      @click="switchTable($options.LEAGUES.SECOND)"
      :class="{ active: leagueForTable === $options.LEAGUES.SECOND }"
      class="il-league__btn"
      >Лига 2</v-btn
    >
    <v-btn
      @click="switchTable($options.LEAGUES.THIRD)"
      :class="{ active: leagueForTable === $options.LEAGUES.THIRD }"
      class="il-league__btn"
      >Лига 3</v-btn
    >
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { LEAGUES } from "@/const";

export default {
  name: "SwitchTableButtons",
  LEAGUES,
  computed: {
    ...mapState("leagueForTable", {
      leagueForTable: "leagueForTable",
    }),
  },
  watch: {
    "$route.query"() {
      this.changeLeagueNumber();
    },
  },
  methods: {
    ...mapActions("leagueForTable", ["switchLeagueNumber"]),
    switchTable(leagueNumber) {
      const { league } = this.$route.query;
      if (league) {
        if (leagueNumber !== Number(league)) {
          this.$router.push({
            name: "TournamentTable",
            query: { league: leagueNumber },
          });
          this.switchLeagueNumber(leagueNumber);
        }
      }
    },
    changeLeagueNumber() {
      const { league } = this.$route.query;
      if (league) {
        this.switchLeagueNumber(Number(league));
      }
    },
  },
  mounted() {
    this.changeLeagueNumber();
  },
};
</script>

<style scoped>
.il-league-buttons.il-league-buttons.il-league-buttons {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.il-league__btn.il-league__btn.il-league__btn {
  width: 100%;
  max-width: 200px;
  height: 60px;
  padding: 0;
  font-size: 20px;
  text-transform: none;
  margin-left: 20px;
  color: #fff;
  background-color: #242c41;
}
.active.active.active {
  background-color: #304f9c;
}
.il-league__btn:hover.il-league__btn:hover.il-league__btn:hover {
  background-color: #304f9c;
}
@media (max-width: 959px) {
  .il-league__btn.il-league__btn.il-league__btn {
    max-width: 150px;
    height: 45px;
    font-size: 18px;
  }
}
@media (max-width: 599px) {
  .il-league-buttons.il-league-buttons.il-league-buttons {
    flex-wrap: wrap;
  }
  .il-league__btn.il-league__btn.il-league__btn {
    max-width: 120px;
    height: 36px;
    font-size: 16px;
    margin-bottom: 20px;
  }
}
@media (max-width: 319px) {
  .il-league__btn.il-league__btn.il-league__btn {
    max-width: 100px;
    height: 30px;
    font-size: 14px;
  }
}
</style>
