import unfinishedFlag from "../../assets/icons/unfinished-icon.svg"
import currentFlag from "../../assets/icons/current-icon.svg"
import completeFlag from "../../assets/icons/complete-icon.svg"
import "./index.scss"

const Progress = ({ currentPage }) => {
  const progressTemplate = []
  for (let i = 0; i <= 5; i++) {
    const img =
      currentPage === i
        ? currentFlag
        : currentPage > i
        ? completeFlag
        : unfinishedFlag
    const alt =
      currentPage === i ? "現在的位置" : currentPage > i ? "已完成" : "未完成"
    const dotDecoration = currentPage > i ? "progress__dot_finished" : ""
    let template
    if (i === 5) {
      template = (
        <>
          <img
            src={
              currentPage === 5
                ? currentFlag
                : currentPage > 5
                ? completeFlag
                : unfinishedFlag
            }
            alt="現在的位置"
            className="progress__flag"
          />
        </>
      )
    } else {
      template = (
        <>
          <img src={img} alt={alt} />
          <div className={`progress__dot ${dotDecoration}`}></div>
          <div className={`progress__dot ${dotDecoration}`}></div>
          <div className={`progress__dot ${dotDecoration}`}></div>
          <div className={`progress__dot ${dotDecoration}`}></div>
          <div className={`progress__dot ${dotDecoration}`}></div>
          <div className={`progress__dot ${dotDecoration}`}></div>
          <div className={`progress__dot ${dotDecoration}`}></div>
        </>
      )
    }
    progressTemplate.push(template)
  }

  return (
    <ul className="progress p_inline-8">
      {progressTemplate.map((template, index) => (
        <li className="progress__stage" key={index}>
          {template}
        </li>
      ))}
    </ul>
  )
}

export default Progress
