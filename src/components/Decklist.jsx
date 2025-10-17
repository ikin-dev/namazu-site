import React, { useState, useMemo, useEffect } from 'react';
import Deck from './Deck';

// Skeleton placeholder
function DeckSkeleton() {
    return (
        <div className="w-full max-w-md h-64 bg-neutral-800 rounded-xl animate-pulse flex flex-col gap-3 p-4">
            <div className="h-32 bg-neutral-700 rounded-lg" />
            <div className="h-4 w-3/4 bg-neutral-700 rounded" />
            <div className="h-3 w-1/2 bg-neutral-700 rounded" />
            <div className="flex gap-2 mt-auto">
                <div className="h-3 w-12 bg-neutral-700 rounded" />
                <div className="h-3 w-12 bg-neutral-700 rounded" />
            </div>
        </div>
    );
}

export default function Decklist({ decks, onImagesLoaded, isLoading }) {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [search, setSearch] = useState('');
    const [characterFilter, setCharacterFilter] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);
    const DECKS_PER_PAGE = 10;

    const characters = [
        'Alice', 'Aya', 'Cirno', 'Iku', 'Komachi', 'Marisa', 'Meiling', 'Okuu', 'Patchouli',
        'Reimu', 'Reisen', 'Remilia', 'Sakuya', 'Sanae', 'Suika', 'Suwako', 'Tenshi', 'Youmu',
        'Yukari', 'Yuyuko'
    ];

    // preload images when decks are fetched
    useEffect(() => {
        if (!decks.length) return;
        let loadedCount = 0;
        decks.forEach(deck => {
            const img = new Image();
            img.src = deck.imageUrl;
            img.onload = img.onerror = () => {
                loadedCount += 1;
                if (loadedCount === decks.length) {
                    setImagesLoaded(true);
                    onImagesLoaded?.();
                }
            };
        });
    }, [decks, onImagesLoaded]);

    const loading = isLoading || !imagesLoaded;

    // Filter decks
    const filteredDecks = useMemo(() => {
        return decks.filter(deck => {
            const matchesSearch =
                deck.title.toLowerCase().includes(search.toLowerCase()) ||
                deck.creator.toLowerCase().includes(search.toLowerCase());

            const matchesCharacter =
                characterFilter === '' || deck.character.toLowerCase() === characterFilter.toLowerCase();

            return matchesSearch && matchesCharacter;
        });
    }, [decks, search, characterFilter]);

    // Sort decks
    const sortedDecks = useMemo(() => {
        const sorted = [...filteredDecks];
        sorted.sort((a, b) => {
            const scoreA = (a.rating.upvotes || 0) - (a.rating.downvotes || 0) * 0.5;
            const scoreB = (b.rating.upvotes || 0) - (b.rating.downvotes || 0) * 0.5;

            switch (sortBy) {
                case 'newest': return new Date(b.createdDate) - new Date(a.createdDate);
                case 'oldest': return new Date(a.createdDate) - new Date(b.createdDate);
                case 'highestRated': return scoreB - scoreA;
                case 'lowestRated': return scoreA - scoreB;
                default: return 0;
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

    // Reset page on filters
    useEffect(() => setCurrentPage(1), [search, characterFilter, sortBy]);

    return (
        <div className="w-full p-4 text-white">
            <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto justify-center">
                {/* Left filters */}
                <div className="md:w-3xs flex flex-col gap-4">
                    <div className="flex flex-col gap-3 p-5 bg-neutral-800/50 rounded-xl">
                        <span className="text-2xl text-neutral-200 font-semibold">Search</span>
                        <input
                            type="text"
                            placeholder="Search by title or creator..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg p-2 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="opacity-70">Character</span>
                        <select
                            value={characterFilter}
                            onChange={e => setCharacterFilter(e.target.value)}
                            className="bg-neutral-800 border rounded-lg p-2 w-full border-r-8 border-transparent outline-1 outline-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">All Characters</option>
                            {characters.map(char => (
                                <option key={char} value={char}>{char}</option>
                            ))}
                        </select>
                        <span className="opacity-70">Sort by</span>
                        <select
                            value={sortBy}
                            onChange={e => setSortBy(e.target.value)}
                            className="bg-neutral-800 border rounded-lg p-2 w-full border-r-8 border-transparent outline-1 outline-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                            <option value="highestRated">Highest Rated</option>
                            <option value="lowestRated">Lowest Rated</option>
                        </select>
                    </div>
                </div>

                {/* Deck list */}
                <div className="md:w-2/3 flex flex-col items-center gap-6">
                    {loading
                        ? Array.from({ length: 6 }).map((_, i) => <DeckSkeleton key={i} />)
                        : paginatedDecks.map(deck => <Deck key={deck.id} {...deck} />)
                    }

                    {(!loading && sortedDecks.length === 0) && (
                        <span className="text-neutral-400">No decks found.</span>
                    )}

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
            </div>
        </div>
    );
}
