<template>
  <div class="law">
    <div class="otcinfo">
      <p class="otcfont">「特定商取引に関する法律」に基づく表示</p>
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>販売者</td>
          <td>株式会社 ワンズライフジャパン</td>
        </tr>
        <tr>
          <td>通信販売業務責任者</td>
          <td>肥沼 伸一郎</td>
        </tr>
        <tr>
          <td>所在地</td>
          <td>東京都中央区銀座1-24-12 </td>
        </tr>
        <tr>
          <td>お問い合わせ</td>
          <td>
            電話番号 03-6264-4400
            <br />営業時間 月～金9:00～19:00（土・日曜日および年末年始などの祝日を除く）
          </td>
        </tr>
        <tr>
          <td>価格について</td>
          <td>商品毎に表示しています。</td>
        </tr>
        <tr>
          <td>送料について</td>
          <td>
            配送料無料
            <br />
            一部配送地域により送料がかかります。 ※ 北海道・九州・離島
          </td>
        </tr>
        <tr>
          <td>販売数量について</td>
          <td>全ての商品について、一度に購入できる数量に上限がございます。</td>
        </tr>
        <tr>
          <td>お支払い方法</td>
          <td>クレジットカード・ＱＲ決済となります。</td>
        </tr>
        <tr>
          <td>お支払い期限</td>
          <td>
            クレジットカード：カード会社の締め日に準じます。<br />
            ＱＲ決済：ＱＲ会社の規定に順じます。
          </td>
        </tr>
        <tr>
          <td>お届けについて</td>
          <td>
            通常2-3営業日以内に発送します。<br /><br />
            ※商品によっては4-6営業日以内の発送となります。<br />
            お届け日指定・時間帯指定は承っておりませんので、ご了承ください。
          </td>
        </tr>
        <tr>
          <td>お届け対象地域について</td>
          <td>日本全国配送可能です。</td>
        </tr>
        <tr>
          <td>商品の返品・交換について</td>
          <td>
            返品をご希望の旨をメールまたはお電話にてご連絡ください。<br /><br />
            ■お客様のご都合による場合<br />
            商品到着後7日以内に事前連絡があり、未使用・未開封の場合のみ返品を承ります。<br />
            送料及びご返金の振込手数料はお客様負担とさせていただきます。<br />
            着払いでご返品された場合は、ご返金額から減額させていただきます。<br />
            一部、ご返品をお受けできない商品がございます。詳しくは一度弊社にご連絡ください。<br /><br />
            ■商品不良・トラブルの場合<br />
            商品到着後7日以内に限り、返品・交換を承ります。
          </td>
        </tr>
        <tr>
          <td>ご注文のキャンセルについて</td>
          <td>ご注文確定後の変更・キャンセルはメールまたはお電話でお問い合わせください。</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style scoped lang="less">
.law {
  background-color: #f0f0f0;
  margin-top:30px;
  padding:30px;
  margin: auto;
  .otcinfo {
    margin: auto;
    max-width: 1000px;
    .otcfont {
      padding-bottom: 10px;
      font-size: 1.2rem;
    }
    table {
      width: 100%;
      tr {
        text-align: left;
        background-color: white;
        td {
          padding:20px;
          border-top: solid 1px #eaeaea;
          border-right: solid 1px #eaeaea;

        }
      }
    }
  }
}
@media screen and(max-width: 500px) {
  .law {
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
  name: "law",
};
</script>