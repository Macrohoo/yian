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

  //举例1: ElementUILoading: ture [Element的loading功能(默认为false)，对非get以外的请求开启了本功能，get请求时采用ElementUI官方指令方式按需插入]

  //举例2:  baseVersionApi: 'v2‘ [接口的baseversion预留，如 '/v2' 或者 '/api']
};

Vue.prototype.$yian = yian.content($_Y);
```

## 🔨 Usage 配置[axios](https://github.com/axios/axios)拦截器

#### ⚡️ 配置完成后导入 main.js 入口，作为\$\_Y 属性注入。

```javascript
// create an axios instance
const service = axios.create({});

// request interceptor
service.interceptors.request.use();

// response interceptor
service.interceptors.response.use();

export default service;
```

#### ⚡️💥🔥 Vue 请求规则，支持 axios 原有功能，yian 已添加 axios 在 1000ms 内重复请求限制。

```jsx
export default {
  methods: {
    getList() {
      //举例1 默认为
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
      //举例3
      this.$yian.axios({
        url: '/v2/qiniu/upload',
        method: 'post',
        params: formData,
        headers: { 'content-type': 'multipart/form-data' },        
      })  
    },
  },
};
```
#### ❤️ 隐藏功能 ❤️ yian还做了axios的深度二封Proxy。支持更简便的请求写法，具体方法可以看一下源代码。


## 🚀🚀🚀 Usage Utils 工具箱

| Utils 方法                       | 用法及介绍                            |
| -------------------------------- | ------------------------------------- |
| deepClone 深拷贝                 | this.\$yian.utils.deepClone(obj)      |
| copyData Vue 源码深拷贝(推荐)    | this.\$yian.utils.copyData(obj)       |
| unique 字符串、数组去重          | this.\$yian.utils.unique(params)      |
| mobileCheck 手机号检验           | this.\$yian.utils.mobileCheck(mobile) |
| unixDate Unix 时间戳转化日期时间 | this.\$yian.utils.unixDate(Unixtime)  |
| isExternal 是否为外链            | this.\$yian.utils.isExternal(link)    |

## 🚀🚀🚀 Usage v-popup 指令打开 el-dialog 弹窗

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

#### 💥 标签attribute 属性列表 [相关属性用于 el-dialog，却写在 Click 事件标签上，如上]

| 属性    |  可选性  |    类型  | 默认值   | 作用     |
|---------|---------|---------|---------|---------|
| id | 必须necessary | String | —— | key值，区别于其他按钮指令控制的el-dialog弹窗 |
| v-popup | 必须necessary | Any | —— | 传入el-dialog组件的值 |
| v-popup.[xxx] | 必须necessary | —— | —— | 如 v-popup.orderShipping 中的 orderShipping，和组件注册时所需参数一直，否则会有问题! |
| module | 必须necessary | String | —— | el-dialog组件隶属主模块名称，和组件注册时所需参数一直，否则会有问题! |
| title | 非必须unnecessary | String | 操作窗口 | el-dialog窗口标题 |
| hide_footer | 非必须unnecessary | Boolean | false | 是否隐藏页脚 |
| hide_cancel | 非必须unnecessary | Boolean | false | 是否隐藏取消按钮 |
| sure_btn | 非必须unnecessary | String | 确定 | 确认按钮文字修改 |
| width | 非必须unnecessary | Number | 730px | el-dialog宽度 |
| top | 非必须unnecessary | String | 15vh | el-dialog距顶高度 |
| action | 非必须unnecessary | function | —— | 父组件上的回调事件，如存在，el-dialog组件打开时即调用 |

#### ❤️ el-dialog组件示例

```html
//orderShipping组件内容
<template>
  <div>
    orderShipping主内容块
  </div>
</template>

