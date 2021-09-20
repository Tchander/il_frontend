<template>
  <div class="slider_block">
    <v-carousel height="auto" cycle hide-delimiters :show-arrows="false">
      <v-carousel-item
        class="slider-image"
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "CalendarSlider",
  data() {
    return {
      items: [
        {
          src: require("@/assets/img/calendar/calendarIL1.jpg"),
        },
        {
          src: require("@/assets/img/calendar/calendarIL2.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.slider_block {
  margin-bottom: 30px;
  min-height: 899px;
}
@media (max-width: 1263px) {
  .slider_block {
    min-height: 720px;
  }
  .slider-image.slider-image.slider-image.slider-image {
    width: 950px;
    height: 713px;
    margin: 0 auto;
  }
}
@media (max-width: 959px) {
  .slider_block {
    min-height: 449px;
  }
  .slider-image.slider-image.slider-image.slider-image {
    width: 590px;
    height: 443px;
  }
}
@media (max-width: 599px) {
  .slider_block {
    min-height: 240px;
  }
  .slider-image.slider-image.slider-image.slider-image {
    width: 310px;
    height: 233px;
  }
}
@media (max-width: 319px) {
  .slider_block {
    min-height: 210px;
  }
  .slider-image.slider-image.slider-image.slider-image {
    width: 270px;
    height: 203px;
  }
}
</style>
