<template>
    <div class="historyItem">
       <img src="" alt="">
       <h3>{{imgName}}</h3>
       <a>&#xe600;   |   <h4>图片链接</h4></a>
    </div>
</template>
<script>
  export default{
     props:['imgName'],
     name:"HistoryItem",
     
  }
</script>
<style scoped lang="scss">
 @font-face {
  font-family: "iconfont"; /* Project id 3786935 */
  src: url('../assets/icon/iconfont.woff2?t=1669123716336') format('woff2'),
       url('../assets/icon/iconfont.woff?t=1669123716336') format('woff'),
       url('../assets/icon/iconfont.ttf?t=1669123716336') format('truetype');
}
   .historyItem{
      height: 90%;
      margin-bottom: 3%;
      background-color: $moduleBgColor;
      border-radius: 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
      border: 1px lightgray solid;
      img{
        height: 2.5vw;
        width: 2.5vw;
        margin-left: $leftDistance;
        margin-right: $leftDistance;
        background-color: aqua;
        box-shadow: $boxShadow;
      };
      a{
        font-family: "iconfont";
        position: absolute;
        right:6%;
        white-space:pre;
        display: flex;
        flex-direction: row;
        align-items: center;
        color:lightgray; 
      };
   }
</style>