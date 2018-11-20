import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
window.$ = $

//引用路由vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

import Main from './containers/Main.vue'
import Goodscategory from './containers/Goodscategory.vue'
import Pinwei from './containers/Pinwei.vue'
import Cart from './containers/Cart.vue'
import Ucenter from './containers/Ucenter.vue'
import List from './containers/List.vue'
import Page1 from './components/list/Page1.vue'
import Page2 from './components/list/Page2.vue'
import Page3 from './components/list/Page3.vue'
import Page4 from './components/list/Page4.vue'
import Page5 from './components/list/Page5.vue'
import Page6 from './components/list/Page6.vue'
import Page7 from './components/list/Page7.vue'
import Page8 from './components/list/Page8.vue'
import Page9 from './components/list/Page9.vue'
import Page10 from './components/list/Page10.vue'
import Page11 from './components/list/Page11.vue'
import Detail from './containers/Detail.vue'
import DetailShow from './components/detail/DetailShow.vue'
import CshopingCart from './components/cart/CshopingCart.vue'
import Login from './containers/Login.vue'
import Registe from './components/login/Registe.vue'
import Entry from './components/login/Entry.vue'

//定义路由
const routes = [{
		path: '/', //让页面一开始就开始显示主页数据
		component: Main
	}, {
		path: '/main',
		component: Main
	},
	{
		path: '/goodscategory',
		component: Goodscategory
	}, {
		path: '/pinwei',
		component: Pinwei
	}, {
		path: '/cart',
		component: Cart,
	}, {
		path: '/ucenter',
		component: Ucenter
	}, {
		path: '/list',
		component: List,
		children: [{//嵌套路由
			path: '/', //默认页面一开始显示组件page1
			component: Page1
		}, {
			path: 'page1',
			component: Page1
		}, {
			path: 'page2',
			component: Page2
		}, {
			path: 'page3',
			component: Page3
		}, {
			path: 'page4',
			component: Page4
		}, {
			path: 'page5',
			component: Page5
		}, {
			path: 'page6',
			component: Page6
		}, {
			path: 'page7',
			component: Page7
		}, {
			path: 'page8',
			component: Page8
		}, {
			path: 'page9',
			component: Page9
		}, {
			path: 'page10',
			component: Page10
		}, {
			path: 'page11',
			component: Page11
		}]
	}, {
		path: '/detail',
		component: Detail,
	}, {
		path: '/detailShow',
		component: DetailShow
	}, {
		path: '/shopingCart',
		component: CshopingCart
	},{
		path: '/login',
		component: Login,
		children:[{
			path:'registe',
			component:Registe
		},{
			path:'entry',
			component:Entry
		}]
	}
]
const router = new VueRouter({
	routes // short for `routes: routes`
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')