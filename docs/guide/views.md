# Views

### Views Folder

Same as the component folder each views has his own folder with a: Vue Javascript file, SCSS file for styling and a .Vue file for html.

```text
📂src
├── 📂views
│   ├── 📂Home  #View component folder
│   │   ├── Home.js
│   │   ├── Home.scss
│   │   ├── Home.vue
│   │   └── index.js
│   │   ..
│   └── index.js
..
```

The `index.js` file is for indexing all the views in the views folder. This makes importing in the routes file easier. See [Router & Routes](router-and-routes.md) how to import views in the router.

#### Not Found View

Also added is the Not Found page to show the user a 404 Error not found page. 

### Adding components to views

```javascript
import { Button, FormItem } from '@/components';
```

### Using the generator CLI

If you using the structure generator it can generate the files and imports for you. Depending on the chosen answers it will generates a view folder with the files: Index.js, {component}.js, {component}.scss and {component}.vue. And it will add the import of the view in the index.js file in Views folder.

You can also generate the route for the view.

For more info check the [Generator Guide](../the-generator/getting-started-with-the-generator.md).

