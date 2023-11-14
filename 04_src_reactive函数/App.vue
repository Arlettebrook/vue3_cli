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
  <h2>爱好:{{ hobby }}</h2>
  <h2>测试的数据c(是深度监视的响应式数据):{{ job.a.b.c }}</h2>
  <button @click="changeInfo">修改人的信息</button>
  <h2>数据封装成对象交给reactive,修改方便，后面还能优化</h2>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>工作种类:{{ person.job.type }}</h2>
  <h2>工作薪水:{{ person.job.salary }}</h2>
  <h2>爱好:{{ person.hobby }}</h2>
</template>

<script>
  import {ref,reactive} from 'vue'
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
      // let job = ref({
      //   type:'前端工程师',
      //   salary:'30k',
      // })

      // ref做基本数据类型的响应式，reactive做对象类型的响应式，不能是基本数据类型，
      // 但ref也可以做对象类型的响应式，内部借助reactive做响应式
      // let number = reactive(666)  错
      let job = reactive({
        type:'前端工程师',
        salary:'30k',
        a:{
          b:{
            c:666
          }
        }
      })
      // let hobby = ['抽烟','喝酒','烫头']  不做响应式处理：页面数据刷新会修改
      let hobby = reactive(['抽烟','喝酒','烫头'])

    

      // 方法
      function changeInfo(){
        // 不能这样修改响应式处理的数据，是一个RefImpl对象，属性value获取
        // name = '李四'
        // age = 48

        name.value = '李四'
        age.value = 48
        console.log(name,age)
        console.log('job:',job)
        // console.log('job.value',job.value)
        // job对象中的数据都是响应式数据
        // 但是是一个Proxy对象，不是RefImpl对象，获取不用要加value，直接获取
        // 使用ref对象对象做响应式数据
        // job.value.type = 'UI设计师'
        // job.value.salary = '55k'

        // reactive专门给对象做响应数据,是一个Proxy对象，能够直接访问
        job.type = 'UI设计师'
        job.salary = '55k'
        job.a.b.c = 888
        hobby[0] = '学习'
      }

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


      // 返回一个对象，对象中的属性在模板中能够直接使用——常用
      return {
        name,
        age,
        changeInfo,
        job,
        // number,
        hobby,
        person
      }

      // 返回一个函数（渲染函数）了解
      // return () => h('h1','百度')

    }
  }
</script>

<style>

</style>
