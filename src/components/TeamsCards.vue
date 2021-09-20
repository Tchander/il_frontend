<template>
  <div>
    <div v-if="loading">
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
    <div v-if="loading === false">
      <v-card class="il-team-card" v-for="(team, index) in teams" :key="index">
        <router-link
          class="il-team-link"
          :to="{
            name: 'Team',
            path: '/team' + team.url_name,
            params: { teamName: team.url_name },
          }"
        >
          <v-card-title class="il-team-card__title">{{
            team.name
          }}</v-card-title>
          <v-card-text class="il-team-card__content">
            <v-img
              :src="$options.getTeamImage(team.image)"
              class="il-team-card__image"
            ></v-img>
            <div class="il-team-card__text-content">
              <div
                class="il-team-card__text-pilots"
                v-for="(pilot, i) in team.pilots"
                :key="i"
              >
                <h3
                  v-if="pilot.league === 1 && i === 0"
                  class="il-team-card__text-content__league"
                >
                  Лига 1
                </h3>
                <h3
                  v-if="pilot.league === 2 && i === 2"
                  class="il-team-card__text-content__league"
                >
                  Лига 2
                </h3>
                <h4 class="il-team-card__text-content__pilot">
                  {{ i + 1 }}. {{ pilot.name }}
                </h4>
              </div>
            </div>
          </v-card-text>
        </router-link>
      </v-card>
    </div>
  </div>
</template>

<script>
// import { API_MEDIA_URL } from "@/const";
import { mapActions, mapState } from "vuex";
import { getTeamImage } from "@/helpers";
export default {
  name: "TeamsCards",
  getTeamImage,
  // API_MEDIA_URL,
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState("teams", {
      teams: "teams",
    }),
  },
  methods: {
    ...mapActions("teams", ["getAllTeams"]),
  },
  async mounted() {
    await this.getAllTeams();
    this.loading = false;
  },
};
</script>

<style scoped>
.il-team-card.il-team-card.il-team-card {
  max-width: 1000px;
  margin: 0 auto 20px auto;
  border-radius: 20px;
  border: 1px solid #fff;
  background-color: #242c41;
  transition: 0.5s;
}
.il-team-card.il-team-card.il-team-card:hover {
  box-shadow: -5px 5px 10px 5px rgb(92, 25, 48),
    5px -5px 10px 5px rgb(23, 123, 222);
}
.il-team-card__title {
  color: #fff;
  font-size: 26px;
  font-weight: 700;
}
.il-team-card__content {
  display: flex;
}
.il-team-card__image {
  max-width: 750px;
}
.il-team-card__text-content {
  width: 100%;
  text-align: left;
  padding: 15px 0 0 40px;
}
.il-team-card__text-content__league {
  color: #fff;
  margin: 60px 0 20px 0;
  font-size: 20px;
}
.il-team-card__text-content__pilot {
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
}
.il-team-link {
  text-decoration: none;
}
@media (max-width: 1263px) {
  .il-team-card.il-team-card.il-team-card {
    max-width: 940px;
  }
}
@media (max-width: 959px) {
  .il-team-card.il-team-card.il-team-card {
    max-width: 590px;
  }
  .il-team-card__image {
    max-width: 400px;
    max-height: 231px;
  }
  .il-team-card__text-content {
    padding: 0 0 0 20px;
  }
  .il-team-card__text-content__league {
    margin: 15px 0;
    font-size: 18px;
  }
  .il-team-card__text-content__pilot {
    font-size: 16px;
    margin-bottom: 10px;
  }
}
@media (max-width: 599px) {
  .il-team-card.il-team-card.il-team-card {
    max-width: 310px;
  }
  .il-team-card__title {
    font-size: 22px;
  }
  .il-team-card__image {
    max-width: 290px;
    max-height: 167px;
    margin-bottom: 10px;
  }
  .il-team-card__content {
    display: flex;
    flex-direction: column;
  }
  .il-team-card__text-content {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
  }
  .il-team-card__text-pilots {
    display: flex;
    margin-bottom: 5px;
  }
  .il-team-card__text-content__league {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
  .il-team-card__text-content__pilot {
    font-size: 14px;
    margin: 0 0 0 10px;
    padding: 0;
  }
}
@media (max-width: 319px) {
  .il-team-card.il-team-card.il-team-card {
    width: 98vw;
    margin-bottom: 10px;
  }
  .il-team-card__text-content__league {
    font-size: 14px;
  }
  .il-team-card__text-content__pilot {
    font-size: 12px;
    margin-left: 5px;
  }
}
</style>
