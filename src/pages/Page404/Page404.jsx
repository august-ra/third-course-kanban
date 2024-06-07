import React from "react"
import { Link } from "react-router-dom"
import { Pages } from "../../lib/pages"
import * as Styled from "./Page404.styled"


function Page404() {
  return (
    <Styled.Page404Container>
      <img src="./images/404.png" />
      <Styled.Page404TextBlock>
        <Styled.Page404Title>Страница не найдена</Styled.Page404Title>
        <Styled.Page404Description>
          Страница, на которую Вы перешли, не найдена. Возможно, вы ввели неправильный адрес, или страница была перемещена.
        </Styled.Page404Description>
        <Link to={Pages.MAIN}>Перейти на главную</Link>
      </Styled.Page404TextBlock>
    </Styled.Page404Container>
  )
}

export default Page404
