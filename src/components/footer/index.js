import { StepButton } from "../buttons"
import "./index.scss"

const Footer = ({ className, onNextClick, onPrevClick, isStart }) => {
  return (
    <footer className={`p_block-6 footer p_inline-8 ${className ?? ""}`}>
      {isStart && <StepButton ongoing="prev" onClick={onPrevClick} />}
      <StepButton
        className="m_inline-start-auto"
        ongoing="next"
        onClick={onNextClick}
      />
    </footer>
  )
}

export default Footer
