<template>
  <header class="il-header">
    <img class="il-img-banner" src="../assets/img/il_banner.png" alt="banner" />
  </header>
</template>

<script>
export default {
  name: "HeaderBanner",
};
</script>

<style scoped>
.il-header {
  margin-bottom: 30px;
}
.il-img-banner {
  width: 100%;
}
@media (max-width: 959px) {
  .il-header {
    margin-bottom: 20px;
  }
}
@media (max-width: 599px) {
  .il-header {
    margin-bottom: 15px;
  }
}
@media (max-width: 319px) {
  .il-header {
    margin-bottom: 10px;
  }
}
</style>
