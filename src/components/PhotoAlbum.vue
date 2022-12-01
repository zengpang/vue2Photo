<template>
  <div class="photoAlbum">
    <header><label>总共有<a>{{ imageSum }}张</a>全部图片</label>
      <div class="imgSlider">单页显示数量<a>{{ pageShowNumber }}</a><input type="range" value="20" min="4" max="25"
          id="pageShowImgInput" @input="getPageShowNumber" /></div>
    </header>
    <main :style="imgTableStr">
      <ImageItem v-for="item in pageNowNumber" :key="item"></ImageItem>
    </main>

  </div>
</template>

<script>
import ImageItem from './ImageItem'
import agency from './agency.js'

export default {
  name: "PhotoAlbum",
  data() {
    return {
      pageShowNumber: 20,//单页显示图片数量
      pageNowNumber:20,//当前单页显示图片数量
      imageSum: 41, //图片总数量
      imgTableCol: 5,//列
      imgTableRow: 4,//行
      imgTableStr: 'grid-template-columns:auto auto auto auto auto;grid-template-rows: auto auto auto auto;'
    }
  },
  components: {
    ImageItem,
  },
  methods: {
    //获取当前单页显示图片数量
    getpageNowNumer(){
      let selectNumber=0;
      agency.$emit("getSelectNumber",val=>{
        selectNumber=val;
      });
      console.log(selectNumber);
      // let selectNumber= this.$refs["BottomSidebar"].selectPageNumber;
      let nowNumber=this.imageSum- (selectNumber-1)*this.pageShowNumber;
      nowNumber=nowNumber>=this.pageShowNumber?this.pageShowNumber:nowNumber;
      this.pageNowNumber=nowNumber;
    },
    //获取单页显示图片数量
    getPageShowNumber(event) {
      this.pageShowNumber=parseInt(document.getElementById("pageShowImgInput").value);
     // this.pageNowNumber = parseInt(document.getElementById("pageShowImgInput").value);
      this.getpageNowNumer();
      switch (true) {
        case (this.pageNowNumber <= ((this.imgTableCol - 1) * this.imgTableRow)): {
          this.imgTableRow = Math.floor(Math.sqrt(this.pageNowNumber));
        }; break;
        case (this.pageNowNumber >= ((this.imgTableCol + 1) * this.imgTableRow)): {
          this.imgTableRow = Math.floor(Math.sqrt(this.pageNowNumber));
        }; break;
      }


    },
    //读取图片
    loadimg() {
      console.log("正在获取图片");

    },
    //获取图片
    async getimg() {
     
      await new Promise(() => {

      })
    }
  },
  watch: {
    imgTableRow(newRow) {
      console.log(newRow);
      this.imgTableCol = newRow + 1;
      let imgTableColStr = 'grid-template-columns:';
      let imgTableRowStr = 'grid-template-rows:';
      for (let index = 0; index < this.imgTableCol; index++) {
        imgTableColStr += "auto ";
      }
      for (let index = 0; index < newRow; index++) {
        imgTableRowStr += "auto ";
      }

      this.imgTableStr = imgTableColStr + ";" + imgTableRowStr;
    },
    pageShowNumber(newShowNum) {

      agency.$emit("pageNumberUpdate", { imgTotals: this.imageSum, imgShows: newShowNum });
    },
    imageSum(newSum) {

      agency.$emit("pageNumberUpdate", { imgTotals: newSum, imgShows: this.pageNowNumber });
    }
  },
  created() {
    agency.$on("pageNumberChange", ()=>{this.getpageNowNumer()});
  },
  mounted() {
    agency.$emit("pageNumberUpdate", { imgTotals: this.imageSum, imgShows: this.pageNowNumber });

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
    transition: all $animTime;
    display: grid;
    // grid-template-columns: auto auto auto auto auto;
    // grid-template-rows: auto auto auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
}
</style>