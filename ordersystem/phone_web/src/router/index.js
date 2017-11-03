import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from '../components/home/home.vue'
import CarlistComponent from '../components/carlist/carlist1.vue'
import OrderComponent from '../components/order/order.vue'

import loginComponent from '../components/login/login.vue'
import GoodsListComponent from '../components/goodslist/goodslist.vue'
import GoodsFormComponent from '../components/goodsform/goodsform.vue'
import sweetsComponent from '../components/sweetsgoods/sweetsgoods.vue'
import drinkComponent from '../components/drink/drink.vue'
Vue.use(VueRouter)

var router = new VueRouter({
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeComponent,
			children: [{
				path: 'login',
				name: 'login',
				component: loginComponent
			},{
				path: 'goodslist',
				name: 'goodslist',
				component: GoodsListComponent
			},{
				path: 'goodsform',
				name: 'goodsform',
				component: GoodsFormComponent
			},{
				path: 'sweetsgoods',
				name: 'sweetsgoods',
				component: sweetsComponent
			},{
				path: 'drink',
				name: 'drink',
				component: drinkComponent
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