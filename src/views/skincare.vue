<template>
    <div class="skincare">
      <div class="skinbanner">
          <div class="bannerinfo">スキンケア</div>
      </div>
      <div class="allinfo">
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
 <div class="allinfo-p">
<div class="infogrid" 
v-for="item in careinfo"
:key="item.id">
<router-link :to="{name:'commodityinfo',params:{id:item.id}}" tag="div" class="button" >
      <img src="../11-1.png" class="image">
      <div style="padding: 14px;">
        <p>一生の美しさと輝き</p>
        <div class="infoline"></div>
          <p style="text-align: left;">JAN CODE:{{ item.jan }}</p>
          <p style="text-align: right;">{{ item.price }}</p>
      </div>

</router-link>
</div>
</div>
</div>
</template>
<script>
export default {
    name:"skincare",

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
        careinfo:[{
            id:"1",
            jan:"1213154",
            price:"151120円",
            name:"test"
        },{
            id:"2",
                jan:"1213154",
                price:"151120円",
              
            name:"test"
        },{
            id:"2",
                jan:"1213154",
                price:"151120円",
            name:"test"
        },{
            id:"2",
                jan:"1213154",
                price:"151120円",
            name:"test"
        },{
            id:"2",
                jan:"1213154",
                price:"151120円",
            name:"test"
        },{
            id:"2",
                jan:"1213154",
                price:"151120円",
            name:"test"
        },{
            id:"2",
                jan:"1213154",
                price:"151120円",
            name:"test"
        }],
        valuetime: '',
        valueinfo:''
        }
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
  

  .image {
    background-color:#f8f8f8 ;
    width: 100%;
    display: block;
  
  }
  .button{
     padding: 15px;
  transition-duration : 0.3s;
  border: 1px solid rgba(255,255,255,0);
  }
  .button:hover{
    border: 1px solid #e0e0e0;
    transition-duration : 0.3s;
  }
.infoline{
  margin-top: 10px;
    background-color: #eeeeee;
    height: 1px;
    width: 100%;
}

  .price{
    display: inline-block;
    line-height: 30px;
  }
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
       position: relative;
       .bannerinfo{
           position:absolute;
           top:30%;
           left:20%;
           font-size: 3em;
       }
        }
 .allinfo{
    max-width: 1290px;
    margin: auto;
    .selectall{
        display: flex;
        flex-direction:row;
     .selectinfo{
         text-align: left;
         margin: 10px;
            }
        }
   }

   .allinfo-p{
     display:inline-grid;
    max-width: 1290px;
 grid-template-columns: repeat(4, 25%);
      .infogrid{
        margin: 15px;
        padding:15px
   }
   }
}
.infogrid:hover{
  cursor: pointer;
}
ul li{
      display: block;
    }
@media screen and(max-width: 1220px){
.skincare{
   .allinfo-p{
     grid-template-columns: repeat(3, 33.33%);
  }
 }
}


@media screen and(max-width: 900px){
    .skincare{
      .skinbanner{
         display: none;
               }
   .allinfo{
    .selectall{
        margin-top:50px;

    }
 }

   .allinfo-p{
     display:inline-grid;
 grid-template-columns: repeat(2, 50%);
   }
}
}


@media screen and(max-width: 600px){
.skincare{
   .allinfo-p{
     grid-template-columns: repeat(1, 100%);
   
  }
 }
}


</style>