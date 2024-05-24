import { FC as ReactFC } from "react"
import Calendar from "../../Calendar/Calendar"
import { Topics, TopicsColors } from "../../../data/topics"


function PopNewCard(): ReactFC {
  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a href="#" className="pop-new-card__close">&#10006;</a>
            <div className="pop-new-card__wrap">
              <form className="pop-new-card__form form-new" id="formNewCard" action="#">
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">Название задачи</label>
                  <input className="form-new__input" type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus={true} />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">Описание задачи</label>
                  <textarea className="form-new__area" name="text" id="textArea" placeholder="Введите описание задачи..."></textarea>
                </div>
              </form>

              <Calendar />
            </div>

            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>

              <div className="categories__themes">
                {
                  Topics.map((item: string, index: number) => {
                    const color: string = TopicsColors[item]

                    return (
                      <div key={index} className={`categories__theme ${color} _active-category`}>
                        <p className={color}>{item}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>

            <button className="form-new__create _hover01" id="btnCreate">Создать задачу</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopNewCard
