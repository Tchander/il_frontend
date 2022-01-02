<template>
  <div class="il-loading-container">
    <div class="il-loading-ring"></div>
    <div class="il-loading-ring"></div>
    <div class="il-loading-ring"></div>
  </div>
</template>

<script>
export default {
  name: "IlLoading",
};
</script>

<style scoped>
.il-loading-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.il-loading-ring {
  position: relative;
  width: 50px;
  height: 50px;
  margin: -10px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top: 2px solid #02407b;
  animation: animate 2s linear infinite;
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.il-loading-ring:before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  top: 4px;
  right: 3px;
  background: #02407b;
  box-shadow: 0 0 5px #02407b33, 0 0 10px #02407b22, 0 0 20px #02407b11,
    0 0 20px #02407b, 0 0 50px #02407b;
}
.il-loading-ring:nth-child(2) {
  animation: animate2 2s linear infinite;
  animation-delay: -0.5s;
  border-top: 2px solid transparent;
  border-left: 2px solid #68100f;
}
.il-loading-ring:nth-child(2):before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  top: initial;
  bottom: 4px;
  left: 3px;
  background: #68100f;
  box-shadow: 0 0 5px #68100f33, 0 0 10px #68100f22, 0 0 20px #68100f11,
    0 0 20px #68100f, 0 0 50px #68100f;
}
@keyframes animate2 {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.il-loading-ring:nth-child(3) {
  animation: animate2 2s linear infinite;
  animation-delay: -1.5s;
  position: absolute;
  top: -22px;
  border-top: 2px solid transparent;
  border-left: 2px solid #02701a;
}
.il-loading-ring:nth-child(3):before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  top: initial;
  bottom: 4px;
  left: 3px;
  background: #02701a;
  box-shadow: 0 0 5px #02701a33, 0 0 10px #02701a22, 0 0 20px #02701a11,
    0 0 20px #02701a, 0 0 50px #02701a;
}
@media (max-width: 959px) {
  .il-loading-container {
    margin-top: 40px;
  }
}
</style>
