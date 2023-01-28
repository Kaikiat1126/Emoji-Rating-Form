import { useState } from 'react'

export default function EmojiBar() {
    
    return (
        <div id='emoji-bar' className='flex-row'>
            <div id='emoji-1' className='emoji'></div>
            <div id='emoji-2' className='emoji'></div>
            <div id='emoji-3' className='emoji'></div>
            <div id='emoji-4' className='emoji'></div>
            <div id='emoji-5' className='emoji'></div>
        </div>
    )
}