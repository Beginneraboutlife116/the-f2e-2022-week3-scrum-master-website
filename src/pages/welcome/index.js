import bg1 from "../../assets/bg/bg-1.svg"
import bg2 from "../../assets/bg/bg-2.svg"
import bg3 from "../../assets/bg/bg-3.svg"
import titanMascot from "../../assets/icons/titansoft-mascot.svg"
import { ReactComponent as WelcomeButtonSvg } from "../../assets/icons/welcome-btn-icon.svg"
import { ConfirmButton } from "../../components/buttons"
import { Dialog } from "../../components/dialog"

import "./index.scss"

const Welcome = () => {
  return (
    <>
      <div className="welcome">
        <img src={bg2} alt="中景" className="welcome__bg-2"></img>
        <img src={bg1} alt="遠景" className="welcome__bg-1"></img>
        <img src={bg3} alt="前景" className="welcome__bg-3"></img>
        <a href="#titan" className="welcome__button">
          <h1 className="m_block-end-5">開始探索</h1>
          <button aria-label="開始探索！">
            <WelcomeButtonSvg />
          </button>
        </a>
      </div>
      <div className="welcome__description">
        <div className="welcome__info">
          <Dialog
            type="dialog"
            decorationStyle={{
              scale: "0.5",
              rotate: "225deg",
              left: "94.25%",
              bottom: "-11.5%",
              "--width": "40px",
              "--length": "100px",
              "--border": "7.5px"
            }}
            className="welcome__dialog">
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
            <ConfirmButton className="m_inline-start-auto" />
          </Dialog>
          <img
            src={titanMascot}
            alt="鈦坦科技吉祥物"
            id="titan"
            className="welcome__mascot"></img>
        </div>
      </div>
    </>
  )
}

export default Welcome
