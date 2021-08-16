<template>
  <div @click="start" class="start">
    开始任务
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
  export default {
    name:'Start',
    setup() {
      let router = useRouter()
      let start = ()=>{
        router.push({
          path:'/home'
        })
      }
      return{
        start
      }
    }
  }
</script>

<style lang="scss" scoped>
.start{
  width: 80px;
  height: 80px;
  margin: 20px auto;
  line-height: 80px;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  background-color: #42b983;
}
</style>