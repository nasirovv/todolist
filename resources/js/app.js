require('./bootstrap');

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from "vuex"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare, faTrash)
Vue.use(Vuex);
Vue.component('font-awesome-icon', FontAwesomeIcon)

const store = new Vuex.Store(
    {
        state: {
            authenticated: false
        },
        mutations: {
            setAuthentication(state, status) {
                state.authenticated = status;
            }
        }
    }
);

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store: store
});

export default store
