import bg1 from "../../assets/bg/bg-1.svg"
import bg2 from "../../assets/bg/bg-2.svg"
import bg3 from "../../assets/bg/bg-3.svg"
import titanMascot from "../../assets/icons/titansoft-mascot.svg"
import "./index.scss"

const Welcome = () => {
  return (
    <div className="welcome">
      <img src={bg1} alt="遠景" className="welcome__bg-1"></img>
      <img src={bg2} alt="中景" className="welcome__bg-2"></img>
      <img src={bg3} alt="前景" className="welcome__bg-3"></img>
      <a href="#titan" className="welcome__cta">
        <h1>開始探索</h1>
        <button aria-label="開始探索！"></button>
      </a>
      <div id="titan" className="welcome__description">
        <img src={titanMascot} alt="鈦坦科技吉祥物"></img>
        <dialog open>SaySomething</dialog>
      </div>
    </div>
  )
}

export default Welcome
