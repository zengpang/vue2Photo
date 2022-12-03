
<template>
    <div class="bottomSidebar">
        <h1 class="previousBtn" @click="pageNAndPBtn(-1)">&#xe62d;</h1>
        <label class="fontBottomBtnNormal " v-for="pageNumber in parseInt(pageNumbers)" :ref="bottomBtnidStr + pageNumber"
            @click="pageChangeBtn(pageNumber)" >{{ pageNumber }}</label>
        <h1 class="nextBtn" @click="pageNAndPBtn(1)">&#xe62d;</h1>
        
    </div>
</template>

<script>
import globalVariable from '../global/globalVariable';
import agency from'./agency.js'
export default {
    name: "BottomSidebar",
    data() {
        return {
            pageNumbers: 1,//总页码
            selectPageNumber: 1,//选中页面页码
            bottomBtnidStr: 'pageBottombtn',//底边数字按钮ref唯一标识字符串
      
        }
    },
    methods: {
      
        //页面号码更新
        // pageNumberUpdate(pageinfo)
        // {
           
        // },
        //选中页码更新
        selectPageUpdate() {
            for (let index = 1; index <= this.pageNumbers; index++) {

                this.$refs[this.bottomBtnidStr + index][0].classList.remove("fontSelected");
                this.$refs[this.bottomBtnidStr + index][0].classList.add("fontBottomBtnNormal");
            }
            this.$refs[this.bottomBtnidStr + globalVariable.selectPage][0].classList.remove("fontBottomBtnNormal");
            this.$refs[this.bottomBtnidStr + globalVariable.selectPage][0].classList.add("fontSelected");
            agency.$emit("pageNumberChange");
        },
        //页面切换点击事件
        pageChangeBtn(pageNumber) {
            globalVariable.selectPage = pageNumber;
            this.selectPageUpdate();
           // agency.$emit("pageNumberChange");
        },
        //页面上下页切换按钮点击事件
        pageNAndPBtn(jumpPageNum) {
            switch (true) {
                case (globalVariable.selectPage<= 1 && jumpPageNum < 0): {
                    return;
                };
                case (globalVariable.selectPage >= this.pageNumbers && jumpPageNum > 0): {
                    return;
                };
            }
            globalVariable.selectPage += jumpPageNum;
            this.selectPageUpdate();
          //  agency.$emit("pageNumberChange");
        }
    },
    watch:{
    },
    created()
    {
    
        agency.$on("pageNumberUpdate",(pageinfo)=>
        {
            let oldpageNumbers=this.pageNumbers;
            this.pageNumbers=Math.ceil(pageinfo.imgTotals/pageinfo.imgShows);
           
            let subValue=oldpageNumbers-this.pageNumbers;
            console.log("当前页数为"+this.pageNumbers);
           
            if(globalVariable.selectPage>this.pageNumbers)
            {

                globalVariable.selectPage=this.pageNumbers;
                console.log(this.pageNumbers);
                this.selectPageUpdate(); 
            }
         
           
            // if(subValue>0)
            // {
            //     // globalVariable.selectPage=1;
            //     // this.selectPageUpdate();
            //     globalVariable.selectPage=(globalVariable.selectPage-subValue)<=1?this.pageNumbers:globalVariable.selectPage-subValue; 
            //     this.selectPageUpdate();
            //    console.log("差值为"+subValue)
            // }
            
            
        });
        // agency.$on("getSelectNumber",(callback)=>{
        //     callback(globalVariable.selectPage);
        // })
    },
    mounted() {
        this.selectPageUpdate();
    }
    
}
</script>

<style scoped lang="scss">
.bottomSidebar {
    display: flex;
    position: relative;
    flex-direction: row;
    height: 100%;
    width: 100%;
    align-items: center;

    label {
        margin-left: $bottomDistance;
        margin-right: $bottomDistance;
        transition: color $animTime;
        border: 2px solid transparent;
        cursor: pointer;
    }
}

@font-face {
    font-family: "iconfont";
    /* Project id 3786935 */
    src: url('../assets/icon/iconfont.woff2?t=1669123716336') format('woff2'),
        url('../assets/icon/iconfont.woff?t=1669123716336') format('woff'),
        url('../assets/icon/iconfont.ttf?t=1669123716336') format('truetype');
}

.nextBtn {
    font-family: "iconfont";
    color: $bottomBtnColor;
    position: relative;
    display: flex;
    font-size: $fontNormalSize;
    transition: color $animTime;
    margin-left: $bottomDistance;
    margin-right: $bottomDistance;
    border: 2px solid transparent;
    cursor: pointer;

}

.nextBtn:hover {
    font-weight: bold;
    color: $colorHL;
}

.previousBtn {
    font-family: "iconfont";
    position: relative;
    color: $bottomBtnColor;
    font-size: $fontNormalSize;
    transition: color $animTime;
    transform: rotateY(180deg);
    margin-left: 1%;
    margin-right: 1%;
    border: 2px solid transparent;
    cursor: pointer;

}

.previousBtn:hover {
    font-weight: bold;
    color: $colorHL;
}
</style>