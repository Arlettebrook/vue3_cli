<template>
    <!-- vue3组件中的模板结构可以没有根标签 -->
    <h1>我是App组件</h1>
    <h2>一个人的信息</h2>
    姓:<input type="text" v-model="person.fistName">
    <br/>
    名:<input type="text" v-model="person.lastName">
    <br/>
    <!-- <span>全名：{{ fullName }}</span> -->
    <span>全名：{{ person.fullName }}</span>
    <br/>
    <!-- 计算属性被修改 -->
    全名:<input type="text" v-model="person.fullName">
    
  </template>
  
  <script>
    import {reactive,computed} from 'vue'
    export default {
      name: 'Demo',
      // computed:{//vue2
      //   fullName(){
      //     return this.person.fistName + '-' +this.person.lastName
      //   }
      // },
      setup(){
        // data
        let person = reactive({
          fistName:'张',
          lastName:'三',

        })

        // 计算属性——简写：没有考虑计算属性被修改的情况
        // let fullName = computed(() => {给person添加属性
        // person.fullName = computed(() => {
        //   return person.fistName + '-' + person.lastName
        // })

        // 计算属性完整写法（考虑读和写）
        person.fullName = computed({
          get(){
            return person.fistName + '-' + person.lastName
          },
          set(value){
            const nameArr = value.split('-')
            person.fistName = nameArr[0]
            person.lastName = nameArr[1]
          }
        })
  
        // 返回一个对象，对象中的属性在模板中能够直接使用——常用
        return {
          person,
          // fullName
        }
  
      }
    }
  </script>
  
  <style>
  
  </style>
  