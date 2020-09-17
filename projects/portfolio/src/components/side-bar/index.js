import PropTypes from 'prop-types'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useControllers } from '../../context/controllers'
import { Container } from './styles'

const SideBar = ({ navbar }) => {
  const [state, dispatch] = useControllers()
  const { sideBarOpen } = state

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  }

  const containerItems = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <AnimatePresence>
      {sideBarOpen && (
        <Container initial={{ x: 600 }} animate={{ x: 100, opacity: 1 }} exit={{ x: 450, opacity: 0 }}>
          <div className="navbar-items">
            <motion.ul variants={container} initial="hidden" animate="visible">
              {navbar.map((item) => (
                <motion.li key={item.id} variants={containerItems}>
                  <Link href={item.link}>
                    {item.type === 'standard' ? (
                      <a onClick={() => dispatch({ type: 'TOGGLE_SIDE_BAR' })}>{item.label}</a>
                    ) : (
                      <a className="extra">{item.label}</a>
                    )}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </Container>
      )}
    </AnimatePresence>
  )
}

SideBar.propTypes = {
  navbar: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default SideBar
