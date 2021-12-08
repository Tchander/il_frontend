<template>
  <div>
    <div v-if="loading">
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
    <div v-if="!isArchive">
      <switch-table-buttons v-if="loading === false" />
    </div>
    <v-simple-table class="il-table" v-if="loading === false">
      <template v-if="isArchive" v-slot:default>
        <table-head
          :race="race1"
          :league-for-archive="leagueForArchive"
          :is-archive="isArchive"
        />
        <table-body
          v-if="isArchive"
          :is-archive="isArchive"
          :league-for-archive="leagueForArchive"
          :race-length="race1.length"
          :pilots="pilots1"
        />
      </template>
      <template v-else v-slot:default>
        <table-head :race="race2" :is-archive="isArchive" />
        <table-body
          v-if="isArchive"
          :is-archive="isArchive"
          :race-length="race2.length"
          :pilots="pilots2"
        />
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TableHead from "@/components/TableHead";
import TableBody from "@/components/TableBody";
import SwitchTableButtons from "@/components/SwitchTableButtons";
export default {
  name: "TableOfResults",
  components: { SwitchTableButtons, TableBody, TableHead },
  props: {
    isArchive: {
      type: Boolean,
      required: true,
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
      race1: "race1",
      race2: "race2",
    }),
    ...mapGetters("pilots", {
      pilots1: "pilots1",
      pilots2: "pilots2",
    }),
  },
  methods: {
    ...mapActions("race", ["getAllRace1", "getAllRace2"]),
    ...mapActions("pilots", ["getAllPilots1", "getAllPilots2"]),
  },
  async mounted() {
    if (this.isArchive) {
      await this.getAllRace1();
      await this.getAllPilots1();
    } else {
      await this.getAllRace2();
      await this.getAllPilots2();
    }
    this.loading = false;
  },
};
</script>
