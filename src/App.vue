<template>
  <div id="app">
    <HeaderTab></HeaderTab>
    <router-view/>
    
  </div>
</template>

<script>
import HeaderTab from './components/HeaderTab'
import PhotoPage from './views/PhotoPage'
export default {
  name: 'App',
  components: {
    HeaderTab,
    PhotoPage
  }
}
</script>

<style scoped lang="scss">
#app {
  margin: 0px;
  top: 3%;
  left: 10%;
  right: 10%;
  width: 80%;
  height: 95%;
  background-color: $appBgColor;
  float: left;
  position: absolute;
  border-radius: 1%;
  box-shadow: $boxShadow;
  
}

</style>
