import { useEffect } from 'react'
import './ButtonBar.less'

export default function ButtonBar({initCmt,btnBlueEvent}) {

    useEffect(() => {
        const btnBlue = document.getElementById('btnBlue');
        btnBlue.classList.toggle('disabled', initCmt !== 1);
    }, [initCmt])

    
    return (
        <div id='button-bar' className='flex-row'>
            <button id='btnBlue' className='button' onClick={btnBlueEvent}>COMMENT</button>
            <button id='btnRed' className='button'>
                CANCEL
            </button>
        </div>
    )
}