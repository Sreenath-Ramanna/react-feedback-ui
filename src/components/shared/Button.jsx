import PropTypes from 'prop-types'
import React from 'react'

function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} 
      className={`btn btn-${version}`} >
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false
}

Button.propTypes = {
  version: PropTypes.string ,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Button
