<template>
  <div>
    <h1 class="midashi">始業式及び終業式での表彰について<span>Commendations in the Start-of-term and the End-of-term Assembly</span></h1>
    <p class="comment">始業式及び終業式での表彰を希望する生徒の皆さんは、こちらのGoogleフォームに灘校のstgアカウントから回答してください。&emsp;<a href="https://forms.gle/C4co4NDEPzZag9ZK8">表示されない場合はこちら</a></p>
    <iframe id="form-iframe" src="https://docs.google.com/forms/d/e/1FAIpQLScbsIscI9VJqa3k348hOaXuJu_zXKzjeW8jDIrJjgHRLeaq1w/viewform?embedded=true" frameborder="no" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
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
