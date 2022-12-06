<template>
  <div class="headerTab">
    <router-link :to="{ name: TabLink.tabLink }"
      v-bind:class="{ titles: true, fontNormal: !isSelected[TabLink.tabname], fontSelected: isSelected[TabLink.tabname] }"
      v-for="TabLink in TabLinks" @click.native="changePageBtn(TabLink.tabname)" :key="TabLink.tabname">{{
    TabLink.tabname
      }}
    </router-link>
    <!--  -->
  </div>
</template>
   
<script>
import agency from './agency';
import globalVariable from '../global/globalVariable';
export default {

  name: 'HeaderTab',
  data() {
    return {
      TabLinks: [{ tabname: '·首页', tabLink: 'homePage' }, { tabname: '·上传历史', tabLink: 'hisotryPage' }, { tabname: '·应用信息', tabLink: 'appInfo' }],
      isSelected: { '·首页': true, '·上传历史': false, '·应用信息': false },
    }
  },
  methods: {

    changePageBtn(selectStr) //点击事件
    {
      
      for (let i = 0; i < this.TabLinks.length; i++) {
        this.isSelected[this.TabLinks[i].tabname] = false;
        if (this.TabLinks[i].tabname == selectStr) {
          if(this.TabLinks[i].tabname!="首页")
          {
            globalVariable.isPhotoShow=false;
          }
          this.isSelected[this.TabLinks[i].tabname] = true;
        }
      }
    },

    created() {

    }
  }
}
</script>

<style scoped lang="scss">
.headerTab {
  display: flex;
  position: relative;
  flex-direction: row;
  width: 40vw;
  margin-top: 1.5%;
  margin-left: $leftDistance;

  .router-link-active {
    //点击时去掉下划线
    text-decoration: none;
  }

  a {
    text-decoration: none; //去掉原有链接文字下划线
  }

}

.titles {
  font-size: $fontNormalSize;
  display: inline-block;
  margin-right: 4%;
  transition: color $animTime;
}
</style>
