<template>
    <div class="imageItem" @click="imgitemBtn">
        <img  :src="imgUrl"/>
    </div>
</template>

<script>
export default {
    name: "ImageItem",
    props:['imgUrl'],
    methods:{
        imgitemBtn()
        {
            console.log("图片被点击");
        }
    }
    
}

</script>
<style scoped lang="scss">
.imageItem {
    background-color: burlywood;
    display: flex;
    cursor: pointer;
    img{
        display: inline;
        margin: auto;
        height: 100%;
        width: 100%;
    }
}
</style>