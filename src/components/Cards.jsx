import React from "react";
import { SPRITESHEETS } from "./cardImages";

function Card({ cardId }) {
    const [charPrefix, cardNumber] = cardId.split("_");
    const sheetData = SPRITESHEETS[charPrefix];

    if (!sheetData) return null;

    const { src, total } = sheetData;

    const CARD_WIDTH = 41;
    const CARD_HEIGHT = 65;

    const cardIndex = parseInt(cardNumber, 10);
    const SPRITESHEET_WIDTH = total * CARD_WIDTH;

    return (
        <div
            className="overflow-hidden rounded-md drop-shadow-xs border-1 border-neutral-900"
            style={{
                width: "100%",
                aspectRatio: `${CARD_WIDTH} / ${CARD_HEIGHT}`,
                backgroundImage: `url(${src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${(SPRITESHEET_WIDTH / CARD_WIDTH) * 100}% 100%`,
                backgroundPosition: `${((cardIndex - 1) / (total - 1)) * 100}% 0`,
            }}
        />
    );
}

export default function Cards({ cards }) {
    const CARDS_PER_ROW = 10;

    const rows = [];
    for (let i = 0; i < cards.length; i += CARDS_PER_ROW) {
        rows.push(cards.slice(i, i + CARDS_PER_ROW));
    }

    return (
        <div className="w-full">
            {rows.map((rowCards, rowIndex) => (
                <div key={rowIndex} className="flex gap-1 mb-1">
                    {rowCards.map((id, index) => (
                        <Card key={`${rowIndex}-${index}`} cardId={id} />
                    ))}
                </div>
            ))}
        </div>
    );
}