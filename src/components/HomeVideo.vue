<template>
  <iframe
    class="il-video"
    width="800"
    height="450"
    src="https://www.youtube.com/embed/WpsG8Kwq714"
    title="YouTube video player"
    frameborder="No"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  name: "HomeVideo",
};
</script>

<style scoped>
.il-video {
  margin-bottom: 35px;
}
@media (max-width: 959px) {
  .il-video {
    width: 580px;
    height: 315px;
  }
}
@media (max-width: 599px) {
  .il-video {
    width: 300px;
    height: 163px;
  }
}
@media (max-width: 319px) {
  .il-video {
    width: 240px;
    height: 130px;
  }
}
</style>
