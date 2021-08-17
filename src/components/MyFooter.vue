<template>
  <div class="container">
    <div >已完成{{isComplete}} / 全部{{list.length}}</div>  
    <div v-if="isComplete > 0" class="right">
      <button @click="clear" class="btn">清除已完成</button>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";
export default ({
  name: 'MyFooter',
  props:{
    list:{
      type:Array,
      required:true
    }
  },
  setup(props,ctx) {
    let isComplete = computed(() => {
      //过滤已完成的
      let arr = props.list.filter(item =>{
        return item.complete
      })
      return arr.length
    })

    //清除已完成
    let clear = () => {
      //过滤未完成的
      let arr = props.list.filter(item =>{
        return item.complete === false
      })
      confirm(`确定清除已完成吗?`) && ctx.emit('clear',arr)
      //console.log(clear)
    }

    return{
      isComplete,
      clear
    }
  } ,
})
</script>


<style scoped>
  .container{
    display: flex;
    height: 25px;
    line-height: 25px;
    padding-top: 10px;
    position: relative;
    align-items: center;
  }
  .right{
    position: absolute;
    right: 0px;
  }
  .btn{
    height: 24px;
    outline:none;
    color: #fff;
    background-color: #f56c6c;
    border: 2px solid #F56C6C;
    border-radius: 3px;
  }
  button:hover{
    opacity: .9;
  }
</style>
