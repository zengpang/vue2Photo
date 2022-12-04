<template>
    <div :class="{ SearchDialog: true, hideDialog: !isShow }">
        <div class="SearchInfo ">
            <a @click="closeBtn">&#xe64d;</a>
            <h2>搜索结果</h2>
            <div class="SearchResult">
                <HistoryItem v-for="(uploaditem, uploadindex) in searchList" :key="uploadindex"
                    :imgName="uploaditem.imgName" :imgType="uploaditem.imgType" :imgUrl="uploaditem.imgUrl"
                    :imgSize="uploaditem.imgSize"></HistoryItem>
            </div>
        </div>
    </div>
</template>
<script>
import HistoryItem from '../components/HistoryItem.vue';
import agency from '../components/agency';
export default {
    name: "SearchDialog",

    data() {
        return {
            isShow: false,
            searchList: []
        };
    },
    methods: {
        closeBtn() {
            this.isShow = false;
        }
    },
    created() {
        agency.$on("searchImage", (searchResult) => {

            this.searchList = searchResult;
            this.isShow = true;
        });
    },
    components: {
        HistoryItem
    }
}
</script>
<style scoped lang="scss">
@font-face {
    font-family: "iconfont";
    /* Project id 3786935 */
    src: url('../assets/icon/iconfont.woff2?t=1669123716336') format('woff2'),
        url('../assets/icon/iconfont.woff?t=1669123716336') format('woff'),
        url('../assets/icon/iconfont.ttf?t=1669123716336') format('truetype');
}

.SearchDialog {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    box-shadow: $boxShadow;
    right: 0;
    top: 0;
    z-index: 14;
}

.SearchInfo {
    width: 48%;
    height: 65%;

    background-color: $appBgGrayColor;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin: auto;

    a {
        font-family: "iconfont";
        position: sticky;
        align-self: end;
        font-size: 16px;
        cursor: pointer;
        color: white;
        background-color: $bottomBtnColor;
        border-radius: 20px;
        padding: 8px;
        margin-top: -1.5%;
        margin-right: -1.5%;
        transition: all $animTime;

    }

    a:hover {

        background-color: $colorHL;
        transform: rotate(180deg);
    }

    .SearchResult {

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

        overflow-y: scroll;
        scrollbar-width: none;
    }

    ::-webkit-scrollbar {
        display: none;
        /* Chrome Safari */
    }
}


.hideDialog {
    display: none;
}
</style>