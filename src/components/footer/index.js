import { StepButton } from "../buttons"
import "./index.scss"

const Footer = ({ className, onNextClick, onPrevClick, currentPage }) => {
  return (
    <footer className={`p_block-6 footer p_inline-8 ${className ?? ""}`}>
      {currentPage !== 0 && <StepButton ongoing="prev" onClick={onPrevClick} />}
      {currentPage !== 5 && (
        <StepButton
          className="m_inline-start-auto"
          ongoing="next"
          onClick={onNextClick}
        />
      )}
    </footer>
  )
}

export default Footer
