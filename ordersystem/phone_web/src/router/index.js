import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from '../components/home/home.vue'
import CarlistComponent from '../components/carlist/carlist1.vue'
import OrderComponent from '../components/order/order.vue'


import GoodsListComponent from '../components/goodslist/goodslist.vue'
import GoodsFormComponent from '../components/goodsform/goodsform.vue'


Vue.use(VueRouter)

var router = new VueRouter({
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeComponent,
			children: [{
				path: 'goodslist',
				name: 'goodslist',
				component: GoodsListComponent
			},{
				path: 'goodsform',
				name: 'goodsform',
				component: GoodsFormComponent
			}]
		},
		{
			path:'/carlist',
			name:'carlist',
			component: CarlistComponent
		},
		{
			path:'/order',
			name:'order',
			component: OrderComponent
		}
	]
})

export default router