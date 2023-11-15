<template>
  <!-- vue3组件中的模板结构可以没有根标签 -->
  <Demo @hello="showHelloMsg" msg="你好啊！" school="baidu">
    <!-- <span>百度:默认插槽</span> -->
    <template v-slot:qwe>
      <span>百度:具名插槽</span>
    </template>
    <template v-slot:asd>
      <span>百度:具名插槽</span>
    </template>
  </Demo>
  
</template>

<script>
  import Demo from './components/Demo'
  export default {
    name: 'App',
    components:{Demo},
    setup(){
      function showHelloMsg(value){
        alert(`你好啊,你触发了hello事件,我收到的参数是：${value}`)
      }

      return {
        showHelloMsg,
      }
    }
  }
</script>

<style>

</style>
