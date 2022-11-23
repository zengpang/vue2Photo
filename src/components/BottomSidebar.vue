
<template>
   <div class="bottomSidebar">
       <h1 class="previousBtn">&#xe62d;</h1>
       <label class="pageNumberItem" v-for="pageNumber in pageNumbers">{{pageNumber}}</label>
       <h1 class="nextBtn">&#xe62d;</h1>
   </div>
</template>

<script>
export default{
  name:"BottomSidebar",
  data(){
    return{
        pageNumbers:13
    }
  }
}
</script>

<style scoped lang="scss">
.bottomSidebar{
    display: flex;
    position: relative;
    flex-direction: row;
    height: 100%;
    width: 100%;
    align-items: center;
}
@font-face {
  font-family: "iconfont"; /* Project id 3786935 */
  src: url('../assets/icon/iconfont.woff2?t=1669123716336') format('woff2'),
       url('../assets/icon/iconfont.woff?t=1669123716336') format('woff'),
       url('../assets/icon/iconfont.ttf?t=1669123716336') format('truetype');
}
.nextBtn {
    font-family: "iconfont";
    color: $colorNormal;
    position: relative;
    display: flex;
    font-size: $fontNormalSize;
    transition: color $animTime;
    
    
}
.previousBtn{
    font-family: "iconfont";
    position: relative;
    color: $colorNormal;
    font-size: $fontNormalSize;
    transition: color $animTime;
    transform: rotateY(180deg); 
}  
.pageNumberItem{
    color: $colorNormal; 
}
</style>