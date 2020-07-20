<template>
  <div class="try" style="marginTop:100px">
    <button v-stream:click="plus$">+{{count}}</button>
  </div>
</template>

<script>
import { Subject, interval } from "rxjs";
import { map, startWith, scan } from "rxjs/operators";
export default {
  subscriptions() {
    this.plus$ = new Subject();
    return {
      count: this.plus$.pipe(
        interval(1000),
        map(() => 1),
        startWith(10),
        scan((total, change) => {
          console.log("total:", total, "change:", change);
          return total + change;
        })
      )
    };
  }
};
</script>