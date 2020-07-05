<template>
    <div class="airmask">
<span>
    <div class="airmaskimg1 airP anow">
        <div class="airmaskimg2 alater"></div>
    </div>
    <div class="airback airP">
        <div class="airbackin"></div>
        <div class="airoutinfo">
        <div class=" airtitle">{{ this.$t('airmask.airmasktitle1')}}</div>    
        <div class="airinfo1" v-html="this.$t('airmask.airmaskinfo1').replace(/\n/g,'<br\>')"></div>
        </div>
     </div>
    
</span>
    </div>
</template>
<script>
export default {
    name:"airmask",
}
</script>
<style lang="less" scoped>
.airP{
    background-repeat: no-repeat;
    position: absolute;
    background-size: cover;
}
.anow{
    transition: 0.6s;
}
.alater{
    transition: all 0.6s ease-out 0.4s;
}
@media screen and(min-width: 500px){
    .airtitle{
       font-size: 2rem;
       margin-bottom: 25px;
       color: white;
    }
    .airmask{
    position: relative;
    max-width: 1280px;
    min-width: 1280px;
    height: 8150px;
    margin: auto;
    clear: both;
    text-align: left;
    overflow: hidden;
    line-height: 2em;
    margin: auto;
    font-size: 1rem;
    color: #0b0b0b;
        .airmaskimg1{
            background-image: url(../200624_0011-1.png);
            width: 1280px;
            height: 1030px;
            transition: 0.6s;
            .airmaskimg2{
                background-image:url(../200624_0010.png);
                width: 500px;
                height: 900px;
                background-size: contain;
                margin: auto;
            }
        }
               .airback{
                background-color: #42c7fc;
                width: 1280px;
                height: 2000px;
                z-index: -1;
                top:800px;
                .airbackin{
                        width: 1500px;
                        height: 1500px;
                        top: -1140px;
                        background-color: white;
                        border-radius: 800px;
                        position: absolute;
                        left: -110px;
                        box-shadow: 0 0 12px 0px #00000038;
                        }
                        .airoutinfo{
                           margin: 450px auto auto auto;
                           text-align: center;
                                .airinfo1{
                                    margin: auto;
                                    text-align: center;
                                    color: white;
                                    width: 60%;
                                }
                            }
                     }
            }
    
}       
</style>