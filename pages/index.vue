<template>
  <div>
    <div class="img-wrapper">
      <img src="@/assets/img/topimg.png" alt="topimg" class="topimg" />
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
        link=""
      ></Block>
      <Block color="#AF8A37" title="生徒会規約" subtitle="Student Council Rules" link=""></Block>
    </section>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.img-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  .topimg {
    height: 100vh;
    min-width: 100vw;
  }
}

.intro {
  margin-top: calc(100vh - 15vw - 20px);
}

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

  p {
    font-size: 1.2em;
    letter-spacing: 0.05em;
  }

  .button {
    margin-top: 50px;
    .morebutton {
      display: block;
      border: 2px solid black;
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