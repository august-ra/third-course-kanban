import { Months } from "../data/datesParts"


function zeroPad(num, places = 2) {
  return String(num).padStart(places, "0")
}

/* prints */

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

/* constructors */

Date.prototype.copy = function () {
  return new Date(this.getTime())
}

Date.prototype.getBeggingOfDay = function () {
  const date = this.copy()
  date.setHours(0, 0, 0, 0)

  return date
}

Date.prototype.getBeggingOfMonth = function () {
  const date = this.getBeggingOfDay()
  date.setDate(1)

  return date
}

/* generators */

Date.prototype.getFiveOrSixWeeks = function () {
  const date = new Date(this)
  const result = []

  function addDate(date, day, dayOfWeek, other) {
    result.push({
      date:   date.copy(),
      number: day,
      day:    dayOfWeek,
      other:  other,
    })
  }

  /* recursion */
  const fillLeftPart = function (date, other = false) {
    const day       = date.getDate()
    const dayOfWeek = date.getDay()

    if (dayOfWeek > 1 || dayOfWeek === 0) {
      const date2 = date.copy()
      fillLeftPart(new Date(date2.setDate(date2.getDate() - 1)), true)
    }

    addDate(date, day, dayOfWeek || 7, other)
  }

  date.setDate(1)

  let dayOfWeek = date.getDay()
  let day       = 1

  if (dayOfWeek > 1 || dayOfWeek === 0)
    fillLeftPart(date)
  else
    addDate(date, day, dayOfWeek, false)

  let calendarLimit = 42

  while (result.length < calendarLimit) {
    date.setDate(date.getDate() + 1)
    ++day
    dayOfWeek = dayOfWeek > 6 ? 1 : dayOfWeek + 1

    const isOtherMonth = date.getMonth() !== this.getMonth() || date.getFullYear() !== this.getFullYear()

    if (isOtherMonth) {
      day = date.getDate()

      if (result.length === 35)
        break
      else if (result.length < 35)
        calendarLimit = 35
    }

    addDate(date, day, dayOfWeek, isOtherMonth)
  }

  return result
}

/* cache */

const cachedMonths = {
  length: 0,

  getCalendar(date) {
    const print = date.shortBackwardPrint()

    if (this.hasOwnProperty(print))
      return this[print]

    const result = date.getFiveOrSixWeeks()

    cachedMonths[print] = result
    ++cachedMonths.length

    return result
  },
}

export default cachedMonths
