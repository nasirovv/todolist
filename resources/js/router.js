import Vue from 'vue'
import Router from 'vue-router'
import Login from './vue/login.vue'
import Todo from './vue/todo.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name:  'login',
            component: Login
        },
        {
            path: '/todo',
            name:  'todo',
            component: Todo
        }
    ],
    mode: 'history'
})
