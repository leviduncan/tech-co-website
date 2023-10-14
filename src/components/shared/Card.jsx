import PropTypes from 'prop-types'

const Card = ({ children, bgColor, item }) => {
  return (
    <div className={`card ${ item && item } ${bgColor && bgColor}`}>
        {children}
    </div>
  )
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card