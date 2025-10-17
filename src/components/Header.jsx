import CardIcon from '../assets/icons/cards.svg?react'
import LightIndicator from './LightIndicator'

export default function Header({ lastUpdated }) {
    return (
        <div className="text-neutral-200 w-full p-5 
                 bg-neutral-800/20 border-b-1 border-0 border-neutral-700/25">
            <div className="max-w-6xl mx-auto flex md:flex-row md:justify-between md:items-center flex-col p-5 gap-1">
                <div className='flex flex-col gap-1'>
                    <div className='flex flex-row gap-1 items-center'>
                        <span className='text-4xl font-semibold'>Decks
                        </span>
                        <CardIcon className='fill-neutral-200 w-12 h-12 mr-3' />

                    </div>
                    <span className='text-lg font-semibold'>
                        Browse Namazu's database of user-uploaded decks!
                    </span>
                </div>
                <LightIndicator lastUpdated={lastUpdated} />
            </div>
        </div>
    )
}
