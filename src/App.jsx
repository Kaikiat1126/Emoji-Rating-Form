import { useState } from 'react'
import './App.less'
import ButtonBar from './components/ButtonBar/ButtonBar'
import EmojiBar from './components/EmojiBar/EmojiBar'

export default function App() {
  const [count, setCount] = useState(0)

  const removeEffect = (e) => {
    const emoji = e.target;
    const emojiBarChildren = document.querySelectorAll("#emoji-bar > div");

    for (let i = 0; i < emojiBarChildren.length; i++) {
        if (emojiBarChildren[i] !== emoji) {
            emojiBarChildren[i].children[0].classList.remove('lightEffect');
        }
    }

    emoji.classList.add('lightEffect');
  }

  return (
    <div id='form-container' className='center'>
      <div id='form' className='flex-col'>
        <div id='form-header' className='flex-col'>
          <div id='heading-one'>Feedback Form</div>
          <div id='heading-two'>Your feedback is our motivation</div>
        </div>
        <EmojiBar removeEffect={removeEffect}/>
        <div id='comment-area' className='hide'></div>
        <ButtonBar />
      </div>
    </div>
  )
}