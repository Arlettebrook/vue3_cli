<template>
  <!-- vue3组件中的模板结构可以没有根标签 -->
  <h3>原数据：{{ person }}</h3>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}k</h2>
  <button @click="name += '-'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨资</button>
</template>

<script>
  import {reactive,toRef,toRefs} from 'vue'
  export default {
    name: 'Demo',
    setup(){
      // data
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
      console.log('person:',person)

      const name1 = person.name
      console.log('普通字符串赋值name属性:',name1)

      // toRef函数：获取响应式对象中的某个属性的ref对象，指向的是原数据
      // 能够简化模板里面的代码，toRefs批量获取
      const name2 = toRef(person,'name')
      console.log('toRef获取name属性的ref对象:',name2)

      const x = toRefs(person) // 获取person对象中所有顶级属性的ref对象
      console.log('toRefs批量获取对象所有属性的ref对象:',x)

      // 返回一个对象，对象中的属性在模板中能够直接使用——常用
      return {
        person,
        // 这中写法name属性会失去响应式，
        // 就是一个普通的字符串赋值
        // name:person.name,错,也不能在用ref函数生成ref对象，这样不是同一个数据了
        // name:toRef(person,'name'),
        // age:toRef(person,'age'),
        // salary:toRef(person.job.j1,'salary'),
        ...toRefs(person)  //对象展开操作符，只能获取顶级属性的ref对象
        
        

      }

    }
  }
</script>

<style>

</style>
