<template>
  <div class="photoPage">
    <header>
      <h2>{{ pageTitle }}</h2>
    </header>
    <main>
      <PhotoAlbum></PhotoAlbum>
    </main>
    <footer>
      <BottomSidebar></BottomSidebar>
    </footer>
  </div>
</template>
    
<script>
import BottomSidebar from './BottomSidebar'
import PhotoAlbum from './PhotoAlbum.vue'
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
    flex-direction: column;
  }

  ;

  main {
    display: flex;
    position: relative;
    margin-top: $appMainDistance;
    width: 100%;
    height: 86%;
  
    background-color: $moduleBgColor;
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
 