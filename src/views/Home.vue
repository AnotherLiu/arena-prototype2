<script>
import ExpandableCard from "@/components/ExpandableCard.vue";

export default {
  name: "Home",
  components: {
    ExpandableCard,
  },
  data() {
    return {
      selected: 1,
    };
  },
  methods: {
    setSelected(number) {
      this.selected = number;
      console.log(number);
    },
  },
};
</script>


<template>
  <div class="content-area-wrapper">
    <!-- there might be topbar on home but now let's remove it -->
    <!-- <div class="topbar"></div> -->
    <div class="main-area centered">
      <h1>Recently Played</h1>
      <div class="recent">
        <ExpandableCard
          @mouseenter="setSelected(1)"
          :isSelected="selected === 1"
        />
        <ExpandableCard
          @mouseenter="setSelected(2)"
          :isSelected="selected === 2"
        />
        <ExpandableCard
          @mouseenter="setSelected(3)"
          :isSelected="selected === 3"
        />
        <ExpandableCard
          @mouseenter="setSelected(4)"
          :isSelected="selected === 4"
        />
        <ExpandableCard
          @mouseenter="setSelected(5)"
          :isSelected="selected === 5"
        />
      </div>
      <h1>Top Games</h1>
      <div class="topgames">
        <div class="topgame-item blur-container"></div>
        <div class="topgame-item blur-container"></div>
        <div class="topgame-item blur-container"></div>
        <div class="more blur-container"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../global.scss";

.centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  font-size: 24px;
  opacity: 0.4;
  font-weight: normal;
  line-height: 24px;
}

.recent {
  display: flex;
  align-items: flex-end;
  margin: 0px 0px 40px;
  gap: 12px;
}
.topgames {
  display: flex;
  margin: 0px 0px 40px;
  gap: 12px;

  .topgame-item {
    flex: 1;
    height: 306px;
  }
  .more {
    height: 306px;
    width: 120px;
  }
}
</style>


