import React, { useState } from 'react'
import './Style.css'
import axios from 'axios'

export default function Feedbackcollect() {
    const [usage,setusage] = useState('')
    const [motivation,setmotivation] = useState('')
    const [feature,setfeature] = useState('')
    const [feedback,setfeedback] = useState('')

    const handlesubmit = (e) => {
      e.preventDefault(); // Prevent page reload
      axios.post('http://localhost:3001/feedback', {
          "usage": usage,
          "motivation": motivation,
          "feature": feature,
          "feedback": feedback
      })
      .then(res => {
          console.log(res.data);
          // Reset input fields
          setusage('');
          setmotivation('');
          setfeature('');
          setfeedback('');
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="collect">
        <div className="feed">
        <h1>Help us improve</h1>
        <form action="" onSubmit={handlesubmit}>
            <h3>How often do you use our app?</h3>
            <input type="text" placeholder='Everyday/once a week/bi-weekly' value={usage} onChange={ (e) => setusage(e.target.value) }/>
            <h3>What is the motivation to use our app?</h3>
            <input type="text" placeholder='What problem does it solve for you?' value={motivation} onChange={ (e) => setmotivation(e.target.value) }/>
            <h3>What is your most used feature?</h3>
            <input type="text" value={feature} onChange={ (e) => setfeature(e.target.value) }/>
            <h3>What is the Feedback you want to give for us?</h3>
            <input type="text" value={feedback} onChange={ (e) => setfeedback(e.target.value) }/>
            <br /><br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
    </div>
  )
}
