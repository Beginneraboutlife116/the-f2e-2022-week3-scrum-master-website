import { useRef, useState } from "react"
// import Main from "./pages/main"
import Welcome from "./pages/welcome"
import Progress from "./components/progress"
import { StepButton } from "./components/buttons"
import Introduction from "./pages/introduction"

function App() {
  const [start, setStart] = useState(false)
  const mainRef = useRef(null)
  const toMain = () => {
    mainRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div>
      {!start && <Welcome onClick={toMain} />}
      <main
        className={`main ${!start ? "bg__introduction" : ""}`}
        ref={mainRef}>
        <Progress />
        <div className="main__container p_inline-8">{<Introduction />}</div>
        <footer className="footer p_block-6">
          <StepButton className="m_inline-start-auto" />
        </footer>
      </main>
    </div>
  )
}

export default App
