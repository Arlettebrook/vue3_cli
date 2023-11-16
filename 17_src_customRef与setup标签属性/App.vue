<template>
  <!-- vue3组件中的模板结构可以没有根标签 -->
  <input type="text" v-model="keyWord"/>
  <h3>{{ keyWord }}</h3>
</template>

<!-- 自动导出(暴露),不用再写return -->
<script setup>
  import {ref,customRef} from 'vue'
  // 自定义一个ref函数——myRef
  function myRef(value,delay=500){
    console.log('---myRef---')
    let timer // 目的清除计时器，防止积压计时器，影响持续输入
    return customRef((track,trigger)=>{
      return {
        get(){
          console.log(`有人从myRef函数即自定义的ref函数中读取数据了,我把：${value}给它了`)
          // 还要调追踪方法，追踪值的修改，要不然后面修改了不会更新值，
          // 不加，只有读取原数据，加，读取数据变化
          track() // 通知vue追踪数据的变化
          return value
        },
        set(newValue){
          console.log(`有人把myRef函数即自定义的ref函数中的数据修改了:${newValue}`)
          // value = newValue
          // trigger() // 通知vue去重新解析模板

          clearTimeout(timer) //目的清除计时器，防止积压计时器，影响持续输入

          timer = setTimeout(()=>{
            value = newValue
            trigger()
          },delay)
        }
      }
    })
  }

  // let keyWord = ref('hello') // 使用Vue提供的ref
  let keyWord = myRef('hello') // 使用程序员自定义的ref

</script>



<!-- <script>
  import {ref} from 'vue'
  export default {
    name: 'App',
    setup(){
      let keyWord = ref('hello')

      return {keyWord}
    }
  }
</script> -->

<style>

</style>