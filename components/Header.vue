<template>
  <div>
    <nav v-bind:class="{ active: open }"></nav>
    <div class="header">
      <nuxt-link to="">
        <img src="@/assets/img/nada.png" alt="" />
        <h1>灘校生徒会</h1>
      </nuxt-link>
      <Menubutton @click="open = $event" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false,
    }
  },
}
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

// フルスクリーンナビゲーション
nav {
  display: none;
  position: fixed;
  top: 0;
  z-index: 10;
  color: #f9fbfb;
}
nav.active {
  display: block;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
</style>