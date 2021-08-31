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
  /* service */
  //import your axios interceptor 你的axios全局拦截器
  //ElementUILoading: ture or false Element的loading功能(默认为关)
};

Vue.prototype.$yian = yian.content($_Y);
```

## 🔨 Usage 配置[axios](https://github.com/axios/axios)拦截器

#### ❤️ 配置好你的拦截器，并把它导入到 main.js 入口中，作为\$\_Y 属性注入。

```javascript
// create an axios instance
const service = axios.create({});

// request interceptor
service.interceptors.request.use();

// response interceptor
service.interceptors.response.use();

export default service;
```

#### ❤️ Vue请求规则，支持axios原有功能，yian已添加axios在1000ms内重复请求限制。
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

## 🔨 Usage Utils工具箱


