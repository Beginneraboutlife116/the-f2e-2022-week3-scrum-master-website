import { useRef, useState } from "react"
import Welcome from "./pages/welcome"
import Progress from "./components/progress"
import { StepButton } from "./components/buttons"
import Introduction from "./pages/introduction"
import ProductTodo from "./pages/product-todo"

function App() {
  const [start, setStart] = useState(false)
  // let progressHolder = [0, 1, 2]
  const mainRef = useRef(null)
  const toMain = () => {
    mainRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  const toScrumMaster = () => {
    if (!start) {
      setStart(true)
    }
  }
  return (
    <div>
      {!start && <Welcome onClick={toMain} />}
      <main
        className={`main ${!start ? "bg__introduction" : ""}`}
        ref={mainRef}>
        <Progress />
        <div className="main__container">
          {
            <>
              {true && <Introduction className="main__inner-page" />}
              {true && <ProductTodo className="main__inner-page" />}
            </>
          }
        </div>
        <footer className={`footer p_block-6 ${start && "footer_in-progress"}`}>
          {start && <StepButton className="m_inline-end-auto" ongoing="prev" />}
          <StepButton
            className="m_inline-start-auto"
            onClick={toScrumMaster}
            ongoing="next"
          />
        </footer>
      </main>
    </div>
  )
}

export default App
