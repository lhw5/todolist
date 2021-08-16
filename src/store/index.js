import {createStore} from 'vuex'
export default createStore({
  //定义所需要的状态
  state: {
    list:JSON.parse(localStorage.getItem("list")) || [ ]
  },
  //同步修改state 都是方法
  //第一个参数state 第二个参数是需要
  mutations: {
    //添加任务
    addTodo(state, payload) {
      if(payload.title===''){
        alert('任务不能为空！')
      }else if(payload.title.length>17){
        alert('任务名称不能太长！')
      }else{
        state.list.unshift(payload)
        localStorage.setItem('list', JSON.stringify(state.list))
      }
    },
    //勾选or取消勾选一个任务
    checkTodo(state,title) {
      state.list.map(todo => {
        if(todo.title===title) todo.complete = !todo.complete
      });
      localStorage.setItem('list', JSON.stringify(state.list))
    },
    //删除任务 splice(下标，个数)
    delTodo(state, payload) {
      //console.log(state,payload)
      state.list.splice(payload, 1)
      localStorage.setItem('list', JSON.stringify(state.list))
    },
    //清除已完成
    clear(state, payload) {
      //把过滤之后的数组传进来
      state.list = payload
      localStorage.setItem('list', JSON.stringify(state.list))
    }
  },
  //异步提交mutation
  //第一个参数store 第二个参数是需要修改的值
  actions: {

  },
  //模块化
  modules: {

  }
})
