<template>
  <div>
    <h1 class="midashi">生徒会機関<span>Student Council Organization</span></h1>
    <nav class="tabs">
      <ul>
        <li :class="{ active: tabnum == 1 }">
          <button @click="tabnum = 1">中央委員会</button>
        </li>
        <li :class="{ active: tabnum == 2 }">
          <button @click="tabnum = 2">評議会</button>
        </li>
        <li :class="{ active: tabnum == 3 }">
          <button @click="tabnum = 3">その他機関</button>
        </li>
      </ul>
    </nav>
    <transition>
      <section v-show="tabnum == 1" class="central sentence">
        <h2>中央委員会</h2>
        <div class="introduction">
          <p>
            中央委員会は、生徒会唯一の実行機関です。中央委員会は、生徒会長・会誌担当副会長・会計担当副会長・中学担当副会長・体育委員長・文化委員長の６人からなり、各々毎年６月に行われる選挙で選出され、１年間の任期の間、それぞれの下部委員会と共に任務にあたります。
          </p>
        </div>
        <dl>
          <Accordion>
            <template #title>総務委員会</template>
            <template #content>
              <p>
                総務委員会は生徒会長直属の管轄下に置かれる諸委員会を総称する下部委員会です。現行の総務委員会は、OB・企画委員会、福祉委員会、図書委員会、広報委員会、及び生徒会プロジェクトチーム（PT）から構成されています。総務委員会を構成する各委員会及びPTについては、その他機関のタブをご覧ください。
              </p>
              <p>
                生徒会長は中央委員会を主宰し、生徒会全体の代表として働きます。生徒会長は総務委員会各委員長及びPT責任者、そして放送委員長を自由に任命又は罷免することができます。デジタル委員長の任命及び罷免も生徒会長が行いますが、評議会の同意が必要です。また、生徒会長直属の委員会としてクラブ委員会が設置されます。クラブ委員会については、その他機関のタブをご覧ください。
              </p>
              <p>生徒会長は高校１年及び高校２年の生徒会員から選挙されます。</p>
            </template>
          </Accordion>
          <Accordion>
            <template #title>会誌委員会</template>
            <template #content>
              <p>
                会誌委員会は、会誌担当副会長の下部機関で、毎年『NADA』という名の生徒会誌を編集、制作、発行しています。会誌委員会が行う仕事は記事原稿回収・会誌委員会企画記事作成・校正・校閲・神戸ワープロさんとのコミュニケーション・記事デザイン・表紙デザインなどがあります。
              </p>
              <p>
                会誌担当副会長は高校１年及び高校２年の生徒会員から選挙されます。
              </p>
            </template>
          </Accordion>
          <Accordion>
            <template #title>会計委員会</template>
            <template #content>
              <p>
                会計委員会は、会計担当副会長の下部機関で、「カネ」と「モノ」を管理しています。
              </p>
              <p>
                毎年、次年度のクラブと委員会の予算案を作成しています。配分できる金額が決まっていてうまく割り振るのですが、もちろん予算の申請の合計額はこれより高いので折衝をして調整する必要があります。その他にも文化祭前の机椅子移動や資材配布を統括するなどがあります。
              </p>
              <p>
                会計担当副会長は高校１年及び高校２年の生徒会員から選挙されます。
              </p>
            </template>
          </Accordion>
          <Accordion>
            <template #title>中学委員会</template>
            <template #content>
              <p>
                中学委員会は中学1年生から中学3年生の40～50人ほどの生徒で運営しています。主な活動内容は中学学芸祭の運営、新入生向けの灘校便覧の作成、新入生オリエンテーションの運営、入学式の手伝い、文化祭企画の運営などです。委員が中学生だけということもあり、「灘校生徒会の入口」とも言われています。
              </p>
              <p>中学担当副会長は中学３年の生徒会員から選挙されます。</p>
            </template>
          </Accordion>
          <Accordion>
            <template #title>体育委員会</template>
            <template #content>
              <p>
                体育委員会は、主に体育祭、校内スポーツ大会、駅伝大会などの、体育関連の行事の運営を行う委員会です。体育祭は、中央委員の選挙の後で最初の大きな学校行事でもあります。
              </p>
              <p>
                体育委員長は高校１年及び高校２年の生徒会員から選挙されます。
              </p>
              <p>
                <a href="https://athlete.nada-sc.jp/" target="_blank"
                  >体育祭HPはこちら</a
                >
              </p>
            </template>
          </Accordion>
          <Accordion>
            <template #title>文化委員会</template>
            <template #content>
              <p>
                文化委員会は主に文化祭の運営と、高校生が参加する演劇コンクールの運営を行う委員会です。毎年、委員数が一番多い委員会で、生徒の委員会活動の入り口に近い立ち位置と言えます。
              </p>
              <p>
                文化委員長は高校１年及び高校２年の生徒会員から選挙されます。
              </p>
              <p>
                <a href="https://fest.nada-sc.jp" target="_blank"
                  >文化祭HPはこちら</a
                >
              </p>
            </template>
          </Accordion>
        </dl>
      </section>
    </transition>
    <transition>
      <section v-show="tabnum == 2" class="parliament sentence">
        <h2>評議会</h2>
        <div class="introduction">
          <p>
            評議会は生徒会の最高機関かつ唯一の議決機関です。予算案の承認、演説の聴取や規則の制定などをするのが主な役割です。
          </p>
          <p>
            評議員は、各クラスから２名ずつ選挙されています。各クラスの評議員は互選により首席評議員を選びます。また、各評議員は、１つ以上の常任委員会に所属して活動します。
          </p>
          <p>
            さらに、評議員から議長・副議長が選出されます。首席評議員と議長は兼任できません。
          </p>
        </div>
        <Accordion>
          <template #title>本会議</template>
          <template #content>
            <p>
              本会議は評議員全員から構成され、普段は大講義室で開かれています。委員会に付託された議案も、最終的な議決は本会議で行われます。
            </p>
          </template>
        </Accordion>
        <Accordion>
          <template #title>委員会</template>
          <template #content>
            <p>
              委員会は、議案が本会議で審議される前に専門的な審査を行うために設けられています。また、演説などの多くは委員会のみで行われます。
            </p>
            <p>
              委員会が議案の審査を終えたときは、審査経過の報告書を提出します。また、委員長による本会議での審査経過の説明も行います。
            </p>
            <p>
              委員会には、常時設置されている常任委員会と必要に応じて設置される特別委員会があります。常任委員会は次の7つです。
            </p>
            ・総務常任委員会<br />
            ・会誌新聞常任委員会<br />
            ・会計常任委員会<br />
            ・中学常任委員会<br />
            ・体育常任委員会<br />
            ・文化常任委員会<br />
            ・評議会運営委員会<br />
            <p>
              なお、必要なときは、議長は評議会運営委員会の同意を得て、委員会審査を省略することができます。
            </p>
          </template>
        </Accordion>
        <Accordion>
          <template #title>選挙管理委員会</template>
          <template #content>
            <p>
              選挙管理委員会は評議会の下部機関で、中央委員選挙を円滑かつ公正に運営するために設置されます。選挙管理委員会は選挙管理委員から構成され、選挙管理委員長は評議会議長が、選挙管理副委員長は評議会副議長がそれぞれ兼任します。
            </p>
            <p>
              また、選挙管理委員は各クラスから1人選出され、基本的にはそのクラスの首席評議員が兼任します。選挙管理委員会は選挙の執行のための細則の制定や、選挙に関して規則又は細則等違反の疑いのある行為についての違反の有無の認定を行います。
            </p>
          </template>
        </Accordion>
        <Accordion>
          <template #title>審議会</template>
          <template #content>
            <p>
              審議会は校内の課題に関する評議会の諮問について審議・答申するのが役割で、諮問すべきことが生じたときに議長が理事会の決定を経て設置します。審議会は諮問の内容に応じて、適切な地位にある委員の均衡を保って構成されます。
            </p>
          </template>
        </Accordion>
        <Accordion>
          <template #title>評議会事務局</template>
          <template #content>
            <p>
              評議会事務局は評議会運営に関わる事務を取り扱うのが主な役割で、議案の発案の支援や議長の支援、評議員名簿の管理、会議録の作成、公報の発行などをしています。事務局は事務局長及び事務局員から構成されます。事務局長は生徒会員の中から議長が理事会の同意を得て任命又は変更します。
            </p>
          </template>
        </Accordion>
      </section>
    </transition>
    <transition>
      <section v-show="tabnum == 3" class="assist sentence">
        <!-- <h2>新聞委員会</h2> -->
        <Accordion>
          <template #title>新聞委員会</template>
          <template #content>
            <p>
              新聞委員会は、学校に関する情報を生徒に発信するために、『灘校新聞』『時疾新深』の2種類の新聞を発行しています。前者は学期始めと学期終わりに発行、後者は生徒会役員選挙等の行事後に速報版として発行という違いがあります。一般的な新聞委員会・新聞部で行われている取材、記事執筆、校閲作業に加え、紙面レイアウトと校正作業も校内で行っていることが特徴です。
            </p>
          </template>
        </Accordion>
        <Accordion>
          <template #title>クラブ委員会</template>
          <template #content>
            <p>
              クラブ委員会は、生徒会長直属の委員会で、クラブ活動やその他生徒会員による活動に関する問題の解決や活動場所等の管理を行います。また、クラブ委員会はすべてのクラブに対して部長、会計責任者、部員、活動状況、部の財産などに関して毎年１回以上調査を行ったり、クラブと教職員との交渉の斡旋や、同好会設立や同好会の部昇格の申請・支援をしたりもします。
            </p>
          </template>
        </Accordion>

        <h2>補助機関</h2>
        <Accordion>
          <template #title>デジタル委員会</template>
          <template #content>
            <p>
              デジタル委員会は生徒会内のデジタル業務をまとめて行う補助機関です。駅伝大会のホームページの作成や文化祭のホームページの作成、生徒会ホームページなどの、ホームページの維持、更新作業や、各生徒会、クラブのアカウントの管理、動画の撮影や編集、公開などを行います。
            </p>
            <p>
              <a href="https://digital.nada-sc.jp" target="_blank"
                >デジタル委員会HPはこちら</a
              >
            </p>
          </template>
        </Accordion>
        <Accordion>
          <template #title>放送委員会</template>
          <template #content>
            <p>
              放送委員会は校内放送や学校行事における機材の設営、司会進行を行う補助機関です。普段は配布物のお知らせなどを、文化祭では中庭ステージの機材設営やイベントの放送、忘れ物の案内などをしています。
            </p>
          </template>
        </Accordion>

        <h2>総務委員会</h2>
        <Accordion>
          <template #title>OB・企画委員会</template>
          <template #content>
            <p>
              OB企画委員会では、主に土曜講座に関するアンケート調査や生徒会での新企画の創設、東京合宿などを担当しています。
            </p>
          </template>
        </Accordion>
        <Accordion>
          <template #title>福祉委員会</template>
          <template #content>
            <p>
              福祉委員会では、委員が社会問題に触れ、学内で発信活動を行い、生徒に福祉に関心を持ってもらう活動をしています。実際に見て聞いて考えて発信する活動を通じて、委員として様々な経験ができ、学ぶことも多いです。
            </p>
          </template>
        </Accordion>
        <Accordion>
          <template #title>図書委員会</template>
          <template #content>
            図書委員会は司書の先生をボスとし、書籍を愛する生徒会遊撃軍です。月1回の読書尚友の発行、読書会・交流会の実施、図書館に入る書籍の選定を行います。読書尚友とは現代の解放区です。わかったらブラウザを閉じて本を読めぇ！
          </template>
        </Accordion>
        <Accordion>
          <template #title>広報委員会</template>template
          <template #content>
            <p>
              広報委員会は、主に木曜日のHRで配る生徒会広報や生徒広報、各委員会の広報を輪転機にかけて印刷している委員会です。
            </p>
            <p>
              また、クラブ・同好会が部誌などを印刷するときに、輪転機の使い方等をサポートすることもあります。
            </p>
          </template>
        </Accordion>
        <Accordion>
          <template #title>デザインPT</template>
          <template #content>
            <p>
              デザインPTは灘校のあらゆるデザインの仕事を担当するプロジェクトチームです。文化委員会と共同のデザイン講義の開催などの生徒会に関わる仕事以外にも、名刺作成やロゴ作成など、灘校生からの個人的な要望にもお応えします。
            </p>
          </template>
        </Accordion>
        <Accordion>
          <template #title>校閲PT</template>
          <template #content>
            <p>
              校閲PTは、外部から委託された校閲に関する業務や、校閲資料の管理などを担当するプロジェクトチームです。
            </p>
            <p>
              校閲（こうえつ）は出版物を作る際、文章の文字や内容の間違いをチェックして修正する作業のことです。校閲PTでは文化祭のパンフレットや部誌・同好会誌、校内機関の会議録の校閲などを行います。
            </p>
          </template>
        </Accordion>
        <Accordion>
          <template #title>意見箱PT</template>
          <template #content>
            <p>
              意見箱PTは、文字通り意見箱の運営を担う機関です。より具体的な形態としては、投函された生徒からの意見について、PTのメンバーで議論し、その意見への対応を検討する、という形をとっています。
            </p>
          </template>
        </Accordion>
        <Accordion>
          <template #title>食堂PT</template>
          <template #content>
            <p>
              食堂PTは、生徒会と校内の食堂の運営会社との間の連絡を担う部署です。価格やサービスの変更についての広報、生徒会の意見箱等で集まった意見の食堂側への伝達などが主な業務内容です。
            </p>
          </template>
        </Accordion>
      </section>
    </transition>
  </div>
</template>

<script setup lang="ts">
const tabnum = ref(1)

useHead({
  title: '生徒会機関',
})
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
  .sentence {
    margin: 0 25%;
  }

  nav.tabs {
    margin: 3em 25%;
  }
}
</style>
