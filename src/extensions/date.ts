import { Months } from "../data/datesParts"


function zeroPad(num, places = 2) {
  return String(num).padStart(places, "0")
}

Date.prototype.shortBackwardPrint = function () {
  return `${this.getFullYear()}-${zeroPad(this.getMonth() + 1)}-${zeroPad(this.getDate())}`
}

Date.prototype.printMonthAndYear = function () {
  return `${Months[this.getMonth()]} ${this.getFullYear()}`
}

Date.prototype.printShort = function () {
  const parts = []
  parts.push(zeroPad(this.getDate(), 2))
  parts.push(".")
  parts.push(zeroPad(this.getMonth() + 1, 2))
  parts.push(".")
  parts.push(this.getFullYear().toString().substring(2))

  return parts.join("")
}

Date.prototype.print = function (withSeconds = false) {
  const parts = []
  parts.push(zeroPad(this.getDate(), 2))
  parts.push(".")
  parts.push(zeroPad(this.getMonth() + 1, 2))
  parts.push(".")
  parts.push(this.getFullYear().toString().substring(2))
  parts.push(" ")
  parts.push(zeroPad(this.getHours(), 2))
  parts.push(":")
  parts.push(zeroPad(this.getMinutes(), 2))

  if (withSeconds) {
    parts.push(":")
    parts.push(zeroPad(this.getSeconds(), 2))
  }

  return parts.join("")
}

Date.prototype.copy = function () {
  return new Date(this.getTime())
}
