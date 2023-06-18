import React from 'react'
import { createContext, useState, useEffect } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [isLoading, setLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  useEffect(()=> {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc')
    const data = await response.json()
    console.log(data)
    setFeedback(data)
    setTimeout(function(){
      setLoading(false)
    }, 500)
  }

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {}, edit: false
  })

  const addFeedback = async (newFeedback) => {
    const resp = await fetch('/feedback', {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback) })
    const data = await resp.json()
    setFeedback([data, ...feedback])
  }

  const deleteFeedback = async (id) => {
    if(window.confirm('Are you sure you want to delete this comment?')) {
      await fetch(`/feedback/${id}`, {method: 'DELETE'})
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item, edit: true
    })
  }

  const updateFeedback = async (id, updatedItem) => {
    const resp = await fetch(`/feedback/${id}`, {
      method: 'PUT', headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedItem)
    })
    const data = resp.json()
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...data}: item))
  }

  return <FeedbackContext.Provider 
          value={{feedback, isLoading, deleteFeedback, 
                  addFeedback, editFeedback,
                  feedbackEdit, updateFeedback}}>
      {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext
