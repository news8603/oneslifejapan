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
import ScrollMagic from 'scrollmagic'
import {TimelineMax} from '../esm'
export default {
    name:"airmask",
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

    new ScrollMagic.Scene({
            triggerElement: ".try",
            triggerHook: "onLeave",
            duration: "400%",
            setTween:horizontalSlide
        })
        .setPin(".try")
        // .setTween(horizontalSlide)
        .addTo(controller);

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