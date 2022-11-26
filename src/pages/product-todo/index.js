import Dialog from "../../components/dialog"
import productOwnerAvatar from "../../assets/characters/product-owner-avatar.svg"
import "./index.scss"
import { ConfirmButton } from "../../components/buttons"
import { useRef, useState } from "react"

const ProductTodo = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef(null)
  const removeModal = () => {
    if (!isOpen) {
      modalRef.current.remove()
    }
  }
  const closeModal = () => setIsOpen(false)
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
    </div>
  )
}

export default ProductTodo
