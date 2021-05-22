import Config from 'react-native-config'

class Api {
    GetNews() {
        return handleFetch('news', 'GET')
    }
}
export default new Api()

const handleFetch = async (path, method) => {
    let url = 'http://api.mediastack.com/v1/' + path + '?access_key=6391ae6353b550832af2d7265364c72e'//`${Config.API_URL}${path ? path : ''}?access_key=${Config.API_KEY}`
    console.log("handleFetch -> url", url)
    let init = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }
    let response = await fetch(url, init)

    if (response.status > 200) {
        return Promise.reject(await response.json())
    }

    return await response.json()
}