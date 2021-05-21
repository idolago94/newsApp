import { makeAutoObservable } from "mobx"

class AppStore {
    constructor() {
        makeAutoObservable(this)
    }

    isLoader = false

    get getIsLoader() {
        return this.isLoader
    }

    showLoader() {
        this.isLoader = true
    }

    hideLoader() {
        this.isLoader = false
    }
}

export default new AppStore();