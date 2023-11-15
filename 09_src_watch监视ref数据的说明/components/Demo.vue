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
    import {ref,watch,reactive} from 'vue'
    export default {
      name: 'Demo',
      setup(){
        // data
        let sum = ref(0)
        let msg = ref('你好啊')
        let person = ref({
          name:'张三',
          age:18,
          // 默认开启深度监视且不能关闭
          job:{
            j1:{
              salary:20
            }
          }
        })

        
        // console.log(sum)
        // console.log(msg)
        // console.log(person)

        // sum是一个基本类型的ref对象，这种对象监视属性不用.value,获取value之后没有getter、setter
        watch(sum,(newValu,oldValue)=>{
          console.log('sum的值变化了:',newValu,oldValue)
        })

        // 监视对象类型的ref对象：方法一
        // 监视属性用.value，获取到的是Proxy对象，可以监视
        // 就是监视reactive定义的响应式数据
        // watch(person.value,(newValu,oldValue)=>{
        //   console.log('person的值变化了:',newValu,oldValue)
        // })

        // 监视对象类型的ref对象：方法二：开启深度监视，
        // 不开启只有替换调整个对象，才能被监视到,只有顶级属性才默认开启深度监视
        watch(person,(newValu,oldValue)=>{
          console.log('person的值变化了:',newValu,oldValue)
        },{deep:true})

        // 总结：ref监视属性：是基本类型时，直接监视，对象类型时，要开启深度监视RefImpl或者监视Proxy

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
  