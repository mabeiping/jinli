<template>
  <div class="dateUtilContent">
    <div
        :class="{ ActiveHref: content.href }"
        @click="click(content.href)"
        v-text="content.title"
    ></div>
    <div class="colorItem">
      <div
          class="colorUtil"
          v-for="(color, index) in styles"
          :key="color"
          :style="myStyle(index,color,content.nameID)"
      >
      </div>
    </div>
  </div>
</template>

<script setup>
import name_color_json from "/src/assets/json/name_color.json"
import { ref, reactive} from "vue";
//未选中的样式
let noCheckedColor = "#f3f3f3"
defineProps({
  content: {
    type: Map,
    default: {title: "", href: "", name: "", nameID: ""},
  }

});
const myStyle = (index, color, nameID) => {
  return "background-color:" + (nameID[index] === "1" ? color : noCheckedColor)
}
let styles = name_color_json.list.map((item) => {
  return item.color
})

const click = (href) => {
  if (/^[BV]/.test(href)) {
    window.open("https://www.bilibili.com/video/" + href, href)
  } else {
    window.open(href, href)
  }
}
</script>
<style lang="less">
@import "/src/assets/less/dateRowunit.less";
</style>