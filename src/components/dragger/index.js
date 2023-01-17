import "./index.scss"

export const Dragger = ({ children, className, point, id }) => {
  return (
    <li
      className={`border-radius_2 h3 dragger ${className ?? ""}`}
      data-point={point}
      id={id}>
      {children}
    </li>
  )
}

export const DroppableHint = ({ className, id }) => {
  return (
    <li
      className={`droppable-hint border-radius_2 ${className ?? ""}`}
      id={id}></li>
  )
}
