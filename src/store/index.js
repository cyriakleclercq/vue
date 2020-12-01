import Vue from 'vue';
import Vuex from 'vuex';
import monStore from "./modules/monStore";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        monStore
    }
})