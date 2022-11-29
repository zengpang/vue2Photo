<template>
    <div class="imageItem" @click="imgitemBtn">
        <h3>图片</h3>
    </div>
</template>

<script>
export default {
    name: "ImageItem",
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
    h3{
        display: inline;
        margin: auto;
    }
}
</style>