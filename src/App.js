import { useEffect, useRef, useState } from "react"
import Welcome from "./pages/welcome"
import Introduction from "./pages/introduction"
import ProductTodo from "./pages/product-todo"
import Progress from "./components/progress"
import Footer from "./components/footer"
import SprintPoint from "./pages/sprint-point"

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [startScrum, setStartScrum] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const introductionRef = useRef(null)
  const productTodoRef = useRef(null)
  const sprintPointRef = useRef(null)
  useEffect(() => {
    const pages = [
      introductionRef.current,
      productTodoRef.current,
      sprintPointRef.current
    ]
    pages[currentPage].scrollIntoView({ behavior: "smooth" })
  }, [currentPage])
  const toIntroduction = () => {
    introductionRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div>
      {!startScrum && <Welcome onClick={toIntroduction} />}
      <main className="main">
        <Introduction
          className="main__inner main__container"
          onNextClick={() => {
            setCurrentPage(currentPage + 1)
            setStartScrum(true)
            setDisabled(true)
          }}
          introductionRef={introductionRef}
        />
        <section className="scrum main__container main__inner">
          <Progress currentPage={currentPage === 0 ? 1 : currentPage} />
          <div className="scrum__container">
            <ProductTodo
              productTodoRef={productTodoRef}
              setButtonDisabled={setDisabled}
            />
            <SprintPoint sprintPointRef={sprintPointRef} setButtonDisabled={setDisabled} />
            <div style={{ flex: "0 0 100%", backgroundColor: "blue" }}></div>
          </div>
          <Footer
            disabled={disabled}
            currentPage={currentPage === 0 ? 1 : currentPage}
            onNextClick={() => {
              if (currentPage === 1) {
                setDisabled(true)
              }
              setCurrentPage(currentPage + 1)
            }}
            onPrevClick={() => setCurrentPage(currentPage - 1)}
          />
        </section>
      </main>
    </div>
  )
}

export default App
