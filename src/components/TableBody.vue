<template>
  <tbody class="il-table-body">
    <tr
      class="il-table-row"
      v-for="(pilot, index) in filterPilotsByLeague(pilots)"
      :key="index"
    >
      <td class="il-table-col" :class="$options.getClassByPosition(index)">
        {{ index + 1 }}
      </td>
      <td class="il-table-col">{{ pilot.name }}</td>
      <td class="il-table-col" :style="$options.teamColor(pilot.team)">
        {{ pilot.team }}
      </td>
      <td class="il-table-col">
        <div v-if="pilot.total_score % 1 !== 0">
          {{ pilot.total_score }}
        </div>
        <div v-else class="il-table-col">
          {{ parseInt(pilot.total_score) }}
        </div>
      </td>
      <td
        class="il-table-col"
        :class="$options.getClassByPosition(Number(result.race_position) - 1)"
        v-for="(result, index) in filterPilotResultsByLeague(pilot)"
        :key="index + 'A'"
      >
        <div v-if="pilot.total_score % 1 !== 0">
          {{ result.score }} <sub>/{{ result.race_position }}</sub>
        </div>
        <div v-else>
          {{ parseInt(result.score) }}
          <sub>/{{ result.race_position }}</sub>
        </div>
      </td>
      <td
        class="il-table-col"
        v-for="index in numberOfTd(pilot.number_of_races_completed)"
        :key="index + 'B'"
      ></td>
    </tr>
  </tbody>
</template>

<script>
import { mapState } from "vuex";
import { POSITIONS } from "@/const";
import { getClassByPosition } from "@/helpers";
import { teamColor } from "@/helpers";

export default {
  name: "TableBody",
  POSITIONS,
  getClassByPosition,
  teamColor,
  props: {
    raceLength: {
      type: Number,
      required: true,
    },
    pilots: {
      type: Array,
      required: true,
    },
    isArchive: {
      type: Boolean,
      required: true,
    },
    leagueForArchive: {
      type: Number,
    },
  },
  computed: {
    ...mapState("leagueForTable", {
      leagueForTable: "leagueForTable",
    }),
  },
  methods: {
    filterPilotsByLeague(pilots) {
      if (this.isArchive) {
        return pilots.filter((p) => p.league === this.leagueForArchive);
      }
      return pilots.filter((p) => p.league === this.leagueForTable);
    },
    filterPilotResultsByLeague(pilot) {
      return pilot.results.filter((r) => r.league === pilot.league);
    },
    numberOfTd(number_of_finished_race) {
      return this.raceLength - number_of_finished_race;
    },
  },
};
</script>
