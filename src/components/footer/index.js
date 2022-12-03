import { StepButton } from "../buttons"
import "./index.scss"

const Footer = ({ onNextClick, onPrevClick, currentPage, disabled }) => {
  return (
    <footer
      className={`p_block-6 footer p_inline-8 ${
        currentPage !== 0 && "footer_in-scrum"
      }`}>
      {currentPage !== 0 && <StepButton ongoing="prev" onClick={onPrevClick} />}
      {currentPage !== 5 && (
        <StepButton
          className="m_inline-start-auto"
          ongoing="next"
          onClick={onNextClick}
          disabled={disabled}
        />
      )}
    </footer>
  )
}

export default Footer
