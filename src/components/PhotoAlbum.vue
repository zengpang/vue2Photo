<template>
  <div class="photoAlbum">
    <header><label>总共有<a>{{imageSum}}张</a>全部图片</label>
      <div class="imgSlider">单页显示数量<a>{{ pageShowNumber }}</a><input type="range" value="20" min="1" max="25"
          id="pageShowImgInput" @input="getPageShowNumber" /></div>
    </header>
    <main>
      <ImageItem v-for="item in pageShowNumber" :key="item"></ImageItem>
    </main>
    
  </div>
</template>

<script>
import ImageItem from './ImageItem'
import agency from'./agency.js'
export default {
  name: "PhotoAlbum",
  data() {
    return {
      pageShowNumber: 20,//单页显示图片
      imageSum:41 //图片总数量
    }
  },
  components: {
    ImageItem,
  },
  methods: {
    getPageShowNumber(event) {
      this.pageShowNumber = parseInt(document.getElementById("pageShowImgInput").value);
    }
  },
  watch:{
    pageShowNumber(newShowNum)
    {
    
      agency.$emit("pageNumberUpdate",{imgTotals:this.imageSum,imgShows:newShowNum});
    },
    imageSum(newSum)
    {
      
      agency.$emit("pageNumberUpdate",{imgTotals:newSum,imgShows:this.pageShowNumber});
    }
  },
  mounted(){
    agency.$emit("pageNumberUpdate",{imgTotals:this.imageSum,imgShows:this.pageShowNumber});
  }
}
</script>
<style scoped lang="scss">
.photoAlbum {
  display: flex;
 
  position: absolute;
  flex-direction: column;
  width: 96%;
  height: 95%;
  margin-top: 1%;
  margin-bottom: 1%;
  margin-left: 2%;
  margin-right: 2%;

  header {
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
   

    label {
      font-size: $fontNormalSize;
      color: $colorNormal;
      position: relative;

      a {
        font-weight: bold;
        margin-left: 10px;
        margin-right: 10px;
        color: $colorBolid;
      }
    };

    .imgSlider {
      position: absolute;
      right: 0;
      font-size: $fontNormalSize;
      color: $colorNormal;

      a {
        font-weight: bold;
        margin-left: 10px;
        margin-right: 10px;
        color: $colorBolid;
      }

      ;

      input {
        color: $colorHL
      }

      ;
    }
  }

  ;

  main {
    height: 90%;
    width: 100%;
   
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-template-rows: auto auto auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
}
</style>