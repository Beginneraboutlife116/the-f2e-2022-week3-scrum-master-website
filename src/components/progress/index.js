import unfinishedFlag from "../../assets/icons/unfinished-icon.svg"
import currentFlag from "../../assets/icons/current-icon.svg"
import completeFlag from "../../assets/icons/complete-icon.svg"
import "./index.scss"

const Progress = ({ currentProgress }) => {
  const progressTemplate = []
  for (let i = 0; i <= 5; i++) {
    const img =
      currentProgress === i
        ? currentFlag
        : currentProgress > i
        ? completeFlag
        : unfinishedFlag
    const alt =
      currentProgress === i
        ? "現在的位置"
        : currentProgress > i
        ? "已完成"
        : "未完成"
    const dotDecoration = currentProgress > i ? "progress__dot_finished" : ""
    let template
    if (i === 5) {
      template = (
        <>
          <img
            src={
              currentProgress === 5
                ? currentFlag
                : currentProgress > 5
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
