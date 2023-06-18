import React from 'react'
import { useParams } from 'react-router-dom'
import Card from './shared/Card'
import { Navigate, useNavigate } from 'react-router-dom'

function Post() {
  const params = useParams()

  // Get the specific post requested through params.id from a backend
  // here.
  let postDetails = 'Post '
  if (params.hasOwnProperty('id')) {
    postDetails += params.id
  }

  let postAuth = ''
  if (params.hasOwnProperty('auth')){
    postAuth += params.auth
  }
  
  // suppose the backend returns HTTP status 404 (not found)
  const status = 200
  if (status === 404) {
    return <Navigate to='/notfound' />
  }
  
  // another way to navigate
  const navigate = useNavigate()
  const onClickNav = () => {
    console.log('On Click Navigate')
    navigate('/about')
  }

  return (
    <Card>
      <h3>{postDetails}</h3>
      <h4>{postAuth}</h4>
      <button onClick={onClickNav}>Click Navigate</button>
    </Card>
  )
}

export default Post
