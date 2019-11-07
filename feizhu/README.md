# feizhu

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

tips:
  1. 头部组件的下拉菜单中的下拉列表部分使用绝对定位，因其脱离文档流，导致不会显示完全，但如果其父容器高度随着下拉菜单出现而增大则会影响其后的组件，使其后的组件相对文档的位置下移
  2. created 生命周期中发送 axios请求后，在这个组件的其后的生命周期依旧打印不出设置的data 中的数据。props传递给子组件也相似。
  3. provide / inject 给子孙组件传递一个动态异步的数据时（ps: axios给data 里设置值）子孙组件不能得到这个数据。