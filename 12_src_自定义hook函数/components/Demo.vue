<template>
    <!-- vue3组件中的模板结构可以没有根标签 -->
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
    <hr/>
    <h2>hook函数是对setup函数中组合式API进行封装</h2>
    <h2>当前点击时鼠标的坐标为:x:{{ point.x }},y:{{ point.y }}</h2>
  </template>
  
  <script>
    import {ref} from 'vue'
    import usePoint from '../hooks/usePoint'
    export default {
      name: 'Demo',
      setup(){
        // data
        let sum = ref(0)
        
        let point = usePoint()

        // 返回一个对象，对象中的属性在模板中能够直接使用——常用
        return {
          sum,point
        }
      },

    }
  </script>
  
  <style>
  
  </style>
  