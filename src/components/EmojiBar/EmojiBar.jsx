import { useState } from 'react'
import './EmojiBar.less'
import Emoji1 from '/e1.gif'
import Emoji2 from '/e2.gif'
import Emoji3 from '/e3.gif'
import Emoji4 from '/e4.gif'
import Emoji5 from '/e5.gif'

const emojis = [Emoji1, Emoji2, Emoji3, Emoji4, Emoji5];

export default function EmojiBar() {
    
    return (
        <div id='emoji-bar' className='flex-row'>
            {emojis.map((emoji, index) => (
                <div key={index} id={`emoji-${index + 1}`} className='emoji'>
                    <img src={emoji} alt={`rating-${index + 1}`} />
                </div>
            ))}
        </div>
    )
}