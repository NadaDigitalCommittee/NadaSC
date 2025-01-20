<template>
  <div>
    <footer>
      <nuxt-link to="/" class="footer-topimg">
        <nuxt-img src="nada.png" alt="topimg" />
        <h1 class="midashi">灘校生徒会</h1>
      </nuxt-link>
      <div class="links">
        <a href="https://x.com/nadasc_official" target="_blank">
          <Icon name="prime:twitter" mode="svg" />
        </a>
        <a
          href="https://ja-jp.facebook.com/nadastudentcouncil/"
          target="_blank"
        >
          <Icon name="fa-brands:facebook" mode="svg" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCpGYVFAe4b0tkFNftciLrHQ"
          target="_blank"
        >
          <Icon name="fa-brands:youtube" mode="svg" />
        </a>
      </div>
      <p class="copyright">&copy; 2022 Nada Digital Committee</p>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
footer {
  margin-top: 100px;
  text-align: center;
  background-color: #000;
  padding: 50px 5%;
  color: rgba(255, 255, 255, 0.777);
  .footer-topimg {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.777);
    img {
      width: 7em;
      filter: invert(100%);
    }
    h1.midashi {
      font-weight: 500;
      font-size: 1.5em;
      width: fit-content;
      margin: auto;
    }
    // 白線
    h1.midashi::after {
      content: '';
      display: block;
      background-color: rgba(255, 255, 255, 0.777);
      width: 13rem;
      height: 2px;
      position: relative;
      bottom: -0.5em;
      margin: auto;
    }
  }

  // リンク集
  .links {
    margin: auto;
    margin-top: 2.5em;
    display: flex;
    width: 13em;
    justify-content: space-between;
    .iconify {
      font-size: 2em;
      color: rgba(255, 255, 255, 0.777);
    }
  }

  .copyright {
    font-weight: 200;
    margin-top: 3em;
  }
}
</style>
