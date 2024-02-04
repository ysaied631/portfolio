import React from 'react';
import TimelineCard from './TimelineCard';
import { CardInfo } from './TimelineData';

interface TimelineRowProps {
  cards: CardInfo[];
}

const TimelineRow = ({ cards }: TimelineRowProps) => {
  const cardWidth = Math.round((1 / (cards.length + 1)) * 100);
  return (
    <div className="my-8 flex flex-row">
      {cards.map((card, i) => (
        <TimelineCard key={`row_${i}`} cardWidth={cardWidth} {...card} />
      ))}
    </div>
  );
};

export default TimelineRow;
