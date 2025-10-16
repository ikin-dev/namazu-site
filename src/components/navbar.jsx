import { Link, NavLink } from 'react-router-dom'
import CardsIcon from '../assets/icons/cards.svg?react'
import NamazuIcon from '../assets/icons/namazu-white.svg?react'

function Navbar() {
    return (
        <nav className="w-full bg-neutral-800 text-neutral-100 font-semibold p-2">
            <div className="max-w-7xl px-5 mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className='flex items-center hover:opacity-100 opacity-80 cursor-pointer gap-2'>
                    <NamazuIcon className="w-12 h-12 fill-neutral-100 block" />
                    <Link to="/" className="text-xl font-bold">Namazu</Link>
                </div>

                {/* Navigation links */}
                <ul className="sm:flex items-end gap-3">
                    <li>
                        <NavLink
                            to="/decks"
                            className={({ isActive }) =>
                                `flex items-center p-2 gap-2 rounded transition-colors duration-200 
                                ${isActive ? 'bg-neutral-500/50 opacity-100' : 'opacity-50 hover:bg-neutral-500/50 hover:opacity-100'}`
                            }
                        >
                            <CardsIcon className='w-5 h-5 fill-neutral-200' />
                            <span className="hidden sm:block">Decks</span>
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
