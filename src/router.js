import { createRouter, createWebHistory } from 'vue-router';
import Home from './App.vue';
import Test from './pages/Test.vue';
import Inventory from './pages/Inventory.vue';
import listToGet from './pages/listToGet.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/test', component: Test },
    { path: '/inventory', component: Inventory },
    { path: '/listtoget', component: listToGet }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
