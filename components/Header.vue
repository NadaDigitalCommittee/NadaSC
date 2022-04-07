<template>
  <div>
    <nav v-bind:class="{ active: open }">
      <div class="group">
        <nuxt-link to="/" @click.native="open = !open"
          >Top<span>トップページ</span></nuxt-link
        >
      </div>
      <div class="group">
        <nuxt-link to="/council" @click.native="open = !open"
          >Student Council<span>生徒会紹介</span></nuxt-link
        >
        <nuxt-link tag="li" to="" @click.native="open = !open"
          >生徒会の取り組み</nuxt-link
        >
        <nuxt-link tag="li" to="/council/structure" @click.native="open = !open"
          >生徒会構造図</nuxt-link
        >
        <nuxt-link tag="li" to="/council/organization" @click.native="open = !open"
          >生徒会機関</nuxt-link
        >
        <nuxt-link tag="li" to="/council/rules" @click.native="open = !open"
          >生徒会規則</nuxt-link
        >
      </div>
      <div class="group">
        <nuxt-link to="" @click.native="open = !open"
          >School<span>学校紹介</span></nuxt-link
        >
        <nuxt-link tag="li" to="/school/events" @click.native="open = !open"
          >年間行事</nuxt-link
        >
        <nuxt-link tag="li" to="/school/facilities" @click.native="open = !open"
          >学校設備</nuxt-link
        >
      </div>
      <div class="group">
        <nuxt-link to="" @click.native="open = !open"
          >Gallery<span>ギャラリー</span></nuxt-link
        >
        <!-- <nuxt-link tag="li" to="" @click.native="open = !open">校舎</nuxt-link
        ><nuxt-link tag="li" to="" @click.native="open = !open"
          >文化祭</nuxt-link
        ><nuxt-link tag="li" to="" @click.native="open = !open"
          >体育祭</nuxt-link
        ><nuxt-link tag="li" to="" @click.native="open = !open"
          >その他</nuxt-link
        > -->
      </div>
    </nav>

    <!-- ヘッダー -->
    <div class="header">
      <nuxt-link to="/">
        <img src="@/assets/img/nada.png" alt="topimg" />
        <h1>灘校生徒会</h1>
      </nuxt-link>
      <!-- ハンバーガーメニュー -->
      <button
        class="menu-trigger"
        id="menu"
        v-on:click="open = !open"
        v-bind:class="{ active: open }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <!-- ハンバーガーメニュー終 -->
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
  mounted() {
    // スマホで見たときに100vhを指定してもはみ出さないようにする
    function setHeight() {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setHeight()

    window.addEventListener('resize', setHeight)
  },
}
</script>


<style lang="scss" scoped>
// ハンバーガーメニューのcssは別途記述
@import '@/assets/css/hamburger.scss';

.header {
  display: flex;
  margin: 20px 5%;
  position: relative;

  a {
    text-decoration: none;
    display: flex;
    color: #000;
    z-index: 10;
    filter: drop-shadow(1px 1px 5px #cccccc);
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
}
// フルスクリーンナビゲーション
nav {
  display: none;
  position: fixed;
  top: 0;
  z-index: 20;
  color: #f9fbfb;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  background-color: #000;
  padding-left: 10%;
  a {
    color: inherit;
    text-decoration: none;
    font-size: 1.5em;
    width: max-content;
    display: block;
  }
  a span {
    display: block;
    font-size: 1rem;
  }
  .group {
    width: max-content;
    margin-bottom: 1em;
    a {
      margin-bottom: 0.5em;
    }
    li {
      list-style: none;
      line-height: 2;
      font-size: 0.7em;
    }
    li:before {
      content: 'ー';
      font-family: 'Noto Sans JP', sans-serif;
      margin-right: 0.3em;
      font-weight: 300;
    }
  }
}
nav.active {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

// PC版
@media screen and (min-width: 960px) {
  .header {
    h1 {
      font-size: 2em;
      margin-top: 0;
    }
    img {
      width: 3.3em;
      height: 3.3em;
    }
  }
}
</style>