(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{287:function(t,e,a){"use strict";a.r(e);var s=a(37),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"router-routes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-routes","aria-hidden":"true"}},[t._v("#")]),t._v(" Router & Routes")]),t._v(" "),a("p",[t._v("Vue router (index.js) and the routes file is located in the /Router folder. Routes file is a separated file including the routes.")]),t._v(" "),a("p",[t._v("The routes folder:")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("📂src\n├── 📂router\n│   ├── index.js\n│   └── routes.js\n..\n")])])]),a("h3",{attrs:{id:"router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router","aria-hidden":"true"}},[t._v("#")]),t._v(" Router")]),t._v(" "),a("p",[t._v("In the "),a("code",[t._v("index.js")]),t._v(" file you will find the configuration of the router.")]),t._v(" "),a("p",[t._v("Default configuration:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Router")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'history'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  linkActiveClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'active'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scrollBehavior")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  routes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("More about how to configure the Vue Router read their "),a("a",{attrs:{href:"https://router.vuejs.org/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"routes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routes","aria-hidden":"true"}},[t._v("#")]),t._v(" Routes")]),t._v(" "),a("p",[t._v("The routes are placed in a separated file "),a("code",[t._v("routes.js")]),t._v(" to keep a good overview of all the configured routes. In the top of the file all the views can be imported. If you have added the view component in the index file located in: "),a("code",[t._v("src/views/index.js")]),t._v(" , you can simply import all the views with one import. See example below.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  About"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/views'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/about'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" About"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'About'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'About us'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("In the meta Object you can define the title of the view. In router file (index.js) there is written a navigation guard to set the meta title every time when the user switch route.")]),t._v(" "),a("p",[t._v("More information about router, check "),a("a",{attrs:{href:"https://router.vuejs.org/guide/essentials/named-routes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Router Documentation"),a("OutboundLink")],1),t._v(" .")]),t._v(" "),a("h3",{attrs:{id:"generate-routes-using-the-generator-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-routes-using-the-generator-cli","aria-hidden":"true"}},[t._v("#")]),t._v(" Generate routes using the Generator CLI")]),t._v(" "),a("p",[t._v("You can generate new routes using the Structure Generator when generating a new view.")]),t._v(" "),a("blockquote",[a("p",[t._v("For more info check the "),a("router-link",{attrs:{to:"./the-generator.html"}},[t._v("Generator Guide")]),t._v(".")],1)])])},[],!1,null,null,null);e.default=n.exports}}]);