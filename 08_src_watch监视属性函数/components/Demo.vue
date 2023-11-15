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
      // vue2监视属性
      // watch:{
      //   // 简写
      //   // sum(newValue,oldValue){
      //   //   console.log('sum的值变化了',newValue,oldValue)
      //   // }

      //   sum:{
      //     immediate:true,// 立即监视：没有改变就监视
      //     deep:true,// 开启深度监视
      //     handler(newValue,oldValue){
      //       console.log('sum的值变化了:',newValue,oldValue)
      //     }
      //   }
      // },
      setup(){
        // data
        let sum = ref(0)
        let msg = ref('你好啊')
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
  
        // 监视属性：
        // 情况一：监视ref所定义的一个响应式数据
        // watch(sum,(newValue,oldValue) => {
        //   console.log('sum的值变化了:',newValue,oldValue)
        // })

        // 情况二：监视ref所定义的多个响应式数据,
        // 可以写多个watch，也可以属性写成数组
        // watch([sum,msg],(newValue,oldValue) => {
        //   console.log('sum或msg的值变了:',newValue,oldValue)
        // },{immediate:true})

        // watch(sum,(newValue,oldValue) => {
        //   console.log('sum的值变化了:',newValue,oldValue)
        // })
        // watch(msg,(newValue,oldValue) => {
        //   console.log('msg的值变化了:',newValue,oldValue)
        // })

        // 第三个参数是一个配置对象：配置立即监视、深度监视(vue3中有点小问题)// 默认开启深度监视且不能关闭
        // watch(sum,(newValue,oldValue) => {
        //   console.log('sum的值变化了:',newValue,oldValue)
        // },{immediate:true})

        // 情况三：监视reactive所定义的一个响应式数据中的全部属性:此出无法正确获取oldValue
        // 监视ref所定义的对象属性需要.value,同事也不能正确获取oldVlue，旧值很少用，要用可以不配置在对象中
        // watch(person,(newValue,oldValue) => {
        //   console.log('person变化了',newValue,oldValue)
        // },{deep:false}) // 默认开启深度监视且不能关闭

        // 情况四：监视reactive所定义的一个响应式数据中的某个属性，可以获取到旧的值，就是全部才不能
        // 不能直接监视reactive和ref所以定义的对象类型的响应式数据中的某个属性，要写成一个函数返回值
        // watch(person.age,(newValue,oldValue) => { 错

        // watch(() => person.age,(newValue,oldValue) => {
        //   console.log('person的age值变化了:',newValue,oldValue)
        // })

        // 情况五：监视reactive所定义的一个响应式数据中的某些属性，可以获取到旧的值
        // watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
        //   console.log('person的name或age值变化了:',newValue,oldValue)
        // })

        // 特殊情况，监视属性对象中的某个属性：这里又要开启深度监视，要不然监视不到
        watch(() => person.job,(newValue,oldValue) => {
          console.log('person的job值变化了:',newValue,oldValue)
        },{deep:true})//此处由于监视的是reactive定义的对象中的某个属性,所以deep配置有效
        // 这里也不能获取就的值，对象都不能获取旧的值

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
  