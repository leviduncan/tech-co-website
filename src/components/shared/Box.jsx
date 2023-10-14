import PropTypes from 'prop-types'

const Box = ({ children, bgColor, textColor }) => {
    const cardStyles = {
        bg: bgColor,
        color: textColor,
    }
  return (
    <div style={cardStyles} className={`box-panel ${bgColor && 'bgColor'}`}>
        {children}
    </div>
  )
}

Box.defaultProps = {
    bgColor: '#262626',
    textColor: '#fff'
}

Box.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Box