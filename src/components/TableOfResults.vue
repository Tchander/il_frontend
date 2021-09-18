<template>
  <div>
    <div v-if="loading">
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
    <switch-table-buttons v-if="loading === false" />
    <v-simple-table class="il-table" v-if="loading === false">
      <template v-slot:default>
        <table-head :race="race" />
        <table-body :race-length="race.length" :pilots="pilots" />
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TableHead from "@/components/TableHead";
import TableBody from "@/components/TableBody";
import SwitchTableButtons from "@/components/SwitchTableButtons";
export default {
  name: "TableOfResults",
  components: { SwitchTableButtons, TableBody, TableHead },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState("race", {
      race: "race",
    }),
    ...mapState("pilots", {
      pilots: "pilots",
    }),
  },
  methods: {
    ...mapActions("race", ["getAllRace"]),
    ...mapActions("pilots", ["getAllPilots"]),
  },
  async mounted() {
    await this.getAllRace();
    await this.getAllPilots();
    this.loading = false;
  },
};
</script>
