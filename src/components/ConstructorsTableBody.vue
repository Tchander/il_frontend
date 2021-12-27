<template>
  <tbody class="il-table-body" v-if="teams.length">
    <tr
      class="il-table-row il-table-team-row"
      :style="$options.teamColor(team.name)"
      v-for="(team, index) in teams"
      :key="index"
      @click="toSelectedTeam(team.url_name)"
    >
      <td class="il-table-col">
        {{ index + 1 }}
      </td>
      <td class="il-table-col">
        {{ team.name }}
      </td>
      <td class="il-table-col" v-if="league === $options.LEAGUES.FIRST">
        <div v-if="team.total_score_league1 % 1 !== 0">
          {{ team.total_score_league1 }}
        </div>
        <div v-else>
          {{ parseInt(team.total_score_league1) }}
        </div>
      </td>
      <td class="il-table-col" v-else-if="league === $options.LEAGUES.SECOND">
        <div v-if="team.total_score_league2 % 1 !== 0">
          {{ team.total_score_league2 }}
        </div>
        <div v-else>
          {{ parseInt(team.total_score_league2) }}
        </div>
      </td>
      <td class="il-table-col" v-else-if="league === $options.LEAGUES.THIRD">
        <div v-if="team.total_score_league3 % 1 !== 0">
          {{ team.total_score_league3 }}
        </div>
        <div v-else>
          {{ parseInt(team.total_score_league3) }}
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
import { LEAGUES } from "@/const";
import { POSITIONS } from "@/const";
import { teamColor } from "@/helpers";

export default {
  name: "ConstructorsTableBody",
  LEAGUES,
  POSITIONS,
  teamColor,
  props: {
    teams: {
      type: Array,
      required: true,
    },
    league: {
      type: Number,
      required: true,
    },
  },
  methods: {
    toSelectedTeam(urlName) {
      this.$router.push({
        name: "Team",
        path: "/team" + urlName,
        params: { teamName: urlName },
      });
    },
  },
};
</script>

<style scoped>
.il-table-team-row.il-table-team-row.il-table-team-row.il-table-team-row {
  cursor: pointer;
}
</style>
