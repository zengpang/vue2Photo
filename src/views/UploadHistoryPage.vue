<template>
    <div class="uploadHistoryPage">


        <main class="mainContent">
            <header>
                <h2>{{ pageTitle }}</h2>
                <HistorySearch></HistorySearch>
            </header>
            <main>
                <h2>已上传文件</h2>
                <HistoryItem v-for="(uploaditem, uploadindex) in uploadHistorys" :key="uploadindex"
                    :imgName="uploaditem.imgName" :imgType="uploaditem.imgType" :imgUrl="uploaditem.imgUrl"
                    :imgSize="uploaditem.imgSize"></HistoryItem>
            </main>

        </main>
        <aside class="sidebar">
            <header>
                <h2>统计信息</h2>
                <HisotyChart ref="hisotychart" ></HisotyChart>
            </header>
            <main>
                <FlieKindInfo v-for="(item, index) in kindInfoList" :imgsInfo="{imgType:item.imgType,kindSize:imgTypeSize[item.imgType]}" :key="'KindInfo' + index">
                </FlieKindInfo>
            </main>
        </aside>
    </div>
</template>
<script>
import globalVariable from '../global/globalVariable';
import HistorySearch from '../components/HistorySearch';
import HistoryItem from '../components/HistoryItem';
import HisotyChart from '../components/HisotyChart.vue';
import { DataDispose } from '../models';
import FlieKindInfo from '../components/FlieKindInfo.vue';
import agency from '../components/agency';

// const mb=1048576;
export default {
    name: "UploadHistoryPage",
    data() {
        return {
            pageTitle: "上传历史",
            //{ imgName: "图片名字.png",imgType:'png', imgSize: "513KB" }, { imgName: "图片名字2.png",imgType:'png', imgSize: "513KB" }, { imgName: "图片名字3.jpg",imgType:'jpg', imgSize: "513KB" }, { imgName: "图片名字3",imgType:'png', imgSize: "513KB" }, { imgName: "图片名字3",imgType:'tga', imgSize: "513KB" }, { imgName: "图片名字3",imgType:'other', imgSize: "513KB" },{ imgName: "图片名字4",imgType:'other', imgSize: "513KB" },{ imgName: "图片名字4",imgType:'other', imgSize: "513KB" }
            uploadHistorys: [],
            kindInfoList: [],
            imgTypeSize: {png: 1, jpeg: 1, tga: 0, other: 0 }
        }
    },
    components: {
        HistorySearch,
        HistoryItem,
        HisotyChart,
        FlieKindInfo
    },
    methods: {
        chartUpdate()
        {
            console.log("更新3D饼图"+this.imgTypeSize.png);
            return this.imgTypeSize;
        },
        kindInfoInit(imgTypeList) {
            imgTypeList.forEach(imgsInfo => {
                let kindSize = 0;
                imgsInfo.imgList.forEach(element => {
                    kindSize += parseFloat(element.imgSize);
                });
                this.imgTypeSize[imgsInfo.imgType]=kindSize;
                
                // switch (imgsInfo.imgType) {
                //     case ("image/png"): {
                //        this.imgTypeSize.pngSize=kindSize;
                //     }; break;
                //     case ("image/jpeg"): {
                //         this.imgTypeSize.jpgSize=kindSize;
                //     }; break;
                //     case ("image/x-tga"): {
                //         this.imgTypeSize.tgaSize=kindSize;
                //     }; break;
                //     default: {
                //         this.imgTypeSize.otherSize=kindSize;
                //     };
                // }
            })



        }
    },
    mounted() {
        globalVariable.imgTypeList = DataDispose.imgTypeClassify(globalVariable.imgList);
        this.uploadHistorys = DataDispose.imgDatainits(globalVariable.imgList);
        this.kindInfoList = globalVariable.imgTypeList;
        this.kindInfoInit(globalVariable.imgTypeList);
        agency.$emit("updateChart",this.imgTypeSize);
       
    },
    watch:
    {
       
    }
}
</script>
<style scoped lang="scss">
$appMainWidth: 60%;
$appSidebarWidth: 38%;

.uploadHistoryPage {
    display: flex;
    position: relative;
    left: $leftDistance;
    right: $leftDistance;
    flex-direction: row;
    top: 2%;
    width: 94%;
    height: 92%;

    .sidebar {
        height: 97.5%;
        width: $appSidebarWidth;
        padding-left: 1%;
        padding-right: 1%;
        padding-top: 1%;
        border-radius: 6px;
        margin-left: 1%;
        margin-bottom: 1%;
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: $appBgGrayColor;
        box-shadow: $boxShadow;

        header {
            height: 45%;
            width: 96%;
            display: flex;
            flex-direction: column;

            h2 {
                height: 9.5%;
            }

            background-color: $moduleBgColor;
            padding-left: 2%;
            padding-right: 2%;
        }

        ;

        main {
            height: 53%;
            width: 100%;
            margin-bottom: 2%;
            display: grid;
            grid-template-rows: auto auto;
            grid-template-columns: auto auto;
            background-color: $appBgGrayColor;
            grid-column-gap: 3px;
            grid-row-gap: 3px;


        }
    }

    .mainContent {
        height: 100%;
        width: $appMainWidth;
        position: relative;

        h2 {
            height: 20%;
            position: sticky;
            background-color: $appBgGrayColor;
            top: 0;
        }

        header {
            background-color: $appBgGrayColor;
            width: 94%;
            padding-left: $leftDistance;
            padding-right: $leftDistance;

            display: flex;
            height: 14%;
            flex-direction: column;
            border-radius: 6px;
            box-shadow: $boxShadow;
        }

        main {
            display: flex;
            position: relative;
            margin-top: 5px;
            width: 94%;
            padding-left: $leftDistance;
            padding-right: $leftDistance;
            flex-direction: column;
            height: 84%;
            background-color: $appBgGrayColor;
            border-radius: 6px;
            box-shadow: $boxShadow;
            overflow-y: scroll;

        }

        ;
    }




}
</style>