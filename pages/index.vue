<template>
  <div>
    <Header />
    <div class="hero">
      <div class="topimg"></div>
    </div>
    <section class="intro section-wrap">
      <div class="heading">
        <h2>生徒会紹介<span>Student Council</span></h2>
        <p>
          灘校生徒会には様々な委員会・PTが存在します。それらをご紹介します。
        </p>
        <button class="button">
          <nuxt-link to="/council" class="morebutton">More</nuxt-link>
        </button>
      </div>
      <div class="blocks">
        <Block
          class="structure"
          color="#37AF7C"
          title="生徒会構造図"
          subtitle="Student Council Structure"
          link="/council/structure"
        ></Block>
        <Block
          color="#9DAF37"
          title="生徒会機関"
          subtitle="Student Council Organization"
          link="/council/organization"
        ></Block>
        <Block
          color="#AF8A37"
          title="生徒会規約規則"
          subtitle="Student Council Rules"
          link="/council/rules"
        ></Block>
      </div>
    </section>
    <section class="school section-wrap">
      <div class="heading">
        <h2 class="blackmidashi">学校紹介<span>School</span></h2>
        <p>
          灘校の概略について、新入生向けの冊子『灘校便覧』より抜粋して掲載します。
        </p>
        <button class="button">
          <nuxt-link to="/school" class="morebutton">More</nuxt-link>
        </button>
      </div>
      <div class="blocks">
        <Block
          color="#418996"
          title="年間行事"
          subtitle="Year Actions"
          link="/school/events"
        ></Block>
        <Block
          color="#37AF7C"
          title="学校設備"
          subtitle="School Facilities"
          link="/school/facilities"
        ></Block>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const img = useImage()
const topimgJpgIpxUrl = ref(`url(${img('topimg.JPG', { rotate: null })})`)
const topimgPcJpgIpxUrl = ref(`url(${img('topimgpc.JPG')})`)

definePageMeta({
  layout: 'indexpage',
})

useHead({
  title: 'トップページ',
})

onMounted(() => {
  const setFillHeight = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  // 初期化
  setFillHeight()
})
</script>
<style lang="scss" scoped>
:deep(.main .header) {
  height: 100vh;
  margin-bottom: 0;
  margin-top: 0;
  padding-top: 20px;
  a {
    height: fit-content;
    color: #fff;
  }

  .menu-trigger span {
    background-color: #fff;
  }
  @media screen and (min-width: 960px) {
    padding: 0;
    margin: 0;
    .inside-header {
      position: fixed;
      width: 100%;
      padding: 20px 5%;
      background-color: rgba(255, 255, 255, 0.397);
      z-index: 10;
    }
    a {
      color: #000;
    }
  }
}

// トップ画像の表示
.hero {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
}
.topimg {
  width: 100%;
  height: 100%;
  background-image: v-bind(topimgJpgIpxUrl);

  background-size: cover;
}

@supports (-webkit-touch-callout: none) {
  .hero {
    height: -webkit-fill-available;
  }
  :deep(.main .header) {
    height: -webkit-fill-available;
  }
}

// 学校紹介
.school {
  background-color: #000;
  .heading {
    color: #f9fbfb;

    .blackmidashi::after {
      content: '';
      display: block;
      width: 3em;
      height: 2px;
      background-color: #f9fbfb;
      position: relative;
      bottom: -1.2rem;
    }
    .button {
      .morebutton {
        color: #f9fbfb;
        border: #f9fbfb 1.5px solid;
      }
    }
  }
}

// トップページの共通のスタイル
.heading {
  padding: 80px 10%;

  h2 {
    font-weight: 900;
    font-size: 2.3em;
    span {
      display: block;
      font-weight: 700;
      font-size: 1rem;
    }
    margin-bottom: 50px;
  }
  h2::after {
    content: '';
    display: block;
    width: 3em;
    height: 2px;
    background-color: #000;
    position: relative;
    bottom: -1.2rem;
  }

  p {
    font-size: 1.2em;
    letter-spacing: 0.05em;
  }

  .button {
    margin-top: 50px;
    .morebutton {
      display: block;
      border: 1.5px solid black;
      position: relative;
      text-decoration: none;
      color: inherit;
      font-size: 1em;
      font-weight: 700;
      border-radius: 30px;
      padding: 0.7em 4em;
    }
  }
}

// PC版
@media screen and (min-width: 960px) {
  .topimg {
    background-image: v-bind(topimgPcJpgIpxUrl);
  }
  .intro {
    display: flex;
    .blocks {
      width: 65%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-left: 5%;
      .structure {
        grid-column: 1/3;
      }
    }
  }

  .school {
    display: flex;
    .blocks {
      width: 65%;
      display: grid;
      grid-template-columns: 1fr;
      margin-left: 5%;
    }
  }

  // トップページの共通のスタイル
  .section-wrap {
    padding-left: 5%;
  }
  .heading {
    width: 30%;
    padding: 80px 0;

    h2 {
      font-size: 2em;
      span {
        font-size: 0.9rem;
      }
    }

    p {
      font-size: 1em;
      letter-spacing: 0.05em;
      line-height: 2;
    }
  }
}
</style>
