import React from 'react';
import classNames from 'classnames';
import { CardInfo } from './TimelineData';

export interface TimelineCardProps extends CardInfo {
  cardWidth: number;
}

const TimelineCard = ({ cardWidth, title, body }: TimelineCardProps) => {
  const width = `w-[${cardWidth}%]`;
  const spaceWidth = Math.round(cardWidth * 0.25);
  const space = 'mr-[' + spaceWidth + '%]';
  return (
    <div
      className={classNames({
        'flex flex-col border border-white text-center': true,
        [width]: true,
        [space]: true,
      })}
    >
      <span className="font-semibold">{title}</span>
      <span>{body}</span>
    </div>
  );
};

export default TimelineCard;
