/** * Created by Randy on 2017/5/30. */var Vue = require('vue/dist/vue.common.js');var App = require('./App.vue');var VueRouter = require('vue-router/dist/vue-router.common.js')var routes = require('./router-config');Vue.use(VueRouter);var router = new VueRouter({    routes})new Vue({    el : '#app',    router,    render : function(h){        "use strict";        return h(App)    }})