import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Pages from "../../../data/pages"
import { TasksContext } from "../../../context/TasksContext/TasksContext"
import Calendar from "../../../components/Calendar/Calendar"
import StyledButton from "../../../components/Shared/Button/StyledButton"
import { prevent } from "../../../lib/hooks"


function PopBrowse() {
  const navigate = useNavigate()
  const tasksContext = useContext(TasksContext)
  const { id } = useParams()
  const task = tasksContext.getTaskById(id)

  function closeThis() {
    navigate(Pages.MAIN)
  }

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container" onClick={closeThis}>
        <div className="pop-browse__block" onClick={prevent}>
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

              <Calendar activeDate={task.date} />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">{task.topic}</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <StyledButton $hasAccent={false} type="button">Редактировать задачу</StyledButton>
                <StyledButton $hasAccent={false} type="button">Удалить задачу</StyledButton>
              </div>
              <StyledButton $hasAccent={true} type="button" onClick={closeThis}>Закрыть</StyledButton>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <StyledButton $hasAccent={true} type="button"><a href="#">Сохранить</a></StyledButton>
                <StyledButton $hasAccent={false} type="button"><a href="#">Отменить</a></StyledButton>
                <StyledButton $hasAccent={false} id="btnDelete" type="button">Удалить задачу</StyledButton>
              </div>
              <StyledButton $hasAccent={true} type="button" onClick={closeThis}>Закрыть</StyledButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopBrowse
