<template>
    <div class="uploadHistoryPage">

        
        <main class="mainContent">
            <header>
                <h2>{{ pageTitle }}</h2>
            </header>
            <main>
                <h2>已上传文件</h2>
               <HistoryItem v-for="uploaditem in uploadHistorys" :key="uploaditem" :imgName="uploaditem.imgName"></HistoryItem>
            </main>
            <footer>
                
            </footer>
        </main>
        <aside class="sidebar">
            <header>

            </header>
            <main>
            
            </main>
        </aside>
    </div>
</template>
<script>
import HistoryItem from '../components/HistoryItem.vue';
export default {
    name: "UploadHistoryPage",
    data() {
        return {
            pageTitle: "上传历史",
            uploadHistorys:[{imgName:"图片名字1",imgSize:"513KB"},{imgName:"图片名字2",imgSize:"513KB"},{imgName:"图片名字3",imgSize:"513KB"},{imgName:"图片名字3",imgSize:"513KB"},{imgName:"图片名字3",imgSize:"513KB"},{imgName:"图片名字3",imgSize:"513KB"}]
        }
    },
    components:{
        HistoryItem
    }
}
</script>
<style scoped lang="scss">
$appMainWidth: 60%;
$appSidebarWidth: 39%;

.uploadHistoryPage {
    display: flex;
    position: relative;
    left: $leftDistance;
    right: $leftDistance;
    flex-direction: row;
 
    top: 2%;
    width: 94%;
    height: 92%;

    
    .sidebar{
        height: 98.5%;
        width:$appSidebarWidth;
        border-radius: 6px;
        margin-left: 1%;
        margin-bottom: 1%;
        position: relative;
        background-color: $appBgGrayColor;
        box-shadow: $boxShadow;
    }
    .mainContent {
        height: 100%;
        width: $appMainWidth;
        position: relative;
        header {
            background-color: $appBgGrayColor;
            width: 94%;
            padding-left:  $leftDistance;
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
            padding-left:  $leftDistance;
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