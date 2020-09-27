import { useEffect, useState } from 'react'
import { slot } from '../../dev-data/slot'

export const useSlot = () => {
  const [contentLength, setContentLenght] = useState()

  useEffect(() => {
    const div = document.getElementById('slot')

    if (div) {
      const content = slot()
      div.innerHTML = content
      setContentLenght(div.innerText.length)
    }
  }, [])

  return contentLength
}
