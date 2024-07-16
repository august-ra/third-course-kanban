import styled from "styled-components"
import * as Shared from "../../SharedStyles"


export const FlashBoxContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${Shared.FlexCenter};
`

export const FlashBoxContent = styled.p.attrs((props) => ({
  $color: props.$bad ? "red": "green",
  $extra: props.$bad ? "#fff0f0" : "#f0fff0",
}))`
  background: ${(props) => props.$extra};
  opacity: 0.7;
  border: 2px solid ${(props) => props.$color};
  box-shadow: 0 0 8px 8px ${(props) => props.$extra};
  border-radius: 13px;
  padding: 18px 10px;
  text-align: center;

  ${Shared.FlexCenter};
`
