import Vue 			from 'vue';  

import axios 		from 'axios'

const actions = {

    PROCESS_CHECK_OUT: ({ commit }) => {

        return new Promise((resolve, reject) => {
            
            commit('RESET_CART_HASH');

            resolve(true);
        })
    }
};

const getters = {
	fetchShoppingCart: 		state => { return state.shoppinghash; },
	fetchTotalCartItems: 	state => { return Object.keys(state.shoppinghash).length },
	fetchTotalPrice:   		state => { 

								let returnprice = 0;

								for (let key in state.shoppinghash) {

									returnprice += state.shoppinghash[key].orderlist.reduce((accum, element) => {

														return accum + state.shoppinghash[key].amount;

												   }, 0);
								} 

								return returnprice;
						   	}
};

const mutations = {

    ADD_TO_CART: 		(state, { order, id }) => { 

    						let objaddition = 	{
				    								foodname: 		order.name,
				    								restaurant:  	order.restid,
													amount: 		order.price,
				    								orderlist: 	   [order]
				    							};

    						if(!state.shoppinghash[id]) { 

		    					Vue.set(state.shoppinghash, id, objaddition);

    						} else {

    							state.shoppinghash[id].orderlist.push(objaddition); 
    						}
    					},

    REMOVE_FROM_CART:   (state, { id }) => { 

    						if(state.shoppinghash[id].orderlist.length == 1) {

    							Vue.delete(state.shoppinghash, id);

    						} else {

    							state.shoppinghash[id].orderlist.pop(); 
    						}
    					},

    RESET_CART_HASH: 	state => { 

    						for (let key in state.shoppinghash) {

    							Vue.delete(state.shoppinghash, key);
    						}
    					}
};

const state = {
    shoppinghash: {}
};

export default {
    state,
    mutations,
    actions,
    getters
};