<template>
  <!-- vue3组件中的模板结构可以没有根标签 -->
  <h4>当前求和sum为:{{ sum }}</h4>
  <button @click="sum++">点我sum++</button>
  <hr/>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}k</h2>
  <h3 v-if="person.car">座机信息：{{ person.car }}</h3>
  <button @click="name += '-'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨资</button>
  <button @click="showRaw">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name+='!'">换车名</button>
  <button @click="person.car.price++">换价格</button>
</template>

<script>
  import {reactive,ref,toRefs,toRaw,markRaw} from 'vue'
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
        },
        // car:{}// 解决没有car方法一
        
      })
      
      // 将响应式数据转变成普通数据（原始数据）,只能是reactiv所定义的响应式数据
      function showRaw(){
        console.log('原始类型的person:',toRaw(person))

        // ref不能使用toRaw
        // const x = toRaw(sum)
        // console.log('原始类型的sum:',x)
      }

      function addCar(){
        let car = {name:'奔驰',price:40}
        // 添加的属性也会做响应式处理，如果数据复杂，又不需要响应式处理，提高性能可以使用markRaw
        // 标记为普通数据（原始数据），不做响应式处理
        // person.car = car
        person.car = markRaw(car) // 修改数据，值会改变，但不会更新页面，更新会刷新数据
        console.log('person:',person)
      }


      // 返回一个对象，对象中的属性在模板中能够直接使用——常用
      return {
        ...toRefs(person),  //对象展开操作符，只能获取顶级属性的ref对象
        sum,
        showRaw,
        addCar,
        // 解决没有car方法二：不用...访问，用person访问
        // 具体对象属性未定义不会有警告，暴露属性未定义有警告
        person


      }

    }
  }
</script>

<style>

</style>
