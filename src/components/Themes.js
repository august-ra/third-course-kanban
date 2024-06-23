import * as Shared from "./SharedStyles"


export const lightTheme = {
  name:     "light",
  body:     "#EAEEF6",
  calendar: "#F6EEEA",
  back:     "#FFFFFF",
  text:     "#000000",
  extra:    "#565EEF",
  hover03:  "#33399b",
  popBlock: "#D4DBE5",

  isLight() {
    return true
  },

  isDark() {
    return false
  },

  getCSSForColor(color) {
    switch (color) {
      case "orange":
        return Shared.Orange
      case "purple":
        return Shared.Purple
      case "green":
        return Shared.Green
      default:
        return Shared.Gray
    }
  },
}

export const darkTheme = {
  name:     "dark",
  body:     "#151419",
  calendar: "#151419",
  back:     "#20202C",
  text:     "#FFFFFF",
  extra:    "#FFFFFF",
  hover03:  "#565EEF",
  popBlock: "#4E5566",

  isLight() {
    return false
  },

  isDark() {
    return true
  },

  getCSSForColor(color) {
    switch (color) {
      case "orange":
        return Shared.OrangeNegative
      case "purple":
        return Shared.PurpleNegative
      case "green":
        return Shared.GreenNegative
      default:
        return Shared.Gray
    }
  },
}
