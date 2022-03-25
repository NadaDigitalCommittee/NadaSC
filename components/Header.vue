<template>
  <div class="header">
    <nuxt-link to="">
      <img src="@/assets/img/nada.png" alt="" />
      <h1>灘校生徒会</h1>
    </nuxt-link>
    <Menubutton />
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  margin: 20px 5%;
  position: relative;
  z-index: 10;
}
a {
  text-decoration: none;
  display: flex;
  color: black;
}
img {
  width: 15vw;
  height: 15vw;
  margin-right: 10px;
}
h1 {
  font-size: 7vw;
  margin-top: 1.5vw;
}
</style>