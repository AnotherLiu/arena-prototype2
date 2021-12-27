<template>
  <div class="item">
<div class="image"></div>
<div class="content">
    <div class="title">Game title</div>
    <div class="text">Time played: 138h</div>
    <div class="text">Last played: 2 hours ago</div>
    <div class="text">Library: Steam</div>
    <div class="text">Genre: act/rpg</div>
    <button>Play</button>
</div>
  </div>
</template>

<script>
export default {
name:'GirdItem'
}
</script>

<style lang='scss' scoped>
@import "../global.scss";
.item {
flex:1;
max-width: 500px;
min-width: 340px;
// height:220px;
padding:16px;
display: flex;
gap:24px;
position: relative;
box-sizing: border-box;
&:hover {
    background:rgba(0,0,0,0.6);
    border-radius: 8px;
    backdrop-filter: blur(10px);
    // border: 1px solid rgba(255,255,255,0.05);
    box-sizing: border-box;
    transition: 0.5s ease;
}

.image {
    background: url(https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S2_1200x1600-331f59b6877d2bf2194943fcf7a68048_1200x1600-331f59b6877d2bf2194943fcf7a68048);
    background-size: cover;
  background-position: center center;
    width:120px;
    height: 172px;
    border-radius: 4px;
}

.content {
    flex:1;
    height:172px;
    .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 12px;
    }
    .text {
        font-size: 12px;
        line-height: 20px;
        opacity: 0.4;
    }
button {
    position: absolute;
    bottom: 16px;
}

}
&:hover {
    button {
        @extend .blue-button;
        transition: color 0.5s ease, background-color 0.5s ease;
    }
}

}
</style>