<template>
    <div v-if="list.length>0" class="list">
      <div v-for="(item,index) in list" :key="index">
        <div class="item">
          <input type="checkbox" :checked="item.complete" @click="check(item,item.title)" />
          {{item.title}}
          <button class="del" @click="del(item,index)">删除</button>
        </div>
      </div>
    </div>
    <div v-else class="No_task" style="padding:10px">暂无任务</div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "MyList",
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  setup(props, ctx) {
    let store = useStore();
    //勾选or取消勾选
    let check = (item,title) => {
      ctx.emit("check",title)
    }
    //删除任务
    let del = (item,index) => {
      confirm(`确定删除任务："${item.title}" 吗?`) && ctx.emit("del",index)
    };
    return {
      check,
      store,
      del
    };
  }
};
</script>

<style scoped>
.list{
  padding: 10px;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.01)
}
.item {
  width: inherit;
  height: 35px;
  line-height: 35px;
  position: relative;
}
.item:hover {
  background-color: rgb(244, 244, 245);
}
.No_task{
  padding: 10px;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
}
button {
  position: absolute;
  margin-right: -15px;
  height: 24px;
  top: 6px;
  right: 20px;
  display: none;
  z-index: 99;
  outline: none;
  color: #fff;
  background-color: #f56c6c;
  border: 2px solid #f56c6c;
  border-radius: 3px;
}
button:hover{
  opacity: .9;
}
.item:hover button {
  display: block;
}

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
