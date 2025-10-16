import React, { useState, useMemo, useEffect } from 'react';
import Deck from './Deck';
import deckData from '../data/decks.json';

export default function DeckList() {
    const [search, setSearch] = useState('');
    const [characterFilter, setCharacterFilter] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);
    const DECKS_PER_PAGE = 10;

    const characters = [
        'Alice',
        'Aya',
        'Cirno',
        'Iku',
        'Komachi',
        'Marisa',
        'Meiling',
        'Okuu',
        'Patchouli',
        'Reimu',
        'Reisen',
        'Remilia',
        'Sakuya',
        'Sanae',
        'Suika',
        'Suwako',
        'Tenshi',
        'Youmu',
        'Yukari',
        'Yuyuko'
    ];

    // Filter decks based on search + character
    const filteredDecks = useMemo(() => {
        return deckData.filter(deck => {
            const matchesSearch =
                deck.title.toLowerCase().includes(search.toLowerCase()) ||
                deck.creator.toLowerCase().includes(search.toLowerCase());

            const matchesCharacter =
                characterFilter === '' || deck.character.toLowerCase() === characterFilter.toLowerCase();

            return matchesSearch && matchesCharacter;
        });
    }, [search, characterFilter]);

    // Sort decks
    const sortedDecks = useMemo(() => {
        const sorted = [...filteredDecks];

        sorted.sort((a, b) => {
            switch (sortBy) {
                case 'newest':
                    return new Date(b.createdDate) - new Date(a.createdDate);
                case 'oldest':
                    return new Date(a.createdDate) - new Date(b.createdDate);
                case 'upvotes':
                    return b.rating.upvotes - a.rating.upvotes;
                case 'downvotes':
                    return b.rating.downvotes - a.rating.downvotes;
                default:
                    return 0;
            }
        });

        return sorted;
    }, [filteredDecks, sortBy]);

    // Pagination
    const totalPages = Math.ceil(sortedDecks.length / DECKS_PER_PAGE);
    const paginatedDecks = useMemo(() => {
        const startIndex = (currentPage - 1) * DECKS_PER_PAGE;
        return sortedDecks.slice(startIndex, startIndex + DECKS_PER_PAGE);
    }, [sortedDecks, currentPage]);

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [search, characterFilter, sortBy]);

    return (
        <div className="flex flex-col items-center p-4 w-full max-w-3xl text-white">
            {/* Search + Filter + Sort controls */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4 w-full">
                {/* Search */}
                <input
                    type="text"
                    placeholder="Search by title or creator..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg p-2 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Character Filter */}
                <select
                    value={characterFilter}
                    onChange={(e) => setCharacterFilter(e.target.value)}
                    className="bg-neutral-800 border border-neutral-700 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">All Characters</option>
                    {characters.map((char) => (
                        <option key={char} value={char}>
                            {char}
                        </option>
                    ))}
                </select>

                {/* Sort By */}
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-neutral-800 border border-neutral-700 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="upvotes">Most Upvotes</option>
                    <option value="downvotes">Most Downvotes</option>
                </select>
            </div>

            {/* Deck list */}
            <div className="flex flex-col items-center gap-6 w-full">
                {paginatedDecks.map((deck) => (
                    <Deck key={deck.id} {...deck} />
                ))}
                {sortedDecks.length === 0 && (
                    <span className="text-neutral-400">No decks found.</span>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center gap-2 mt-6">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 cursor-pointer bg-neutral-800 border border-neutral-700 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-700 transition-colors duration-100"
                    >
                        Previous
                    </button>
                    
                    <span className="text-neutral-400 text-sm">
                        Page {currentPage} of {totalPages}
                    </span>
                    
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 cursor-pointer bg-neutral-800 border border-neutral-700 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-700 transition-colors duration-100"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}