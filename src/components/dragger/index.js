import "./index.scss"

export const Dragger = ({ children, className, index }) => {
  return (
    <li
      className={`border-radius_2 h3 dragger ${className ?? ""} ${
        index === 3 ? "m_block-end-4" : ""
      }`}>
      {children}
    </li>
  )
}

export const DroppableHint = ({ index, className }) => {
  return (
    <li
      className={`droppable-hint border-radius_2 ${className ?? ""} ${
        index === 3 ? "m_block-end-4" : ""
      }`}></li>
  )
}
