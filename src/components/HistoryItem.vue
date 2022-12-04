<template>
  <div class="historyItem">
    <img @click="imgBtn" :src="imgUrl" alt="">
    <h3>{{ imgName }}</h3>

    <div class="filekind type" ref="itemdiv"><label>{{ imgSize }}</label></div>

    <a>&#xe600; | <h4 @click="linkBtn">图片链接</h4></a>
  </div>
</template>
<script>

import style from '../assets/style/index.scss'
import agency from './agency';

console.log(style);
export default {
  props: ['imgName', 'imgType', 'imgSize', 'imgUrl'],
  name: "HistoryItem",
  methods: {
    imgClassify(type) {
      let itemstyle = this.$refs["itemdiv"].style;
      let itemlabelstyle = this.$refs["itemdiv"].querySelector('.filekind label').style;
      
      switch (type) {
        case ("image/png"): {
          itemstyle.backgroundColor = style.pngBgColor;
          itemlabelstyle.color = style.pngHintColor;
          console.log("png");
        }; break;
        case ("image/jpeg"): {
          itemstyle.backgroundColor = style.jpgBgColor;
          itemlabelstyle.color = style.jpgHintColor;
          console.log("jpg");
        }; break;
        case ("image/x-tga"): {
          itemstyle.backgroundColor = style.tgaBgColor;
          itemlabelstyle.color = style.tgaHintColor;
          console.log("tga");
        }; break;
        default: {
          itemstyle.backgroundColor = style.otherBgColor;
          itemlabelstyle.color = style.otherHintColor;
          console.log("other");
        };
      }
    },
    linkBtn() {
      alert(this.imgUrl);
    },
    imgBtn() {
      console.log("图片被点击");
      let imgInfo={imgName:this.imgName, imgType:this.imgType, imgSize:this.imgSize, imgUrl:this.imgUrl}
      agency.$emit("showImage", (imgInfo));
    }
  },
  mounted() {
    this.imgClassify(this.imgType);
  }
}
</script>
<style scoped lang="scss">
$typebgColor: var();

@font-face {
  font-family: "iconfont";
  /* Project id 3786935 */
  src: url('../assets/icon/iconfont.woff2?t=1669123716336') format('woff2'),
    url('../assets/icon/iconfont.woff?t=1669123716336') format('woff'),
    url('../assets/icon/iconfont.ttf?t=1669123716336') format('truetype');
}

.historyItem {
  // height: 8%;
  margin-bottom: 3%;

  background-color: $moduleBgColor;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px lightgray solid;

  h3 {
    overflow: hidden;
    width: 21%;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ;

  img {
    height: 2.5vw;
    width: 2.5vw;
    margin-left: $leftDistance;
    margin-right: $leftDistance;
    background-color: aqua;
    box-shadow: $boxShadow;
    cursor: pointer;
  }

  ;

  .filekind {
    border-radius: 30px;
    padding-top: 1%;
    padding-bottom: 1%;
    justify-self: center;
    align-self: center;
    position: absolute;
    width: 8%;
    height: 3%;
    margin: auto;
    left: 43%;
    display: flex;
    justify-items: center;
    align-items: center;
    z-index: 1;

    label {

      margin: auto;
      z-index: 2;

    }
  }

  ;





  a {
    font-family: "iconfont";
    position: absolute;
    right: 6%;
    white-space: pre;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: lightgray;

    h4 {
      color: $colorBolid;
      cursor: pointer;
    }
  }

  ;

}
</style>