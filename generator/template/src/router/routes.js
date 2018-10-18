import { HomePage, PageNotFound } from '../views';

export default [
  {
    path: '/',
    component: HomePage,
    name: 'Homepage',
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
    component: PageNotFound,
  },
];
