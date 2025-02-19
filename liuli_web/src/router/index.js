import { createRouter, createWebHistory } from 'vue-router';

import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import AllTasks from "../views/AllTasks.vue";
import EditTask from "../views/EditTask.vue";

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            component: Home,
            meta: {title: '首页'}
        },
        {
            path: '/login',
            component: Login,
            meta: {title: '登录'}
        },
        {
            path: '/tasks',
            component: AllTasks,
            meta: {title: '所有任务'}
        },
        {
            path: '/tasks/:id/edit',
            component: EditTask,
            meta: {title: '编辑任务'}
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title || ''} - liuli.io`;
    next();
});

export default router;
