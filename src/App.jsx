import { useState } from 'react'
import './App.less'
import ButtonBar from './components/ButtonBar/ButtonBar'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='form-container' className='center'>
      <div id='form' className='flex-col'>
        <div id='form-header' className='flex-col'>
          <div id='heading-one'>Feedback Form</div>
          <div id='heading-two'>Your feedback is our motivation</div>
        </div>
        <div id='emoji-bar'></div>
        <div id='comment-area' className='hide'></div>
        <ButtonBar />
      </div>
    </div>
  )
}