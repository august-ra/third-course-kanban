import React from "react"
import { Link, useParams } from "react-router-dom"
import { Pages } from "../../../lib/pages"
import Calendar from "../../../components/Calendar/Calendar"
import { StyledButton } from "../../../components/Shared/Button/StyledButton"
import { Tasks } from "../../../data/tasks"


function PopBrowse() {
  const { id } = useParams()
  const numericId = Number(id)
  const task = Tasks.filter((task) => task.id === numericId)[0]

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{task.title}</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">{task.topic}</p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _gray">
                  <p className="_gray">{task.status}</p>
                </div>
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                  <textarea className="form-browse__area" name="text" id="textArea01" readOnly placeholder="Введите описание задачи..." value={task.description} />
                </div>
              </form>

              <Calendar activeDate={task.date.toDate()} />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">{task.topic}</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <StyledButton $isAccent={false}>Редактировать задачу</StyledButton>
                <StyledButton $isAccent={false}>Удалить задачу</StyledButton>
              </div>
              <StyledButton $isAccent={true}><Link to={Pages.MAIN}>Закрыть</Link></StyledButton>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <StyledButton $isAccent={true}><a href="#">Сохранить</a></StyledButton>
                <StyledButton $isAccent={false}><a href="#">Отменить</a></StyledButton>
                <StyledButton $isAccent={false} id="btnDelete">Удалить задачу</StyledButton>
              </div>
              <StyledButton $isAccent={true}><Link to={Pages.MAIN}>Закрыть</Link></StyledButton>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PopBrowse
