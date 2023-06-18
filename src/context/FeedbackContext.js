import React from 'react'
import { createContext, useState } from "react"
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
      { id: 1, text: 'From context, default item1', rating: 9},
      { id: 2, text: 'From context, default item2', rating: 3},
      { id: 3, text: 'From context, default item3', rating: 7},
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {}, edit: false
  })

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete this comment?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item, edit: true
    })
  }

  const updateFeedback = (id, updatedItem) => {
    console.log('id: ' + id)
    console.log('updatedItem: ' + updatedItem.text)
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updatedItem}: item))
  }

  return <FeedbackContext.Provider 
          value={{feedback, deleteFeedback, 
                  addFeedback, editFeedback,
                  feedbackEdit, updateFeedback}}>
      {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext
