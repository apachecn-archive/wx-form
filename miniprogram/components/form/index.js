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
      const { name } = this.properties

      if (!wx.bxform) {
        wx.bxform = {}
      }
      if (typeof name === 'string' && name.length > 0) {
        wx.bxform[name] = this._getForm(this)
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _getForm: (context) => {
      return {
        getFieldsValue: context._getFieldsValue.bind(context),
        getFieldsError: context._getFieldsError.bind(context)
      }
    },
    
    _getFieldsValue: function () {
      const items = this.getRelationNodes('../field/index');
      const values = items.reduce((acc, item) => {
        return Object.assign(acc, item.getData())
      }, {});
      return values
    },

    _getFieldsError: function () {
      const items = this.getRelationNodes('../field/index');
      const values = items.reduce((acc, item) => {
        const err = item.getError()
        if (err) {
          return acc.concat(err)
        }
        return acc
      }, []);
      return values
    },

    _validateFields: function () {
      const items = this.getRelationNodes('../field/index');
      
    },
    
    handleSubmit: function (e) {
      this.triggerEvent('bxsubmit', {
        errors: this._getFieldsError(),
        values: this._getFieldsValue()
      }, {
        bubbles: true,
        composed: true,
        capturePhase: true
      })
    }
  }
})
