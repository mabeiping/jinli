<template>
  <div class="sidebar_title">活动成员</div>
  <div class="sidebarNames" id="">
    <div v-for="(item,index) in names" :key="index"
         :style="checkbox_name_style(item)"
         class="checkbox-name "
    >
      <span v-text="showText(item)"></span>
      <span class="checkbox-name-bg" :style="checkbox_name_bg(item)">1</span>
    </div>
  </div>

</template>

<script setup>
import name_color_json from "/src/assets/json/name_color.json"
import {ref, reactive, onMounted, onBeforeUnmount} from "vue";
//未选中的样式
const showTextChange = ref(0)
const names = reactive(name_color_json.list)
//各个名字样式
const checkbox_name_style = (item) => {
  let fontColor = "color:" + item.color
  let borderColor = "border: 1px solid " + item.color
  return fontColor + ";" + borderColor
}
//各个名字背景样式
const checkbox_name_bg = (item) => {
  return "background-color: " + item.color
}
const showText = (item) => {
  if (showTextChange.value === 0) {
    return item.name
  } else if (showTextChange.value === 1) {
    return item.cv
  } else {
    return item.color
  }

}
const timer = setInterval(() => {
  showTextChange.value = (showTextChange.value += 1) % 3
}, 10000)
onBeforeUnmount(() => {
  clearInterval(timer)
})

</script>
<style lang="less">
@import "/src/assets/less/sidebarNames.less";
</style>


