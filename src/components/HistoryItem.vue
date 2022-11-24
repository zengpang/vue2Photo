<template>
    <div class="historyItem">
       <img src="" alt="">
       <h3>{{imgName}}</h3>
    </div>
</template>
<script>
  export default{
     props:['imgName'],
     name:"HistoryItem",
     
  }
</script>
<style scoped lang="scss">
   .historyItem{
      height: 90%;
      margin-bottom: 3%;
      background-color: $moduleBgColor;
      border-radius: 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
      border: 1px rgb(184, 181, 181) solid;
      img{
        height: 60px;
        width: 60px;
        margin-left: $leftDistance;
        margin-right: $leftDistance;
        background-color: aqua;
      }
   }
</style>