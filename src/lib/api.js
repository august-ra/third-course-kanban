
const API = {
  signInURI: "https://wedev-api.sky.pro/api/user/login", // POST
  signUpURI: "https://wedev-api.sky.pro/api/user", // POST

  getDataFromEndpoint(endpoint, params) {
    let statusCode = 0

    return fetch(endpoint, params)
      .then((response) => {
        statusCode = response.status

        return response.json()
      })
      .then((data) => {
        if (statusCode >= 400)
          throw new Error(data.error)

        return data
      })
      .catch((error) => {
        if (error.message === "Failed to fetch")
          return { code: 499, error: "Запрос на сервер не выполнен, проверьте подключение к Интернет" }
        else
          return { code: statusCode, error: error.message }
      })
  },

  signIn(login, password) {
    const params = {
      method: "POST",
      body:   JSON.stringify({
        login:    login,
        password: password,
      }),
    }

    return this.getDataFromEndpoint(this.signInURI, params)
  },

  signUp(name, login, password) {
    const params = {
      method: "POST",
      body:   JSON.stringify({
        name:     name,
        login:    login,
        password: password,
      }),
    }

    return this.getDataFromEndpoint(this.signUpURI, params)
  },
}

export default API
