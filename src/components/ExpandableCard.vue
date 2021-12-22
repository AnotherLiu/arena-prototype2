<template>
  <div
    :class="
      isSelected ? 'card-expanded blur-container' : 'card blur-container'
    "
  ></div>
</template>

<script>
export default {
  name: "ExpandableCard",
  props: ["isSelected"],
  data() {
    return {
      selected: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.card {
  width: 120px;
  height: 160px;
}
.card-expanded {
  width: 360px;
  height: 220px;
}
</style>