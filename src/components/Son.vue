<template>
    <div class="son">
      <h2>我是Son组件(孙),{{ car.name }}--{{ car.price }}</h2>
    </div>
</template>

<script>
    import {inject} from 'vue'
    export default {
        name:'Son',
        setup(){
            // 接收外部组件传递过来的数据，通常用在祖给孙
            let car = inject('car')
            console.log('Son:car>',car)
            return {car}

        }
    }
</script>

<style>
    .son{
        background-color: orange;
        padding:10px;
}
</style>