<template>

    <div class="historySearch">
        <a>&#xe613;</a> <input id="seachInput" @keyup.enter="seachImg" placeholder="输入图片名字并按下任意键进行搜索..." />
    </div>

</template>
<script>
import globalVariable from '../global/globalVariable';
import agency from './agency';
import {DataDispose} from'../models';
export default {
    name: 'HistorySearch',
    methods: {
        async seachImg() {
            let seachValue = document.querySelector("#seachInput").value;
            let seachResult = [];
            globalVariable.imgList.forEach(element => {
                let fileName = element.attributes.filename;
                let reg = RegExp(seachValue + "\.");
                if (fileName.match(reg)) {
                    seachResult.push(element);
                }
            });
            if (seachResult.length >= 0) {
                seachResult=DataDispose.imgDatainits(seachResult);
                agency.$emit("searchImage", seachResult);
            }
            else {
                alert("无查询结果");
            }
            //   
        }
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

.historySearch {
    height: 35%;
    display: flex;
    flex-direction: row;
    align-items: center;

    a {
        position: absolute;
        font-family: "iconfont";
        margin-left: 3%;
        font-size: 20px;
    }

    input {
        border-radius: 8px;
        background-color: rgb(234, 231, 231);
        height: 100%;
        width: 89%;
        font-size: $fontNormalSize;
        border: none;
        padding-left: 8%;
        padding-right: $leftDistance;
        outline: none;
    }

    ;

    input::-webkit-input-placeholder {
        /* placeholder颜色  */
        color: #aab2bd;
        /* placeholder字体大小  */
        font-size: $fontNormalSize;
        justify-self: center;
    }
}
</style>