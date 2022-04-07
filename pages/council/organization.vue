<template>
  <div>
    <h1 class="midashi">生徒会機関<span>Student Council Organization</span></h1>
    <nav class="tabs">
      <ul>
        <li v-bind:class="{ active: tabnum == 1 }">
          <button @click="tabnum = 1">中央委員会</button>
        </li>
        <li v-bind:class="{ active: tabnum == 2 }">
          <button @click="tabnum = 2">評議会</button>
        </li>
        <li v-bind:class="{ active: tabnum == 3 }">
          <button @click="tabnum = 3">補助機関</button>
        </li>
      </ul>
    </nav>
    <transition>
      <section class="central sentence" v-show="tabnum == 1">
        <h2>中央委員会</h2>
        <div class="introduction">
          <p>
            中央委員会は、生徒会唯一の実行機関です。中央委員会は、生徒会長・会誌担当副会長・会計担当副会長・中学担当副会長・文化委員長・体育委員長の６人からなり、各々毎年６月に行われる選挙で選出され、１年間の任期の間、それぞれの下部委員会と共に任務にあたります。
          </p>
        </div>
        <dl>
          <Accordion>
            <div slot="title">総務委員会</div>
            <div slot="content">
              <p>
                総務委員会は生徒会長直属の管轄下に置かれる諸委員会を総称する下部委員会です。現行の総務委員会は、OB・企画委員会、福祉委員会、図書委員会、広報委員会、及び生徒会プロジェクトチーム（PT）から構成されています。総務委員会を構成する各委員会及びPTについては、総務委員会・クラブ委員会のページをご覧ください。
              </p>
              <p>
                生徒会長は中央委員会を主宰し、生徒会全体の代表として働きます。生徒会長は総務委員会各委員長及びPT責任者、そして放送委員長を自由に任命又は罷免することができます。デジタル委員長の任命及び罷免も生徒会長が行いますが、評議会の同意が必要です。また、生徒会長直属の委員会としてクラブ委員会が設置されます。クラブ委員会については、総務委員会・クラブ委員会のページをご覧ください。
              </p>
            </div>
          </Accordion>
          <Accordion>
            <div slot="title">会誌委員会</div>
            <div slot="content">
              <p>
                会誌委員会は、会誌担当副会長の下部機関で、毎年『NADA』という名の生徒会誌を編集、制作、発行しています。会誌委員会が行う仕事は記事原稿回収・会誌委員会企画記事作成・校正・校閲・神戸ワープロさんとのコミュニケーション・記事デザイン・表紙デザインなどがあります。
              </p>
              <p>
                会誌担当副会長は高校１年及び高校２年の生徒会員から選挙されます。
              </p>
            </div>
          </Accordion>
          <Accordion>
            <div slot="title">会計委員会</div>
            <div slot="content">
              <p>
                会計委員会は、会計担当副会長の下部機関で、「カネ」と「モノ」を管理しています。
              </p>
              <p>
                毎年、次年度のクラブと委員会の予算案を作成しています。配分できる金額が決まっていてうまく割り振るのですが、もちろん予算の申請の合計額はこれより高いので折衝をして調整する必要があります。その他にも文化祭前の机椅子移動や資材配布を統括するなどがあります。
              </p>
            </div>
          </Accordion>
          <Accordion>
            <div slot="title">中学委員会</div>
            <div slot="content">
              <p>
                中学委員会は中学1年生から中学3年生の40～50人ほどの生徒で運営しています。主な活動内容は中学学芸祭の運営、新入生向けの灘校便覧の作成、新入生オリエンテーションの運営、入学式の手伝い、文化祭企画の運営などです。委員が中学生だけということもあり、「灘校生徒会の入口」とも言われています。
              </p>
              <p>中学担当副会長は中学３年の生徒会員から選挙されます。</p>
            </div>
          </Accordion>
          <Accordion>
            <div slot="title">文化委員会</div>
            <div slot="content">
              <p>
                文化委員会は主に文化祭の運営と、高校生が参加する演劇コンクールの運営を行う委員会です。毎年、委員数が一番多い委員会で、生徒の委員会活動の入り口に近い立ち位置と言えます。
              </p>
              <p>
                文化委員長は高校１年及び高校２年の生徒会員から選挙されます。
              </p>
            </div>
          </Accordion>
          <Accordion>
            <div slot="title">体育委員長</div>
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
        <Accordion>
          <div slot="title">クラブ委員会</div>
          <div slot="content">
            <p>
              クラブ委員会は、生徒会長直属の委員会で、クラブ活動やその他生徒会員による活動に関する問題の解決や活動場所等の管理を行います。
            </p>
            <p>
              また、クラブ委員会はすべてのクラブに対して部長、会計責任者、部員、活動状況、部の財産などに関して毎年１回以上調査を行ったり、クラブと教職員との交渉の斡旋や、同好会設立や同好会の部昇格の申請・支援をしたりもします。
            </p>
          </div>
        </Accordion>
        <h3>総務委員会</h3>
        <Accordion>
          <div slot="title">OB・企画委員会</div>
          <div slot="content"></div>
        </Accordion>
        <Accordion>
          <div slot="title">福祉委員会</div>
          <div slot="content">
            <p>
              福祉委員会では、委員が社会問題に触れ、学内で発信活動を行い、生徒に福祉に関心を持ってもらう活動をしています。実際に見て聞いて考えて発信する活動を通じて、委員として様々な経験ができ、学ぶことも多いです。
            </p>
          </div>
        </Accordion>
        <Accordion>
          <div slot="title">図書委員会</div>
          <div slot="content"></div>
        </Accordion>
        <Accordion>
          <div slot="title">広報委員会</div>
          <div slot="content">
            <p>
              広報委員会は、主に木曜日のHRで配る生徒会広報や生徒広報、各委員会の広報を輪転機にかけて印刷している委員会です。
            </p>
            <p>
              また、クラブ・同好会が部誌などを印刷するときに、輪転機の使い方等をサポートすることもあります。
            </p>
          </div>
        </Accordion>
        <Accordion>
          <div slot="title">デザインPT</div>
          <div slot="content">
            <p>
              デザインPTは灘校のあらゆるデザインの仕事を担当するプロジェクトチームです。文化委員会と共同のデザイン講義の開催などの生徒会に関わる仕事以外にも、名刺作成やロゴ作成など、灘校生からの個人的な要望にもお応えします。
            </p>
          </div>
        </Accordion>
        <Accordion>
          <div slot="title">校閲PT</div>
          <div slot="content">
            <p>
              校閲PTは、外部から委託された校閲に関する業務や、校閲資料の管理などを担当するプロジェクトチームです。
            </p>
            <p>
              校閲（こうえつ）は出版物を作る際、文章の文字や内容の間違いをチェックして修正する作業のことです。校閲PTでは文化祭のパンフレットや部誌・同行会誌、校内機関の会議録の校閲などを行います。
            </p>
          </div>
        </Accordion>
        <Accordion>
          <div slot="title">意見箱PT</div>
          <div slot="content">
            <p>
              意見箱PTは、文字通り意見箱の運営を担う機関です。より具体的な形態としては、投函された生徒からの意見について、PTのメンバーで議論し、その意見への対応を検討する、という形をとっています。
            </p>
          </div>
        </Accordion>
        <Accordion>
          <div slot="title">規制改革PT</div>
          <div slot="content">
            <p>
              規制改革PTは、灘校に存在する、特に職員室から生徒に向けて発せられている、諸々の明文化された規則及び不文律について、その妥当性などを検討し、適宜改革を求める機関です。
            </p>
          </div>
        </Accordion>
        <Accordion>
          <div slot="title">食堂PT</div>
          <div slot="content">
            <p>
              食堂PTは、生徒会と校内の食堂の運営会社との間の連絡を担う部署です。価格やサービスの変更についての広報、生徒会の意見箱等で集まった意見の食堂側への伝達などが主な業務内容です。
            </p>
          </div>
        </Accordion>
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
  h3 {
    text-align: center;
    font-weight: 400;
    font-size: 1.4em;
    margin-top: 2em;
    margin-bottom: 1em;
  }
  .introduction {
    line-height: 1.5;
    margin-top: 1em;
    p {
      margin-bottom: 0.5em;
      text-align: justify;
    }
  }

  dd {
    p {
      margin-bottom: 0.5em;
      text-align: justify;
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
      text-align: center;
      background-color: #000;
      color: #fff;
      button {
        width: 100%;
        padding: 10px 0;
      }
    }
    li.active {
      background-color: #666666;
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

@media screen and (min-width: 960px) {
  .sentence{
    margin: 0 20%;
  }
  nav.tabs{
    margin: 3em 20%;
  }
}
</style>