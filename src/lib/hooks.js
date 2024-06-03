import * as Styled from "../components/SharedStyles"


export function getCSSForColor(theme, color) {
  if (theme.isDark()) {
    switch (color) {
      case "orange":
        return Styled.OrangeNegative
      case "purple":
        return Styled.PurpleNegative
      case "green":
        return Styled.GreenNegative
      default:
        return Styled.Gray
    }
  } else {
    switch (color) {
      case "orange":
        return Styled.Orange
      case "purple":
        return Styled.Purple
      case "green":
        return Styled.Green
      default:
        return Styled.Gray
    }
  }
}
