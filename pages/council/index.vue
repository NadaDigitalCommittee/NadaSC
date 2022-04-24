<template>
  <div>
    <h1 class="midashi">生徒会紹介<span>Student Council</span></h1>
    <p class="lead">変化の絶えない現代、灘校生徒会も変革を迫られています。</p>
    <p>
      特に、新型コロナウイルスの拡大以降は、学校行事や放課後の活動に制約が加えられることとなり、活動内容の再考を余儀なくされました。各委員会・プロジェクトチームは各々が各々の課題に直面しています。また、旧組織の廃止／新組織の発足も進み、生徒会全体としてもこれまでにない大きな変化を経験しています。何もかもが未だ手探りの状態だと言わざるを得ません。
    </p>
    <p>
      ただ、そんな中でも、灘校の校是である「精力善用」「自他共栄」の精神が綿々と受け継がれていくよう、私たちは小さな努力を積み重ねていきます。これまで築かれてきたレガシーを着実に継承する一方で、変化を恐れず、試行錯誤を繰り返しながら、新たな時代への道を切り拓いていく所存です。
    </p>
    <h2 class="name"><span>第70代生徒会長</span>清水崇源</h2>
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