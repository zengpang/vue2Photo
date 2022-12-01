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
                    :imgName="uploaditem.imgName" :imgType="uploaditem.imgType"></HistoryItem>
            </main>

        </main>
        <aside class="sidebar">
            <header>
                <h2>统计信息</h2>
                <HisotyChart></HisotyChart>
            </header>
            <main>
               <div class="fileKindInfo">1</div>
               <div class="fileKindInfo">2</div>
               <div class="fileKindInfo">3</div>
               <div class="fileKindInfo">4</div>
            </main>
        </aside>
    </div>
</template>
<script>
import HistorySearch from '../components/HistorySearch';
import HistoryItem from '../components/HistoryItem';
import HisotyChart from '../components/HisotyChart.vue';
export default {
    name: "UploadHistoryPage",
    data() {
        return {
            pageTitle: "上传历史",
            uploadHistorys: [{ imgName: "图片名字.png",imgType:'png', imgSize: "513KB" }, { imgName: "图片名字2.png",imgType:'png', imgSize: "513KB" }, { imgName: "图片名字3.jpg",imgType:'jpg', imgSize: "513KB" }, { imgName: "图片名字3",imgType:'png', imgSize: "513KB" }, { imgName: "图片名字3",imgType:'tga', imgSize: "513KB" }, { imgName: "图片名字3",imgType:'other', imgSize: "513KB" }]
        }
    },
    components: {
        HistorySearch,
        HistoryItem,
        HisotyChart
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
        };
        main {
            height: 53%;
            width: 100%;
            margin-bottom:2% ;
            display: grid;
            grid-template-rows: auto auto;
            grid-template-columns: auto auto;
            background-color:$appBgGrayColor;
            grid-column-gap: 3px;
            grid-row-gap: 3px;
            .fileKindInfo{
                background-color: $moduleBgColor;
                border-radius: 6px;
            }
        }
    }

    .mainContent {
        height: 100%;
        width: $appMainWidth;
        position: relative;

        h2 {
            height: 20%;
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
            
        }

        ;
    }




}
</style>