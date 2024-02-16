import React, { useState } from 'react';
import CarouselPosition from './CarouselPosition';

interface CarouselProps {
  children: React.ReactNode[];
}

const Carousel = ({ children }: CarouselProps) => {
  const [position, setPosition] = useState<number>(0);

  if (!children) return <></>;

  return (
    <div className="mt-[5%] flex h-[70%] w-[80%] flex-col items-center gap-4">
      <div className="h-full w-full">{children[position]}</div>
      <CarouselPosition
        itemsLength={children.length}
        position={position}
        setPosition={setPosition}
      />
    </div>
  );
};

export default Carousel;
