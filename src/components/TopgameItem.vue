<template>
  <div :class="layout === 'list' ? 'list' : 'grid'"></div>
</template>

<script>
export default {
  name: "TopgameItem",
  props: {
    layout: String,
  },
  data() {
    return {
      layout: null,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../global.scss";

.list {
  @extend .blur-container;
  height: 92px

}
.grid {
  @extend .blur-container;
  height: 302px

}
</style>