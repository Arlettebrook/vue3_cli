<template>
    <!-- vue3组件中的模板结构可以没有根标签 -->
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
    <hr/>
    <h2>当前的信息为:{{ msg }}</h2>
    <button @click="msg+='!'">修改信息</button>
    <hr/>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>薪资：{{ person.job.j1.salary }}k</h2>
    <button @click="person.name += '-'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨资</button>
  </template>
  
  <script>
    import {ref,watch,reactive,watchEffect} from 'vue'
    export default {
      name: 'Demo',
      setup(){
        // data
        let sum = ref(0)
        let msg = ref('你好啊')
        let person = reactive({
          name:'张三',
          age:18,
          // 默认开启深度监视且不能关闭
          job:{
            j1:{
              salary:20
            }
          }
        })

        // 监视
        // watch(sum,(newValu,oldValue)=>{
        //   console.log('sum的值变化了:',newValu,oldValue)
        // },{immediate:true})

        // 没有指定监视的是那个属性，用到谁就监视谁，默认开启立即监视
        watchEffect(()=>{
          const x1 = sum.value
          const x2 = person.job.j1.salary
          console.log('watchEffect所指定的回调执行了:',x1,x2)
        })

        // 返回一个对象，对象中的属性在模板中能够直接使用——常用
        return {
          sum,
          msg,
          person,
        }
  
      }
    }
  </script>
  
  <style>
  
  </style>
  