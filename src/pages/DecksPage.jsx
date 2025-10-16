import React from 'react'
import Decklist from '../components/Decklist'
import Header from '../components/Header'

export default function DecksPage() {
  return (
    <div className="flex flex-col flex-1 items-center w-full">
      <Header />
      <Decklist />
    </div>
  )
}
