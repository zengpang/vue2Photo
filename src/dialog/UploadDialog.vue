<template>
    <div v-bind:class="{ uploadDialog: true, hideDialog: !isUpload }">
        <div id="uploadContent" ref="uploadContent">
            <a @click="closeEvent" class="closeBtn">&#xe64d;</a>
            <div class="uploadTitle">
                <h2>上传文件</h2>
                <label>上传图片文件</label>
            </div>
            <input type="file" id="uploadfile" @input="UploadEvent($event)" accept="image/*" />
            <div id="uploadDiv" @click="UploadBtnEvent">
                <a class="icon">&#xe60b;</a>
                <h3>点击按钮选择上传文件(文件大小限制为5MB以内)</h3>
                <button>选择文件</button>
            </div>
        </div>
    </div>
</template>
<script>

import agency from '../components/agency';
import { FileManager } from '../models';
export default {
    name: "UploadDialog",
    data() {
        return {
            isUpload: false,
            isUploading: false,

        };
    },
    created() {
        agency.$on("UploadShow", (isUpload) => {
            this.isUpload = isUpload;
        });

    },
    mounted() {
    },
    methods: {
        closeEvent() {

            this.isUpload = false;
        },
        UploadBtnEvent() {

            document.getElementById("uploadfile").click();

        },
        UploadEvent(event) {
            console.log(event.target.files[0]);
            let UploadFile = event.target.files[0];
            let fileSize = event.target.files[0].size;
            if (fileSize >= (1048576 * 5)) {
                alert("文件过大");
                return;
            }
            this.UploadFile(UploadFile);

        },
        UploadFile(file) {
            console.log("执行上传");
            this.isUploading = true;
            agency.$emit("loadStatusChange", this.isUploading, "正在上传");
            return new Promise(() => {
                FileManager.Upload(file, file.name)
                    .then(() => {

                    }).catch(err => {
                        console.log(`上传发生错误${err}`);
                        alert('上传失败');
                        this.isUploading = false;
                        agency.$emit("loadStatusChange", this.isUploading, "正在上传");
                    }).finally(() => {
                        this.isUploading = false;
                        agency.$emit("loadStatusChange", this.isUploading, "正在上传");
                        alert(`文件${file.name}上传成功`);
                        agency.$emit("updatePhoto")
                        agency.$emit("selectChange", false);
                    })
            })
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

.uploadDialog {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    box-shadow: $boxShadow;
    right: 0;
    top: 0;
    z-index: 15;

}

#uploadContent {
    width: 40%;
    height: 55%;

    background-color: white;
    margin: auto;
    display: flex;
    flex-direction: column;

    .uploadTitle {
        align-self: center;
        justify-self: center;
        display: flex;
        flex-direction: column;

        h2 {
            margin: 0px;
            color: $bottomBtnColor;
        }

        label {
            margin-top: 10px;
            margin-bottom: 15px;
            color: $bottomBtnColor;
            font-weight: bold;
            font-size: $fontNormalSize;
        }
    }

    .closeBtn {
        font-family: "iconfont";
        position: relative;
        align-self: end;
        font-size: $fontNormalSize;
        cursor: pointer;
        color: white;
        background-color: $bottomBtnColor;
        border-radius: 20px;
        padding: 8px;
        margin-top: -1.5%;
        margin-right: -1.5%;
        transition: all $animTime;

    }

    .closeBtn:hover {

        background-color: $colorHL;
        transform: rotate(180deg);
    }

    #uploadfile {
        display: none;
    }

    #uploadDiv {
        font-family: "iconfont";
        width: 90%;
        height: 75%;
        justify-self: center;
        align-self: center;
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        border: 3px solid transparent;
        border-radius: 8px;
        background: linear-gradient(white, $colorNormal) padding-box,
            repeating-linear-gradient(-45deg, #ccc 0, $colorHL 0.3em, white 0, white 0.45em);

        .icon {
            font-size: 121px;
            color: $bottomBtnColor;
        }

        h3 {
            color: $bottomBtnColor;
        }

        button {
            width: 150px;
            height: 40px;
            border-radius: 5px;
            cursor: pointer;
            border: none;
            background-color: $bottomBtnColor;
            color: white;
            font-weight: bold;
            font-size: $fontNormalSize;
            box-shadow: $btnShadow;
            transition: all $animTime;
        }

        button:hover {
            box-shadow: $btnSelectShadow;
            background-color: $colorHL;
        }
    }
}

.hideDialog {

    display: none;
}
</style>