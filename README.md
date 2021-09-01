## 📦 Install

```shell
npm install yian -S
```

## Quick Start Vue2.6

```javascript
//main.js

import yian from 'yian';
/* import service from 'your interceptor filepath' */

Vue.use(yian);

const $_Y = {
  /* 一些属性 */
  service, //import your axios interceptor 你的axios全局拦截器
  //ElementUILoading: ture or false Element的loading功能(默认为关)
};

Vue.prototype.$yian = yian.content($_Y);
```

## 🔨 Usage 配置[axios](https://github.com/axios/axios)拦截器

#### ❤️ 配置完成后导入 main.js 入口，作为\$\_Y 属性注入。

```javascript
// create an axios instance
const service = axios.create({});

// request interceptor
service.interceptors.request.use();

// response interceptor
service.interceptors.response.use();

export default service;
```

#### ❤️ Vue 请求规则，支持 axios 原有功能，yian 已添加 axios 在 1000ms 内重复请求限制。

```jsx
export default {
  methods: {
    getList() {
      //举例1
      this.$yian
        .axios({ url: 'user/login', method: 'post', params: { username: admin, password: 123456 } })
        .then(/* ... */);
      //举例2
      this.$yian
        .axios({
          url: '/academic/getAcademicField',
          method: 'get',
          params: { currentPage: 1, pageSize: 10 },
        })
        .then(/* ... */);
    },
  },
};
```

## 🔨 Usage Utils 工具箱

| Utils 方法                       | 用法及介绍                            |
| -------------------------------- | ------------------------------------- |
| deepClone 深拷贝                 | this.\$yian.utils.deepClone(obj)      |
| copyData Vue 源码深拷贝(推荐)    | this.\$yian.utils.copyData(obj)       |
| unique 字符串、数组去重          | this.\$yian.utils.unique(params)      |
| mobileCheck 手机号检验           | this.\$yian.utils.mobileCheck(mobile) |
| unixDate Unix 时间戳转化日期时间 | this.\$yian.utils.unixDate(Unixtime)  |
| isExternal 是否为外链            | this.\$yian.utils.isExternal(link)    |

## 🔨 Usage v-popup 指令打开 el-dialog 弹窗

```html
//Vue Click事件标签处使用v-popup指令案例
<div v-for="(item, index) in List" :key="index">
  <el-button
    id="`${index}_order_shipping`"
    v-popup.orderShipping="{a:index, b:item}"
    type="primary"
    module="order"
    width="1200"
    >发货</el-button
  >
</div>
```

#### ❤️ 相关属性用于 el-dialog，写在 Click 事件标签上，如上。

##### attribute 属性列表

> - id 必须，type: string，作用:key 值区别于其他按钮控制弹窗
> - v-popup 指令内容 必须， type: Any， 作用:传入 el-dialog 组件的值
> - v-popup.[xxx] 指令修饰符 必须， 作用:例如 v-popup.orderShipping 中的 orderShipping，和定制组件注册时所需参数一直，否则会有问题!
> - module 必须， type: String， 作用:el-dialog 定制组件隶属主模块名称，和定制组件注册时所需参数一直，否则会有问题!
> - title 非必须， type: String，作用:el-dialog 窗口标题
> - hide_footer 非必须，type: Boolean， 作用:是否隐藏页脚，默认为 false
> - hide_cancel 非必须，type: Boolean， 作用:是否隐藏取消按钮，默认为 false
> - sure_btn 非必须，type: String， 作用:确认按钮文字，默认为'确定'
> - width 非必须，type: Number， 作用:el-dialog 宽度，默认为 730px
> - top 非必须，type: String， 作用:el-dialog 距顶高度，默认为 15vh
> - action 非必须，type: String， 作用:父组件上的回调事件名称

#### ❤️ el-dialog 自定义组件

```html
//orderShipping组件内容
<template>
  <div>
    orderShipping主内容块
  </div>
</template>

<script>
  export default {
    methods: {
      //affirm事件必须写上，此方法已与确认按钮耦合。
      //handleClosed方法控制el-dialog窗口关闭
      affirm(vlm) {
        vlm.handleClosed();
      },
    },
  };
</script>
```

#### ❤️ el-dialog 自定义组件注册

> - 项目结构目录建议

```
src
├── layout //公共布局
├── router //vue-router
│   └── index.js
├── store //vuex
│   └── index.js
├── styles //公共样式
│   └── ....scss
├── icons  //icons目录
│   ├── svg
│   │   └── ....svg
│   └── js
│       └── symbolIcon.js
├── components //公用组件
│   └── ....vue
├── views  //页面
│   └── order  //业务模块名
│       ├── components //隶属模块组件
│       │   └── orderShipping.vue
│       └── index.js
├── App.vue
└── main.js
```

> - 建议的目录路径/src/views/[隶属模块名]/index.js 导出组件模块

```javascript
import yian from 'yian';
import orderShipping from './components/orderShipping.vue';
const modules = {};

modules.install = function() {
  //'order','orderShipping'与attribute 属性列表中v-popup.[xxx] 指令修饰符和module需一致
  yian.component('order', 'orderShipping', orderShipping);
};

export default modules;
```

> - webpack 入口文件中用 Vue.use()使用插件的形式全局注入组件

```javascript
import order from '@/views/order/index.js';

Vue.use(order);
```

## 🔨 Usage Icon 组件

> - icon 目录参考目录建议
> - js 目录中放入 Iconfont Symbol 代码
> - svg 目录留作本地 icon 用，使用请在 main.js 中加入下面代码

```javascript
//注意@别名配置
const req = require.context('@/icons/svg', false, /\.svg$/);
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
requireAll(req);
```

> - 使用

```html
//外链模式和Iconfont模式都支持，Iconfont图标名去掉前半部分'icon-'即可，本地svg输入文件名即可
<svg-icon icon-class="shouye" />
<svg-icon icon-class="https://panjiachen.github.io/vue-element-admin-site/home.png" />
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021-present, Marhoo
