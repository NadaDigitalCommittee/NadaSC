<template>
  <div class="main">
    <nav :class="{ active: isopen }">
      <div v-for="item in phonemenuitems" :key="item.name" class="group">
        <nuxt-link :to="item.url" @click="isopen = !isopen"
          >{{ item.eng }}<span>{{ item.name }}</span></nuxt-link
        >
        <nuxt-link
          v-for="child in item.children"
          :key="child.name"
          tag="li"
          :to="child.url"
          @click="isopen = !isopen"
          >{{ child.name }}</nuxt-link
        >
      </div>
    </nav>

    <!-- ヘッダー -->
    <div class="header">
      <div class="inside-header">
        <nuxt-link to="/">
          <div class="imgwrapper">
            <!-- <nuxt-img src="nada.png" alt="topimg" /> -->
          </div>
          <h1>灘校生徒会</h1>
        </nuxt-link>
        <!-- ハンバーガーメニュー -->
        <button
          id="menu"
          class="menu-trigger"
          :class="{ active: isopen }"
          @:click="isopen = !isopen"
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
              @:mouseover="mouseover(index)"
              @:mouseleave="mouseleave(index)"
            >
              <nuxt-link :to="item.url">{{ item.name }}</nuxt-link>
              <transition>
                <ul
                  v-show="pcmenuopen && index === hoverindex"
                  class="dropdown"
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
<script setup lang="ts">
const img = useImage()
const nadaPngIpxUrl = ref(`url(${img('nada.png')})`)

const isopen = ref(false)
const pcmenuopen = ref(false)
const hoverindex = ref<number | null>(null)
const phonemenuitems = ref([
  { url: '/', eng: 'Top', name: 'トップページ' },
  {
    url: '/council',
    eng: 'Student Council',
    name: '生徒会紹介',
    children: [
      { url: '/council/structure', name: '生徒会構造図' },
      { url: '/council/organization', name: '生徒会機関' },
      { url: '/council/rules', name: '生徒会規則' },
    ],
  },
  {
    url: '/school',
    eng: 'School',
    name: '学校紹介',
    children: [
      { url: '/school/events', name: '年間行事' },
      { url: '/school/facilities', name: '学校設備' },
    ],
  },
])
const pcmenuitems = ref([
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
])

onMounted(() => {
  // スマホで見たときに100vhを指定してもはみ出さないようにする
  function setHeight() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  setHeight()

  window.addEventListener('resize', setHeight)
})

const mouseover = (index: number) => {
  pcmenuopen.value = true
  hoverindex.value = index
}
const mouseleave = (_index: number) => {
  pcmenuopen.value = false
}
</script>

<style lang="scss" scoped>
// ハンバーガーメニューのcssは別途記述
@use '@/assets/css/hamburger.scss';

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
    // filter: drop-shadow(0px 0px 5px #cccccc);
  }
  .imgwrapper {
    width: 15vw;
    height: 15vw;
    margin-right: 10px;
    background-image: v-bind(nadaPngIpxUrl);
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
