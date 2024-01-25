import React from 'react';
import Logo from './components/Logo';
import MobileNav from './components/MobileNav';

const App = () => {
  return (
    <div className="h-screen w-screen">
      <div className="absolute left-14 top-10 hidden md:block">
        <Logo />
      </div>
      <div className="block md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default App;
