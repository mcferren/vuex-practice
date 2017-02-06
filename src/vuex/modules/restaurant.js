import Vue          from 'vue';  

import axios        from 'axios'

import * as utils   from "./rest_utils"

const actions = {

    LOAD_RESTAURANT_LIST: ({ commit }) => {

        return new Promise((resolve, reject) => {

            axios.get('http://apis.scottylabs.org/dining/v1/locations').then((response) => {

                commit('SET_RESTAURANT_HASH', { hash: utils.rollRestaurantObjList(response.data.locations) });

                resolve(true);

            }, (err) => {
                console.log(err)
                reject();
            })
        })
    },
    MEMOIZE_RESTAURANT_MENU: ({ commit, state }, payload) => {

        return new Promise((resolve, reject) => {

            if(!state.restauranthash[payload.restaurantid]) {

                reject(false);

            } else if(!state.restauranthash[payload.restaurantid].menu) {

                utils.assembleNewMenu(state.restauranthash[payload.restaurantid].description, payload.restaurantid)
                     .then(newmenu => {

                            commit('SET_RESTAURANT_MENU', { menu: newmenu, id: payload.restaurantid });

                            resolve(true);
                     });

            } else {

                resolve(true);
            }
        });
    }
};

const getters = {

    fetchAllRestaurants: state => { return state.restauranthash; }, // Object.keys(state.restauranthash); },
    fetchRestaurantById: (state, getters) => (id) => { return state.restauranthash[id]; }
};

const mutations = {

    SET_RESTAURANT_HASH: (state, { hash })      => { state.restauranthash = hash; },
    SET_RESTAURANT_MENU: (state, { menu, id })  => {

        if(!state.restauranthash[id]) { Vue.set(state.restauranthash, id, {}); }

        Vue.set(state.restauranthash[id], "menu", menu)
    }
};

const state = {
    restauranthash: {}
};

export default {
    state,
    mutations,
    actions,
    getters
};