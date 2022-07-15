<template>
  <div>
    <h1 class="midashi">校内生向け<span>For Students</span></h1>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: '表彰',
    }
  },
}
</script>

<style lang="scss" scoped>
.midashi {
  font-weight: 500;
  text-align: center;
  margin-top: 2em;
  margin-bottom: 1.5em;
  font-size: 1.7em;
  span {
    display: block;
    font-size: 0.5em;
    font-weight: 200;
  }
}

.comment {
  text-align: center;
  font-size: 1em;
  margin: 5%;
}
iframe {
  width: 90%;
  height: 2400px;
  display: block;
  margin: 50px auto;
}
@media screen and (min-width: 960px) {
  img {
    width: 40%;
  }
}
</style>
