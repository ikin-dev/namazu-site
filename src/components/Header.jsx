import React from 'react'
import CardIcon from '../assets/icons/cards.svg?react'
export default function Header() {
    return (
        <div className="text-neutral-200 w-full p-5 
                 bg-neutral-800/20 border-b-1 border-0 border-neutral-700/25">
            <div className="max-w-6xl mx-auto flex lg:flex-row lg:justify-between lg:items-center flex-col p-5 gap-1">
                <div className='flex flex-col'>
                    <div className='flex flex-row items-center'>
                        <CardIcon className='fill-neutral-200 w-12 h-12 mr-3' />
                        <span className='text-4xl font-semibold'>Decks</span>
                    </div>
                    <span className='text-lg font-semibold'>
                        Browse Namazu's database of user-uploaded decks!
                    </span>
                </div>

                <div className='flex flex-col'>
                    <div className="text-sm flex items-center gap-2 mt-2 relative">
                        <span className="relative w-2 h-2 bg-green-300 rounded-full">
                            {/* Green glow behind the dot */}
                            <span className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-green-300 rounded-full opacity-30 blur-xl"></span>
                        </span>
                        <span className="opacity-70">
                            Last updated 16/10/2025 23:13
                        </span>
                    </div>

                    <span className='text-sm opacity-40'>
                        The database is updated 10 minutes after last discord change.
                    </span>
                </div>
            </div>
        </div>
    )
}
