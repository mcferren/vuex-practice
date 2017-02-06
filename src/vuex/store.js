import Vue 			from 'vue';  
import Vuex 		from 'vuex'; 

import restaurant   from './modules/restaurant';
import shoppingcart from './modules/shoppingcart';

Vue.use(Vuex);

const store = new Vuex.Store({  
	modules: {  
		restaurant,
		shoppingcart
	},   
	strict: true,
})

export default store;