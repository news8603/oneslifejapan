<template>
  <div class="precautions">
    <div class="otcinfo">
      <p class="otcfont">医薬品に関する注意事項</p>
      <p class="otcfont">医薬品販売業許可証について［浅草店］</p>
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>許可番号</td>
          <td>医薬品販売業許可証 第３０台台健生や第149号(店舗販売業)</td>
        </tr>
        <tr>
          <td>店舗の名称</td>
          <td>ワンズドラッグ</td>
        </tr>
        <tr>
          <td>氏名</td>
          <td>株式会社ワンズライフジャパン</td>
        </tr>
        <tr>
          <td>所在地</td>
          <td>
            東京都台東区西浅草二丁目１番１２号
            <br />
            豚八ビル別館１Ｆ
          </td>
        </tr>
        <tr>
          <td>発行日</td>
          <td>平成30年06月04日</td>
        </tr>
        <tr>
          <td>有効期間</td>
          <td>平成30年06月04日から平成36年06月3日まで</td>
        </tr>
        <tr>
          <td>取り扱い品目</td>
          <td>第２類薬品及び第3類医薬品</td>
        </tr>
        <tr>
          <td>所轄自治体</td>
          <td>台東区台東保健所</td>
        </tr>
      </table>
      <p class="otcfont">特定販売(インターネット販売)届出書の情報</p>
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>許可番号及び年月日</td>
          <td>２令台台健生医や第７７８号</td>
        </tr>
        <tr>
          <td>店舗</td>
          <td>
            名称： ワンズドラッグ （浅草）<br />
            所在地：東京都台東区西浅草二丁目１番１２号 豚八ビル別館１Ｆ
          </td>
        </tr>
        <tr>
          <td>販売方法の概要</td>
          <td>
            広告方法：インターネット<br />
            郵送方法：郵便・宅配便
          </td>
        </tr>
        <tr>
          <td>届出年月日</td>
          <td>令和2年10 月 29 日 届出先 台東区台東保健所</td>
        </tr>
      </table>

      <el-row :gutter="12" class="cardfontT">
        <el-col :span="imgspan[0].Ispan">
          <el-card shadow="always" class="cardfont">
            管理者 登録販売者
            <el-divider></el-divider>
            藤田 大志<br /><br />
            販売十字登録番号：第11-12-00372号<br />
            登録日：平成24年10月4日<br />
            担当業務：薬品販売・管理業務<br />
            名札の区分：登録販売者
          </el-card>
        </el-col>
        <el-col :span="imgspan[0].Ispan">
          <el-card shadow="always" class="cardfont">
            登録販売者
            <el-divider></el-divider>
            佐藤 雅幸<br /><br />
            販売十字登録番号： 第13-09-13029号<br />
            登録日： 平成21年６月１２日<br />
            担当業務： 薬品販売<br />
            名札の区分： 登録販売者<br />
          </el-card>
        </el-col>
        <el-col :span="imgspan[0].Ispan">
          <el-card shadow="always" class="cardfont">
            登録販売者
            <el-divider></el-divider>
            王 麗麗<br /><br />
            販売十字登録番号： 第13-17-10605号<br />
            登録日： 平成29年11月6日<br />
            担当業務： 薬品販売<br />
            名札の区分：登録販売者<br />
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="24" class="cardfontT">
        <el-col :span="24">
          <el-card shadow="always" class="cardfont">
            医薬品販売店舗の営業時間について
            <el-divider></el-divider>
            店舗営業時間浅草：１０時～１９時<br /><br />
            営業時間外で相談できる時間：なし<br />
            特定販売営業時間 ：１０～１９時<br />
            特定販売の注文受付時間：24時間<br />
            特定販売の注文のみ受け付ける時間：１０時～１９時<br /><br />
            緊急時の連絡先 ： 03-6264-4400 本社銀座<br />
            緊急時連絡受付時間：10:00～19:00 (土・日曜日・ 祝日
            および年末年始などを除く) <br />
            緊急時メール：ecshop@oneslifejapan.co.jp <br />
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="24" class="cardfontT">
        <el-col :span="24">
          <el-card shadow="always" class="cardfont">
            店舗外観および医薬品陳列状況
            <el-divider></el-divider>
            <el-row>
              <el-col
                :span="10"
                v-for="(item, s) in itopimgPage"
                :key="s"
                :offset="s > 0 ? 2 : 0"
              >
                <el-card :body-style="{ padding: '5px' }">
                  <img :src="item.infoimg" class="imgC" />
                </el-card>
              </el-col> </el-row
            ><br />
            医薬品のリスク区分別の医薬品表示 →<router-link to="otc" tag="a"
              >こちら</router-link
            >
            <br /><br />
            <el-divider></el-divider>

            医薬品の使用期限について<br /><br />
            基本商品は６ヶ月以上の使用期限のある商品を発送いたします。<br />
            ※だたし外部ネットサイトなどで激安商品として６ヶ月を切っている商品を販売する場合、使用期限を記載したうえで販売します。<br />
            ご購入いただく商品の詳しい使用期限につきましては、当ショップまでお問合せ下さい。<br /><br />
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="24" class="cardfontT">
        <el-col :span="24">
          <el-card shadow="always" class="cardfont">
            医薬品による健康障害救済制度について
            <br /><br />
            万一、医薬品による健康被害を受けた方は「医薬品副作用被害救済制度」が受けられます・（一部救済がうけられない医薬品・副作用があります。）救済認定基準や手続きについては、下記にお問い合わせください。<br /><br />
            <el-divider></el-divider>

            独立行政法人 医薬品医療機器総合機構<br /><br />http://:pmda.go.jp/index.html<br />
            9:00-17:30(月～金 祝日・年末年始除く）
            <el-divider></el-divider>
            苦情相談窓口について<br /><br />
            要指導医薬品及び一般用医薬品販売制度の運用についての苦情相談は、下記窓口までご連絡ください。<br />
            台東保健所 生活衛生課 医務薬事衛生：03-3847-9416<br />
            <el-divider></el-divider>
            個人情報の取り扱いについて<br /><br />
            当店舗では、販売などによって知り得た皆様の個人情報を適切に取り扱っています。個人情報の取り扱いについて、ご不明な点や疑問などがございましたら、お気軽にお問い合わせください。
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped lang="less">
a:hover {
  color: #828282;
}
.precautions {
  background-color: #f0f0f0;
  margin-top: 30px;
  padding: 20px;
  .otcfont {
    padding-bottom: 10px;
    font-size: 1.2rem;
  }
  .otcinfo {
    margin: auto;
    max-width: 1000px;
    table {
      width: 100%;
      tr {
        text-align: left;
        background-color: white;
        td {
          padding: 20px;
          border-top: solid 1px #eaeaea;
          border-right: solid 1px #eaeaea;
        }
      }
    }
  }
  .cardfontT {
    margin-top: 15px;
    .cardfont {
      margin-top: 15px;
      text-align: left;
    }
    .imgC {
      width: 100%;
      height: 100%;
    }
  }
}
@media screen and(max-width: 500px) {
  .precautions {
    font-size: 0.6rem;
    .otcinfo {
      .otcfont {
        font-size: 0.8rem;
      }
      table {
        font-size: 0.6rem;
      }
    }
  }
}
</style>
<script>
export default {
  name: "precautions",
  data() {
    return {
      itopimgPage: [
        {
          infoimg: require("../../src/shop-2.jpg"),
        },
        {
          infoimg: require("../../src/2ce40310be9783146c554fc263bc3e3.png"),
        },
      ],
      imgspan: [{ Ispan: 8 }],
      sreenWidht: { widht: 0 },
    };
  },

  mounted() {
    if (document.body.clientWidth < 500) {
      this.sreenWidht.widht = document.body.clientWidth;
      this.imgspan[0].Ispan = 24;
    }
  },
};
</script>