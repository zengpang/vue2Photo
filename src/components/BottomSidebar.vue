
<template>
   <div class="bottomSidebar">
       <h1 class="previousBtn">&#xe62d;</h1>
       <label class="fontSlenderNormal " v-for="pageNumber in pageNumbers" :ref="pageNumber" @click="pageChangeBtn(pageNumber)" >{{pageNumber}}</label>
       <h1 class="nextBtn">&#xe62d;</h1>
   </div>
</template>

<script>
export default{
  name:"BottomSidebar",
  data(){
    return{
        pageNumbers:13,
        selectPageNumber:1
    }
  },
  methods:{
    //选中页面
    selectPage()
    {
        for(let index=1;index<=this.pageNumbers;index++)
        {
            
            this.$refs[index][0].classList.remove("fontSelected"); 
            this.$refs[index][0].classList.add("fontSlenderNormal"); 
        }
        this.$refs[this.selectPageNumber][0].classList.remove("fontSlenderNormal"); 
        this.$refs[this.selectPageNumber][0].classList.add("fontSelected"); 
    },
    //页面切换点击事件
    pageChangeBtn(pageNumber){
         this.selectPageNumber=pageNumber;
         this.selectPage();
        
    }
  },
  mounted(){
    this.selectPage();
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
    label{
        margin-left: $bottomDistance;
        margin-right: $bottomDistance;
        border: 2px solid transparent;
        cursor: pointer;
    }
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
    margin-left: $bottomDistance;
    margin-right: $bottomDistance;
    border: 2px solid transparent;
    cursor: pointer;
}

.previousBtn{
    font-family: "iconfont";
    position: relative;
    color: $colorNormal;
    font-size: $fontNormalSize;
    transition: color $animTime;
    transform: rotateY(180deg);
    margin-left: 1%;
    margin-right: 1%; 
    border: 2px solid transparent;
    cursor: pointer;
}  

</style>