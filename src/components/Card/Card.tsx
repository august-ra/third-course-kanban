import { JSX } from "react"
import Graphics from "../Graphics/Graphics"
import { ThemesColors } from "../../data/themes"


interface CardProps {
  tag:   string
  title: string
  date:  string
}

function Card({ tag, title, date }: CardProps): JSX.Element {
  const color: string = ThemesColors[tag]

  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          <div className={`card__theme ${color}`}>
            <p className={color}>{tag}</p>
          </div>

          <a href="#popBrowse" target="_self">
            <div className="card__btn">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </div>

        <div className="card__content">
          <a href="" target="_blank">
            <h3 className="card__title">{title}</h3>
          </a>

          <div className="card__date">
            <Graphics.Calendar />

            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
