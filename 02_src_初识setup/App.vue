<template>
  <!-- vue3组件中的模板结构可以没有根标签 -->
  <h1>我是App组件</h1>
  <h2>一个人的信息</h2>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>年龄vue2配置:{{ sex }}</h2>
  <h2>共同配置的a:以vue3配置为准:{{ a }}</h2>
  <button @click="sayHello">说话(vue3)</button><br/><br/>
  <button @click="sayWelcom">说话(vue2配置的,vue3中尽量别用vue2配置,容易搞混)</button>
  <br/><br/>
  <button @click="test1">测试在vue2配置中访问vue3配置的数据、方法</button>
  <br/><br/>
  <button @click="test2">测试在vue3配置中访问vue2配置的数据、方法</button>
</template>

<script>
  // 引入渲染函数h
  // import {h} from 'vue'
  export default {
    name: 'App',
    data(){
      return {
        sex:'男',
        a:100
      }
    },
    methods:{
      sayWelcom(){
        alert('欢迎来到Vue3的学习!')
      },
      // vue2配置中访问vue3配置——能够访问
      test1(){
        console.log(this.sex)
        console.log(this.name)
        console.log(this.age)
        console.log(this.sayHello)
        
      }
    },  


    // 此处只是测试一下setup，暂时不考虑响应式的问题
    setup(){
      // vue2中的data、methods、computed等属性都写在setup里面，
      // 在vue3中不要使用vue2这些用法 ，尽量不要与Vue2.x配置混用
      // 数据
      let name = '张三'
      let age = '18'
      let a = 200

      // 方法
      function sayHello(){
        alert(`我叫${name},我${age}岁了,你好啊！`)
      }
      // vue3配置中访问vue2配置——不能够访问
      function test2(){
        console.log(this.sex)
        console.log(this.sayWelcom)
        console.log(name)
        console.log(age)
        console.log(sayHello)
        
      }

      // vue2、3配置同名以setup中的为准

      // 返回一个对象，对象中的属性在模板中能够直接使用——常用
      return {
        name,
        age,
        sayHello,
        test2,
        a
      }

      // 返回一个函数（渲染函数）了解
      // return () => h('h1','百度')

    }
  }
</script>

<style>

</style>
