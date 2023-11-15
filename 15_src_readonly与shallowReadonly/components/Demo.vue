<template>
  <!-- vue3组件中的模板结构可以没有根标签 -->
  <h4>当前求和sum为:{{ sum }}</h4>
  <button @click="sum++">点我sum++</button>
  <hr/>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}k</h2>
  <button @click="name += '-'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨资</button>
</template>

<script>
  import {reactive,ref,toRefs,readonly, shallowReadonly} from 'vue'
  export default {
    name: 'Demo',
    setup(){
      // data
      let sum = ref(0)
      let person = reactive({ // 默认强制开启深度监视
        name:'张三',
        age:18,
        // 默认开启深度监视且不能关闭
        job:{
          j1:{
            salary:20
          }
        }
      })
      // 不是响应式数据，值修改了，页面不改变
      // 只读函数，响应式数据person只读，不能被修改
      // person = readonly(person)

      // 浅层只读函数，只有顶级属性只读，其他可读可写
      // person = shallowReadonly(person)

      // 改变响应式数据为只读，ref与reactive的都可以
      sum = readonly(sum)
      // sum = shallowReadonly(sum) 没有必要只有一层



      // 返回一个对象，对象中的属性在模板中能够直接使用——常用
      return {
        ...toRefs(person),  //对象展开操作符，只能获取顶级属性的ref对象
        sum
        

      }

    }
  }
</script>

<style>

</style>
