import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginComponent from '../components/login/login.vue'
import RegisterComponent from '../components/register/register.vue'
import HomeComponent from '../components/home/home.vue'
import GoodsListComponent from '../components/goodslist/goodslist.vue'
import HistoryComponent from '../components/history/history.vue'
import OrderComponent from '../components/order/order.vue'

Vue.use(VueRouter)

var router = new VueRouter({
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeComponent,
			children: [{
				path: 'menu',
				name: 'menu',
				component: GoodsListComponent
			}
			,{
				path: 'history',
				name: 'history',
				component: HistoryComponent
			}
			,{
				path: 'order',
				name: 'order',
				component: OrderComponent
			}
			]
		},
		{
			path: '/login',
			name: 'login',
			component: LoginComponent
		},
		{
			path: '/register',
			name: 'register',
			component: RegisterComponent
		}
	]
})

export default router