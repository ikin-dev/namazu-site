import React from 'react'
import { Link } from 'react-router-dom'
import Namazu from '../assets/namazu.png'
import DiscordIcon from '../assets/icons/discord.svg?react'
// import mansionFieldDream from '../assets/MansionFieldDream.png'

export default function HomePage() {
    return (
        <div className='flex flex-col lg:flex-row-reverse items-center justify-center p-10 gap-10 bg-no-repeat bg-center bg-cover rounded-xl'>
            <img src={Namazu} className='overflow-hidden rounded-lg' />
            <div className="flex flex-col items-center justify-center gap-4 text-white">
                <h1 className="text-4xl font-bold">Namazu</h1>
                <p className="text-center opacity-70 max-w-sm">
                    Touhou 12.3 Hisoutensoku Discord bot and deck database built for the community!
                </p>
                <div className='flex flex-row gap-3 sm:gap-5 flex-wrap items-center justify-center'>
                    <Link
                        to="/decks"
                        className="px-6 py-3 bg-neutral-500/90 rounded-lg font-semibold whitespace-nowrap"
                    >
                        Browse Decks
                    </Link>
                    <a
                        href="https://discord.gg/hisouten"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-[#5865F2] rounded-lg font-semibold text-white hover:bg-[#4752c4] transition-colors whitespace-nowrap"
                    >
                        <DiscordIcon className="w-5 h-5 mt-0.5 fill-white" />
                        Discord
                    </a>
                </div>
            </div>
        </div>
    )
}
