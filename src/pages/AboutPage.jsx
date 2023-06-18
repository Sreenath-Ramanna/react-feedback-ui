import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <h3>About this project</h3>
        <p>This is a React App to leave feedback about a product or a service.</p>
        <p>Version 1.0.0</p>
        <Link to='/'>Back to Home</Link>
    </Card>
  )
}

export default AboutPage