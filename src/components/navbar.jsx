import { useState } from 'react'
import CardsIcon from '../assets/icons/cards.svg?react'
import NamazuIcon from '../assets/icons/namazu-white.svg?react'

const GettingStartedUrl = "http://wiki.fairykey.app"
const WikiUrl = "http://wiki.fairykey.app"
const GithubRepoUrl = "https://github.com/FairyKey/FairyKey"


function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="w-full bg-neutral-800 text-neutral-100 font-semibold p-2">
            <div className="max-w-7xl px-5 mx-auto flex justify-between items-center">
                <div className='flex items-center hover:opacity-100 opacity-80 cursor-pointer gap-2'>
                    <NamazuIcon className="w-12 h-12 fill-neutral-100 block" />
                    <a href="/"className="text-xl font-bold">Namazu</a>
                </div>

                <ul className="hidden sm:flex items-end gap-3">
                    <li>
                        <div className='flex items-center opacity-50 p-2 gap-2 hover:bg-neutral-500/50 hover:opacity-100 transition-colors transition-200 rounded cursor-pointer'>
                            <CardsIcon className='w-5 h-5 fill-neutral-200' />
                            <a href={GettingStartedUrl}>
                                Decks
                            </a>
                        </div>

                    </li>
                    {/* <li>
                    <div className='flex items-center opacity-50 p-2 gap-2 hover:bg-neutral-500 hover:opacity-100 transition-colors transition-200 rounded-lg cursor-pointer'>
                        <CardsIcon className='w-5 h-5 fill-neutral-200' />
                        <a href={GettingStartedUrl}>
                            Cursed
                        </a>
                    </div>
                </li> */}
                </ul>

                {/* Mobile + hamburger */}
                <button
                    className="sm:hidden flex flex-col justify-center items-center w-8 h-8 z-20"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span
                        className={`block h-0.5 w-6 bg-black transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-black my-1 transition-all duration-300 ${isOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-black transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""
                            }`}
                    />
                </button>
            </div>
            {/* hamburger click sliding menu */}
            <ul
                className={`fixed top-0 right-0 h-full w-full min-[400px]:w-8/10 bg-white shadow-lg p-5 flex flex-col space-y-6 transform transition-transform duration-300 sm:hidden z-10 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <li>
                    <a href="/Getting started" className="block w-full text-left hover:text-gray-400">
                        Getting Started
                    </a>
                </li>
                <li>
                    <a href="/Getting started" className="block w-full text-left hover:text-gray-400">
                        Documentation
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/FairyKey/FairyKey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 w-full text-left hover:text-gray-400">
                        GitHub
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
