# Components

### Component Folder

Each component has his own folder included with a: Component Javascript file, SCSS file for styling and a Vue file for html.

```bash
📂src
├── 📂components
│   ├── 📂Button  #component folder
│   │   ├── Button.js
│   │   ├── Button.scss
│   │   ├── Button.vue
│   │   └── index.js
│   │   ..
│   ├── _globals.js
│   └── index.js
..
```

You see `index.js` files in the Component folder and the components folder.

**Why index files?** Index files makes importing components in other components shorter. 

Instead of importing each component with a new line:

```javascript
// Example view
import FormItem from '@/components/FormInput/FormInput'
import Button from '@/components/Button/Button';
```

You can import it like:

```javascript
// Example view
import { Button, FormItem } from '@/components';
```

### Register components globally

If you want to register components globally you can add components to the `_globals.js` file located in the components folder. If you imported the component to the index file located in the components folder you can simply add it to the coded import and to make the component globally add it to the constant. 

```javascript
// _globals.js in ./src/components

import {
  Icon,
  Button,
} from '.';

/**
 *  Register components globally
 * */
const components = {
  Icon,
  Button,
};

Object.keys(components).forEach(key => Vue.component(key, components[key]));

```
------
### Using the generator CLI

If you using the structure generator it can generate the files and imports for you. Depending on the chosen answers it will generates a folder with the files: Index.js, {component}.js, {component}.scss and {component}.vue. 

For more info check the [Generator Guide](../the-generator/getting-started-with-the-generator.md).
