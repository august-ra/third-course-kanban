import { FC as ReactFC } from "react"
import Graphics from "../Graphics/Graphics"
import { TopicsColors } from "../../data/topics"


interface CardProps {
  topic: string
  title: string
  date:  string
}

function Card({ topic, title, date }: CardProps): ReactFC {
  const color: string = TopicsColors[topic]

  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          <div className={`card__theme ${color}`}>
            <p className={color}>{topic}</p>
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
