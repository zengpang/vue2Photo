<template>
    <div class="uploadHistoryPage">

        
        <main class="mainContent">
            <header>
                <h2>{{ pageTitle }}</h2>
            </header>
            <main>

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
export default {
    name: "UploadHistoryPage",
    data() {
        return {
            pageTitle: "上传历史"
        }
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
    border: 1px red solid;
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
            width: 100%;
            border: 1px rgb(12, 183, 199) solid;
            display: flex;
            height: 17.5%;
            flex-direction: column;
            border-radius: 6px;
            box-shadow: $boxShadow;
        }

        main {
            display: flex;
            position: relative;
            margin-top: 5px;
            width: 100%;

            height: 80%;
            border: 1px rgb(197, 13, 163) solid;
            background-color: $appBgGrayColor;
            border-radius: 6px;

            box-shadow: $boxShadow;
        }

        ;
    }


   

}
</style>