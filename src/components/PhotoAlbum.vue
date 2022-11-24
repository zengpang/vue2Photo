<template>
  <div class="photoAlbum">
    <header><label>总共有<a>41张</a>全部图片</label>
      <div class="imgSlider">单页显示数量<a>{{ pageShowNumber }}</a><input type="range" value="20" min="1" max="64"
          id="pageShowImgInput" @input="getPageShowNumber" /></div>
    </header>
    <main>
      <ImageItem v-for="item in imageItems" :key="item"></ImageItem>
    </main>
  </div>
</template>

<script>
import ImageItem from './ImageItem'
export default {
  name: "PhotoAlbum",
  data() {
    return {
      imageItems: 20,
      pageShowNumber: 16
    }
  },
  components: {
    ImageItem,
  },
  methods: {
    getPageShowNumber(event) {
      //console.log("16");
      this.pageShowNumber = document.getElementById("pageShowImgInput").value;
    }
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
    }

    ;

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