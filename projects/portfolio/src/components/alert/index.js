import PropTypes from 'prop-types'
import { Wrapper } from './styles'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

const Alert = ({ message }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true), setTimeout(() => setVisible(false), 3000)
  }, [message])

  return (
    <>
      <AnimatePresence>
        {visible & (message !== '') ? (
          <Wrapper
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            data-testid="alert-component"
          >
            <div className="text">{message}</div>
          </Wrapper>
        ) : null}
      </AnimatePresence>
    </>
  )
}

Alert.propTypes = {
  message: PropTypes.string,
}

export default Alert
