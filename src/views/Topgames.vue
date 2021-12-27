<template>
  <div class="content-area-wrapper">
    <div class="topbar">
      <div class="tab">
        <button
          @click="selected = 'My Region'"
          :class="selected === 'My Region' ? 'selected' : ''"
        >
          My Region
        </button>
        <button
          @click="selected = 'Global'"
          :class="selected === 'Global' ? 'selected' : ''"
        >
          Global
        </button>
      </div>
    </div>
    <div class="main-area container">
      <div class="top3">
        <TopgameItem layout="grid" class="top3-item" />
        <TopgameItem layout="grid" class="top3-item" />
        <TopgameItem layout="grid" class="top3-item" />
      </div>
      <TopgameItem layout="list" class="list-item" />
      <TopgameItem layout="list" class="list-item" />
      <TopgameItem layout="list" class="list-item" />
      <TopgameItem layout="list" class="list-item" />
      <TopgameItem layout="list" class="list-item" />
    </div>
  </div>
</template>

<script>
import TopgameItem from "../components/TopgameItem.vue";
export default {
  name: "Topgames",
  components: { TopgameItem },
  data() {
    return {
      selected: "My Region",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../global.scss";

.container {
padding-bottom: 40px;
}
.top3 {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  .top3-item {
    flex: 1;
    height: 302px;
  }
}

.list-item {
  margin-bottom: 12px;
  height:92px;
}
</style>
