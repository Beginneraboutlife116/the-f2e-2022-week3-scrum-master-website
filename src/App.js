import { useEffect, useRef, useState } from "react"
import Welcome from "./pages/welcome"
import Introduction from "./pages/introduction"
import ProductTodo from "./pages/product-todo"

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [startScrum, setStartScrum] = useState(false)
  const introductionRef = useRef(null)
  const productTodoRef = useRef(null)
  useEffect(() => {
    const pages = [introductionRef.current, productTodoRef.current]
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
          className="main__inner-page main__container"
          onNextClick={() => {
            setCurrentPage(currentPage + 1)
            setStartScrum(true)
          }}
          introductionRef={introductionRef}
        />
        <ProductTodo
          className="main__inner-page main__container"
          onNextClick={() => setCurrentPage(currentPage + 1)}
          onPrevClick={() => setCurrentPage(currentPage - 1)}
          productTodoRef={productTodoRef}
        />
      </main>
    </div>
  )
}

export default App
