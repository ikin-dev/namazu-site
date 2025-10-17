// LastUpdated.jsx
import React from 'react';

export default function LastUpdated({ lastUpdated }) {
    // default to yellow
    let statusColor = 'bg-yellow-300';
    let text = 'Loading...';
    let formattedDate = '';
    if (lastUpdated) {
        const date = new Date(lastUpdated);
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const hh = String(date.getHours()).padStart(2, '0');
        const min = String(date.getMinutes()).padStart(2, '0');
        formattedDate = `${yyyy}-${mm}-${dd} ${hh}:${min}`;
    }

    // if lastUpdated is passed (even null), override colors/text
    if (lastUpdated !== undefined) {
        statusColor = lastUpdated ? 'bg-green-300' : 'bg-red-500';
        text = lastUpdated ? `Latest` : 'Failed to fetch decks';
    }

    return (
        <div className='flex flex-col'>
            <div className="flex items-center gap-2 mt-2 relative">
                <span className={`relative w-2 h-2 ${statusColor} rounded-full`}>
                    <span className={`absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 ${statusColor} rounded-full opacity-30 blur-xl`} />
                </span>
                <span className="opacity-70">{text}</span>
            </div>
            <span className='text-sm opacity-40'>
                {formattedDate}
            </span>
            <span className='text-sm opacity-40'>
                Updates 10 minutes after last discord change
            </span>
        </div>
    );
}
