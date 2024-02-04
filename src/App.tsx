import React, { useState } from 'react';
import Logo from './components/Logo';
import MobileNav from './components/MobileNav';
import Sidebar from './components/Sidebar';
import SlideIn from './components/SlideIn';
import Introduction from './components/Introduction';
import Timeline from './components/timeline';

const App = () => {
  const [page, setPage] = useState<number>(0);
  const [direction, setDirection] = useState<'asc' | 'desc'>('desc');

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="absolute left-14 top-10 z-20 hidden md:block">
        <Logo />
      </div>
      <div className="absolute top-0 z-20 block md:hidden">
        <MobileNav />
      </div>
      <div className="absolute right-[5vw] top-14 z-20 float-right hidden h-[80vh] md:block">
        <Sidebar page={page} setPage={setPage} setDirection={setDirection} />
      </div>
      <div className="absolute left-0 top-0 z-10 flex w-screen flex-col">
        <SlideIn show={page === 0} direction={direction}>
          <div className="flex h-screen items-center justify-center">
            <Introduction />
          </div>
        </SlideIn>
        <SlideIn show={page === 1} direction={direction}>
          <div className="flex h-screen items-center justify-center">
            <Timeline />
          </div>
        </SlideIn>
        <SlideIn show={page === 2} direction={direction}>
          <div className="flex h-screen items-center justify-center">
            <div>
              <img src="./youcef-profile-pic.png" width={400} />
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  );
};

export default App;
