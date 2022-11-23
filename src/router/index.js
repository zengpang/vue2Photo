import Vue from 'vue'
import Router from 'vue-router'
import PhotoPage from '../components/PhotoPage'
import UploadHistoryPage from '../components/UploadHistoryPage'
import AppInfoPage from '../components/AppInfoPage'
Vue.use(Router)

export default new Router({
  
    routes: [
        {
            name: 'homePage',
            path: '/',
            component: PhotoPage

        },
        {
            name: 'hisotryPage',
            path: '/hisotry',
            component: UploadHistoryPage

        }
        ,
        {
            name: 'appInfo',
            path: '/info',
            component: AppInfoPage

        }
    ]
})
