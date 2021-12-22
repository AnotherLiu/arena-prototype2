<template>
  <div class="topbar"></div>
  <div class="container">
    <RewardItem layout="banner" />
    <RewardItem layout="list" />
    <RewardItem layout="list" />
    <RewardItem layout="list" />
    <RewardItem layout="list" />
    <RewardItem layout="list" />
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
.topbar {
  position: fixed;
  left: 100px;
  right: 0px;
  top: 0px;
  height: 72px;
}
.container {
  position: fixed;
  top: 72px;
  left: 100px;
  right: 0px;
  bottom: 0px;
  padding: 0px 40px;
  overflow-y: scroll;
  div {
    margin-bottom: 12px;
  }
}
</style>