import React from 'react';

export default function Rating({ rating }) {
  const { upvotes, downvotes } = rating;
  const total = upvotes + downvotes;
  const percent = total ? Math.round((upvotes / total) * 100) : 0;

  let percentColor = 'text-neutral-400'; // grey for 0%
  if (percent > 0 && percent < 25) percentColor = 'text-red-500';
  else if (percent >= 25 && percent < 75) percentColor = 'text-orange-400';
  else if (percent >= 75) percentColor = 'text-green-400';

  return (
    <div className="inline-flex justify-center items-center text-xs font-bold">
      <span className="flex flex-row justify-center items-center bg-neutral-700 border border-neutral-500 rounded-lg p-2 text-white font-semibold whitespace-nowrap overflow-x-auto">
        <span className="mx-1">+ {upvotes}</span>
        <span className="mx-1 opacity-20">|</span>
        <span className="mx-1">- {downvotes}</span>
        <span className={`mx-1 ${percentColor}`}>({percent}%)</span>
      </span>
    </div>
  );
}
