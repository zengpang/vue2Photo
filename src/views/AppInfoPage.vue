<template>
    <div class="appInfoPage">
        <header>
            <h2>{{ pageTitle }}</h2>
        </header>
        <main>
           <div id="authorGif" ref="authorGif">

           </div>
           <a>开发者:王千峻(昵称:曾胖)</a> 
           <a>邮箱地址:2516629927@qq.com</a>
           <a target="_blank" href="https://github.com/zengpang/vue2Photo">工程地址:https://github.com/zengpang/vue2Photo</a>
           <a target="_blank" href="https://zengpang.github.io/vue2PhotoDemo/#/home">预览地址(github):https://zengpang.github.io/vue2PhotoDemo/#/home</a>
           <a target="_blank" href="https://zengpang.github.io/vue2PhotoDemo/#/home">预览地址(github):https://zengpang.github.io/vue2PhotoDemo/#/home</a>
        </main>
        <footer>
           
        </footer>
    </div>
</template>
<script>
   import lottie from 'lottie-web';
   import authorJson from '../assets/animJson/authorGif.json'
   export default{
     name:"AppInfoPage",
     data(){
        return{
            pageTitle:"应用信息"
        }
     },
     mounted(){
          lottie.loadAnimation({//初始化
            container: this.$refs["authorGif"],
            renderer: 'svg',
            loop: true,
            autoplay: true,

            animationData: authorJson,
        });
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
 
  top: 2%;
  width: 94%;
  height: 92%;

  header {
    display: flex;
    width: 100%;
    flex-direction: column;
  } ;

  main {
    display: flex;
    position: relative;
    margin-top: $appMainDistance;
    width: 100%;
    height: 87%;
    flex-direction: column;
   
    align-items: center;
    background-color: $appBgGrayColor;
    border-radius: 6px;

    box-shadow: $boxShadow;
    #authorGif{
      width: 40%;
      height: 40%;
      margin-top: 5%;
    }
    a{
      margin-top: 1%;
      font-size: 16px;
      font-weight: bold;
      color: $bottomBtnColor;
    }
  }

  ;
  
  footer {
    display: flex;
    width: 100%;

  }

}
</style>