import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { CardWrapper } from './styles'

const Card = ({ img, alt, select, background }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
    <CardWrapper background={background}>
      <img src={img} onClick={select} alt={alt} />
      <span>{alt}</span>
    </CardWrapper>
  </motion.div>
)

Card.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  background: PropTypes.string,
  select: PropTypes.any,
}

export default Card
