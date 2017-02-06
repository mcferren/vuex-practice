import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Capsule   	from './containers/Capsule'; 
import Restaurant   from './containers/Restaurant'; 

const routes = [  
	{
		path: '/',
		name: 'home',
		component: Capsule,
		children: [
			{
				path: ':id',
				name: 'restaurant',
				component: Restaurant
			}
		],
	}
];

export default new Router({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
	    return { x: 0, y: 0 }
	}
})