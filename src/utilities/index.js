import { useState, useRef } from "react"

export const useModal = () => {
  const [isModalShowed, setModalShowed] = useState(true)
  const modalRef = useRef(null)
  const closeModal = () => setModalShowed(false)
  const removeModal = () => {
    if (!isModalShowed) {
      modalRef.current.remove()
    }
  }

  return [isModalShowed, modalRef, closeModal, removeModal]
}
