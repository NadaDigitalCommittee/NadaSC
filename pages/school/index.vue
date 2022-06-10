<template>
  <div>
    <h1 class="midashi">学校紹介<span>School</span></h1>
    <p class="lead">
      灘校は灘五郷の酒造家、両嘉納家および、山邑家（銘柄でいうと白鶴・菊正宗・櫻正宗）の三氏によって、昭和2年（1927年）に設立された由緒ある学校です。制服や校則がないことや、自由な校風が特徴的で、精力善用・自他共栄の校是を掲げています。
    </p>
    <p>
      灘校では、毎年約1000万円の予算を生徒自身が配分したり、大規模な文化祭や体育祭を開催したりと、生徒自治の精神に基づいて、生徒会活動が盛んに行われています。また、運動部、文化部共にクラブ活動が活発で、インターハイや科学オリンピックをはじめとして、多くの功績を残しています。
    </p>
  </div>
</template>
<script>
export default {}
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

p {
  margin: 0 10%;
  margin-bottom: 0.7em;
  line-height: 1.5;
  text-align: justify;
}
p.lead::first-letter {
  font-size: 2em;
}

h2 {
  text-align: right;
  margin: 0 10%;
  margin-top: 1em;
  font-size: 1.8em;

  span {
    display: block;
    font-weight: 500;
    font-size: 1.2rem;
  }
}
@media screen and (min-width: 960px) {
  p,
  h2 {
    margin: 0 30%;
  }
  p {
    margin-bottom: 0.5em;
  }
  h2 {
    margin-top: 1em;
  }
}
</style>