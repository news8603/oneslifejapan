<template>
    <div class="airmsk">
<span>
    <div class="airmaskimg1 airP"></div>
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
@media screen and(min-width: 500px){
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
            width: 600px;
            height: 600px;
        }
    }
}
</style>