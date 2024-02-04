import React from 'react';
import TimelineRow from './TimelineRow';
import { CardInfo, workEducationHistory } from './TimelineData';

const Timeline = () => {
  const topRow: CardInfo[] = workEducationHistory.filter(
    (x, i) => (i + 1) % 2 === 1,
  );
  const bottomRow: CardInfo[] = workEducationHistory.filter(
    (x, i) => (i + 1) % 2 === 0,
  );

  return (
    <div className="flex w-4/5 flex-col">
      <TimelineRow cards={topRow} />
      <div className="border border-white"></div>
      <TimelineRow cards={bottomRow} />
    </div>
  );
};

export default Timeline;
