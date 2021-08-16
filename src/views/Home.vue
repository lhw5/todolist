<template>
    <div>
      <my-header @add="add"></my-header>
      <my-list :list="list" @del="del" @check="check"></my-list>
      <my-footer :list="list" @clear="clear"></my-footer>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyList from '@/components/MyList.vue'
import MyFooter from '@/components/MyFooter.vue'
import {ref,computed} from 'vue'
import {useStore} from 'vuex'

export default ({
  name: 'Home',
  components: {
    MyHeader,
    MyList,
    MyFooter
  },
  setup() {
    let store = useStore()
    let list = computed( () => {
      return store.state.list
    })
    let value = ref('')
    //添加任务
    let add = (val) => {
      value.value = val
      let flag = true
      list.value.map((item) => {
        if(item.title===value.value){
          flag = false
          alert('任务已存在！')
        }
      })
      if(flag){
        store.commit('addTodo',{
          title:value.value,
          complete:false
        })
      }
    }
    //勾选or取消勾选
    let check = (val) => {
      store.commit('checkTodo',val)
    }
    //删除任务
    let del = (val) => {
      //调用删除的mutation
      store.commit('delTodo',val)
    }
    //清除已完成
    let clear = (val) => {
      store.commit('clear',val)
    }
    return{
      add,
      check,
      value,
      list,
      del,
      clear
    }
    
  }
})
</script>

<style>

</style>
