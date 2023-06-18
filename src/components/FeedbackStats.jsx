import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
  let avgRating = feedback.reduce((acc, cur) => { 
    return acc + cur.rating
  }, 0) / feedback.length

  avgRating = isNaN(avgRating) ? 0: parseFloat(avgRating.toFixed(2))

  return (
    <div className='feedback-stats'>
      <h4>{'Total Reviews: ' + feedback.length}</h4>
      <h4>Average rating: {avgRating}</h4>
    </div>
  )
}

export default FeedbackStats
