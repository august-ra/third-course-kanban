import * as Styled from "../components/SharedStyles.js"


export function getCSSForColor(color) {
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
