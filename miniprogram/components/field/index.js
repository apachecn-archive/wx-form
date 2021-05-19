import Schema from '../common/async-validator/index';
Component({
  relations: {
    '../form/index': {
      type: 'parent',
      linked: function () {
      },
      linkChanged: function () {
      },
      unlinked: function () {
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    label: {
      type: String
    },
    name: {
      type: String
    },
    rules: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: '',
    isValidate: false,
    error: null
  },

  lifetimes: {
    attached() {
      const { name, rules } = this.properties
      console.log(name, rules);
      const descriptor = {
        [name]: rules
      }
      this.validator = new Schema(descriptor)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getData: function () {
      const { name } = this.properties
      const { value } = this.data
      return {
        [name]: value
      }
    },
    getError: function () {
      const { error } = this.data
      return error
    },
    getName: function () {

    },
    getValue: function () {

    },
    validate: function (data) {
      const values = data || this.getData()
      this.validator.validate(values, (error) => {
        console.log(error);
        this.setData({
          error
        })
      })
    },
    onChange: function (e) {
      const { name } = this.properties

      this.validate({
        [name]: e.detail
      })
      this.setData({
        value: e.detail,
      })
    }
  }
})
