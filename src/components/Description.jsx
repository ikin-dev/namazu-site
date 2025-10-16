import React from 'react'

export default function Description({ desc }) {
    return (
        <div className='text-neutral-300 text-left'>
            {/* <span className='font-semibold text-neutral-400 '>
                DESCRIPTION
            </span> */}
            <span >
                {desc}
            </span>
        </div>
    )
}
