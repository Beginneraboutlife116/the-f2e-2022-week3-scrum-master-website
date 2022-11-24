import "./index.scss"

const Dialog = ({
  children,
  type = "dialog",
  decorationStyle = { scale: "1", rotate: "0deg", top: "0", left: "0" },
  className
}) => {
  let paddingClassName
  if (type === "dialog") {
    paddingClassName = "p_block-4 p_inline-start-5"
  }
  if (type === 'message') {
    paddingClassName = "p_block-5 p_inline-start-6"
  }
  return (
    <div className={`dialog ${paddingClassName} bdrs_3 ${className}`}>
      {children}
      {type === "dialog" && (
        <div className="dialog__decoration" style={decorationStyle}></div>
      )}
    </div>
  )
}

export { Dialog }
