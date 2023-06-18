import React from 'react'
import spinner from '../assets/1fpC.gif'

function Spinner() {
  return (
    <img src={spinner} alt='loading data'
      style={{width: '150px', display: 'block',
              margin: 'auto'
           }}/>
  )
}

export default Spinner