<template>
  <div>
    <div v-if="loading">
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
    <div class="il-constructors-tables" v-if="loading === false">
      <div class="il-constructors-table" v-if="isArchive">
        <h1 class="il-constructors-league-title">Лига 1</h1>
        <v-simple-table
          class="il-table il-constructor-table"
          v-if="teams1FilteredByLeague1.length"
        >
          <template v-slot:default>
            <constructors-table-head />
            <constructors-table-body
              :teams="teams1FilteredByLeague1"
              :league="$options.LEAGUES.FIRST"
            />
          </template>
        </v-simple-table>
      </div>
      <div class="il-constructors-table" v-else>
        <h1 class="il-constructors-league-title">Лига 1</h1>
        <v-simple-table
          class="il-table il-constructor-table"
          v-if="teams2FilteredByLeague1.length"
        >
          <template v-slot:default>
            <constructors-table-head />
            <constructors-table-body
              :teams="teams2FilteredByLeague1"
              :league="$options.LEAGUES.FIRST"
            />
          </template>
        </v-simple-table>
      </div>
      <div class="il-constructors-table" v-if="isArchive">
        <h1 class="il-constructors-league-title">Лига 2</h1>
        <v-simple-table
          class="il-table il-constructor-table"
          v-if="teams1FilteredByLeague2.length"
        >
          <template v-slot:default>
            <constructors-table-head />
            <constructors-table-body
              :teams="teams1FilteredByLeague2"
              :league="$options.LEAGUES.SECOND"
            />
          </template>
        </v-simple-table>
      </div>
      <div class="il-constructors-table" v-else>
        <h1 class="il-constructors-league-title">Лига 2</h1>
        <v-simple-table
          class="il-table il-constructor-table"
          v-if="teams2FilteredByLeague2.length"
        >
          <template v-slot:default>
            <constructors-table-head />
            <constructors-table-body
              :teams="teams2FilteredByLeague2"
              :league="$options.LEAGUES.SECOND"
            />
          </template>
        </v-simple-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ConstructorsTableHead from "@/components/ConstructorsTableHead";
import ConstructorsTableBody from "@/components/ConstructorsTableBody";
import { LEAGUES } from "@/const";
export default {
  name: "ConstructorsTable",
  LEAGUES,
  props: {
    isArchive: {
      type: Boolean,
      required: true,
    },
  },
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
    ...mapGetters("teams", [
      "teams1FilteredByLeague1",
      "teams1FilteredByLeague2",
      "teams2FilteredByLeague1",
      "teams2FilteredByLeague2",
    ]),
  },
  methods: {
    ...mapActions("teams", ["getAllTeams1", "getAllTeams2"]),
  },
  async created() {
    if (this.isArchive) {
      await this.getAllTeams1();
    } else {
      await this.getAllTeams2();
    }
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
    width: 48vw;
  }
}
@media (max-width: 959px) {
  .il-constructors-tables {
    flex-wrap: wrap;
  }
  .il-constructors-league-title {
    margin-bottom: 10px;
    font-size: 26px;
  }
  .il-constructors-table {
    margin-bottom: 10px;
  }
}
@media (max-width: 599px) {
  .il-constructor-table.il-constructor-table.il-constructor-table {
    width: 70vw;
  }
  .il-constructors-league-title {
    margin-bottom: 10px;
    padding: 6px 0;
    font-size: 22px;
  }
}
@media (max-width: 319px) {
  .il-constructors-table {
    margin-bottom: 0;
  }
  .il-constructor-table.il-constructor-table.il-constructor-table {
    width: 70vw;
  }
  .il-constructors-league-title {
    margin-bottom: 8px;
    padding: 6px 0;
    font-size: 18px;
  }
}
</style>
