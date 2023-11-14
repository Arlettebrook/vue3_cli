<template>
  <!-- vue3组件中的模板结构可以没有根标签 -->
  <h1>我是App组件</h1>
  <h2>一个人的信息</h2>
  <h2>数据封装成对象交给reactive,修改方便，后面还能优化</h2>
  <h2 v-show="person.name">姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2 v-show="person.sex">性别：{{ person.sex }}</h2>
  <h2>工作种类:{{ person.job.type }}</h2>
  <h2>工作薪水:{{ person.job.salary }}</h2>
  <h2>爱好:{{ person.hobby }}</h2>
  <button @click="changeInfo">修改人的信息</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除一个name属性</button>
</template>

<script>
  import {ref,reactive} from 'vue'
  export default {
    name: 'App',

    setup(){
      // ref做基本数据类型的响应式，reactive做对象类型、数组的响应式，不能是基本数据类型，
      // 但ref也可以做对象类型的响应式，内部借助reactive做响应式
      // let number = reactive(666)  错
      
      // 可以将ref做的响应式数据封装成一个对象交给reactive做响应式，
      // 可以直接访问数据
      let person = reactive({
        name:'Jerry',
        age:33,
        job:{
          type:'后端工程师',
          salary:'88k'
        },
        hobby:['movie','play','sing']
      })

    

      // 方法
      function changeInfo(){
        // reactive专门给对象做响应数据,是一个Proxy对象，能够直接访问
        person.name = 'Jerry'
        person.age = 25
        person.job.type = 'UI设计师'
        person.job.salary = '55k'
        person.hobby[0] = '学习'
      }

      // 在vue2中添加属性、删除属性，数字下标修改值，不会做响应式处理，
      // 通过api可以：this.$set=数据劫持Object.defineProperty()，数组方法
      // 但是在vue3中会做响应式处理---reactive返回的Proxy对象做的
      function addSex(){
        person.sex = '男'
      }

      function deleteName(){
        delete person.name
      }

      


      // 返回一个对象，对象中的属性在模板中能够直接使用——常用
      return {
        changeInfo,
        person,
        addSex,
        deleteName,
      }

    }
  }
</script>

<style>

</style>
