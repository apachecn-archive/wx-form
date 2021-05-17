// components/field/index.js
Component({
  behaviors: ['wx://form-field'],
  relations: {
    '../form/index': {
      type: 'parent',
      linked: function() {
      },
      linkChanged: function() {
      },
      unlinked: function() {
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
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: ''
  },

  lifetimes: {
    attached() {

    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange: function (e) {
      this.setData({
        value: e.detail,
      })
    }
  }
})
