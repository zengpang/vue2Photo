<template>
    <div class="imageItem" @click="imgitemBtn">
        <img  :src="imgInfo.imgUrl"/>
    </div>
</template>

<script>
import agency from './agency';


export default {
    name: "ImageItem",
    props:['imgInfo'],
    data(){
        return{
         
            img:this.imgInfo
        }
    },
    methods:{
        imgitemBtn()
        {
            console.log("图片被点击");
            agency.$emit("showImage", (this.imgInfo));
            
        }
    }
    
}

</script>
<style scoped lang="scss">
.imageItem {
    background-color: burlywood;
    display: flex;
    cursor: pointer;
    overflow: hidden;
    img{
        display: inline;
        margin: auto;
        height: 100%;
        width: 100%;
       
    }
}
</style>