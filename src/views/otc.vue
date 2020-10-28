<template>
  <div class="otc">
    <div class="otcinfo">
      <p class="otcfont">医薬品の区分と通販制度について</p>
      <table cellpadding="1" cellspacing="1">
        <tr>
          <td class="otctitle">区分／事項</td>
          <td>要指導医薬品</td>
          <td>
            <tr>
              <td colspan="4">一般用医薬品</td>
            </tr>
            <tr>
              <td class="otctitle-1">第１類医薬品</td>
              <td class="otctitle-1">指定第2類医薬品</td>
              <td class="otctitle-1">第2類医薬品</td>
              <td class="otctitle-1">第3類医薬品</td>
            </tr>
          </td>
        </tr>
        <tr>
          <td class="otctitle">定義及び説明</td>
          <td>
            新医薬品等で、安全性に関する調査期間中の医薬品、毒薬及び劇薬のうち厚生労働大臣が指定する医薬品
          </td>
          <td>
            <tr>
              <td class="otctitle-1">特にリスクの高い医薬品</td>
              <td class="otctitle-1">
                リスクが比較的高く、特に注意を要する医薬品
              </td>
              <td class="otctitle-1">リスクが比較的高い医薬品</td>
              <td class="otctitle-1">リスクが比較的低い医薬品</td>
            </tr>
          </td>
        </tr>

        <tr>
          <td class="otctitle">表示</td>
          <td>要指導医薬品</td>
          <td>
            <tr>
              <td class="otctitle-1">第1類医薬品</td>
              <td class="otctitle-1">
                第2類医薬品<br />又は<br />第[2]類医薬品
              </td>
              <td class="otctitle-1">第2類医薬品</td>
              <td class="otctitle-1">第3類医薬品</td>
            </tr>
          </td>
        </tr>
      </table>

      <table cellpadding="1" cellspacing="1">
        <tr>
          <td class="otctitle">対する専門家</td>
          <td class="otctitle-2">薬剤師</td>
          <td class="otctitle-3">薬剤師又は登録販売者</td>
        </tr>
        <tr>
          <td class="otctitle">情報提供</td>
          <td class="otctitle-2">義務（書面等で）</td>
          <td>
            <tr>
              <td class="otctitle-4">
                努力義務<br />服用してはいけない人や使用について注意すること等での情報提供を受けて下さい。
              </td>
              <td class="otctitle-4">努力義務</td>
              <td class="otctitle-4">規定なし</td>
            </tr>
          </td>
        </tr>
        <tr>
          <td class="otctitle">陳列方法</td>
          <td>
            薬剤師が対面で情報提供するため、お客様が直接手に取れない陳列となります。ご希望のお客様はスタッフにお申し付けください。また、専門家が不在の場合は、いやくひん売場を閉鎖します（閉鎖時に販売できません）。
          </td>
          <td>
            <tr>
              <td class="otctitle-4">
                専門家が在席するカウンター等から7m以内陳列し、情報提供の機会を高めます。
              </td>
              <td class="otctitle-5">区分ごとに分けて陳列をします。</td>
            </tr>
          </td>
        </tr>
        <tr>
          <td class="otctitle">相談があった場合の対応</td>
          <td colspan="2">
            薬剤師が対面で情報提供するため、お客様が直接手に取れない陳列となります。ご希望のお客様はスタッフにお申し付けください。また、専門家が不在の場合は、いやくひん売場を閉鎖します（閉鎖時に販売できません）。
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style scoped lang="less">
.otc {
    background-color: #f0f0f0;
  margin-top: 30px;
  padding: 20px;
  .otcinfo {
    margin: auto;
    max-width: 1000px;
    .otcfont{
        // border-bottom: 1px solid #7b7b7b;
        padding-bottom: 10px;
        font-size: 1.2rem;
    }
    table {
      width: 100%;
      tr {
        text-align: center;
        background-color: white;
        td {
          padding: 0px;
          border: solid 1px #eaeaea;
        }
      }
    }
    .otctitle {
      width: 20%;
    }
    .otctitle-1 {
      width: 15%;
    }
    .otctitle-2 {
      width: 47%;
    }
    .otctitle-3 {
      width: 33%;
    }
    .otctitle-4 {
      width: 11%;
    }
    .otctitle-5 {
      width: 22%;
    }
  }
}
@media screen  and(max-width: 500px) {
    .otc{
        .otcinfo{
         .otcfont{
             font-size: 0.8rem;
         }   
         table{
            font-size: 0.6rem;

         }
        }
    }
}
</style>
<script>
export default {
  name: "otc",
};
</script>