import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-4 text-white">
      <h1 className="text-4xl font-bold">Welcome to the Decks App</h1>
      <p className="text-center opacity-70 max-w-md">
        Browse, filter, and explore decks made by the community.
      </p>
      <Link
        to="/decks"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold"
      >
        Go to Decks
      </Link>
    </div>
  )
}
