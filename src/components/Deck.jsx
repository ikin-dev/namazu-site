import React from 'react';
import Cards from './Cards';
import Rating from './Rating';
import Title from './Title';
import Description from './Description';
import { CHARACTER_IMAGES } from './characterImages';

export default function Deck({ title, character, desc, rating, creator, id, cards, createdDate }) {
    const characters = {
        'alice': 'Alice Margatroid',
        'aya': 'Aya Shameimaru',
        'cirno': 'Cirno',
        'iku': 'Iku Nagae',
        'komachi': 'Komachi Onozuka',
        'marisa': 'Marisa Kirisame',
        'meiling': 'Hong Meiling',
        'okuu': 'Utsuho Reiuji',
        'patchouli': 'Patchouli Knowledge',
        'reimu': 'Reimu Hakurei',
        'reisen': 'Reisen Udongein Inaba',
        'remilia': 'Remilia Scarlet',
        'sakuya': 'Sakuya Izayoi',
        'sanae': 'Sanae Kochiya',
        'suika': 'Suika Ibuki',
        'suwako': 'Suwako Moriya',
        'tenshi': 'Tenshi Hinanawi',
        'youmu': 'Youmu Konpaku',
        'yukari': 'Yukari Yakumo',
        'yuyuko': 'Yuyuko Saigyouji'
    };

    const parsedCreatedDate = new Date(createdDate)
    const now = new Date();
    const diffTime = now - parsedCreatedDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    const isNew = diffDays <= 3;

    return (
        <div
            className="
                flex flex-col 
                bg-neutral-800 border border-neutral-700 
                rounded-lg w-full text-sm
                transition-all duration-300
                hover:border-blue-500 hover:brightness-110
            "
        >
            {/* Header */}
            <div className="flex flex-col">
                <div className="relative p-3 h-8 w-full flex flex-row rounded-t-lg justify-between items-center gap-4 text-white border-neutral-700 bg-">
                    <div
                        className="absolute inset-0 opacity-25 rounded-t-lg"
                        style={{
                            backgroundImage: `url(${CHARACTER_IMAGES[character] || null})`,
                            backgroundSize: '70%',
                            backgroundPosition: 'left 52%',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                    <span className="relative z-10 font-semibold text-neutral-100 drop-shadow-lg">{characters[character.toLowerCase()] || character}</span>
                    {isNew && (
                        <span className='bg-red-500 rounded-lg px-1 py-0.5 mt-1 font-bold'>New</span>
                    )}
                </div>

                <div className="flex flex-row items-start justify-between p-3 gap-3">
                    <div className="flex-col text-left">
                        <Title title={title} />
                        <span className="text-neutral-400 font-bold">
                            By {creator}
                        </span>
                    </div>
                    <Rating rating={rating} />
                </div>
            </div>

            {/* Description + Cards */}
            <div className="p-3 border-t border-neutral-700 w-full flex flex-col sm:flex-row gap-4 flex-1">
                <div className="flex-1 min-w-0 max-w-55">
                    <Description desc={desc} />
                </div>
                <div className="flex-1 min-w-0">
                    <Cards cards={cards} />
                </div>
            </div>

            {/* Footer */}
            <div className="bg-neutral-900 opacity-50 rounded-b-lg flex justify-between p-1 w-full">
                <span className="text-neutral-400 ml-1.5">
                    Created {new Date(createdDate).toLocaleDateString()}
                </span>
                <span className="text-neutral-400 font-semibold mr-1.5">Deck ID {id}</span>
            </div>
        </div>
    );
}
