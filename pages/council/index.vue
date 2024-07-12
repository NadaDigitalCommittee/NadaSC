<template>
  <div>
    <h1 class="midashi">生徒会長挨拶<span>Message from the President</span></h1>
    <p class="lead">灘校が創立一〇〇周年を迎えようとする今、灘校を取り巻く世界の様子は大きく変わってきています。</p>
    <p>
      個人主義化・AI等の目覚ましい発展・教員と生徒の関係性の変化、こういった変化を正面から否定するのでなく、むしろ最大限活用して変わっていくことにこそ灘校の未来はあると私は思っています。
    </p>
    <p>
      そして同時に、変わっていく灘校の中でも、精力善用・自他共栄の精神を受け継ぎ、好きを突き詰めることを当然のように認め合える環境を堅持していくことでこそ、灘校の価値は残り続けます。
    </p>
    <p>
      まずはお互いの好きを認め合うところから、より良い灘校をともに作り上げていきましょう。 
    </p>
    <h2 class="name"><span>第73代生徒会長</span>高田拓人</h2>
    <!--
    <h1 class="midashi">生徒会長挨拶<span>Message from the President</span></h1>
    <p class="lead">2019年12月にはじまり、ここ数年世界で猛威を振るう新型コロナウイルス。</p>
    <p>
      灘校も世間と同じく、さまざまな影響を受けました。文化祭、体育祭は短縮開催を余儀なくされ、綿々と受け継がれてきた伝統も損なわれつつあります。
    </p>
    <p>
      でも、今更コロナでできなかったことを数えても何も生まれません。僕はこのコロナによる分断をチャンスだと捉えたい。一度リセットし、もう一度灘校に必要なことは何なのかを考え、魅力ある灘校を作り上げていきます。ここから始まる新たな1ページを期待してください。
    </p>
    <h2 class="name"><span>第71代生徒会長</span>髙島晟輔</h2>
    -->
    <!--
    <p class="lead">変化の絶えない現代、灘校生徒会も変革を迫られています。</p>
    <p>
      特に、新型コロナウイルスの拡大以降は、学校行事や放課後の活動に制約が加えられることとなり、活動内容の再考を余儀なくされました。各委員会・プロジェクトチームは各々が各々の課題に直面しています。また、旧組織の廃止／新組織の発足も進み、生徒会全体としてもこれまでにない大きな変化を経験しています。何もかもが未だ手探りの状態だと言わざるを得ません。
    </p>
    <p>
      ただ、そんな中でも、灘校の校是である「精力善用」「自他共栄」の精神が綿々と受け継がれていくよう、私たちは小さな努力を積み重ねていきます。これまで築かれてきたレガシーを着実に継承する一方で、変化を恐れず、試行錯誤を繰り返しながら、新たな時代への道を切り拓いていく所存です。
    </p>
    <h2 class="name"><span>第70代生徒会長</span>清水崇源</h2>
    -->
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: '生徒会長挨拶',
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
