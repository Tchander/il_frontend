<template>
  <nav
    class="il-navigation"
    :class="{
      'light-grey': color === 'lightGrey',
    }"
  >
    <router-link class="il-logo-link" to="/">
      <img class="il-logo-img" src="../assets/img/il_logo.jpg" alt="logo" />
      <div class="il-logo-home">Главная</div>
    </router-link>
    <div class="il-navigation-links">
      <a
        href="https://vk.com/topic-185193200_48038169"
        class="il-navigation-link"
        target="_blank"
      >
        Регистрация
      </a>
      <router-link class="il-navigation-link" to="/regulations"
        >Регламент</router-link
      >
      <router-link class="il-navigation-link" to="/calendar"
        >Календарь</router-link
      >
      <router-link
        class="il-navigation-link"
        :to="{
          name: 'TournamentTable',
          query: { league: $options.LEAGUES.FIRST },
        }"
        >Турнирная таблица</router-link
      >
      <router-link class="il-navigation-link" to="/constructorsCup"
        >Кубок конструкторов</router-link
      >
      <router-link class="il-navigation-link" to="/teams">Команды</router-link>
    </div>
  </nav>
</template>

<script>
import { LEAGUES } from "@/const";
export default {
  name: "Navigation",
  LEAGUES,
  props: {
    color: {
      type: String,
    },
  },
};
</script>

<style scoped>
.il-navigation {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto 40px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  background-color: #0f3368;
  border-radius: 5px;
}
.il-navigation.light-grey {
  background-color: #242c41;
}
.il-logo-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
}
.il-logo-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.il-logo-home {
  margin-left: 20px;
  text-decoration: none;
  list-style-type: none;
  color: #fff;
  font-weight: 700;
}
.il-logo-home:hover {
  color: #fdc9c9;
}
.il-navigation-link {
  text-decoration: none;
  list-style-type: none;
  margin-left: 35px;
  color: #fff;
  font-weight: 700;
}
.il-navigation-link:hover {
  color: #fdc9c9;
}

@media (max-width: 1263px) {
  .il-navigation {
    border-radius: 0;
  }
  .il-navigation-link {
    font-size: 16px;
    margin-left: 16px;
  }
}

@media (max-width: 959px) {
  .il-navigation {
    padding: 0 5px;
  }
  .il-logo-img {
    width: 40px;
    height: 40px;
  }
}
</style>
