import React, { useState, useEffect } from 'react';
import Decklist from '../components/Decklist';
import Header from '../components/Header';

export default function DecksPage() {
  const [decksData, setDecksData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDecks() {
      try {
        const res = await fetch('https://www.namazu.app/decks.json');
        if (!res.ok) throw new Error('Failed to fetch decks');
        const data = await res.json();
        setDecksData(data);
      } catch (err) {
        console.error(err);
        setDecksData({ error: err.message, decks: [] });
      }
    }

    fetchDecks();
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center w-full">
      <Header lastUpdated={decksData?.lastUpdated || null} />
      <Decklist
        decks={decksData?.decks || []}
        onImagesLoaded={() => setIsLoading(false)}
        isLoading={!decksData || isLoading}
      />
    </div>
  );
}
