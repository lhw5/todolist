<template>
  <div>
    <router-link to="/"></router-link>
    <router-view/>
  </div>
</template>

<script>
  import Home from './views/Home.vue'
  import {ref,computed} from 'vue'
  import {useStore} from 'vuex'

  export default ({
    name: 'App',
    components: {Home},
  })
</script>

<style lang="scss">
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: #606266;
  padding: 10px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  width: 300px;
  margin: 50px auto;
}

</style>
