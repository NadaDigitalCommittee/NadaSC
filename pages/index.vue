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
      <div class="block">
        <nuxt-link to=""
          >生徒会の取り組み<span>Student Council Activities</span></nuxt-link
        >
      </div>
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

.block {
  width: 95%;
  background-color: #418996;
  padding-left: 5%;
  padding-top: 110px;
  padding-bottom: 30px;
  position: absolute;
  right: 0;
  a {
    text-decoration: none;
    color: #F9FBFB;
    font-size: 2em;
    span {
      display: block;
      font-size: 1rem;
      font-style: italic;
    }
  }
}
</style>