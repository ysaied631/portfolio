import React from 'react';
import classNames from 'classnames';

interface CarouselPositionProps {
  itemsLength: number;
  position: number;
  setPosition: React.Dispatch<React.SetStateAction<number>>;
}

const CarouselPosition = ({
  itemsLength,
  position,
  setPosition,
}: CarouselPositionProps) => {
  const handlePositionChange = (direction: 'left' | 'Right') => {
    if (direction === 'left') {
      if (position !== 0) setPosition((x) => x - 1);
    } else {
      if (position < itemsLength - 1) setPosition((x) => x + 1);
    }
  };

  const iconSizes = 'h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6';

  return (
    <div className="flex flex-row items-center justify-center gap-3">
      <img
        src="./icons/CaretLeft.svg"
        alt="Left Arrow"
        onClick={() => handlePositionChange('left')}
        className={classNames({ 'cursor-pointer': true, [iconSizes]: true })}
      />
      <div className="flex flex-row items-center justify-center gap-2">
        {new Array(itemsLength).fill(0).map((_, i) => (
          <div
            key={i.toString()}
            className={classNames({
              'cursor-pointer rounded-full bg-white': true,
              [iconSizes]: true,
              'opacity-100': i === position,
              'opacity-10': i !== position,
            })}
            onClick={() => setPosition(i)}
          ></div>
        ))}
      </div>
      <img
        src="./icons/CaretRight.svg"
        alt="Right Arrow"
        onClick={() => handlePositionChange('Right')}
        className={classNames({ 'cursor-pointer': true, [iconSizes]: true })}
      />
    </div>
  );
};

export default CarouselPosition;
