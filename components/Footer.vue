<template>
  <div>
    <footer>
      <nuxt-link to="/" class="footer-topimg">
        <img src="@/assets/img/nada-reverse.png" alt="topimg" />
        <h1 class="midashi">灘校生徒会</h1>
      </nuxt-link>
      <div class="links"></div>
    </footer>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
footer {
  margin-top: 100px;
  text-align: center;
  background-color: #000;
  padding: 5% 10px;
  color: rgba(255, 255, 255, 0.777);
  .footer-topimg {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.777);
    img {
      width: 10em;
    }
    h1.midashi {
      font-weight: 500;
    }
    h1.midashi::after {
      content: '';
      display: block;
      color: #fff;
      width: 7em;
      height: 2px;
      position: relative;
      bottom: -1.2rem;
      margin: auto;
    }
  }
}
</style>