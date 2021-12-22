<template>
  <div :class="layout === 'list' ? 'list' : 'banner'"></div>
</template>

<script>
export default {
  name: "RewardItem",
  props: {
    layout: String,
  },
  data() {
    return {
      islist: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../global.scss";
.list {
  @extend .blur-container;
  height: 92px;
}
.banner {
  @extend .blur-container;
  height: 306px;
}
</style>