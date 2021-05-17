import FormStore from './form-store'

Component({
  relations: {
    '../field/index': {
      type: 'child',
      linked: function (target) {
        // this._initItem(target);
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
    name: String,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes: {
    attached() {
      if (!wx.formStore) {
        wx.formStore = {}
      }

      // if (wx.formStore[this.data.name]) {
      //   throw new Error('已存在同名的form')
      // }

      wx.formStore[this.data.name] = new FormStore()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleSubmit(e){
      console.log(e);
      this.triggerEvent('bxsubmit', e, {
        bubbles: true,
        composed: true,
        capturePhase: true
      })
    }
  }
})
