<template>
  <thead>
    <tr class="il-table-head">
      <th class="text-center">Поз.</th>
      <th class="text-center">Пилот</th>
      <th class="text-center">Команда</th>
      <th class="text-center">Очки</th>
      <th v-for="(r, index) in race" :key="index">
        <router-link
          v-if="!isArchive"
          :to="{
            name: 'Race',
            path: '/race' + r.country,
            params: { country: r.country, isArchive: isArchive },
            query: { league: leagueForTable },
          }"
        >
          <v-img
            class="il-table-image"
            :src="$options.getFlagImage(r.country_flag)"
          ></v-img>
        </router-link>
        <router-link
          v-else
          :to="{
            name: 'Race',
            path: '/race' + r.country,
            params: {
              country: r.country,
              isArchive: isArchive,
              leagueForArchive: leagueForArchive,
            },
            query: { league: leagueForArchive },
          }"
        >
          <v-img
            class="il-table-image"
            :src="$options.getFlagImage(r.country_flag)"
          ></v-img>
        </router-link>
      </th>
    </tr>
  </thead>
</template>

<script>
// import { API_MEDIA_URL } from "@/const";
import { mapState } from "vuex";
import { getFlagImage } from "@/helpers";
export default {
  name: "TableHead",
  getFlagImage,
  // API_MEDIA_URL,
  props: {
    race: {
      type: Array,
      required: true,
    },
    leagueForArchive: {
      type: Number,
    },
    isArchive: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapState("leagueForTable", {
      leagueForTable: "leagueForTable",
    }),
  },
};
</script>
