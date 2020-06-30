import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    alias: '/login',
    name: 'Home',
    component: Login,
  },
  {
    path: '/employees',
    name: 'Employees',
    component: () => import('../components/employee/EmployeeList.vue'),
  },
  {
    path: '/employees/add',
    name: 'Add Employee',
    component: () => import('../components/employee/EmployeeCreation.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user-token');

  if (authRequired && !loggedIn) {
    return next('/');
  }

  if (publicPages.includes(to.path) && loggedIn) {
    return next('/employees');
  }

  return next();
});

export default router;
