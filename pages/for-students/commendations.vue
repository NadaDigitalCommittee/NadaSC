<template>
  <div>
    <h1 class="midashi">終業式での表彰について<span>Commendations in the End-of-term Assembly</span></h1>
    <p class="comment">終業式での表彰を希望する生徒の皆さんは、こちらのGoogleフォームに灘校のstgアカウントから回答してください。</p>
    <iframe id="form-iframe" src="https://docs.google.com/forms/d/e/1FAIpQLScM8UCTJpeiouIB_5nT5AsXx4OL0KCBTzW3-QHcHz0X-i11rw/viewform?embedded=true" frameborder="no" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
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
