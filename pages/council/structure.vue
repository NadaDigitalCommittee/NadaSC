<template>
  <div>
    <h1 class="midashi">生徒会構造図<span>Student Council Structure</span></h1>
    <p class="comment">※掲載されている画像は2022年4月時点でのものです。</p>
    <img src="@/assets/img/structure.jpg" alt="" />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: '生徒会構造図',
})
</script>
<style lang="scss" scoped>
.midashi {
  font-weight: 500;
  text-align: center;
  margin-top: 2em;
  margin-bottom: 1.5em;
  font-size: 1.7em;
  span {
    display: block;
    font-size: 0.5em;
    font-weight: 200;
  }
}

.comment {
  text-align: center;
  font-size: 1em;
  margin: 5%;
}
img {
  width: 90%;
  display: block;
  margin: 50px auto;
  box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.6);
}
@media screen and (min-width: 960px) {
  img {
    width: 40%;
  }
}
</style>
