import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { CardWrapper } from './styles'

const Card = ({ img, alt, select }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
      <CardWrapper>
        <img src={img} onClick={select} alt={alt} />
      </CardWrapper>
    </motion.div>
  )
}

Card.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  select: PropTypes.any,
}

export default Card
