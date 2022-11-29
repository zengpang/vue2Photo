<template>
  <div class="photoPage">
    <header>
      <h2>{{ pageTitle }}</h2>
      <button>选中所有</button>
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
export default {
  name: 'HelloWorld',
  data() {
    return {
      pageTitle: '首页',
    }
  },
  components: {
    BottomSidebar,
    PhotoAlbum
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
    button {
      height: 60%;
      width: 13%;
      background-color: $moduleBgColor;
      font-size: $fontNormalSize;
      border-radius: 25px;
      color: $bottomBtnColor;
      border: 0px;
      font-weight: bold;
      box-shadow: $boxShadow;
    }
  } ;
  main {
    display: flex;
    position: relative;
    margin-top: $appMainDistance;
    width: 100%;
    height: 86%;

    background-color: $appBgGrayColor;
    border-radius: 6px;

    box-shadow: $boxShadow;
  } ;
  footer {
    display: flex;
    width: 100%;
  }

}
</style>
 