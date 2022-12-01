<template>
  <div class="historyItem">
    <img src="" alt="">
    <h3>{{ imgName }}</h3>

    <div class="filekind type" ref="itemdiv"><label>12mb</label></div>

    <a>&#xe600; | <h4>图片链接</h4></a>
  </div>
</template>
<script>
import style from'../assets/style/index.scss'
console.log(style);
export default {
  props: ['imgName','imgType'],
  name: "HistoryItem",
  methods:{
   
    imgClassify(type)
    {
      let itemstyle=  this.$refs["itemdiv"].style;
      let itemlabelstyle=  this.$refs["itemdiv"].querySelector('.filekind label').style;
      console.log(this.$refs["itemdiv"].style);
      switch(type)
      {
        case("png"):{
          itemstyle.backgroundColor=style.pngBgColor;
          itemlabelstyle.color=style.pngHintColor;
          console.log("png");
        };break;
        case("jpg"):{
       
          itemstyle.backgroundColor=style.jpgBgColor;
          itemlabelstyle.color=style.jpgHintColor;
          console.log("jpg");
        };break;
        case("tga"):{
      
           
          itemstyle.backgroundColor=style.tgaBgColor;
          itemlabelstyle.color=style.tgaHintColor;
          console.log("tga");
        };break;
        default:{
   
          itemstyle.backgroundColor=style.otherBgColor;
          itemlabelstyle.color=style.otherHintColor;
          console.log("other");
        };
      }
    }
  },
  mounted(){
    this.imgClassify(this.imgType);
  }
}
</script>
<style scoped lang="scss">
$typebgColor:var();
@font-face {
  font-family: "iconfont";
  /* Project id 3786935 */
  src: url('../assets/icon/iconfont.woff2?t=1669123716336') format('woff2'),
    url('../assets/icon/iconfont.woff?t=1669123716336') format('woff'),
    url('../assets/icon/iconfont.ttf?t=1669123716336') format('truetype');
}

.historyItem {
  height: 90%;
  margin-bottom: 3%;
  background-color: $moduleBgColor;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px lightgray solid;
  

  img {
    height: 2.5vw;
    width: 2.5vw;
    margin-left: $leftDistance;
    margin-right: $leftDistance;
    background-color: aqua;
    box-shadow: $boxShadow;

  };
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
    label{
  
      margin: auto;
      z-index: 2;
    }
  } ;



  //根据图片类型的不同，item颜色也不同
  .type {
    background-color: rgba($color: $jpgHintColor, $alpha:$generalOpacity);
    label{
      color: $jpgHintColor;
    }
  }
  .jpg {
    background-color: rgba($color: $jpgHintColor, $alpha:$generalOpacity);
    label{
      color: $jpgHintColor;
    }
  }
  .png {
    background-color: rgba($color: $pngHintColor, $alpha:$generalOpacity);
    label{
      color: $pngHintColor;
    }
  }
  .tga{
    background-color: rgba($color: $tgaHintColor, $alpha:$generalOpacity);
    label{
      color: $tgaHintColor;
    }
  }
  .other{
    background-color: rgba($color:$otherHintColor, $alpha:$generalOpacity);
    label{
      color: $otherHintColor;
    }
  }
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

    }
  }

  ;

}
</style>