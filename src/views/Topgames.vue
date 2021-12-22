<template>
  <div class="topbar">
    <div class="switch-view light-container">
      <div
        @click="selected = 'My Region'"
        :class="selected === 'My Region' ? 'selected' : ''"
      >
        My Region
      </div>
      <div
        @click="selected = 'Global'"
        :class="selected === 'Global' ? 'selected' : ''"
      >
        Global
      </div>
    </div>
  </div>
  <div class="container">
    <div class="top3">
      <TopgameItem layout="grid" class="top3-item" />
      <TopgameItem layout="grid" class="top3-item" />
      <TopgameItem layout="grid" class="top3-item" />
    </div>
    <TopgameItem layout="list" class="list-item" />
    <TopgameItem layout="list" class="list-item" />
    <TopgameItem layout="list" class="list-item" />
    
  </div>
</template>

<script>
import TopgameItem from "../components/TopgameItem.vue"
export default {
  name: "Topgames",
  components: {TopgameItem},
  data() {
    return {
      selected: "My Region",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../global.scss";
.topbar {
  position: fixed;
  left: 100px;
  right: 0px;
  top: 0px;

  padding: 20px 40px;
  display: flex;
  .switch-view {
    display: flex;
    .selected {
      color: $blue;
      font-weight: bold;
    }
    margin-right: 12px;
    div {
      padding: 4px 8px;
      line-height: 24px;

      &:hover {
        background: rgba(255, 255, 255, 0.05);
      }
    }
  }
  
}
.container {
  position: fixed;
  top: 72px;
  left: 100px;
  right: 0px;
  bottom: 0px;
  padding: 0px 40px;
  overflow-y: scroll;
  .top3 {
    display: flex;
    margin-bottom: 12px;
    gap:12px;
    .top3-item {
      flex: 1;
    }
  }
  .list-item {
    margin-bottom: 12px;
    width:100%;
    height:92px;
  }
}
</style>
