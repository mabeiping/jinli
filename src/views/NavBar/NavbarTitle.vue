<template>
<div class="nav_title" @click="click">虹咲学园学园偶像同好会</div>

</template>

<script setup>

import {ref, reactive} from "vue";
const click = () => {
  location.hash="/"
}
</script>
<style lang="less">
//@import "@/assets/less/NavbarTitle.less";
</style>