import PropTypes from 'prop-types'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Wrapper } from './styles'

import BurgerIcon from '../burger-icon'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}

const containerItems = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Navbar = ({ navbar }) => {
  return (
    <Wrapper data-testid="navbar">
      <div className="container">
        <div className="navbar-logo">
          <div></div>
        </div>
        {navbar && (
          <>
            <div className="navbar-items">
              <motion.ul variants={container} initial="hidden" animate="visible">
                {navbar.map((item) => (
                  <motion.li key={item.id} variants={containerItems}>
                    <Link href={item.link}>
                      {item.type === 'standard' ? <a>{item.label}</a> : <a className="extra">{item.label}</a>}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <BurgerIcon />
          </>
        )}
      </div>
    </Wrapper>
  )
}

Navbar.propTypes = {
  navbar: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Navbar
