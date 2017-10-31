import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginComponent from '../components/login/login.vue'
import HomeComponent from '../components/home/home.vue'
import GoodsListComponent from '../components/goodslist/goodslist.vue'
import GoodsFormComponent from '../components/goodsform/goodsform.vue'
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
			},{
				path: 'goodsform',
				name: 'goodsform',
				component: GoodsFormComponent
			}
			// ,{
			// 	path: 'order',
			// 	name: 'order',
			// 	component: OrderComponent
			// }
			]
		},
		{
			path: '/login',
			name: 'login',
			component: LoginComponent
		}
	]
})

export default router