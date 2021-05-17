class FormStore {
    constructor() {
        this.store = {}
    }

    setFieldsValue = (newStore) => {
        this.store = { ...this.store, ...newStore }
    }

    getFieldsValue = () => {
        return this.store
    }
}

module.exports = FormStore