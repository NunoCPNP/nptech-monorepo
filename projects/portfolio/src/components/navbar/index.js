import PropTypes from 'prop-types'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Wrapper, Logo } from './styles'

import BurgerIcon from '../burger-icon'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
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
          <Logo>
            <img src="/logo192.png" alt="Website logo" />
          </Logo>
        </div>
        <div className="navbar-items">
          <motion.ul variants={container} initial="hidden" animate={'visible'}>
            {navbar &&
              navbar.map((link) => (
                <motion.li key={link.id} variants={item}>
                  <Link href={link.link}>
                    {link.type === 'standard' ? <a>{link.label}</a> : <a className="extra">{link.label}</a>}
                  </Link>
                </motion.li>
              ))}
          </motion.ul>
        </div>
        <BurgerIcon />
      </div>
    </Wrapper>
  )
}

Navbar.propTypes = {
  navbar: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Navbar
