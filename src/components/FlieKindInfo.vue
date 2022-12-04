<template>
    <div class="fileKindInfo" scoped lang="scss">
        <div class="icon" ref="kindinfoicon">{{kindName}}</div>
        <a>{{ kindName }}</a>
        <div class="totalSize">{{ kindSize }}<label>GB</label></div>
    </div>
</template>
<script>
import style from '../assets/style/index.scss';

const gb=1024;
export default {
    props: ['imgsInfo'],
    data() {
        return {
            kindName: "jpeg",
            kindSize: 0
        };
    },
    methods: {
        iconClassify(type) {
            const iconStyle=this.$refs["kindinfoicon"].style;
            
            switch (type) {
                case ("png"): {
                    iconStyle.backgroundColor = style.pngHintColor;
              
                }; break;
                case ("jpeg"): {
                    iconStyle.backgroundColor = style.jpgHintColor; 
                    
                }; break;
                case ("tga"): {
                    iconStyle.backgroundColor = style.tgaHintColor;
                   
                }; break;
                default: {
                    iconStyle.backgroundColor = style.otherHintColor;
                
                };
            }
        },
        init()
        {
            this.kindName=this.imgsInfo.imgType;
            // this.imgsInfo.imgList.forEach(element => {
            //     this.kindSize+=parseFloat(element.imgSize);
                
            // });
            this.kindSize=(this.imgsInfo.kindSize/gb).toFixed(3);
            
        }
    },
    created() {
        
        
    },
    mounted()
    {
        this.init();
        this.iconClassify(this.imgsInfo.imgType);
     
    }
}
</script>
<style scoped lang="scss">
.fileKindInfo {
    background-color: $moduleBgColor;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .icon {
        background-color: $tgaHintColor;
        width: 50px;
        height: 50px;
        color: $moduleBgColor;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 35px;
        margin-bottom: 3px;

    }

    a {
        color: $bottomBtnColor;
        margin-bottom: 30px;
        font-weight: normal;
    }

    .totalSize {
        width: 50%;
        height: 50px;
        line-height: 50px;
        font-size: $fontBigSize;

        background-color: rgba(211, 211, 211, 0.2);
        text-align: center;

        border-radius: 25px;

        label {
            font-size: $fontNormalSize;
            color: $bottomBtnColor;
        }
    }
}
</style>