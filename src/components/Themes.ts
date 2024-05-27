
export interface ThemeData {
  name:     string
  body:     string
  back:     string
  text:     string
  extra:    string
  hover03:  string
  popBlock: string
  isLight:  () => boolean
  isDark:   () => boolean
}

export const lightTheme: ThemeData = {
  name:     "light",
  body:     "#EAEEF6",
  back:     "#FFFFFF",
  text:     "#000000",
  extra:    "#565EEF",
  hover03:  "#33399b",
  popBlock: "#D4DBE5",

  isLight(): boolean {
    return true
  },

  isDark(): boolean {
    return false
  },
}

export const darkTheme: ThemeData = {
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
