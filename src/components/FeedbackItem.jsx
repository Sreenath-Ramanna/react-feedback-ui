import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ratingData}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <Card reverse={true}>
      <div className='num-display'>{ratingData.rating}</div>
      <button className='close' onClick={() => deleteFeedback(ratingData.id)}> 
        <FaTimes color='#DE60CA'/>
      </button>
      <button className="edit">
        <FaEdit color='#DE60CA' onClick={()=> editFeedback(ratingData)}/>
      </button>
      <div className="text-display">{ratingData.text}</div>
    </Card>
  ) 
}

FeedbackItem.propTypes = {
  ratingData: PropTypes.object.isRequired
}

export default FeedbackItem
