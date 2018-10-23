import { Home, NotFound } from '../views';

export default [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: {
      title: 'Homepage',
    },
  },
  {
    path: '*',
    name: 'Error 404',
    meta: {
      title: 'Page not Found',
    },
    component: NotFound,
  },
];
