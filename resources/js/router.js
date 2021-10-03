import Vue from 'vue'
import Router from 'vue-router'
import Login from './vue/login.vue'
import Register from './vue/register.vue'
import Todo from './vue/todo.vue'
import store from "./app";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/register',
            name:  'register',
            component: Register,
            beforeEnter: (to, from, next) => {
                if(store.state.authenticated) {
                    next('/todo');
                } else {
                    next();
                }
            }
        },
        {
            path: '/login',
            name:  'login',
            component: Login,
            beforeEnter: (to, from, next) => {
                if(store.state.authenticated) {
                    next('/todo');
                } else {
                    next();
                }
            }
        },
        {
            path: '/logout',
            name:  'logout',
            component: Todo,
            beforeEnter: (to, from, next) => {
                if(!store.state.authenticated) {
                    next('/login');
                } else {
                    next();
                }
            }
        },
        {
            path: '/todo',
            name:  'todo',
            component: Todo,
            beforeEnter: (to, from, next) => {
                if(!store.state.authenticated) {
                    next('/login');
                } else {
                    next();
                }
            }
        },
        {
            path: '/',
            redirect: {
                name: "login"
            }
        }
    ],
    mode: 'history',
})

