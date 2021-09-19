<template>
  <div>
    <div v-if="loading">
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
    <div class="il-constructors-tables" v-if="loading === false">
      <div>
        <h1 class="il-constructors-league-title">Лига 1</h1>
        <v-simple-table
          class="il-table il-constructor-table"
          v-if="teamsFilteredByLeague1.length"
        >
          <template v-slot:default>
            <constructors-table-head />
            <constructors-table-body
              :teams="teamsFilteredByLeague1"
              :league="$options.LEAGUES.FIRST"
            />
          </template>
        </v-simple-table>
      </div>
      <div>
        <h1 class="il-constructors-league-title">Лига 2</h1>
        <v-simple-table
          class="il-table il-constructor-table"
          v-if="teamsFilteredByLeague2.length"
        >
          <template v-slot:default>
            <constructors-table-head />
            <constructors-table-body
              :teams="teamsFilteredByLeague2"
              :league="$options.LEAGUES.SECOND"
            />
          </template>
        </v-simple-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ConstructorsTableHead from "@/components/ConstructorsTableHead";
import ConstructorsTableBody from "@/components/ConstructorsTableBody";
import { LEAGUES } from "@/const";
export default {
  name: "ConstructorsTable",
  LEAGUES,
  data() {
    return {
      loading: true,
    };
  },
  components: {
    ConstructorsTableBody,
    ConstructorsTableHead,
  },
  computed: {
    ...mapState("teams", ["teamsFilteredByLeague1", "teamsFilteredByLeague2"]),
  },
  methods: {
    ...mapActions("teams", ["getAllTeams"]),
  },
  async created() {
    await this.getAllTeams();
    this.loading = false;
  },
};
</script>

<style scoped>
.il-constructors-tables {
  display: flex;
  justify-content: space-between;
}
.il-constructor-table.il-constructor-table.il-constructor-table {
  width: 580px;
}
.il-constructors-league-title {
  margin-bottom: 20px;
  padding: 10px 0;
  background-color: #242c41;
  color: #fff;
  font-size: 32px;
  border-radius: 4px;
}

@media (max-width: 1263px) {
  .il-constructors-tables {
    justify-content: space-evenly;
  }
  .il-constructor-table.il-constructor-table.il-constructor-table {
    width: 475px;
  }
}
</style>
