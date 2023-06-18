import React from 'react'
import PropTypes from 'prop-types'

function Card({children, reverse}) {
  return (
    // <div className={`card ${reverse && 'reverse'}`}>{children}</div>
    <div className="card" style={{
      backgroundColor: reverse ? 'greenyellow' : 'white',
      color: reverse ? 'black' : 'purple',
      opacity: 0.8
    }}>{children}</div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}

Card.defaultProps = { reverse : false }

export default Card
