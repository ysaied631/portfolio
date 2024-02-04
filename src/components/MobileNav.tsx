import React from 'react';
import Logo from './Logo';
import Contact from './Contact';

const MobileNav = () => {
  return (
    <div className="mt-8 flex w-full items-center justify-between gap-8 px-8">
      <Logo />
      <Contact />
    </div>
  );
};

export default MobileNav;
