<template>
  <div class="il-league-buttons">
    <v-btn
      @click="changeArchiveLeague($options.LEAGUES.FIRST)"
      :class="{ active: leagueForArchive === $options.LEAGUES.FIRST }"
      class="il-league__btn"
      >Лига 1 Сезон 7</v-btn
    >
    <v-btn
      @click="changeArchiveLeague($options.LEAGUES.SECOND)"
      :class="{ active: leagueForArchive === $options.LEAGUES.SECOND }"
      class="il-league__btn"
      >Лига 2 Сезон 5</v-btn
    >
    <v-btn
      @click="changeArchiveLeague(true)"
      :class="{ active: showConstructorCup }"
      class="il-league__btn"
      >КК 7 и 5 сезоны</v-btn
    >
  </div>
</template>

<script>
import { LEAGUES } from "@/const";
export default {
  LEAGUES,
  name: "SwitchArchiveTables",
  data() {
    return {
      leagueForArchive: null,
      showConstructorCup: false,
    };
  },
  methods: {
    changeArchiveLeague(data) {
      this.leagueForArchive = data;
      this.$emit("changeArchiveLeague", data);
    },
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
  margin-right: 20px;
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
    font-size: 16px;
  }
}
@media (max-width: 599px) {
  .il-league-buttons.il-league-buttons.il-league-buttons {
    flex-wrap: wrap;
  }
  .il-league__btn.il-league__btn.il-league__btn {
    max-width: 140px;
    height: 36px;
    font-size: 15px;
    margin-bottom: 20px;
  }
}
@media (max-width: 319px) {
  .il-league__btn.il-league__btn.il-league__btn {
    max-width: 120px;
    height: 30px;
    font-size: 13px;
  }
}
</style>
