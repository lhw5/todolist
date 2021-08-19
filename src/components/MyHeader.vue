<template>
    <input v-model="value" 
    maxlength="17" autofocus
    placeholder="请输入任务名称！"
    @keydown.enter="enter"/> 
</template>

<script>
import { ref } from 'vue'
export default ({
  name: 'MyHeader',
  setup(props,ctx) {
    let value = ref('')
    let enter = () => {
      ctx.emit('add',value.value.trim())
      value.value = ''
    }  
    return{
      value,
      enter
    } 
  } 
})
</script>

<style scoped>
  input{
    width: 300px;
    height: 25px;
    line-height: 25px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    font-size: inherit;
    border-radius: 2px;
    margin-bottom: 10px;
    padding-left: 10px;
    outline:none;
    transition: border-color .5s cubic-bezier(.645,.045,.355,1);
  }
  input:focus{
    outline: none;
    border-color: #409eff;
  }

</style>
