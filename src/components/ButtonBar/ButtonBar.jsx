import { useEffect } from 'react'
import './ButtonBar.less'

export default function ButtonBar({initCmt,displayCommentBox}) {

    useEffect(() => {
        const btnBlue = document.getElementById('btnBlue');
        btnBlue.classList.toggle('disabled', !initCmt);
    }, [initCmt])

    
    return (
        <div id='button-bar' className='flex-row'>
            <button id='btnBlue' className='button' onClick={displayCommentBox}>
                COMMENT
                {/* {initCmt ? 'SUBMIT' : 'COMMENT'} */}
            </button>
            <button id='btnRed' className='button'>
                CANCEL
            </button>
        </div>
    )
}