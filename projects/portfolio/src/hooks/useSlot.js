import { useEffect } from 'react'
import { slot } from '../../dev-data/slot'

export const useSlot = () => {
  useEffect(() => {
    const div = document.getElementById('slot')

    if (process.env.NODE_ENV === 'development') {
      const content = slot()
      div.innerHTML = content
    }
  }, [])

  return
}
