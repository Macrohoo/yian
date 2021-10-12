import install from './install.js'
import youstructor from './utils/yonstructor'
import api from './utils/api'
import utils from './utils/utils'
import Vue from 'vue';

export default class yian {
  /**
   * 组建列表
   * @type {Object}
   */
  static components = {};

  static install() {}

  static content(config = {}) {
    // After the content method is called, return an instance of the core structure of yourstructor, and then mount it to the Vue instance method
    return this.get_proxy(config)
  }

  //Proxy Constructor
  static get_proxy(config) {
    var _Proxy = new Proxy(new youstructor(config, this), {
      _validator: {},
      _upload: false,
      get: function(target, property, receiver) {
        if(property in target) {
          //the instance attributes of youstructor, such as utils
          return target[property]
        } else {
          if(property == 'then') {
            let data
            if(this._upload) {
              data = this._validator
              this._upload = false
            } else {
              //the logic processing of youstructor's request then method
              data = utils.copyData(this._validator)
            }
            this._validator = {}
            //Return the (pre-function) that needs to be processed before the then method
            return async argumentResolve => {
              let returned = new Promise((reslove, reject) => {
                new api(data, target)
                  .then(value => {
                    reslove(value);
                  })
                  .catch(error => {
                    reject(error);
                  });
              });
              //The pre-data is processed first after the execution of 'then'
              const reverse = await returned
              return argumentResolve(reverse)
            }
          } else {
            let self = this
            //此处匿名函数不能使用()=>,会导致内部arguments指向的是上一层
            if(property == 'uploadFormData') {
              self._upload = true
            }
            return function() {
              //This step is the core step of processing all other methods before then, performing a proxy on them, and storing the relevant parameters.
              self._validator[property] = arguments || ''
              return _Proxy
            }
          }
        }
      }
    })
    return _Proxy
  }

/**
 *
 * @param {String} id [联动组件主模块名称]
 * @param {String} name [联动组件popup指令修饰符名称]
 * @param {Object} component [真实组件选项对象，Vue源码中Vue.component会自动调用 Vue.extend]
 * @returns
 */
  static component(id, name, component) {
    if (id == 'components') {
      Vue.component(name, component);
    } else {
      const key = id + '_' + name;
      if (id && name && component) {
        yian.components[key] = component;
      }
      if (id && name) {
        return yian.components[key] || false;
      }
    }
  }
}

yian.install = install
