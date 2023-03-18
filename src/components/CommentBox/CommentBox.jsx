import { useEffect } from 'react'
import './CommentBox.less'

export default function CommentBox() {

    useEffect(() => {
        const commentBox = document.getElementById('comment-box');
        commentBox.classList.add('hide');
    }, [])

    const allowSubmit = (e) => {
        const comment = e.target.value;
        const btnBlue = document.getElementById('btnBlue');
        btnBlue.classList.toggle('disabled', comment.length <= 2);
    }

    return (
        <div id='comment-box'>
            <textarea 
                id='comment' 
                placeholder='Write your comment here...' 
                className='' 
                onChange={allowSubmit}>
            </textarea>
        </div>
    )
}