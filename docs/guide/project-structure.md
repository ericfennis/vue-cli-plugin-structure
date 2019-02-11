# Project Structure

### Root

In this folder you will find a .env file to define Environment Variables. It's not Git ignored, be careful to store application keys, passwords etc. Instead of using .env you can use .env.local check [Vue CLI Docs](https://cli.vuejs.org/guide/mode-and-env.html#modes)

```text
.
├── .env
├── .eslintrc.js
├── .prettierrc
├── vue.config.js
├── 📂 public
│   ├── favicon.ico
│   └── index.html
└── 📂 src 
    └── ...
```

### Source Folder

```bash
..
│ 
📂 src 
    │
    ├── main.js
    ├── 📂 App 
    ├── 📂 assets
    ├── 📂 components
    ├── 📂 config
    ├── 📂 directives
    ├── 📂 filters
    ├── 📂 mixins
    ├── 📂 router
    ├── 📂 store
    └── 📂 views
```



