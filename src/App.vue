<template>
  <v-app id="app">
    <keep-alive>
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </v-app>
</template>

<style>
@import "./assets/main.css";
</style>
<style>
#app {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #1a202c;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}
</style>
