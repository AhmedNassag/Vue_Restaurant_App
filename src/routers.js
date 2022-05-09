import IndexPage from './components/IndexPage.vue';
import SignUp from './components/SignUp.vue';
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import AddPage from './components/AddPage.vue';
import UpdatePage from './components/UpdatePage.vue';

const routes = [
    {
        name: 'IndexPage',
        component: IndexPage,
        path: '/',
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up',
    },
    {
        name: 'LoginPage',
        component: LoginPage,
        path: '/login',
    },
    {
        name: 'AddPage',
        component: AddPage,
        path: '/add',
    },
    {
        name: 'UpdatePage',
        component: UpdatePage,
        path: '/update/:id',
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;