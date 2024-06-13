
const UserInfo = {
  data: "",

  read() {
    const data = localStorage.getItem("userInfo")

    if (data)
      this.data = JSON.parse(data)
    else
      this.data = ""

    return this.data
  },

  save(userInfo) {
    this.data = userInfo

    localStorage.setItem("userInfo", JSON.stringify(userInfo))
  },

  clear() {
    this.data = ""

    localStorage.removeItem("userInfo")
  },
}

export default UserInfo
