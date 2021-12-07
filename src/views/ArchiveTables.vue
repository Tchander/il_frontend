<template>
  <div class="il-wrapper">
    <header-banner />
    <div class="il-container">
      <navigation :color="'lightGrey'" />
      <switch-archive-tables @changeArchiveLeague="changeArchiveLeague" />
      <table-of-results
        v-if="leagueForArchive"
        :is-archive="true"
        :league-for-archive="leagueForArchive"
      />
      <constructors-table v-if="showConstructorCup" :is-archive="true" />
    </div>
    <footer-info :color="'lightGrey'" />
  </div>
</template>

<script>
import FooterInfo from "@/components/FooterInfo";
import Navigation from "@/components/Navigation";
import HeaderBanner from "@/components/HeaderBanner";
import SwitchArchiveTables from "@/components/SwitchArchiveTables";
import TableOfResults from "@/components/TableOfResults";
import ConstructorsTable from "@/components/ConstructorsTable";

export default {
  name: "ArchiveTables",
  components: {
    ConstructorsTable,
    TableOfResults,
    SwitchArchiveTables,
    FooterInfo,
    Navigation,
    HeaderBanner,
  },
  data() {
    return {
      leagueForArchive: null,
      showConstructorCup: false,
    };
  },
  methods: {
    changeArchiveLeague(league) {
      if (typeof league === "boolean") {
        this.leagueForArchive = null;
        this.showConstructorCup = league;
      } else {
        this.showConstructorCup = false;
        this.leagueForArchive = league;
      }
    },
  },
};
</script>
