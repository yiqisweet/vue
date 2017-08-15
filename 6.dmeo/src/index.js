


import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import state from './vuex/state';
import mutations from './vuex/mutations';
import getters from './vuex/getters';
import routes from './router.config'
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);

const store = new Vuex.Store({
    getters,
    mutations,
    state
});

const router = new VueRouter({
    routes
})

new Vue({
    el :"#app",
    router,
    store,
    render : function(h){
        return h(App)
    }
})