<template>
  <div class="il-wrapper">
    <header-banner />
    <div class="il-container">
      <navigation :color="'lightGrey'" />
      <table-of-results :is-archive="false" />
    </div>
    <footer-info :color="'lightGrey'" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import HeaderBanner from "@/components/HeaderBanner";
import FooterInfo from "@/components/FooterInfo";
import TableOfResults from "@/components/TableOfResults";

export default {
  name: "TournamentTable",
  components: { TableOfResults, FooterInfo, Navigation, HeaderBanner },
};
</script>
