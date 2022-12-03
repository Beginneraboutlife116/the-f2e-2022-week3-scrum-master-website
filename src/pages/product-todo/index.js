import Dialog from "../../components/dialog"
import productOwnerAvatar from "../../assets/characters/product-owner-avatar.svg"
import jiraIcon from "../../assets/icons/jira-icon.svg"
import "./index.scss"
import { ConfirmButton } from "../../components/buttons"
import { useRef, useState, useEffect } from "react"
import Sortable from "sortablejs"
import Progress from "../../components/progress"
import Footer from "../../components/footer"

const ProductTodo = ({ className, isStart }) => {
  const [isOpen, setIsOpen] = useState(true)
  const modalRef = useRef(null)
  const dragRef = useRef(null)
  const dropRef = useRef(null)
  const removeModal = () => {
    if (!isOpen) {
      modalRef.current.remove()
    }
  }
  const closeModal = () => setIsOpen(false)
  useEffect(() => {
    const { current: drag } = dragRef
    const { current: drop } = dropRef
    Sortable.create(drag, {
      group: { name: "todos", put: false },
      // put 可否放置？誰可放置？(by using `[ ]`)
      handle: ".product-todo__todo",
      // 可以被選取的那一個className
      chosenClass: "dragging",
      sort: false
      // 在這一個group內，能否發生sort？
    })
    Sortable.create(drop, {
      group: { name: "backlog", pull: false, put: ["todos"] },
      // name不一定要一樣，除非兩者是要shared的
      // pull 可否被拖拉？那個名稱的可以被拖拉
      sort: true,
      ghostClass: "dragging"
      // Class name for the drop placeholder
    })
  })
  return (
    <div className={`product-todo ${className ?? ""}`}>
      <div
        className={`product-todo__backdrop ${
          isOpen ? "backdrop_show" : "backdrop_close"
        }`}
        onAnimationEnd={removeModal}
        ref={modalRef}>
        <div className="product-todo__modal">
          <div>
            <img src={productOwnerAvatar} alt="產品負責人" />
            <p className="h2 product-todo__title">產品負責人</p>
          </div>
          <div className="product-todo__modal-body">
            <Dialog
              type="message"
              className="p_inline-end-6 product-todo__message"
              decorationStyle={{
                top: "65%",
                left: "-70px",
                "--width": "30px",
                "--length": "70px",
                "--border": "3px"
              }}>
              <p>
                我是 TT 資訊，開發 A 組的 PO，小敏。
                <br />
                PO 也就是產品負責人（Product Owner）。
                <br />
                產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出
                <strong>產品待辦清單（Product Backlog）</strong>唷！
                <br />
                剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。
                既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！
              </p>
            </Dialog>
            <ConfirmButton
              confirmType="confirm"
              className="m_inline-start-auto"
              onClick={closeModal}
            />
          </div>
        </div>
      </div>
      <Progress currentProgress={1} />
      <div className="product-todo__container m_block-start-6">
        <div className="product-todo__bg"></div>
        <div className="product-todo__dialog p_inline-start-8">
          <img src={productOwnerAvatar} alt="產品負責人" />
          <Dialog
            type="dialog"
            className="p_inline-end-5"
            decorationStyle={{
              top: "45%",
              left: "-60px",
              "--width": "20px",
              "--length": "60px",
              "--border": "3px"
            }}>
            <p>
              請試著把需求放到產品待辦清單，並調整待辦的優先度順序。
              <br />
              我們公司也推薦使用 Jira 來做任務的管理呢！
            </p>
            <a href="https://www.atlassian.com/software/jira">
              <img src={jiraIcon} alt="Jira圖示" />
            </a>
          </Dialog>
        </div>
        <section className="product-todo__practice p_inline-8">
          <ul className="product-todo__todos" ref={dragRef}>
            <li
              className="product-todo__todo p_inline-6 p_block-5 h3 bdrs_2"
              draggable={true}>
              <p>會員系統（登入、註冊、管理）</p>
            </li>
            <li
              className="product-todo__todo p_inline-6 p_block-5 h3 bdrs_2"
              draggable={true}>
              <p>應徵者的線上履歷編輯器</p>
            </li>
            <li
              className="product-todo__todo p_inline-6 p_block-5 h3 bdrs_2"
              draggable={true}>
              <p>前台職缺列表</p>
              <p>（缺詳細內容、點選可發送應徵意願）</p>
            </li>
            <li
              className="product-todo__todo p_inline-6 p_block-5 h3 bdrs_2"
              draggable={true}>
              <p>後台職缺管理功能</p>
              <p>（資訊上架、下架、顯示應徵者資料）</p>
            </li>
          </ul>
          <section className="product-todo__backlog m_block-end-3 p_block-start-3">
            <p className="product-todo__backlog-title h2">
              產品待辦清單<span>Product Backlog</span>
            </p>
            <div className="product-todo__backlog-container">
              <p className="product-todo__priority_title">優先度</p>
              <ul
                className="product-todo__answer p_block-start-2"
                ref={dropRef}></ul>
              <p className="product-todo__priority_high">高</p>
              <div className="product-todo__priority_line"></div>
              <p className="product-todo__priority_low p_block-end-4">低</p>
            </div>
          </section>
        </section>
      </div>
      <Footer className="product-todo__footer" isStart={isStart} />
    </div>
  )
}

export default ProductTodo
