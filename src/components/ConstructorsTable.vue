<template>
  <div>
    <div v-if="loading">
      <il-loading />
    </div>
    <div class="il-constructors-tables" v-if="loading === false">
      <div class="il-constructors-table" v-if="isArchive">
        <h1
          class="
            il-constructors-league-title il-constructors-league-title--league_1
          "
        >
          Лига 1
        </h1>
        <v-simple-table
          class="il-table il-constructor-table il-constructor-table--league_1"
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
        <h1
          class="
            il-constructors-league-title il-constructors-league-title--league_1
          "
          @click="toSelectedLeague($options.LEAGUES.FIRST)"
        >
          Лига 1
        </h1>
        <v-simple-table
          class="il-table il-constructor-table il-constructor-table--league_1"
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
        <h1
          class="
            il-constructors-league-title il-constructors-league-title--league_2
          "
        >
          Лига 2
        </h1>
        <v-simple-table
          class="il-table il-constructor-table il-constructor-table--league_2"
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
        <h1
          class="
            il-constructors-league-title il-constructors-league-title--league_2
          "
          @click="toSelectedLeague($options.LEAGUES.SECOND)"
        >
          Лига 2
        </h1>
        <v-simple-table
          class="il-table il-constructor-table il-constructor-table--league_2"
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
      <div class="il-constructors-table" v-if="!isArchive">
        <h1
          class="
            il-constructors-league-title il-constructors-league-title--league_3
          "
          @click="toSelectedLeague($options.LEAGUES.THIRD)"
        >
          Лига 3
        </h1>
        <v-simple-table
          class="il-table il-constructor-table il-constructor-table--league_3"
          v-if="teams2FilteredByLeague2.length"
        >
          <template v-slot:default>
            <constructors-table-head />
            <constructors-table-body
              :teams="teams2FilteredByLeague3"
              :league="$options.LEAGUES.THIRD"
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
import IlLoading from "@/components/IlLoading";
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
    IlLoading,
    ConstructorsTableBody,
    ConstructorsTableHead,
  },
  computed: {
    ...mapGetters("teams", [
      "teams1FilteredByLeague1",
      "teams1FilteredByLeague2",
      "teams2FilteredByLeague1",
      "teams2FilteredByLeague2",
      "teams2FilteredByLeague3",
    ]),
  },
  methods: {
    ...mapActions("teams", ["getAllTeams1", "getAllTeams2"]),
    toSelectedLeague(league) {
      this.$router.push({
        name: "TournamentTable",
        path: "/table",
        query: { league: league },
      });
    },
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
  flex-wrap: wrap;
}
.il-constructor-table.il-constructor-table.il-constructor-table {
  width: 580px;
}
.il-constructor-table--league_1.il-constructor-table--league_1.il-constructor-table--league_1 {
  border: 3px solid #02407b;
}
.il-constructor-table--league_2.il-constructor-table--league_2.il-constructor-table--league_2 {
  border: 3px solid #68100f;
}
.il-constructor-table--league_3.il-constructor-table--league_3.il-constructor-table--league_3 {
  border: 3px solid #02701a;
}
.il-constructors-league-title {
  margin-bottom: 20px;
  padding: 10px 0;
  background-color: #242c41;
  color: #fff;
  font-size: 32px;
  border-radius: 4px;
  cursor: pointer;
}
.il-constructors-league-title--league_1 {
  background: #02407b;
  border: 3px solid #fff;
}
.il-constructors-league-title--league_2 {
  background: #68100f;
  border: 3px solid #fff;
}
.il-constructors-league-title--league_3 {
  background: #02701a;
  border: 3px solid #fff;
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
