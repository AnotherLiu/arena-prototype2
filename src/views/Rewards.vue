<template>
<div class="content-area-wrapper">
  <div class="topbar empty-topbar"></div>
  <div class="main-area container">
    <RewardItem layout="banner" />
    <RewardItem layout="list" />
    <RewardItem layout="list" />
    <RewardItem layout="list" />
    <RewardItem layout="list" />
    <RewardItem layout="list" />
  </div>
  </div>
</template>

<script>
import RewardItem from "../components/RewardItem";
export default {
  name: "Rewards",
  components: { RewardItem },
};
</script>

<style lang="scss" scoped>
@import "../global.scss";

.empty-topbar {
  height:64px;
  box-sizing: border-box;
}

.container {
  div {
    margin-bottom: 12px;
  }
  padding-bottom: 40px;
}
</style>