import { useRef, useState } from "react"
import Welcome from "./pages/welcome"
import Introduction from "./pages/introduction"
import ProductTodo from "./pages/product-todo"

function App() {
  const [isStart, setIsStart] = useState(false)
  const mainRef = useRef(null)
  const toMain = () => {
    mainRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  const startScrumMaster = () => {
    if (!isStart) {
      setIsStart(true)
    }
  }
  return (
    <div>
      {!isStart && <Welcome onClick={toMain} />}
      <main ref={mainRef} className="main">
        <Introduction className="main__inner-page main__container" onNextClick={startScrumMaster} />
        <ProductTodo className="main__inner-page main__container" isStart={isStart} />
      </main>
    </div>
  )
}

export default App
