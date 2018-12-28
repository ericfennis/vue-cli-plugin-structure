/* eslint-disable-next-line import,prettier/prettier */
import { 
  Home, 
  NotFound,
} from '@/views';

export default [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: {
      title: 'Home',
    },
  },
  {
    path: '*',
    component: NotFound,
    name: 'Error 404',
    meta: {
      title: 'Page not Found',
    },
  },
];
