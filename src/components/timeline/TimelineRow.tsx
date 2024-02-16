import React from 'react';
import TimelineCard from './TimelineCard';
import { CardInfo } from './TimelineData';

interface TimelineRowProps {
  cards: CardInfo[];
  invert?: boolean;
}

const TimelineRow = ({ cards, invert }: TimelineRowProps) => {
  const cardWidth = Math.round((1 / (cards.length + 1)) * 150);
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:items-end md:gap-0">
      {cards.map((card, i) => (
        <TimelineCard
          key={`row_${i}`}
          cardWidth={cardWidth}
          invert={invert}
          {...card}
        />
      ))}
    </div>
  );
};

export default TimelineRow;
