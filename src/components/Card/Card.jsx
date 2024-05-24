import React from "react"
import * as Graphics from "../Graphics/Graphics"
import { TopicsColors } from "../../data/topics"


function Card({ topic, title, date }) {
  const color = TopicsColors[topic]

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
