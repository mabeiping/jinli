<template>
  <NavbarTitle></NavbarTitle>
  <CountDownTimer class="nav_time"></CountDownTimer>
</template>

<script setup>
import CountDownTimer from "../views/NavBar/CountDownTimer.vue";
import {ref, reactive} from "vue";
import NavbarTitle from "../views/NavBar/NavbarTitle.vue";
const click = () => {
  location.hash="/"
}
</script>
<style lang="less">
@import "/src/assets/less/navbar";

</style>
