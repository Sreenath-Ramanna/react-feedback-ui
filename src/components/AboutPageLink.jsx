import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutPageLink() {
  return (
    <div className='about-link'>
        <Link to='/about'>
            <FaQuestion size={30}/>
        </Link>
    </div>
  )
}

export default AboutPageLink