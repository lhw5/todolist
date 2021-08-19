<template>
    <div>
      <my-header @add="add"></my-header>
      <my-list :list="list" @del="del" @check="check"></my-list>
      <my-footer :list="list" @checkAll="checkAll" @clear="clear"></my-footer>
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
    //全选or取消全选
    let checkAll = (val) => {
      store.commit('checkAllTodo',val)
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
      checkAll,
      clear
    }
    
  }
})
</script>

<style>
input[type="checkbox"] {
  cursor: pointer;
  position: relative;
}

input[type="checkbox"]:after {
  position: absolute;
  top: 0;
  background-color: #fff;
  color: #fff;
  width: 14px;
  height: 14px;
  display: inline-block;
  visibility: visible;
  padding-left: 0;
  text-align: center;
  content: " ";
  border-radius: 2px;
  box-sizing: border-box;
  border: 1px solid #ddd;
}

input[type="checkbox"]:checked:after {
  content: "";
  background-color: #409eff;
  border-color: #409eff;
}

input[type="checkbox"]:checked:before {
  content: "";
  position: absolute;
  top: 1px;
  left: 5px;
  width: 3px;
  height: 8px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  z-index: 1;
}
</style>
