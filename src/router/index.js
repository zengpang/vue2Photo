import Vue from 'vue'
import Router from 'vue-router'
import PhotoPage from '../views/PhotoPage'
import UploadHistoryPage from '../views/UploadHistoryPage'
import AppInfoPage from '../views/AppInfoPage'

const original=Router.prototype.push;
Router.prototype.push = function push(location) {
    return original.call(this, location).catch(err => err)
  }
Vue.use(Router)

export default new Router({
    
    routes: [
        {
            name: 'homePage',
            path: '/home',
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
