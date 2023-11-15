<template>
  <!-- vue3组件中的模板结构可以没有根标签 -->
  <h4>当前的x.y值是:{{ x.y }}</h4>
  <button @click="x.y++">点我x+1</button>
  <hr/>
  <h3>原数据：{{ person }}</h3>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}k</h2>
  <button @click="name += '-'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨资</button>
</template>

<script>
  import {reactive,ref,toRefs,shallowReactive,shallowRef} from 'vue'
  export default {
    name: 'Demo',
    setup(){
      // data
      // let person = shallowReactive({ // 浅层次响应式：只响应顶级属性
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
      // let x = ref({ // 默认强制开启深度监视
      //   y:0
      // })
      let x = shallowRef({  // 浅层次响应式：只响应顶级属性:这里的顶级属性是一个对象，y不是，同时y也不是Proxy对象
        y:0                 // 替换调整个对象就会响应
      })
      console.log('x:',x)

      // 返回一个对象，对象中的属性在模板中能够直接使用——常用
      return {
        person,
        ...toRefs(person),  //对象展开操作符，只能获取顶级属性的ref对象
        x
        

      }

    }
  }
</script>

<style>

</style>
