import React from 'react';

export default function Rating({ rating }) {
  const { upvotes, downvotes } = rating;
  const total = upvotes + downvotes;
  const percent = total ? Math.round((upvotes / total) * 100) : 0;

  return (
    <div className="inline-flex justify-center items-center text-xs font-bold">
      <span className="flex flex-row justify-center items-center bg-neutral-700 border border-neutral-500 rounded-lg p-2 text-white font-semibold whitespace-nowrap overflow-x-auto">
        <span className="mx-1">+{upvotes}</span>
        <span className="mx-1 opacity-20">|</span>
        <span className="mx-1">-{downvotes}</span>
        <span className="mx-1 text-green-400">({percent}%)</span>
      </span>
    </div>
  );
}
