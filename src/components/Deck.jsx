import React from 'react';
import Cards from './Cards';
import Rating from './Rating';
import Title from './Title';
import Description from './Description';
import { CHARACTER_IMAGES } from './characterImages';
import Icon from '@mdi/react';
import { mdiSkull } from '@mdi/js';

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

    // Badges:
    // Calculate if deck is new
    const parsedCreatedDate = new Date(createdDate)
    const now = new Date();
    const diffTime = now - parsedCreatedDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    const isNew = diffDays <= 3;
    let formattedDate
    if (createdDate) {
        const date = new Date(createdDate);
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        formattedDate = `${dd}-${mm}-${yyyy}`;
    }

    // Calculate if deck has negative rating
    const { upvotes, downvotes } = rating;
    let isNegative = false;
    if (upvotes == 0 && downvotes != 0) 
        isNegative = true;

    return (
        <div
            className="
                flex flex-col 
                bg-neutral-800 border border-neutral-700 
                rounded-lg w-full text-sm
                transition-all duration-300
                hover:border-blue-500 hover:brightness-110
                group drop-shadow-md
            "
        >
            {/* Header */}
            <div className="flex flex-col">
                <div className="relative p-3 h-8 w-full flex flex-row rounded-t-lg justify-between items-center gap-4 text-white border-neutral-700 bg-">
                    <div
                        className="absolute inset-0 opacity-25 group-hover:opacity-50 duration-300 rounded-t-lg"
                        style={{
                            backgroundImage: `url(${CHARACTER_IMAGES[character] || null})`,
                            backgroundSize: '70%',
                            backgroundPosition: 'left 52%',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                    {/* Name */}
                    <span className="relative z-10 text-neutral-50 drop-shadow-lg opacity-50 duration-300 group-hover:opacity-100 ">{characters[character.toLowerCase()] || character}</span>
                    {/* Badges */}
                    <div className="flex flex-row items-center gap-2 relative z-10 ">
                        {/* Negative rating */}
                        {isNegative && (
                            <div className='has-tooltip relative z-10'>
                                <span
                                    className="hidden lg:block absolute bottom-full left-1/2 mb-1 -translate-x-1/2 bg-neutral-900 text-neutral-200 text-xs
                                    px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20"
                                >
                                    Negative rating
                                </span>

                                <Icon path={mdiSkull} size={0.8} className="text-neutral-400" />
                            </div>
                        )}
                        {/* New badge */}
                        {isNew && (
                            <span className='bg-red-500 rounded-lg px-1 py-0.5 mt-1 font-bold'>New</span>
                        )}
                    </div>
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
            <div className="p-3 pt-4 border-t border-neutral-700 w-full flex flex-col sm:flex-row gap-4 flex-1">
                <div className="flex-1 min-w-0 md:max-w-55">
                    <Description desc={desc} />
                </div>
                <div className="flex-1 min-w-0">
                    <Cards cards={cards} />
                </div>
            </div>

            {/* Footer */}
            <div className="bg-neutral-900 opacity-50 rounded-b-lg flex justify-between p-1 w-full">
                <span className="text-neutral-400 ml-1.5">
                    Created {formattedDate}
                </span>
                <span className="text-neutral-400 font-semibold mr-1.5">Deck ID {id}</span>
            </div>
        </div >
    );
}
