<template>
  <div>
    <footer>
      <div class="footer-topimg">
        <Icon name="nada-icons:emblem" mode="svg" size="7em" alt="校章" />
        <h1 class="midashi">灘校生徒会</h1>
      </div>
      <div class="links">
        <a href="https://x.com/nadasc_official" target="_blank">
          <Icon name="simple-icons:x" mode="svg" />
        </a>
        <a
          href="https://ja-jp.facebook.com/nadastudentcouncil/"
          target="_blank"
        >
          <Icon name="simple-icons:facebook" mode="svg" />
        </a>
        <a href="https://www.youtube.com/@灘校生徒会" target="_blank">
          <Icon name="simple-icons:youtube" mode="svg" />
        </a>
      </div>
      <p class="copyright">&copy; 2025 Nada Digital Committee</p>
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
