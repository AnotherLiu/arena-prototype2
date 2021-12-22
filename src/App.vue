<template>
  <div class="window">
    <div id="nav">
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
    <router-view class="main" />
  </div>
</template>

<style lang="scss">
@import "global.scss";

#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: white;
  // font-weight: 600;
  font-size: 14px;
  line-height: 1.5;
}

#nav {
  padding: 0px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);

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

.main {
  // background: rgba(0, 0, 0, 0.4);
  flex: 1;
}
.window {
  display: flex;
  background: linear-gradient(
      to bottom,
      rgba(22, 24, 29, 0.2),
      rgba(22, 24, 29, 1)
    ),
    url(https://cdn.cloudflare.steamstatic.com/steam/apps/1517290/ss_8343a3ea65031a2721447f57fd9447decb504051.1920x1080.jpg?t=1639701632);
  background-size: cover;
  background-position: center center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
