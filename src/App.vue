<template>
  <div id="app">
    <LoadingDialog ref="LoadingDialog" ></LoadingDialog>
    <HeaderTab></HeaderTab>
    <router-view />
    <!-- <HisotyChartVue></HisotyChartVue> -->
  </div>
</template>

<script>
import LoadingDialog from './dialog/loadingDialog.vue'
import HeaderTab from './components/HeaderTab'
import PhotoPage from './views/PhotoPage'
import agency from './components/agency'
import HisotyChartVue from './components/HisotyChart.vue'
export default {
  name: 'App',
  components: {
    HeaderTab,
    PhotoPage,
    LoadingDialog
  },
  created() {
    
    //判断链接是否为首页，如果不是则重置为首页
    if (this.$route.path !== "/home") {
      this.$router.replace("/home")
      console.log(this.$route);
    }
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
