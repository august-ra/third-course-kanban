import * as Styled from "../components/SharedStyles"
import { RuleSet } from "styled-components/dist/types"
import { ThemeData } from "../components/Themes"


export function getCSSForColor(theme: ThemeData, color: string): RuleSet<object> {
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
