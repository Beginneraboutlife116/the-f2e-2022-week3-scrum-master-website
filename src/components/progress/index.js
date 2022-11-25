import unfinishedFlag from "../../assets/icons/unfinished-icon.svg"
import currentFlag from "../../assets/icons/current-icon.svg"
// import completeFlag from "../../assets/icons/complete-icon.svg"
import "./index.scss"

const Progress = () => {
  return (
    <ul className="progress">
      <li className="progress__stage">
        <img src={currentFlag} alt="現在的位置" className="progress__flag" />
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
      </li>
      <li className="progress__stage">
        <img src={unfinishedFlag} alt="現在的位置" className="progress__flag" />
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
      </li>
      <li className="progress__stage">
        <img src={unfinishedFlag} alt="現在的位置" className="progress__flag" />
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
      </li>
      <li className="progress__stage">
        <img src={unfinishedFlag} alt="現在的位置" className="progress__flag" />
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
      </li>
      <li className="progress__stage">
        <img src={unfinishedFlag} alt="現在的位置" className="progress__flag" />
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
        <div className="progress__dot"></div>
      </li>
      <li className="progress__stage">
        <img src={unfinishedFlag} alt="現在的位置" className="progress__flag" />
      </li>
    </ul>
  )
}

export default Progress
