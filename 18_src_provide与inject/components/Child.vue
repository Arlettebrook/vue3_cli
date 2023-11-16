<template>
    <div class="child">
      <h2>我是Child组件(子)</h2>
      <Son/>
    </div>
</template>

<script>
    import Son from './Son'
    import {inject} from 'vue'
    export default {
        name:'Child',
        components:{Son},
        setup(){
            // 接收外部组件传递过来的数据,通常用在祖给孙
            let car = inject('car')
            console.log('Child:car>',car)
            return {car}

        }
    }
</script>

<style>
    .child{
        background-color: skyblue;
        padding:10px;
    }
</style>