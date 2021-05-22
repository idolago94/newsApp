import { makeAutoObservable } from "mobx"
import { isEqual, xorBy } from "lodash"

class AppStore {
    constructor() {
        makeAutoObservable(this)
    }

    isLoader = false
    myArticles = []

    get getIsLoader() {
        return this.isLoader
    }

    get getMyArticles() {
        return this.myArticles
    }

    showLoader() {
        this.isLoader = true
    }

    hideLoader() {
        this.isLoader = false
    }

    toggleArticleFavourite(article) {
        this.myArticles = xorBy(this.myArticles, [article], (art) => isEqual(art, article))
    }
}

export default new AppStore();