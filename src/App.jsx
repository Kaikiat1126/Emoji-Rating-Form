import { useEffect, useState } from 'react'
import './App.less'
import ButtonBar from './components/ButtonBar/ButtonBar'
import CommentBox from './components/CommentBox/CommentBox'
import EmojiBar from './components/EmojiBar/EmojiBar'

export default function App() {
  const [initCmt, setCmtState] = useState(0)
  const [rating, setRating] = useState(0)

  const removeEffect = (e) => {
    const emoji = e.target;
    const emojiBarChildren = document.querySelectorAll("#emoji-bar > div");

    for (let i = 0; i < emojiBarChildren.length; i++) {
        if (emojiBarChildren[i] !== emoji) {
            emojiBarChildren[i].children[0].classList.remove('lightEffect');
        }
    }

    emoji.classList.add('lightEffect');
    if(initCmt == 0) setCmtState(1);
    setRating(emoji.alt.split('-')[1]);
  }

  const displayCommentBox = () => {
    const commentBox = document.getElementById('comment-box');
    commentBox.classList.remove('hide');
    
    const btnBlue = document.getElementById('btnBlue');
    btnBlue.classList.add('disabled');

    const comment = document.getElementById('comment');
    comment.value = '';

    setTimeout(() => {
      btnBlue.innerText = 'SUBMIT';
    }, 1500);
    setCmtState(2);
  }

  const submitComment = () => {
    const valueJson = valueToJSON();
    console.log(valueJson);
    setCmtState(-1);
    setTimeout(() => {
      alert("Your feedback has been submitted");
    }, 1000);
  }

  const valueToJSON = () => {
    const comment = document.getElementById('comment');
    const commentValue = comment.value;
    const data = {
      rating: parseInt(rating),
      comment: commentValue
    }
    return JSON.stringify(data);
  }

  const btnBlueEvent = () => initCmt === 1 ? displayCommentBox() : submitComment();

  useEffect(() => {
    if(initCmt == -1) {
      const commentBox = document.getElementById('comment-box');
      commentBox.classList.add('hide');
      const btnBlue = document.getElementById('btnBlue');
      btnBlue.innerText = 'COMMENT';
      const emojiBarChildren = document.querySelectorAll("#emoji-bar > div");
      emojiBarChildren.forEach(child => child.children[0].classList.remove('lightEffect'));
      setCmtState(0);
    }
  }, [initCmt])

  return (
    <div id='form-container' className='center'>
      <div id='form' className='flex-col'>
        <div id='form-header' className='flex-col'>
          <div id='heading-one'>Feedback Form</div>
          <div id='heading-two'>Your feedback is our motivation</div>
        </div>
        <EmojiBar removeEffect={removeEffect}/>
        <CommentBox />
        <ButtonBar initCmt={initCmt} btnBlueEvent={btnBlueEvent}/>
      </div>
    </div>
  )
}