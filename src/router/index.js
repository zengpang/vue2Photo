import Vue from 'vue'
import Router from 'vue-router'
import PhotoPage from '../views/PhotoPage'
import UploadHistoryPage from '../views/UploadHistoryPage'
import AppInfoPage from '../views/AppInfoPage'
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
