<template>
    <div v-bind:class="{ loadingDialog: true, hideDialog: !isLoading }">
        <div id="loadingGif" ref="loadingGif">
            <a>正在加载</a>
        </div>
    </div>
</template>
<script>
import agency from '../components/agency';
import lottie from 'lottie-web';
import loadingJson from '../assets/animJson/blueloadingGif.json'
export default {
    // props: ['isLoading'],
    name: "LoadingDialog",
    data(){
      return{
        isLoading:false
      };
    },
    created(){
        agency.$on("loadStatusChange", (isLoading) => {
            this.isLoading = isLoading;
        });
    },
    mounted() {

        lottie.loadAnimation({//初始化
            container: this.$refs["loadingGif"],
            renderer: 'svg',
            loop: true,
            autoplay: true,

            animationData: loadingJson,
        });
        document.getElementsByTagName("svg")[0].setAttribute("viewBox", "140 60 500 500");
        //注册事件
        
    }
}

</script>
<style scoped lang="scss">
.loadingDialog {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: flex;

    right: 0;
    top: 0;
    z-index: 99;
}

#loadingGif {
    width: 100px;
    height: 100px;
    border-radius: 25px;
    background-color: white;
    margin: auto;
    display: flex;
    flex-direction: column;

    a {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: 38px;
        font-size: $fontNormalSize;
        color: $bottomBtnColor;
        font-weight: bold;
        transform: translate(-50%, -50%);
        text-align: center;

    }
}

.hideDialog {
    display: none;
}
</style>