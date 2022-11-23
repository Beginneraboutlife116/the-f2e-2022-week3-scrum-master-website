import { useState } from "react"
import choiceDefault from "../../assets/icons/choice-default-icon.svg"
import choiceSelected from "../../assets/icons/choice-selected-icon.svg"
import { ReactComponent as ArrowNext } from "../../assets/icons/arrow-next-icon.svg"
import { ReactComponent as ArrowPrev } from "../../assets/icons/arrow-prev-icon.svg"
import "./index.scss"

const ChoiceButton = ({ content, onClick, className }) => {
  const [hover, setHover] = useState(false)
  let imgIcon = hover ? choiceSelected : choiceDefault
  return (
    <button
      className={`btn__choice ${className}`}
      aria-label={content}
      onClick={onClick}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <img src={imgIcon} alt="點選的圖示"></img>
      <p className="h3">{content}</p>
    </button>
  )
}

const StepButton = ({ onClick, disabled, ongoing = "next", className }) => {
  const content = {}
  if (ongoing === "next") {
    content.text = "前往下一座島"
    content.icon = <ArrowNext fill={disabled ? "#8D8A91" : "#ffffff"} />
  }
  if (ongoing === "prev") {
    content.text = "回上一座島"
    content.icon = (
      <ArrowPrev
        fill={disabled ? "#8D8A91" : "#ffffff"}
        style={{ order: "-1" }}
      />
    )
  }
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btn__step ${className}`}>
      <p className="h4">{content.text}</p>
      {content.icon}
    </button>
  )
}

const ConfirmButton = ({ onClick, confirmType = "accept" }) => {
  let content
  if (confirmType === "accept") {
    content = "接受挑戰"
  }
  if (confirmType === "confirm") {
    content = "沒問題!"
  }
  return (
    <button
      onClick={onClick}
      className={`btn__confirm p_inline-7 bdrs_2 btn__confirm_${confirmType}`}>
      <p className="h4">{content}</p>
    </button>
  )
}

export { ChoiceButton, StepButton, ConfirmButton }
