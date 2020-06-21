<template>
    <div class="product-details0" style="margin-top:2500px">
        abc发发发啊发发呆
    </div>
</template>
<script>
import { fromEvent } from 'rxjs'; 
import { map,startWith,pairwise,partition} from 'rxjs/operators';

export default {
    name:"product-details0",
    methods:{

    },

    mounted(){

    },
    created(){
            const [down$, up$] = fromEvent(document, 'scroll').pipe(
            map(() => document.documentElement.scrollTop || document.body.scrollTop),
            startWith(0),
            pairwise(),
            map(([prev, next]) => next - prev),
            partition((val) => val > 0),
        );
down$.subscribe(() => (console.log('滚动向下↓')));
up$.subscribe(() => (console.log('滚动向上↑')));



    }
}
</script>