<script>
  export default {
    //props须写成这样才能传入值
    props: ['value'],
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

### ⚡️💥🔥 el-dialog组件注册

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

## 🚀🚀🚀 Usage Icon 组件

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

## 🚀🚀🚀 Usage Upload 组件

#### 💥 标签attribute 属性列表

| 属性    |  可选性  |    类型  | 默认值   | 作用     |
|---------|---------|---------|---------|---------|
| action | 必须necessary | function(file, fields, [...thumb可选]) | ——— | 上传操作钩子，请保证是一个promise，内部有请求体，且保证resolve和reject出结果。file是数组，元素是一个个formData对象，fields是fields属性传入的对象，[thumb可选]Canvas画出的缩略图Base64数据，multiple属性为true时thumb是一个数组，包含base64元素；为false时thumb是一个base64数据。 |
| afterUpload | 必须necessary | function(res) | ——— |文件上传后的钩子，处理结果 |
| multiple | 非必须unnecessary | Boolean | false |是否多文件上传|
| needCanvas | 非必须unnecessary | Boolean | false | 是否需要截取image、vedio画面第一帧 |
| autoUpload | 非必须unnecessary | Boolean | true |是否自动上传。当选择false时，selectX事件会触发，且action钩子、afterUpload钩子、needCanvas属性都会失效! |
| btn_words | 非必须unnecessary | String | 上传图片 | 按钮文字内容 |
| size | 非必须unnecessary | String | medium | 按钮大小，支持el系 medium / small / mini 三种大小 |
| color_type | 非必须unnecessary | String | primary | 按钮颜色，支持el系 primary / success / warning / danger / info / text |
| fields | 非必须unnecessary | Object | null | body请求体附带的fields字段 |

#### 💥 标签Events 事件列表

|事件名称  |说明  |回调参数  |
|---------|---------|---------|
| selectX | autoUpload属性为false时，此事件存在 | 上传文件时选中的文件生成的数组，元素是文件formData对象 |
|linkBase64| 当needCanvas和multiple属性同时存在时，此事件存在 | 是一个数组，元素是选中文件的Base64路径 |


#### ❤️ ya-upload组件示例
```html
<ya-upload
  @linkBase64="(val) => (Alinkimg1 = val)"
  :action="uploadNow"
  :afterUpload="uploadAfter"
  :btn_words="multiple ? (needCanvas ? '批量选择' : '批量上传') : '单个上传'"
  size="mini"
  :autoUpload="true"
  :needCanvas="needCanvas"
  :fields="{ type: '1', group_id: '4' }"
  :multiple="multiple"
/>
<script>
  export default {
    methods: {
      uploadNow(file, fields, thumb) {
        return new Promise((resolve, reject) => {
          let formData = new FormData();
          formData.append('thumbnail', thumb);
          formData.append('group_id', fields.group_id);
          formData.append('type', fields.type);
          formData.append('file', file[0]);
          this.$yian
            .axios({
              url: '/v2/qiniu/upload',
              method: 'post',
              params: formData,
              headers: { 'content-type': 'multipart/form-data' },
            })
            .then((res) => {
              resolve(res);
            })
            .catch((err) => {
              reject(err);
            });
        });
      },
      uploadAfter(res) {
        console.log(res);
      }      
    },
  };
</script>  
```

## 🚀🚀🚀 Usage Checkbox 组件
#### 💥 标签attribute 属性列表

| 属性     |  可选性  |   类型  |  默认值  |   作用   |
|---------|---------|---------|---------|---------|
|selectData|必须|Array|——|已经被选择的内容Selected|
|options|必须|Object|——|指定input原始标签绑定的value值，且请把图片的文字放入options的name或者title字段|
|linkSrc|非必须|String|https://kodo.mboke.top/le-icon-folder.png|外链图片地址|
|width|非必须|Number|84px|主盒子宽度|
|height|非必须|Number|84px|主盒子长度|
|srcWidth|非必须|Number|64px|链接图宽度|
|srcHeight|非必须|Number|64px|链接图长度|

![组件形态](https://kodo.mboke.top/ya-checkbox.gif)

#### 💥 标签Events 事件列表

|事件名称  |说明  |回调参数  |
|---------|---------|---------|
|selectX  | 当绑定的值value选中或取消发生变化时触发的事件 | 选中后的value |

#### ❤️ ya-checkbox组件示例
```html
<ya-checkbox
  @selectX="(val) => (selectMaterials = val)"
  :options="item"
  :selectData="selectMaterials"
  :linkSrc="item.type === '1' ? item.url : item.thumbnail"
  :srcWidth="64"
  :srcHeight="64"
  :width="104"
  :height="104"
></ya-checkbox>
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021-present, Marhoo
