
const API = {
  tasksURI:  "https://wedev-api.sky.pro/api/kanban", // GET (read) + POST (send)
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
          return { error: true, code: null, message: "Запрос на сервер не выполнен! Проверьте подключение к сети Интернет." }
        else
          return { error: true, code: statusCode, message: error.message }
      })
  },


  readTasksFromServer(token) {
    const params = {
      headers: { Authorization: `Bearer ${token}` },
    }

    return this.getDataFromEndpoint(this.tasksURI, params)
  },

  createTaskOnServer(task, token) {
    const params = {
      method:  "POST",
      headers: { Authorization: `Bearer ${token}` },
      body:    JSON.stringify({
        title:       task.title,
        topic:       task.topic,
        status:      task.status,
        description: task.description,
        date:        task.date,
      }),
    }

    return this.getDataFromEndpoint(this.tasksURI, params)
  },

  deleteTaskOnServer(taskID, token) {
    const params = {
      method:  "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }

    return this.getDataFromEndpoint(`${this.tasksURI}/${taskID}`, params)
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
