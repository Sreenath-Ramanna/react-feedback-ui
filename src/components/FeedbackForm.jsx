import React from 'react'
import Card from './shared/Card'
import {useState, useContext, useEffect} from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const validationMsg = 'Type at least 10 chars ...'
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState(validationMsg)
  const [rating, setRating] = useState(10)
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
  useEffect(() => {
    if(feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
      setBtnDisabled(false)
    }
  }, [feedbackEdit])

  const handleTextChange = (u) => {
    let comment = u.target.value
    if (comment.length < 10) {
      setBtnDisabled(true)
      setMessage(validationMsg)
    }
    else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(comment)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text, rating
      }
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }
      setText('')
    }
  }

  return (
    <Card reverse={true} >
      <form onSubmit={handleSubmit}>
        <h3>How would you rate your service with us?</h3>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input type="text" 
            placeholder='Write your review comments...'
            onChange={handleTextChange} value={text}/>
          <Button type="submit" version=
            'primary' isDisabled={btnDisabled} >Send</Button>
        </div>
        {message && <div className="message">{message}</div> }
      </form>
    </Card>
  )
}

export default FeedbackForm
