import React from 'react'
import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
  const headerStyles = {backgroundColor: bgColor, color: textColor};

  return (
    <header style={ headerStyles }> 
      <div className="container"><h2>{text}</h2></div>
    </header>
  )
}

Header.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
}

Header.defaultProps = {
  text: 'Feedback UI',
  textColor: 'greenyellow',
  bgColor: 'black',
}

export default Header
