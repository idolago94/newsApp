import { makeAutoObservable } from "mobx"
import { isEqual, xorBy } from "lodash"

class AppStore {
    constructor() {
        makeAutoObservable(this)
    }

    isLoader = false
    myArticles = []
    user = null

    get getIsLoader() {
        return this.isLoader
    }

    get getMyArticles() {
        return this.myArticles
    }

    get getUser() {
        return this.user
    }

    setUser(data) {
        this.user = data
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