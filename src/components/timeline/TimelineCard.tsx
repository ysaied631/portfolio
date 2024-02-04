import React from 'react';
import classNames from 'classnames';
import { CardInfo } from './TimelineData';

export interface TimelineCardProps extends CardInfo {
  cardWidth: number;
  invert?: boolean;
}

const TimelineCard = ({
  cardWidth,
  invert,
  title,
  body,
  time,
}: TimelineCardProps) => {
  const spaceWidth = Math.round(cardWidth * 0.5);

  return (
    <div
      className="flex flex-row justify-stretch"
      style={{ width: `${cardWidth}%` }}
    >
      <div
        className={classNames({ hidden: true, 'md:block': invert })}
        style={{ width: `${spaceWidth}%` }}
      />
      <div
        className={classNames({
          'flex w-full items-center': true,
          'flex-col': invert,
          'flex-col-reverse justify-end': !invert,
        })}
      >
        <div className="my-1 hidden h-8 w-1 rounded border border-white md:block" />
        <div className="flex w-full flex-col rounded border border-white px-4 py-3 text-center">
          <span className="font-semibold">{title}</span>
          <span>{body}</span>
          <span className="mr-4 self-end">{time}</span>
        </div>
      </div>
      <div
        className={classNames({ hidden: true, 'md:block': !invert })}
        style={{ width: `${spaceWidth}%` }}
      />
    </div>
  );
};

export default TimelineCard;
