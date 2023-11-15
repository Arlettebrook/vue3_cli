import {reactive,onMounted, onBeforeUnmount} from 'vue'
export default function(){
    // 实现鼠标"打点"相关的数据
    let point = reactive({
        x:0,
        y:0,
      })
    // 实现鼠标"打点"相关的方法
    function savePoint(event){
        console.log(event.pageX,event.pageY)
        point.x = event.pageX
        point.y = event.pageY
    }
    // 实现鼠标"打点"相关的生命周期钩子
    onMounted(()=>{
        window.addEventListener('click',savePoint)})

    // 卸载之前取消掉监听事件
    onBeforeUnmount(()=>{
        // 这个方法需要两个参数，1：取消的事件，2:取消的事件的回调函数
        // 所以要将回调函数提出来
        window.removeEventListener('click',savePoint)
    })

    return point
}

 