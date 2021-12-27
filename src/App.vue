<template>
  <div class="whole-window">
    <div id="nav" class="left-nav">
      <div class="logo"></div>
      <router-link to="/"><i class="iconfont icon-home"></i>Home</router-link>
      <router-link to="/mygames"
        ><i class="iconfont icon-mygames"></i>My Games</router-link
      >
      <router-link to="/topgames"
        ><i class="iconfont icon-legion"></i>Top Games</router-link
      >
      <router-link to="/rewards"
        ><i class="iconfont icon-giveaway"></i>Rewards</router-link
      >
    </div>
    <router-view class="content-area" />
  </div>
</template>

<style lang="scss">
@import "global.scss";

#nav {
  .logo {
    width: 40px;
    height: 40px;
    background-color: $blue;
    border-radius: 4px;
    margin: 48px auto;
  }

  a {
    opacity: 0.6;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: white;
    text-align: center;
    min-width: 100px;
    padding: 20px;
    box-sizing: border-box;
    font-size: 12px;
    // border-radius: 4px;

    &:hover {
      background-color: $white5;
    }

    &:visited {
      color: white;
    }

    i {
      font-size: 40px;
      font-weight: normal;
      line-height: 1;
    }

    &.router-link-exact-active {
      color: $blue;
      opacity: 1;
      position: relative;

      i {
        color: $blue;
      }

      &::before {
        content: "";
        width: 3px;
        border-radius: 1.5px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        background-color: $blue;
      }
    }
  }
}
</style>
