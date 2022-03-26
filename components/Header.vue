<template>
  <div>
    <nav v-bind:class="{ active: open }">
      <div class="group">
        <nuxt-link to="/" @click.native="open = !open"
          >Top<span>トップページ</span></nuxt-link
        >
      </div>
      <div class="group">
        <nuxt-link to="" @click.native="open = !open"
          >Student Council<span>生徒会紹介</span></nuxt-link
        >
        <nuxt-link tag="li" to="" @click.native="open = !open"
          >生徒会の取り組み</nuxt-link
        >
        <nuxt-link tag="li" to="" @click.native="open = !open"
          >生徒会構造図</nuxt-link
        >
        <nuxt-link tag="li" to="" @click.native="open = !open"
          >生徒会機関</nuxt-link
        >
        <nuxt-link tag="li" to="" @click.native="open = !open"
          >生徒会規則</nuxt-link
        >
      </div>
      <div class="group">
        <nuxt-link to="" @click.native="open = !open"
          >School<span>学校紹介</span></nuxt-link
        >
        <nuxt-link tag="li" to="" @click.native="open = !open"
          >年間行事</nuxt-link
        >
        <nuxt-link tag="li" to="" @click.native="open = !open"
          >学校設備</nuxt-link
        >
      </div>
      <div class="group">
        <nuxt-link to="" @click.native="open = !open"
          >Gallery<span>ギャラリー</span></nuxt-link
        >
        <nuxt-link tag="li" to="" @click.native="open = !open">校舎</nuxt-link
        ><nuxt-link tag="li" to="" @click.native="open = !open"
          >文化祭</nuxt-link
        ><nuxt-link tag="li" to="" @click.native="open = !open"
          >体育祭</nuxt-link
        ><nuxt-link tag="li" to="" @click.native="open = !open"
          >その他</nuxt-link
        >
      </div>
    </nav>
    <div class="header">
      <nuxt-link to="">
        <img src="@/assets/img/nada.png" alt="" />
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
    color: black;
    z-index: 10;
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
  background-color: #000;
  padding-left: 10%;
  a {
    color: inherit;
    text-decoration: none;
    font-size: 1.3em;
    width: max-content;
    display: block;
  }
  a span {
    display: block;
    font-size: 0.5rem;
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
      font-size: 0.5em;
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
</style>