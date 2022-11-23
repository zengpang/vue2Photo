<template>
    <div class="appInfoPage">
        <header>
            <h2>{{ pageTitle }}</h2>
        </header>
        <main>
          1231
        </main>
        <footer>

        </footer>
    </div>
</template>
<script>
   export default{
     name:"AppInfoPage",
     data(){
        return{
            pageTitle:"应用信息"
        }
     },
     mounted(){
        console.log("appinfo挂载");
     }
   }
</script>
<style scoped lang="scss">
.appInfoPage {
  display: flex;
  position: relative;
  left: $leftDistance;
  right: $leftDistance;
  flex-direction: column;
  border: 1px red solid;
  top: 2%;
  width: 94%;
  height: 92%;

  header {
    display: flex;
    border: 1px rgb(12, 183, 199) solid;
    width: 100%;
    flex-direction: column;
  }

  ;

  main {
    display: flex;
    position: relative;
    margin-top: $appMainDistance;
    width: 100%;
    height: 80%;
    border: 1px rgb(197, 13, 163) solid;
    background-color: $moduleBgColor;
    border-radius: 6px;

    box-shadow: $boxShadow;
  }

  ;

  footer {
    display: flex;
    width: 100%;
    border: 1px rgb(12, 195, 85) solid;
  }

}
</style>