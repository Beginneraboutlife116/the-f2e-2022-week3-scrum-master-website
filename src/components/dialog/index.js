import "./index.scss"

const Dialog = ({ children, type, decorationStyle, className }) => {
  let paddingClassName
  if (type === "dialog") {
    paddingClassName = "p_block-4 p_inline-start-5"
  }
  if (type === "message") {
    paddingClassName = "p_block-5 p_inline-start-6"
  }
  return (
    <div className={`dialog ${paddingClassName} border-radius_3 ${className}`}>
      {children}
      {decorationStyle && (
        <div className="dialog__decoration" style={decorationStyle}></div>
      )}
    </div>
  )
}

export default Dialog
