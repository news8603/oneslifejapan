<template>
    <div class="skincare">
      <div class="skinbanner">
      </div>
 <div class="selectall">
    <div class="selectinfo"> 
        <div>ご使用の時間帯</div>
        <div>
            <el-select v-model="valuetime" placeholder="すべて">
                    <el-option
                    v-for="item in optionstime"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
            </el-select>
         </div>
    </div>
    <div class="selectinfo"> 
        <div>気になるポイント</div>
        <div>
            <el-select v-model="valueinfo" placeholder="すべて">
                    <el-option
                    v-for="item in optionsinfo"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
            </el-select>
         </div>
    </div>
 </div>
    </div>
</template>
<script>
export default {
    name:"skincare",
    mounted(){
        console.log("skincare加载了")
    },
    data(){
        return{
        optionstime: [{
          value: 'option1',
          label: '日中',
        }, 
        {
          value: 'option2',
          label: '夜',
        }],
           optionsinfo: [{
          value: 'option1',
          label: 'シワ・小ジワ',
        }, 
        {
          value: 'option2',
          label: '乾燥',
        },{
          value: 'option3',
          label: '毛穴・ざらつき',
        },{
          value: 'option4',
          label: '目もと',
        }],
        valuetime: '',
        valueinfo:''
        }
    }
}
</script>
<style lang="less" scoped>
.skincare{
    .skinbanner{
        margin: 20px 0px ;
        background-color:#f7f7f7;
        width: 100%;
        background-image: url(../skincare.jpg);
        height:300px;
        background-repeat: no-repeat;
        background-size: contain;
       background-position: calc( 100vw - 50% );
    }
}
</style>
<style lang="less" scoped>
ul li{
      display: block;
    }
.skincare{
    // height: 900px;
    .selectall{
        display: flex;
            flex-direction:row;
     .selectinfo{
     
         text-align: left;
         margin: 10px;

     }
    }
}
</style>