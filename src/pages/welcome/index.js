import bgFront from "../../assets/bg/bg-front.svg"
import titanMascot from "../../assets/icons/titansoft-mascot.svg"
import { ReactComponent as WelcomeButtonSvg } from "../../assets/icons/welcome-btn-icon.svg"
import { ConfirmButton } from "../../components/buttons"
import { Dialog } from "../../components/dialog"
import { useRef } from "react"

import "./index.scss"

const Welcome = ({ onClick }) => {
  const descriptionRef = useRef(null)
  const toStart = () => {
    descriptionRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="welcome__container">
      <div className="welcome">
        <img src={bgFront} alt="前景" className="welcome__bg_front"></img>
        <button
          aria-label="開始探索！"
          onClick={toStart}
          className="welcome__button">
          <h1 className="m_block-end-5">開始探索</h1>
          <WelcomeButtonSvg className="m_inline-auto" />
        </button>
      </div>
      <div className="welcome__description" ref={descriptionRef}>
        <div className="welcome__info" id="info">
          <Dialog type="dialog" className="welcome__dialog">
            <p className="h3">
              歡迎來到Scrum新手村~我是鈦坦吉祥物Tica!
              <br /> 首先恭喜你加入 TT 資訊小組！
              <br />
              在正式加入專案開發之前，需要請你先了解
              <br />
              <strong>Scrum 的流程與精神！</strong>
              <br />
              接受挑戰任務，成為Scrum大師吧～
            </p>
            <ConfirmButton className="m_inline-start-auto" onClick={onClick} />
          </Dialog>
          <img
            src={titanMascot}
            alt="鈦坦科技吉祥物"
            className="welcome__mascot"></img>
        </div>
      </div>
    </div>
  )
}

export default Welcome
