<template>
    <div class="airmask">
<div class="try">
    <div class="try1"></div>
    <div class="try2"></div>
    <div class="try3"></div>
</div>
</div>

</template>
<script>
// import ScrollMagic from 'scrollmagic'
import * as ScrollMagic from 'scrollmagic'
import {TimelineMax} from '../esm'
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'
export default {
    name:"Airmask",
    mounted(){
    var controller = new ScrollMagic.Controller();
    var horizontalSlide = new TimelineMax()
        // animate panels
        .to(".try1", 1, {
            x: "-20%"
        })
        .to(".try2", 1, {
            x: "-40%"
        })
        .to(".try3", 1, {
            x: "-80%"
        })
    const scenc=new ScrollMagic.Scene({
            triggerElement: ".try",
            triggerHook: "onLeave",
            duration: "400%",
        })
        scenc.setPin(".try");
        scenc.setTween(horizontalSlide);
        scenc.addTo(controller);
}
}
</script>
<style lang="less" scoped>
.try{
    height: 1500px;
}
.try1{
    background-color: red;
    width: 300px;
    height: 300px;
}
.try2{
    background-color: blue;
    width: 300px;
    height: 300px;
}
.try3{
    background-color: yellow;
    width: 300px;
    height: 300px;
}
</style>