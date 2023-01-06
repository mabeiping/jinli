<template>
  <div class="sidebar_title">活动参与人员</div>
  <div class="sidebarNames" id="">
    <div v-for="(item,index) in names" :key="index" @click="click(index)"
         :style="myStyle(item)"
         class="checkbox-name "
    >
      <span v-show="!isCV">{{ item.name }}</span>
      <span v-show="isCV">{{ item.color }}</span>
      <span class="checkbox-name-bg" :style="checkbox_name_bg(item)">1</span>
    </div>
  </div>

</template>

<script setup>

import {ref, reactive, onMounted, onBeforeUnmount} from "vue";
import {useStore} from "vuex";
//未选中的样式
let noCheckedColor = "#f3f3f3"
const isCV = ref(false)
const store = useStore()
const click = (index) => {
  names[index].checked = !names[index].checked
  VuexNameChange()
}
//各个名字样式
const myStyle = (item) => {
  let color = item.checked ? item.color : noCheckedColor
  let fontColor = "color:" + color
  let borderColor = "border: 1px solid " + color
  return fontColor + ";" + borderColor
}
//各个名字背景样式
const checkbox_name_bg = (item) => {
  let color = item.checked ? item.color : noCheckedColor
  return "background-color: " + color
}
//d
const VuexNameChange = () => {
  let nameChecked = names.map((item) => {
    return item.checked ? 1 : 0
  })
  store.commit("setNameChecked", nameChecked.join(""))
}
// const timer = setInterval(() => {
//   isCV.value = !isCV.value
//   console.log(isCV.value)
// }, 3000)
const names = reactive([
  {"color": "#ed7d95", "checked": true, "name": "上原步梦"},
  {"color": "#e7d600", "checked": true, "name": "中须霞"},
  {"color": "#01b7ed", "checked": true, "name": "樱坂雫"},
  {"color": "#485ec6", "checked": true, "name": "朝香果林"},
  {"color": "#ff5800", "checked": true, "name": "宫下爱"},
  {"color": "#a664a0", "checked": true, "name": "近江彼方"},
  {"color": "#d81c2f", "checked": true, "name": "优木雪菜"},
  {"color": "#84c36e", "checked": true, "name": "艾玛维尔德"},
  {"color": "#9ca5b9", "checked": true, "name": "天王寺璃奈"},
  {"color": "#37b484", "checked": true, "name": "三船栞子"},
  {"color": "#a9a898", "checked": true, "name": "米娅泰勒"},
  {"color": "#f69992", "checked": true, "name": "钟岚珠"},
])

onMounted(VuexNameChange)
// onBeforeUnmount(() => {
//   clearInterval(timer)
// })

</script>
<style lang="less">

.sidebar_title {
  margin-top: 1rem;
  border-bottom: 1px solid #bbbbbb;
  font-size: 1.5rem;
  font-weight: 600;
  color: #989898;
}

.sidebarNames {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  .checkbox-name {
    cursor: pointer;
    position: relative;
    height: 1.5rem;
    width: 40%;
    margin: .3rem .5rem;
    border-radius: .4rem;
    text-align: center;
    line-height: 1.5rem;

    .checkbox-name-bg {
      position: absolute;
      left: 0;
      right: 0;
      opacity: 0.2;
    }
  }
}

//@import "@/assets/less/SidebarNames.less";
</style>


