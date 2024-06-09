import * as Shared from "../components/SharedStyles"


export function getCSSForColor(theme, color) {
  const color_name = `${theme.name}_${color}`

  switch (color_name) {
    case "light_orange":
      return Shared.Orange
    case "light_purple":
      return Shared.Purple
    case "light_green":
      return Shared.Green
    case "dark_orange":
      return Shared.OrangeNegative
    case "dark_purple":
      return Shared.PurpleNegative
    case "dark_green":
      return Shared.GreenNegative
    default:
      return Shared.Gray
  }
}


export function prevent(event) {
  event.preventDefault()
  event.stopPropagation()
}
