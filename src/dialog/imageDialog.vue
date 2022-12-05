<template>
   <div :class="{ imageDialog: true, hideDialog: !isShow }">
      <div class="imageInfo ">
         <a @click="closeEvent">&#xe64d;</a>
         <img :src="imgInfo.imgUrl" />
         <h3>图片名字:{{ imgInfo.imgName }} &nbsp;&nbsp;图片类型:{{ imgInfo.imgType }}&nbsp;&nbsp;图片大小:{{ imgInfo.imgSize }}</h3>
      </div>

   </div>
</template>
<script>

import agency from '../components/agency';

export default {
   name: "imageDialog",

   data() {
      return {
         isShow: false,
         imgInfo: { imgName: "", imgType: "", imgSize: 0, imgUrl: "" }
      };
   },
   methods: {
      closeEvent() {
         this.isShow = false;
      }
   },
   created() {
      agency.$on("showImage", (imgInfo) => {
         this.imgInfo = imgInfo;

         this.isShow = true;
         console.log(this.imgInfo);
      });
   },
}
</script>
<style scoped lang="scss">
@font-face {
   font-family: "iconfont";
   /* Project id 3786935 */
   src: url('../assets/icon/iconfont.woff2?t=1669123716336') format('woff2'),
      url('../assets/icon/iconfont.woff?t=1669123716336') format('woff'),
      url('../assets/icon/iconfont.ttf?t=1669123716336') format('truetype');
}

.imageDialog {
   position: fixed;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.3);
   display: flex;
   box-shadow: $boxShadow;
   right: 0;
   top: 0;
   z-index: 15;
}

.imageInfo {
   width: 45%;
   height: 65%;

   background-color: white;
   display: flex;
   flex-direction: column;
   justify-items: center;
   align-items: center;
   margin: auto;

   a {
      font-family: "iconfont";
      position: relative;
      align-self: end;
      font-size: 16px;
      cursor: pointer;
      color: white;
      background-color: $bottomBtnColor;
      border-radius: 20px;
      padding: 8px;
      margin-top: -1.5%;
      margin-right: -1.5%;
      transition: all $animTime;

   }

   a:hover {

      background-color: $colorHL;
      transform: rotate(180deg);
   }

   img {
      width: 93%;
      height: 83%;

      background-color: rgb(16, 169, 208);
      margin: auto;
   }

   h3 {
      margin-bottom: 2%;
   }
}


.hideDialog {
   display: none;
}
</style>