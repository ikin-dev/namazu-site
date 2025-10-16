import React from 'react'

export default function Title({title}) {
    return (
        <div>
            <span className='font-bold text-neutral-200'>
                {title}
            </span>
        </div>
    )
}
