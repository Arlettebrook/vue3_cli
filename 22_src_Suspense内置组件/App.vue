<template>
  <div class="app">
    <h2>我是App组件</h2>
    <!-- <Child/> -->
    <!-- 配合异步使用的一个内置组件Suspense:原理是slot，提供两个插槽，成功or加载显示，
      ,防止异步组件没有加载来，显示的是插槽的内容， -->
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback>
        <h3>稍等,加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
  // import Child from './components/Child'  // 静态引入
  import {defineAsyncComponent} from 'vue' 
  const Child = defineAsyncComponent(()=>import('./components/Child')) //异步引入
  export default {
    name:'App',
    components:{Child},
    
  }
</script>


<style>
  .app{
    background-color: gray;
    padding:10px;
  }
</style>