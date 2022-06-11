<template>
  <div class="main">
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
        <nuxt-link tag="li" to="/council/structure" @click.native="open = !open"
          >生徒会構造図</nuxt-link
        >
        <nuxt-link
          tag="li"
          to="/council/organization"
          @click.native="open = !open"
          >生徒会機関</nuxt-link
        >
        <nuxt-link tag="li" to="/council/rules" @click.native="open = !open"
          >生徒会規則</nuxt-link
        >
      </div>
      <div class="group">
        <nuxt-link to="/school" @click.native="open = !open"
          >School<span>学校紹介</span></nuxt-link
        >
        <nuxt-link tag="li" to="/school/events" @click.native="open = !open"
          >年間行事</nuxt-link
        >
        <nuxt-link tag="li" to="/school/facilities" @click.native="open = !open"
          >学校設備</nuxt-link
        >
      </div>
    </nav>

    <!-- ヘッダー -->
    <div class="header">
      <div class="inside-header">
        <nuxt-link to="/">
          <div class="imgwrapper">
            <!-- <img src="@/assets/img/nada.png" alt="topimg" /> -->
          </div>
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

        <!-- PC用メニューバー -->
        <div class="pcmenu">
          <ul>
            <li
              v-for="(item, index) in pcmenuitems"
              :key="item.url"
              class="parentlist"
              v-on:mouseover="mouseover(index)"
              v-on:mouseleave="mouseleave(index)"
            >
              <nuxt-link :to="item.url">{{ item.name }}</nuxt-link>
              <transition>
                <ul
                  class="dropdown"
                  v-show="pcmenuopen && index === hoverindex"
                >
                  <li v-for="child in item.children" :key="child.name">
                    <nuxt-link :to="child.url">{{ child.name }}</nuxt-link>
                  </li>
                </ul>
              </transition>
            </li>
          </ul>
        </div>
        <!-- PC用メニューバー終 -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isopen: false,
      open: false,
      pcmenuopen: false,
      hoverindex: null,
      pcmenuitems: [
        {
          url: '/council',
          name: '生徒会紹介',
          children: [
            { url: '/council/organization', name: '生徒会機関' },
            { url: '/council/rules', name: '生徒会規則' },
            { url: '/council/structure', name: '生徒会構造図' },
          ],
        },
        {
          url: '/school',
          name: '学校紹介',
          children: [
            { url: '/school/events', name: '年間行事' },
            { url: '/school/facilities', name: '学校設備' },
          ],
        },
      ],
    }
  },
  methods: {
    mouseover(index) {
      this.pcmenuopen = true
      this.hoverindex = index
    },
    mouseleave() {
      this.pcmenuopen = false
    },
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
  margin: 20px 5%;
  position: relative;
  .inside-header {
    display: flex;
  }
  a {
    text-decoration: none;
    display: flex;
    color: #000;
    z-index: 10;
    filter: drop-shadow(0px 0px 5px #cccccc);
  }
  .imgwrapper {
    width: 15vw;
    height: 15vw;
    margin-right: 10px;
    background-image: url('@/assets/img/nada.png');
    background-size: 15vw 15vw;
    background-position: center center;
    background-repeat: no-repeat;
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

// PC番メニューバー
.pcmenu {
  position: fixed;
  display: none;
  z-index: 10;
  left: 80%;

  ul {
    display: flex;
    list-style: none;
    font-weight: 600;
    margin-top: 0.8em;
    justify-content: space-around;
    li.parentlist {
      font-size: 1.2em;
      padding: 0.5em;
      ul.dropdown {
        display: fixed;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.73);
        padding: 0.5em;
        margin-right: -1em;
        li {
          font-size: 1rem;
          line-height: 2;
          a {
            color: #fff;
            filter: none;
            font-weight: 400;
          }
        }
      }
    }
  }
}
.v-leave-active,
.v-enter-active {
  transition: opacity 0.4s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}

// PC版
@media screen and (min-width: 960px) {
  .header {
    h1 {
      font-size: 2em;
      margin-top: 0;
    }
    a {
      .imgwrapper {
        width: 3.3em;
        height: 3.3em;
        background-size: 3.3em;
      }
    }
  }
  .pcmenu {
    display: block;
  }
}
</style>