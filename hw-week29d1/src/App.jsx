import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [lowRatingReason, setLowRatingReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!name || !email || !feedback || feedback.length < 20 || rating === 0) {
    
    return;
  }
  if (rating < 3 && !lowRatingReason) {
    alert('Бағалау 3-тен төмен болса, "Не себепті төмен бағаладыңыз?" деген сұрақты толтырыңыз!');
    return;
  }

  return (
    <>
    <div>
      <h2>Кері байланыс формасы</h2>
      <form>
        <div>
          <label htmlFor="name">Аты-жөнін</label><br />
          <input 
         type="text"
         value={name}
         onChange={(e) => setName(e.target.value)}
         required />
        </div>
        <div>
          <label htmlFor="email">Email</label><br />
          <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />
        </div>
        <div>
        <label htmlFor="feedback">Пікіріңіз:</label><br />
          <textarea 
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
          minLength="20"></textarea>
        </div>
        <div>
          <label htmlFor="reting">Бағалау қойыныз:</label><br />
          <select required
          name='reting'
          onChange={(e) => setRating(e.target.value)}
          value={rating}>
          <option value="1">⭐⭐⭐⭐⭐</option>
          <option value="2">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐</option>
          <option value="5">⭐</option>
          </select>
        </div>

        {rating < 3 && (
            <div>
              <label>Не себепті төмен бағаладыңыз?</label>
              <textarea
                value={lowRatingReason}
                onChange={(e) => setLowRatingReason(e.target.value)}
                required={rating < 3}
              />
            </div>
          )}
      </form><br />
      <button type='sudmit'>ЖІБЕРУ</button>

    </div>
    </>
  )
}


