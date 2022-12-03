<template>
  <div class="photoAlbum">
    <header><label>总共有<a>{{ imageSum }}张</a>全部图片</label>
      <div class="imgSlider">单页最大显示数量<a>{{ pageShowNumber }}</a><input type="range" value="4" min="4" max="25"
          id="pageShowImgInput" @input="getPageShowNumber" step="1" /></div>
    </header>
    <main :style="imgTableStr">
      <!-- :imgUrl="imgList[(item - 1)].attributes.url.attributes.url" -->
      <ImageItem v-for="item in pageNowNumber" :imgInfo="ImgInfoValue(item)" :key="item" :data="selectPage">
      </ImageItem>
    </main>
    <!-- <button @click="Testclick">测试</button> -->

  </div>
</template>

<script>
import ImageItem from './ImageItem'
import agency from './agency.js'
import { FileManager } from '../models'
import globalVariable from '../global/globalVariable';
import { DataDispose } from '../models';
export default {
  name: "PhotoAlbum",
  data() {
    return {
      pageShowNumber: 4,//当前单页可显示图片数量的最大值
      pageNowNumber: 20,//单页显示图片数量

      selectPage: globalVariable.selectPage,
      imageSum: 1, //图片总数量
      imgTableCol: 3,//列
      imgTableRow: 2,//行
      imgTableStr: 'grid-template-columns:1fr 1fr 1fr;grid-template-rows: 1fr 1fr;',
      imgList: [],
    }
  },
  components: {
    ImageItem,
  },
  methods: {
    Testclick() {
      this.pageShowNumber = 9;
      this.pageShowNumberUpdate();
    },
    ImgInfoValue(itemNumber) {

      itemNumber = itemNumber - 1 + (globalVariable.selectPage - 1) * this.pageShowNumber;
      itemNumber = itemNumber >= (this.imgList.length - 1) ? this.imgList.length - 1 : itemNumber;
    
      let itemInfo = this.imgList[itemNumber];
      let imgInfo={imgName:"",imgType:"",imgSize:0,imgUrl:""};
     
      try {
        
         imgInfo=DataDispose.imgDatainit(itemInfo);
      } catch (error) {

      }
      return imgInfo;
    },
   
    //获取当前单页显示图片数量
    getpageNowNumer() {
      //this.getSelectNumber();
      let selectNumber = globalVariable.selectPage;
      this.selectPage=globalVariable.selectPage;
      console.log(this.selectPage);
      // let selectNumber= this.$refs["BottomSidebar"].selectPageNumber;
      let nowNumber = this.imageSum - (selectNumber - 1) * this.pageShowNumber;
      nowNumber = nowNumber >= this.pageShowNumber ? this.pageShowNumber : nowNumber;
      
      if (nowNumber < 0) {
        console.log(globalVariable.selectPage);
        nowNumber = this.imageSum % this.pageShowNumber;;
      }
      console.log("切换页面中"+nowNumber);
      this.pageNowNumber = nowNumber;
    },
    pageShowNumberUpdate() {
      this.getpageNowNumer();
      switch (true) {
        case (this.pageShowNumber <= ((this.imgTableCol - 1) * this.imgTableRow)): {
         
          this.imgTableRow = Math.ceil(Math.sqrt(this.pageShowNumber));
       
          console.log(this.imgTableRow+"行");
        }; break;
        case (this.pageShowNumber >= ((this.imgTableCol ) * this.imgTableRow)): {
          this.imgTableRow = Math.ceil(Math.sqrt(this.pageShowNumber));
          // if(this.pageShowNumber==5)
          // {
          //   this.imgTableRow =2;
          // }
          console.log(this.imgTableRow+"行");
        }; break;
      }
      console.log(this.imgTableRow+"行");
    },
    //获取单页显示图片数量
    getPageShowNumber(event) {


      this.pageShowNumber = parseInt(document.getElementById("pageShowImgInput").value);
      agency.$emit("pageNumberUpdate", { imgTotals: this.imageSum, imgShows: this.pageNowNumber });
      // console.log(this.pageShowNumber);
      this.pageShowNumberUpdate();



    },
    append(newList) {
      this.imgList = this.imgList.concat(newList);
    },
    //读取图片
    loadimg() {
      console.log("正在获取图片");
      let isLoading = true;
      agency.$emit("loadStatusChange", isLoading);
      FileManager.findAll()
        .then(newList => {
          this.imgList = newList;
          globalVariable.imgList=newList;
        }).catch(error => {
          console.log("获取图片失败");
        }).finally(() => {
          console.log("正在图片获取完成");
          isLoading = false;
          agency.$emit("loadStatusChange", isLoading);
          this.imageSum = this.imgList.length;
          //this.getPageShowNumber();
          //this.pageShowNumber=this.imageSum;
          this.pageShowNumberUpdate();
          agency.$emit("pageNumberUpdate", { imgTotals: this.imageSum, imgShows: this.pageShowNumber });
          console.log(this.imgList);
        })
      // FileManager.find({ page: this.selectNumber, limit: this.pageShowNumber })
      //   .then(newList => {
      //     // 1,2,3,4,5,6
      //     // if(this.pageoldNumber==this.pageNowNumber)
      //     // {

      //     // }
      //     this.append(newList);
      //     this.selectNumber++;
      //   }).catch(error => {
      //     console.log("获取图片失败");
      //   }).finally(() => {
      //     console.log("正在图片获取完成");
      //     isLoading = false;
      //     agency.$emit("loadStatusChange", isLoading);
      //     this.imageSum = this.imgList.length;
      //     //this.getPageShowNumber();
      //     //this.pageShowNumber=this.imageSum;
      //     this.pageShowNumberUpdate();
      //     agency.$emit("pageNumberUpdate", { imgTotals: this.imageSum, imgShows: this.pageShowNumber });
      //     console.log(this.imgList);
      //   })

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
      let imgTableColStr = `grid-template-columns:`;
      let imgTableRowStr = `grid-template-rows:`;
      for (let index = 0; index < this.imgTableCol; index++) {
        imgTableColStr += "1fr ";
      }
      for (let index = 0; index < newRow; index++) {
        imgTableRowStr += "1fr ";
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
    agency.$on("pageNumberChange", () => { this.getpageNowNumer(); });
  },
  mounted() {

    this.loadimg();

    //this.getpageNowNumer();
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
 
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
}
</style>