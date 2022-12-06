<template>
    <div class="imageItem">
        <input type="checkbox" @input="addDLEvent($event)" :checked="selectEvent(isSelected)" name="" id="">
        <img :src="imgSrcEvent(imgInfo.imgUrl)" @click="imgitemBtn" />
    </div>
</template>

<script>
import agency from './agency';
import globalVariable from '../global/globalVariable'
import { DataDispose } from '../models';
export default {
    name: "ImageItem",
    props: ['imgInfo'],
    data() {
        return {

            url: this.imgInfo.imgUrl,
            isSelected: false,

        }
    },
    methods: {
        imgSrcEvent(imgUrl) {

            // this.isSelected=false;
            // globalVariable.dLList.forEach(element => {
            //     if (element != null) {
            //         if ( element.imgUrl == imgUrl) {
            //             this.isSelected = true;
            //             console.log("匹配成功");
            //             return;
            //         }
            //         // else
            //         // {
            //         //     this.isSelected=false;
            //         // }
            //     }


            // })
            this.url=imgUrl;
            return imgUrl;
        },
        selectEvent(boolVaule) {
            console.log(boolVaule);
            return boolVaule;
        },
        imgitemBtn() {
            console.log("图片被点击");
            agency.$emit("showImage", (this.imgInfo));

        },
        addDLEvent(event) {

            this.isSelected = !this.isSelected;
            
            if (this.isSelected) {
                let dlInfo = { imgName: this.imgInfo.imgName, imgUrl: this.imgInfo.imgUrl };
                globalVariable.dLList.push(dlInfo);
                if(DataDispose.urlnonNullNums().length>=globalVariable.totalImgSum)
                {
                    agency.$emit("selectChange",true);
                }
            }
            else {

                if (globalVariable.dLList.length <= 0) {
                    return;
                }
                agency.$emit("selectChange",false);
                for (let index = 0; index < globalVariable.dLList.length; index++) {

                    if (globalVariable.dLList[index] != null) {

                        if (globalVariable.dLList[index].imgUrl == this.imgInfo.imgUrl) {
                            delete globalVariable.dLList[index];

                            return;
                        }
                    }

                }
            }

        }
    },
    watch: {
        isSelected(newValue) {
            // if (newValue && !globalVariable.isMustSelect) {
            //     let dlInfo = { imgName: this.imgInfo.imgName, imgUrl: this.imgInfo.imgUrl };
            //     globalVariable.dLList.push(dlInfo);


            // }
            // else if (!newValue) {
            //     for (let index = 0; index < globalVariable.dLList.length; index++) {

            //         if (globalVariable.dLList[index] != null) {

            //             if (globalVariable.dLList[index].imgUrl == this.imgInfo.imgUrl) {
            //                 delete globalVariable.dLList[index];

            //                 return;
            //             }
            //         }

            //     }
            //     console.log(globalVariable.dLList);
            // }
            console.log("isSelected正在变化");
        },
        url(newUrl)
        {
            this.isSelected = false;
            globalVariable.dLList.forEach(element => {
                if (element != null) {
                    if (element.imgUrl == newUrl) {
                        this.isSelected = true;
                        console.log(element.imgUrl+" "+newUrl);
                        console.log("匹配成功");
                        return;
                    }

                }
            }
            )
        }
    },
    created() {
        agency.$on("selectUpdate", (selectStatus) => {
            this.isSelected = selectStatus;
        });
      
        // globalVariable.dLList.forEach(element => {
        //         if (element != null) {
        //             if ( element.imgUrl == imgInfo.imgUrl) {
        //                 imgInfo.imgSelected = true;

        //                 return;
        //             }

        //         }
        //       }
        //     )
    },
    mounted() {
        this.isSelected = false;
            globalVariable.dLList.forEach(element => {
                if (element != null) {
                    if (element.imgUrl == this.url) {
                        this.isSelected = true;
                        console.log(element.imgUrl+" "+this.url);
                        console.log("匹配成功");
                        return;
                    }

                }
            }
            )
    }

}

</script>
<style scoped lang="scss">
.imageItem {
    background-color: burlywood;
    display: flex;

    overflow: hidden;

    input {
        position: absolute;
        width: 2%;
        height: 4%;
        cursor: pointer;
    }

    img {
        display: inline;
        margin: auto;
        height: 100%;
        width: 100%;
        cursor: pointer;

    }
}
</style>