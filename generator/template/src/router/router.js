import Vue from 'vue';
import Router from 'vue-router';

import routes from './routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

router.beforeEach((to, from, next) => {
  next();
  document.title = `${to.meta.title} - ${process.env.VUE_APP_NAME}`;
  next();
});

export default router;
