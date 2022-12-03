import { ConfirmButton } from "../../components/buttons"
import Dialog from "../../components/dialog"
import developmentTeamAvatar from "../../assets/characters/development-team-avatar.svg"
import productOwnerAvatar from "../../assets/characters/product-owner-avatar.svg"
import scrumMasterAvatar from "../../assets/characters/scrum-master-avatar.svg"
import whiteStone from "../../assets/icons/white-stone.svg"
import { useModal } from "../../utilities"
import "./index.scss"

const SprintPoint = ({ sprintPointRef }) => {
  const [isModalShowed, modalRef, closeModal, removeModal] = useModal()
  return (
    <section className="sprint-point scrum__inner" ref={sprintPointRef}>
      <div
        className={`backdrop ${
          isModalShowed ? "backdrop_show" : "backdrop_close"
        }`}
        onAnimationEnd={removeModal}
        ref={modalRef}>
        <div className="sprint-point__modal_container">
          <div className="sprint-point__modal">
            <div className="sprint-point__modal_left">
              <img src={productOwnerAvatar} alt="產品負責人" />
              <p className="sprint-point__modal_title">產品負責人</p>
            </div>
            <Dialog type="message" className="p_inline-end-6">
              <p>
                產品待辦清單好了之後，我們來召集 Scrum Master和開發團隊共同召開
                <strong>短衝規劃會議 (Sprint Planning)</strong>
                。短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出
                <strong>短衝待辦清單(Sprint Backlog)</strong>
                ，並由開發團隊在接下來的產品開發週期裡執行。
              </p>
            </Dialog>
          </div>
          <div className="sprint-point__modal">
            <div className="sprint-point__modal_left">
              <img src={scrumMasterAvatar} alt="敏捷教練" />
              <p className="sprint-point__modal_title">敏捷教練</p>
            </div>
            <Dialog type="message" className="p_inline-end-6">
              <p>
                嗨嗨~你是新來的前端吧！我是這次的 Scrum Master
                XX，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對
                Scrum 瞭解。這位是XX，是我們開發團隊的成員唷～
                <br />
                目前我們團隊一次 Sprint
                週期是兩週的時間，依照我的觀察，目前團隊可以負擔的點
                <strong>(Sprint Point) 大約是 20 點左右。</strong>
              </p>
            </Dialog>
          </div>
          <div className="sprint-point__modal">
            <div className="sprint-point__modal_left">
              <img src={developmentTeamAvatar} alt="開發團隊" />
              <p className="sprint-point__modal_title">開發團隊</p>
            </div>
            <Dialog type="message" className="p_inline-end-6">
              <p>
                嘿！新來的，你應該還不知道點數是什麼意思吧?
                <br />
                我來跟你介紹一下吧～ Sprint Point 目的是為了
                <strong>衡量速度</strong>，是用大概花費的時間預估出的相對點數。
                <br />
                我這邊已經把剛剛討論好的點數標上去囉～你來練習把任務排到短衝待辦清單吧！
                (我們平常管理任務是使用 Jira
                這套軟體，你有時間記得先去註冊和熟悉唷～)
              </p>
            </Dialog>
          </div>
          <ConfirmButton
            confirmType="confirm"
            className="m_inline-start-auto"
            onClick={closeModal}
          />
        </div>
      </div>
      <div className="m_block-start-6 sprint-point__practice p_inline-8">
        <div className="sprint-point__practice_left">
          <p className="h2 sprint-point__practice_title">
            產品待辦清單<span>Product Backlog</span>
          </p>
          <ul className="sprint-point__backlog">
            <li className="sprint-point__todo p_block-5 border-radius_2 h3">
              <div className="sprint-point__todo_left">
                <p>後台職缺管理功能</p>
                <p>(資訊上架、下架、顯示應徵者資)</p>
              </div>
              <div className="sprint-point__todo_right">
                <img src={whiteStone} alt="短衝分數" />
                <span>x5</span>
              </div>
            </li>
            <li className="sprint-point__todo p_block-5 border-radius_2 h3">
              <div className="sprint-point__todo_left">
                <p>前台職缺列表</p>
                <p>(缺詳細內容、點選可發送應徵意願)</p>
              </div>
              <div className="sprint-point__todo_right">
                <img src={whiteStone} alt="短衝分數" />
                <span>x5</span>
              </div>
            </li>
            <li className="sprint-point__todo p_block-5 border-radius_2 h3">
              <div className="sprint-point__todo_left">
                <p>會員系統(登入、註冊、管理)</p>
              </div>
              <div className="sprint-point__todo_right">
                <img src={whiteStone} alt="短衝分數" />
                <span>x8</span>
              </div>
            </li>
            <li className="sprint-point__todo p_block-5 border-radius_2 h3">
              <div className="sprint-point__todo_left">
                <p>應徵者的線上履歷編輯器</p>
              </div>
              <div className="sprint-point__todo_right">
                <img src={whiteStone} alt="短衝分數" />
                <span>x13</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="sprint-point__practice_right">
          <div className="h2 sprint-point__practice_title">
            <p>開發 A 組的短衝待辦清單</p>
            <div className="sprint-point__point"></div>
          </div>
          <ul className="sprint-point__todos"></ul>
        </div>
      </div>
    </section>
  )
}

export default SprintPoint
