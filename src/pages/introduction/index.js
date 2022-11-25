import Progress from "../../components/progress"
import productOwner from "../../assets/characters/product-owner.svg"
import scrumMaster from "../../assets/characters/scrum-master.svg"
import developmentTeam from "../../assets/characters/development-team.svg"
import { StepButton } from "../../components/buttons"
import "./index.scss"

const Introduction = () => {
  return (
    <section className="p_inline-8 introduction">
      <Progress />
      <h1>角色介紹</h1>
      <ul className="introduction__list">
        <li className="introduction__item character">
          <img
            src={productOwner}
            alt="產品負責人"
            className="character__icon"
          />
          <div className="character__description">
            <h2>產品負責人</h2>
            <h3>Product Owner</h3>
          </div>
          <p className="character__duty">
            產品方向及願景，定義產品細節、優先級別、交付時間，清楚的表達及排序產品待辦事項。
          </p>
        </li>
        <li className="introduction__item character">
          <img src={scrumMaster} alt="敏捷教練" className="character__icon" />
          <div className="character__description">
            <h2>敏捷教練</h2>
            <h3>Scrum Master</h3>
          </div>
          <p className="character__duty">
            確保開發團隊遵循Scrum的價值觀，使團隊能正確且合理地運作。教育組織內部，幫助團隊理解Scrum。
          </p>
        </li>
        <li className="introduction__item character">
          <img
            src={developmentTeam}
            alt="開發團隊"
            className="character__icon"
          />
          <div className="character__description">
            <h2>開發團隊</h2>
            <h3>Development Team</h3>
          </div>
          <p className="character__duty">
            負責開發與交付產品，可為跨領域團隊，由設計師、工程師等不同專業人士組成。
          </p>
        </li>
      </ul>
      <footer>
        <StepButton />
      </footer>
    </section>
  )
}

export default Introduction
