
export const lightTheme = {
  name:     "light",
  body:     "#EAEEF6",
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
}

export const darkTheme = {
  name:     "dark",
  body:     "#151419",
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
}
