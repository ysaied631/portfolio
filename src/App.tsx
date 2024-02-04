import React, { useState } from 'react';
import Logo from './components/Logo';
import Sidebar from './components/Sidebar';
import SlideIn from './components/SlideIn';
import Introduction from './components/Introduction';
import Timeline from './components/timeline';
import Skills from './components/Skills';

const App = () => {
  const [page, setPage] = useState<number>(0);
  const [direction, setDirection] = useState<'asc' | 'desc'>('desc');

  return (
    <div className="w-screen md:h-screen md:overflow-hidden">
      <div className="absolute left-14 top-10 z-20 md:fixed">
        <Logo />
      </div>
      <div className="fixed right-[5vw] top-14 z-20 float-right h-[80vh]">
        <Sidebar page={page} setPage={setPage} setDirection={setDirection} />
      </div>
      {/* MOBILE CONTENT */}
      <div className="z-10 my-[20vh] flex flex-col items-center gap-[20vh] md:hidden">
        <Introduction />
        <Timeline />
        <Skills />
      </div>
      {/* DESKTOP CONTENT */}
      <div className="z-10 hidden h-full flex-col md:flex">
        <SlideIn show={page === 0} direction={direction}>
          <div className="flex h-full items-center justify-center">
            <Introduction />
          </div>
        </SlideIn>
        <SlideIn show={page === 1} direction={direction}>
          <div className="flex h-full items-center justify-center">
            <Timeline />
          </div>
        </SlideIn>
        <SlideIn show={page === 2} direction={direction}>
          <div className="flex h-full items-center justify-center">
            <Skills />
          </div>
        </SlideIn>
      </div>
    </div>
  );
};

export default App;
