<template>
  <div :class="view==='list'?'content-area-wrapper':'content-area-wrapper darker-background'">
    <div class="topbar">
      <div class="tab">
        <button
          @click="view = 'list'"
          :class="view === 'list' ? 'selected' : ''"
        >
          <i class="iconfont icon-list"></i>
        </button>
        <button
          @click="view = 'grid'"
          :class="view === 'grid' ? 'selected' : ''"
        >
          <i class="iconfont icon-grid"></i>
        </button>
      </div>
      <button>
        <i class="iconfont icon-add"></i>
        Add Games
      </button>
      <button class="grey-button"><i class="iconfont icon-refresh"></i></button>
    </div>
    <div class="main-area grid-container" v-if="view === 'grid'">
      <GridItem
        v-for="item in [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20,
        ]"
        :key="item"
      />
      <div class="item-placeholder"></div>
      <div class="item-placeholder"></div>
      <div class="item-placeholder"></div>
      <div class="item-placeholder"></div>
      <div class="item-placeholder"></div>
      <div class="item-placeholder"></div>
    </div>
    <div class="main-area list-container" v-if="view === 'list'">
      <div class="list">
        <div
          class="list-item"
          v-for="item in [1, 2, 3, 4, 5, 6, 7]"
          :key="item"
        >
          <div class="small-image"></div>
          <div class="title">Game title</div>
          <div class="play">Play</div>
        </div>
      </div>
      <div class="content">
        <div class="info blur-container">
          <img
            src="https://m.media-amazon.com/images/M/MV5BOGZhY2ZjOWItODRlYS00NjQyLWJkMjAtZGFkYTAyOTdiZTk5XkEyXkFqcGdeQXVyNDIwOTkyNjM@._V1_.jpg"
            alt=""
            class="info-image"
          />
          <div class="right-area">
            <div class="title">Game Name Here</div>
            <div class="text-items">
              <div class="text">Time played: 138h</div>
              <div class="text">Last played: 2 hours ago</div>
              <div class="text">Library: Steam</div>
              <div class="text">Genre: act / rpg</div>
              <div class="text">Publisher: Capcom</div>
              <div class="text">Release date: 2020.9.13</div>
            </div>
            <div class="button-group">
              <button class="blue-button">Play</button>
            </div>
          </div>
        </div>
        <div class="gallery blur-container"></div>
      </div>
    </div>
  </div>
</template>

<script>
import GridItem from "../components/GridItem";

export default {
  name: "Mygames",
  components: { GridItem },
  data() {
    return {
      view: "list",
      listSelected: 0,
    };
  },
};
</script>

<style lang='scss' scoped>
@import "../global.scss";

.darker-background {
  &::before{
    content:'';
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color: rgba(0,0,0,0.4);
  }
}

.grid-container {
  display: flex;
  gap: 12px 12px;
  flex-wrap: wrap;
  align-content: flex-start;
  .item-placeholder {
    flex: 1;
    min-width: 340px;
    max-width: 500px;
    padding: 0px 24px;
  }
  -ms-overflow-style: none;
  scrollbar-width: none; /* Firefox */
}
.grid-container ::-webkit-scrollbar {
  display: none;
}
.list-container {
  display: flex;
  gap: 24px;
  .list {
    .list-item {
      width: 250px;
      padding: 12px;
      display: flex;
      align-items: center;
      gap: 16px;
      border-radius: 4px;
      &:hover {
        background: rgba(255, 255, 255, 0.05);
        .play {
          opacity: 1;
        }
      }
      .small-image {
        background: url(http://www.xue51.com/uploads/202110/615d14ccedcdc.png);
        width: 48px;
        height: 60px;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 4px;
      }
      .title {
        flex: 1;
        font-size: 16px;
        font-weight: 600;
      }
      .play {
        color: $blue;
        font-weight: bold;
        font-size: 16px;
        opacity: 0;
        &:hover {
          filter: brightness(1.2);
        }
        &:active {
          filter: brightness(0.7);
        }
      }
    }
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 40px;
    .info {
      padding: 24px;
      display: flex;
      gap: 24px;

      .info-image {
        border-radius: 4px;
        width: 120px;
      }
      .right-area {
        flex: 1;
        display: flex;
        flex-direction: column;

        gap: 12px;
        .title {
          font-weight: bold;
          font-size: 20px;
          line-height: 24px;
        }
        .text-items {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 0px;
          align-content: flex-start;
          max-width: 500px;
          .text {
            font-size: 12px;
            line-height: 20px;
            opacity: 0.4;
            flex: 1;
            min-width: 200px;
          }
        }
        .button-group {
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .gallery {
      flex: 1;
    }
  }
}
</style>