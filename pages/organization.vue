<template>
  <div>
    <h1 class="midashi">生徒会機関<span>Student Council Organization</span></h1>
    <nav class="tabs">
      <ul>
        <li><button @click="tabnum = 1">中央委員会</button></li>
        <li><button @click="tabnum = 2">評議会</button></li>
        <li><button @click="tabnum = 3">補助機関</button></li>
      </ul>
    </nav>
    <transition>
      <section class="central sentence" v-show="tabnum == 1">
        <h2>中央委員会</h2>
        <div class="introduction">
          <p>
            生徒会長、会計担当副会長、体育委員長、文化委員長により構成され、各中央委員はその任務の遂行を円滑にするため下部機関を置いています。
          </p>
        </div>
        <dl>
          <Accordion>
            <div slot="title">タイトル</div>
            <div slot="content">あああああああ</div>
          </Accordion>
          <Accordion>
            <div slot="title">タイトル</div>
            <div slot="content">あああああああ</div>
          </Accordion>
          <Accordion>
            <div slot="title">タイトル</div>
            <div slot="content">あああああああ</div>
          </Accordion>
          <Accordion>
            <div slot="title">タイトル</div>
            <div slot="content">あああああああ</div>
          </Accordion>
          <Accordion>
            <div slot="title">タイトル</div>
            <div slot="content">あああああああ</div>
          </Accordion>
          <Accordion>
            <div slot="title">タイトル</div>
            <div slot="content">あああああああ</div>
          </Accordion>
          <Accordion>
            <div slot="title">タイトル</div>
            <div slot="content">あああああああ</div>
          </Accordion>
        </dl>
      </section>
    </transition>
    <transition>
      <section class="parliament sentence" v-show="tabnum == 2">
        <h2>評議会</h2>
        <div class="introduction">
          <p>
            評議会は生徒会の最高機関かつ唯一の議決機関で、各クラスから２名ずつ選出された評議員から構成されています。各クラスの評議員は互選により首席評議員を選出します。
          </p>
          <p>
            さらに、評議員から議長・副議長・理事が選出されます。首席評議員と議長は兼任できません。予算案の承認や規則案の議決などをするのが主な役割です。
          </p>
        </div>
        <Accordion>
          <div slot="title">本会議</div>
          <div slot="content">
            <p>
              本会議は評議員全員から構成され、普段は大講義室で開かれています。委員会に付託された議案も、最終的な議決は本会議で行われます。
            </p>
          </div>
        </Accordion>
        <Accordion>
          <div slot="title">理事会</div>
          <div slot="content">
            <p>
              理事会は、議長・副議長・理事から構成されています。評議会の運営に関する事項などの規則で定められた事項を決定するのが役割です。
            </p>
          </div>
        </Accordion>
        <Accordion>
          <div slot="title">委員会</div>
          <div slot="content">
            <p>
              議案が提出されたとき、議長はその議案を審議するための委員会を設置してその議案を付託し、審議させます。ただし、必要なときは、議長は理事会の決定を経て、議案を直ちに本会議で審議することができます。
            </p>
            <p>
              委員会は審議の経過及び委員会の統一的見解を記載した報告書を決議して本会議に提出し、委員長は報告書の要旨を本会議に報告しなければなりません。
            </p>
          </div>
        </Accordion>
      </section>
    </transition>
    <transition>
      <section class="assist sentence" v-show="tabnum == 3">
        <h2>補助機関</h2>
      </section>
    </transition>
    <dl></dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabnum: 1,
    }
  },
}
</script>
<style lang="scss" scoped>
.midashi {
  font-weight: 500;
  text-align: center;
  margin-top: 2em;
  font-size: 1.7em;
  span {
    display: block;
    font-size: 0.5em;
    font-weight: 200;
  }
}

.sentence {
  margin: 0 5%;
  h2 {
    font-weight: 500;
    text-align: center;
    font-size: 1.5em;
  }
  .introduction {
    line-height: 1.5;
    margin-top: 1em;
    p {
      margin-bottom: 0.5em;
    }
  }

  dd {
    p {
      margin-bottom: 0.5em;
    }
  }
}

// タブ
nav.tabs {
  margin: 3em 5%;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    li {
      width: 30vw;
      border-bottom: 1px black solid;
      text-align: center;
      button {
        width: 100%;
      }
    }
  }
}
// タブ切り替えアニメーション
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 300ms ease;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>