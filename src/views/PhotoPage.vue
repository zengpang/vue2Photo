<template>
   
  <div class="photoPage">
    
    <header>
      
      <h2>{{ pageTitle }}</h2>
      <!-- <button>选中所有</button> -->
      <div @click="selectAllBtn" v-bind:class="{selectAlled:isSelectAll}" ><input type="checkbox" ref="SelectAllBtn" value="" />选中所有</div>
      <button @click="TestDown" >下载测试</button>
    </header>
    <main>
   
      <PhotoAlbum ref="PhotoAlbum"></PhotoAlbum>
    </main>
    <footer>
      <BottomSidebar ref="BottomSidebar"></BottomSidebar>
    </footer>
  </div>
</template>
    
<script>

import BottomSidebar from '../components/BottomSidebar'
import PhotoAlbum from '../components/PhotoAlbum'
import {FileManager} from'../models'

export default {
  name: 'PhotoPage',
  data() {
    return {
      pageTitle: '首页',
      isSelectAll:false
    }
  },
  components: {
    BottomSidebar,
    PhotoAlbum
  },
  methods:{
    //选中所有按钮点击事件
    selectAllBtn()
    {
      this.isSelectAll=!this.isSelectAll;
      console.log(this.isSelectAll);
    },
    TestDown()
    {
      FileManager.download('http://lc-UQqK42CL.cn-n1.lcfile.com/bb6EBrhWrqXO5HfLdm6j6UmhrHcNGV34/Login_BackGround.jpg','Login_BackGround.jpg');
    }
  }
}
</script>
 
 <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.photoPage {
  display: flex;
  position: relative;
  left: $leftDistance;
  right: $leftDistance;
  flex-direction: column;
  top: 2%;
  width: 94%;
  height: 92%;

  header {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  
    div {
      height: 50px;
      width: 180px;
      background-color: $moduleBgColor;
      font-size: $fontNormalSize;
      border-radius: 25px;
      color: $bottomBtnColor;
      cursor: pointer;
      font-weight: bold;
      box-shadow: $boxShadow;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      transition: all $animTime;
      input[type="checkbox"]{
        transition: all $animTime;
        margin-top: 0px;
        margin-left: 0px;
        margin-bottom: 0px;
        margin-right: 8%;
        height: 16px;
        width: 16px;
        border: 2px solid $bottomBtnColor;
        border-radius: 3px;
        cursor: pointer;
        line-height: 100%;
        appearance: none;
        display: flex;
        justify-content: center;
        text-align: center;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        -o-appearance: none;
        color: transparent;
      };

      input[type="checkbox"]:checked {
        color: $colorHL;
        border-color: $moduleBgColor;
        background-color: $moduleBgColor;
      };

      input[type="checkbox"]::after {
        content: "✔";
      };
     

    }
     .selectAlled{
         background-color:$colorHL;
         color:  $moduleBgColor;
      }
  }

  ;

  main {
    display: flex;
    position: relative;
    margin-top: $appMainDistance;
    width: 100%;
    height: 86%;

    background-color: $appBgGrayColor;
    border-radius: 6px;

    box-shadow: $boxShadow;
  }

  ;

  footer {
    display: flex;
    width: 100%;
  }

}
</style>
 