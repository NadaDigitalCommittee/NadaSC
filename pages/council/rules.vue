<template>
  <div class="main">
    <h1 class="midashi">生徒会規約規則<span>Student Council Rules</span></h1>
    <section>
      <p>
        生徒会では、憲法や法律のような規約や規則というものを定めて、それにしたがって運営を行っています。
      </p>
      <p>規則は、次の順番で作られています。</p>
      <ol>
        <li>評議員か中央委員が規則案を書き、評議会に提出する</li>
        <li>評議会で審議され、可決される</li>
        <li>全校に公布され、決められた日に施行される</li>
      </ol>
      <p>
        また、憲法に当たる規約を改正する際は、評議会での審議の後、総議員の３分の２以上の賛成で発議され、全校生徒による投票が行われます。この投票は「生徒会規約改正案全校投票規則」の規定に基づいて運営されます。
      </p>
      <p>
        この規約と規則が閲覧できるよう、用途に応じて２つの規約規則集を用意しています。それぞれの説明の末尾にあるリンクからご覧ください。
      </p>
    </section>

    <section>
      <h2>現行規約・規則集について</h2>
      <p>
        現行規約規則集は、評議会事務局が編集している、常に最新の規約、規則を掲載したものです。正確性と速報性では実用規約規則集よりも優れているでしょう。
      </p>
      <a
        class="links"
        href="https://docs.google.com/document/u/1/d/e/2PACX-1vRJkM2Pbz_SeBic-M8d0Fo-aoxcge8LZiP7Rhk1NvK7N-oHUHYNZiHCBa8/pub#h.26in1rg"
        >[リンク]現行規約・規則集</a
      >
    </section>
    <section>
      <h2>実用規約規則集について</h2>
      <p>
        実用規約規則集は、評議会事務局が編集している、参照条文がついた実用向けの規約規則集です。参照条文をつける作業などがあるため最新の規約、規則が掲載されているとは限りませんが、利便性はとても高いものとなっています。
      </p>
      <p>実用規約規則集は、３つの方法で発行されています。</p>
      <ol>
        <li>HTML版</li>
        <p>
          HTML版は、Webで直接閲覧することができるものです。PDF版では文字をコピーするときに上手くできないことがありますが、HTML版ではほぼ確実に正確なコピーをすることができます。
          ただし、HTML版の更新作業はほかの２版よりも遅れて行われる可能性が高いです。注意してご利用ください。
        </p>
        <p class="comment">
          ※実用規約規則集HTML版は現在鋭意制作中です。完成をお待ち下さい。
        </p>
        <li>PDF版</li>
        <p>
          実用規約規則集のなかで最初に作られるのがPDF版です。３版の中では最も速報性があると言えるでしょう。
        </p>
        <a
          class="links"
          href="https://drive.google.com/file/d/1-s1mF_yDl4qZLxulKxsl24ZHUV7AjmlT/view?usp=sharing"
          >[リンク]実用規約規則集（令和４年６月版）</a
        >
        <li>紙版</li>
        <p>
          生徒会室の評議会用の棚に積み上げられているのが紙版です。Ｂ６サイズなので、机の隅において置いたり、外出時に持ち歩いたりすることが簡単にできます。ご自由にお持ち帰りください。
        </p>
      </ol>
    </section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: '生徒会規則',
    }
  },
}
</script>
<style lang="scss" scoped>
.main {
  margin: 0 5%;
  line-height: 1.5;

  section {
    margin-bottom: 2em;
    h2 {
      font-size: 1.5em;
      margin-bottom: 0.8em;
    }

    ol {
      margin-left: 1em;
      margin-bottom: 0.5em;
      li {
        margin-bottom: 0.5em;
      }
    }
    p {
      margin-bottom: 0.5em;
      text-align: justify;
    }

    // 注釈
    .comment {
      font-size: 0.9em;
      text-indent: -1em;
      padding-left: 1em;
    }

    // リンク
    .links {
      display: inline-block;
      color: #1042a4;
      position: relative;
      transition: 0.3s;
      text-decoration: none;
      margin-bottom: 0.5em;
    }
    .links::after {
      position: absolute;
      bottom: 0;
      left: 50%;
      content: '';
      width: 0;
      height: 1px;
      background-color: #1042a4;
      transition: 0.3s;
      transform: translateX(-50%);
    }
    .links:hover::after {
      width: 100%;
    }
  }
}
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

@media screen and (min-width: 960px) {
  section {
    margin: 0 20%;
    margin-bottom: 2em;
  }
}
</style>