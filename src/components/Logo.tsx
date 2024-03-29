import React from 'react';

const Logo = () => {
  return (
    <div className="flex flex-row items-center gap-6">
      <img
        src="./YoucefIcon.png"
        alt="Youcef Logo"
        width={60}
        height={60}
        className="rounded-3xl"
      />
      <h1 className="hidden font-mono text-base font-semibold md:block md:text-xl xl:text-3xl">
        Youcef Saied
      </h1>
    </div>
  );
};

export default Logo;
