import bg1 from "../../assets/bg/bg-1.svg"
import bg2 from "../../assets/bg/bg-2.svg"
import bg3 from "../../assets/bg/bg-3.svg"
import titanMascot from "../../assets/icons/titansoft-mascot.svg"
import { ReactComponent as WelcomeButtonSvg } from "../../assets/icons/welcome-btn-icon.svg"
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
          <div>SaySomething</div>
          <img src={titanMascot} alt="鈦坦科技吉祥物" id="titan"></img>
        </div>
      </div>
    </>
  )
}

export default Welcome
