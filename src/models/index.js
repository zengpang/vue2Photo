import AV, { Query, User } from 'leancloud-storage';//引入库文件
/*sdk初始化*/
AV.init({
    appId: "UQqK42CLqBPXHuOK9lYVVTT9-gzGzoHsz",
    appKey: "hh75vJLiRR1qvBqvKYIZbJlw",
    serverURL: "https://uqqk42cl.lc-cn-n1-shared.com"
});
/*文件管理*/
const FileManager = {
    /*文件上传*/
    Upload(file, filename) {
        const item = new AV.Object('Image');//新建图片对象
        const avFile = new AV.File(filename, file);
        item.set('filename', filename);
        item.set('owner', AV.User.current());
        item.set('url', avFile);
        return new Promise((resolve, reject) => {
            item.save().then(serverFile => resolve(serverFile), error => reject(error));
        });
    },
    /*文件查询*/
    find({ page, limit = 10 }) {
        const query = new AV.Query('Image');
        query.include('owner');
        query.limit(limit);
        query.skip(page * limit);

    },
    //将Url图片转换成Base64格式,思路是通过canvas元素访问url转成Base64格式
    convertUrlToBase64(url) {
        return new Promise( (resolve, reject)=> {
            let img = new Image();
            img.crossOrigin = "Anonymous";
            img.src = url;
            img.onload = ()=> {
                let canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                let ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, img.width, img.height);//创建跟图片同等分辨率的空白画板
                let ext = img.src
                    .substring(img.src.lastIndexOf(".") + 1)
                    .toLowerCase();
                let dataURL = canvas.toDataURL("image/" + ext);
                let base64 = {
                    dataURL: dataURL,
                    type: "image/" + ext,
                    ext: ext
                };
                resolve(base64);
            };
        });
    },
    //将Base64格式转换成Blob格式
    convertBase64UrlToBlob(base64) {
        var parts = base64.dataURL.split(";base64,");
        var contentType = parts[0].split(":")[1];
        var raw = window.atob(parts[1]);
        var rawLength = raw.length;
        var uInt8Array = new Uint8Array(rawLength);
        for (var i = 0; i < rawLength; i++) {
            uInt8Array[i] = raw.charCodeAt(i);
        }
        return new Blob([uInt8Array], { type: contentType });
    },

    myBrowser() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        if (userAgent.indexOf("OPR") > -1) {
            return "Opera";
        } //判断是否Opera浏览器 OPR/43.0.2442.991
        if (userAgent.indexOf("Firefox") > -1) {
            return "FF";
        } //判断是否Firefox浏览器  Firefox/51.0
        if (userAgent.indexOf("Trident") > -1) {
            return "IE";
        } //判断是否IE浏览器  Trident/7.0; rv:11.0
        if (userAgent.indexOf("Edge") > -1) {
            return "Edge";
        } //判断是否Edge浏览器  Edge/14.14393
        if (userAgent.indexOf("Chrome") > -1) {
            return "Chrome";
        } // Chrome/56.0.2924.87
        if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
        } //判断是否Safari浏览器 AppleWebKit/534.57.2 Version/5.1.7 Safari/534.57.2
    },



    /*文件下载*/
    download(url, filename) {
        let that = this;
        //图片格式和PDF
        this.convertUrlToBase64(url).then(function (base64) {
            // 图片转为base64
            var blob = that.convertBase64UrlToBlob(base64); // 转为blob对象
            // 下载
            if (that.myBrowser() == "IE") {
                window.navigator.msSaveBlob(blob, filename);
            } else if (that.myBrowser() == "FF") {
                window.location.href = url;
            } else {
                var a = document.createElement("a");
                a.download = filename;
                a.href = URL.createObjectURL(blob);
                a.click();
            }
        });
    }

};

export {
    FileManager
};