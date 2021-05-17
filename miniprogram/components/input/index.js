// components/input/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e) {
      this.triggerEvent('formitemchange', e.detail.value, {
        bubbles: true,
        composed: true,
        capturePhase: true
      })
    }
  }
})
