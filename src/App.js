import { useRef, useState } from "react"
// import Introduction from "./pages/introduction"
// import Main from "./pages/main"
import Welcome from "./pages/welcome"
import Progress from "./components/progress"
import { StepButton } from "./components/buttons"

function App() {
  const [start, setStart] = useState(false)
  const mainRef = useRef(null)
  const toMain = () => {
    mainRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <>
      {!start && <Welcome onClick={toMain} />}
      <main className="p_inline-8" ref={mainRef}>
        <Progress />
        <div>{<h1>Hello</h1>}</div>
        <footer className="p_block-6">
          <StepButton className="m_inline-start-auto" />
        </footer>
      </main>
    </>
  )
}

export default App
