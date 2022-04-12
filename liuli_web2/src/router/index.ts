import {createRouter, createWebHistory} from 'vue-router';
import EditTask from "../components/EditTask";
import AllTasks from "../components/AllTasks";
import Login from "../components/Login";

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
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
