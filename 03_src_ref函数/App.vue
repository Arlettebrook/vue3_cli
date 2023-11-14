<template>
  <!-- vue3组件中的模板结构可以没有根标签 -->
  <h1>我是App组件</h1>
  <h2>一个人的信息</h2>
  <h2>模板里面的RefImpl(引用对象)自动获取value值,自己加上报错，</h2>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>value值(自动获取)是对象,获取对象里面的数据就要加点,都不加value</h2>
  <h2>工作种类:{{ job.type }}</h2>
  <h2>工作薪水:{{ job.salary }}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
  import {ref} from 'vue'
  export default {
    name: 'App',

    setup(){
      // vue2中的data、methods、computed等属性都写在setup里面，
      // 数据：这种不做响应式处理，就是普通的字符串
      // let name = '张三'
      // let age = '18'

      // 响应式处理ref函数：需要引入模块，返回值是一个引用实现对象，不能直接修改
      let name = ref('张三')
      let age = ref('18')
      let job = ref({
        type:'前端工程师',
        salary:'30k',
      })

      // 方法
      function changeInfo(){
        // 不能这样修改响应式处理的数据，是一个RefImpl对象，属性value获取
        // name = '李四'
        // age = 48

        name.value = '李四'
        age.value = 48
        console.log(name,age)
        console.log('job:',job)
        console.log('job.value',job.value)
        // job对象中的数据都是响应式数据
        // 但是是一个Proxy对象，不是RefImpl对象，获取不用要加value，直接获取
        job.value.type = 'UI设计师'
        job.value.salary = '55k'
      }

      // 返回一个对象，对象中的属性在模板中能够直接使用——常用
      return {
        name,
        age,
        changeInfo,
        job
      }

      // 返回一个函数（渲染函数）了解
      // return () => h('h1','百度')

    }
  }
</script>

<style>

</style>
