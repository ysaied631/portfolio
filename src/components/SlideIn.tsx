import React, { PropsWithChildren } from 'react';
import { Transition } from '@headlessui/react';

interface SlideInProps {
  show: boolean;
  direction: 'asc' | 'desc';
}

const SlideIn = ({
  children,
  show,
  direction,
}: PropsWithChildren<SlideInProps>) => {
  return (
    <Transition
      show={show}
      enter="transition-all ease-in-out duration-500 delay-[300ms]"
      enterFrom={
        'opacity-0 ' +
        (direction === 'asc' ? 'translate-y-full' : '-translate-y-full')
      }
      enterTo="opacity-100 translate-y-0"
      leave="transition-all ease-in-out duration-500"
      leaveFrom="opacity-100"
      leaveTo={
        'opacity-0 ' +
        (direction === 'asc' ? '-translate-y-full' : 'translate-y-full')
      }
    >
      {children}
    </Transition>
  );
};

export default SlideIn;
