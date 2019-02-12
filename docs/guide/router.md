# Router & Routes

Vue router \(index.js\) and the routes file is located in the /Router folder. Routes file is a separated file including the routes. 

The routes folder:

```text
📂src
├── 📂router
│   ├── index.js
│   └── routes.js
..
```

### Router

In the `index.js` file you will find the configuration of the router. 

Default configuration:

```javascript
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});
```

More about how to configure the Vue Router read their [documentation](https://router.vuejs.org/guide/).

### Routes

The routes are placed in a separated file `routes.js` to keep a good overview of all the configured routes. In the top of the file all the views can be imported. If you have added the view component in the index file located in: `src/views/index.js` , you can simply import all the views with one import. See example below.

```javascript
import {
  About,
  ..
} from '@/views';

export default [
  {
    path: '/about',
    component: About,
    name: 'About',
    meta: {
      title: 'About us',
    },
  },
  
  ...  
]
```

In the meta Object you can define the title of the view. In router file \(index.js\) there is written a navigation guard to set the meta title every time when the user switch route. 

More information about router, check [Vue Router Documentation](https://router.vuejs.org/guide/essentials/named-routes.html) .

### Generate routes using the Generator CLI

You can generate new routes using the Structure Generator when generating a new view. 

For more info check the [Generator Guide](../the-generator/getting-started-with-the-generator.md).
