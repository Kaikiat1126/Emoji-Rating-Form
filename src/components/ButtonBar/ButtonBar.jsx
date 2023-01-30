import { useEffect } from 'react'
import './ButtonBar.less'

export default function ButtonBar({initCmt}) {

    useEffect(() => {
        const btnBlue = document.getElementById('btnBlue');
        btnBlue.classList.toggle('disabled', !initCmt);
    }, [initCmt])
    
    return (
        <div id='button-bar' className='flex-row'>
            <button id='btnBlue' className='button'>
                COMMENT
                {/* {initCmt ? 'SUBMIT' : 'COMMENT'} */}
            </button>
            <button id='btnRed' className='button'>
                CANCEL
            </button>
        </div>
    )
}