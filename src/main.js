import Vue 			from 'vue';    
import { sync } 	from 'vuex-router-sync';  
import App 			from './App';     
import router 		from './router';
import VuexStore 	from './vuex/store'; 

const store  = VuexStore; 

sync(store, router);  

const app = new Vue({ 
    router,
    store,
    render: h => h(App), 
}).$mount('#app');