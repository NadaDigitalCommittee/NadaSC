<template>
  <div>
    <div class="hero">
      <img src="@/assets/img/topimg.JPG" alt="topimg" class="topimg" />
    </div>
    <section class="intro">
      <div class="heading">
        <h2>生徒会紹介<span>Student Council</span></h2>
        <p>
          灘校生徒会には様々な委員会・PTが存在します。それらをご紹介します。
        </p>
        <button class="button">
          <nuxt-link to="" class="morebutton">More</nuxt-link>
        </button>
      </div>
      <Block
        color="#418996"
        title="生徒会の取り組み"
        subtitle="Student Council Activities"
        link=""
      ></Block>
      <Block
        color="#37AF7C"
        title="生徒会構造図"
        subtitle="Student Council Structure"
        link=""
      ></Block>
      <Block
        color="#9DAF37"
        title="生徒会機関"
        subtitle="Student Council Organization"
        link="organization"
      ></Block>
      <Block
        color="#AF8A37"
        title="生徒会規約"
        subtitle="Student Council Rules"
        link=""
      ></Block>
    </section>
    <section class="school">
      <div class="heading">
        <h2 class="blackmidashi">学校紹介<span>School</span></h2>
        <p>
          灘校の概略について、新入生向けの冊子『灘校便覧』より抜粋して掲載します。
        </p>
        <button class="button">
          <nuxt-link to="" class="morebutton">More</nuxt-link>
        </button>
      </div>
      <Block
        color="#418996"
        title="年間行事"
        subtitle="Year Actions"
        link=""
      ></Block>
      <Block
        color="#37AF7C"
        title="学校設備"
        subtitle="School Facilities"
        link=""
      ></Block>
    </section>
    <section class="gallery">
      <div class="heading">
        <h2>ギャラリー<span>Gallery</span></h2>
        <p>灘校の校舎風景や文化祭・体育祭の様子などを公開します。</p>
      </div>
      <Block
        color="#418996"
        title="校舎"
        subtitle="School Buildings"
        link=""
      ></Block>
      <Block
        color="#37AF7C"
        title="文化祭"
        subtitle="School Festival"
        link=""
      ></Block>
      <Block
        color="#9DAF37"
        title="体育祭"
        subtitle="Athletic Festival"
        link=""
      ></Block>
      <Block color="#AF8A37" title="その他" subtitle="Others" link=""></Block>
    </section>
  </div>
</template>
<script>
export default {
  mounted() {
    const setFillHeight = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    // 初期化
    setFillHeight()
  },
}
</script>
<style lang="scss" scoped>
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
}

@supports (-webkit-touch-callout: none) {
  .hero {
    height: -webkit-fill-available;
  }
}
// 生徒会紹介
.intro {
  margin-top: -webkit-fill-available;
  margin-top: calc(100vh - 15vw - 20px);
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
</style>