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
    <div className="flex w-4/5 flex-col gap-8 md:gap-0">
      <h2 className="text-center text-base font-semibold sm:text-lg md:mb-8 md:text-xl lg:text-2xl">
        Experience & Education
      </h2>
      <TimelineRow cards={topRow} />
      <div className="hidden border border-white md:block"></div>
      <TimelineRow cards={bottomRow} invert />
    </div>
  );
};

export default Timeline;
