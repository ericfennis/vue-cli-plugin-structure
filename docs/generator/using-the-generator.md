---
description: >-
  The Vue Structure generator is a CLI (Command Line Interface) running in Vue
  CLI to generate: Components, Views, stores etc.
---

# Using the Structure Generator CLI

* Components
* Views
  * Routes
* Store Modules
* Filters
* Directives
* Mixins

### Installation

```bash
# Add Generator in your vue cli project
vue add structure generator
```

### Getting Started with Structure Generator <a id="getting-started-with-structure-generator"></a>

```bash
# Start using
$ yarn make

? What do you want to generate? #(Use arrow keys)
❯ Component
  View
  Store
  Mixin
  Directive
```

### Shorthand generate commands

Shorthand commands give you the option to skip the prompt, it will also not generate imports in `_globals.js` files \(for component, directive, filters and mixins\), for views will it skip the route generator as wel.

**Using Shorthand commands**

```text
yarn make --<type> [<name>]  
```

**Examples:**

```bash
# Generate component
yarn make --component button 
```

```bash
# Generate view
yarn make --view contact 
```

```bash
# Generate store
yarn make --store products 
```

```bash
# Generate filter
yarn make --filter uppercase 
```

```bash
# Generate directive
yarn make --directive focus 
```

```bash
# Generate mixin
yarn make --mixin scrollTo 
```

{% hint style="warning" %}
When using the shorthand command it will generate by using the default settings. By generating a view it skips the route generation.
{% endhint %}



