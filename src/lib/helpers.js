
export function calcUnits(value, unit_0, unit_1, unit_2) {
  let reminder = value % 100

  if (reminder >= 11 && reminder <= 19)
    return unit_0

  reminder = reminder % 10

  if (reminder === 1)
    return unit_1
  else if (reminder >= 2 && reminder <= 4)
    return unit_2
  else
    return unit_0
}
