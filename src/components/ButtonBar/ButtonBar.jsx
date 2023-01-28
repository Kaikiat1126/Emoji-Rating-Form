import { useState } from 'react'
import './ButtonBar.less'

export default function ButtonBar() {
    
    return (
        <div id='button-bar' className='flex-row'>
            <button id='btnBlue' className='button disabled'>
               SUBMIT
            </button>
            <button id='btnRed' className='button disabled'>
                CANCEL
            </button>
        </div>
    )
}