
String.prototype.toDate = function () {
  const array = this.split(".")

  if (array.length !== 3)
    return new Date("99.99")

  if (array[2].length === 2)
    array[2] = `20${array[2]}`
  else if (array[2].length !== 4)
    return new Date("99.99")

  return new Date(array[2], array[1] - 1, array[0])
}
