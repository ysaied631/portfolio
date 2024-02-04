import React from 'react';

const Introduction = () => {
  return (
    <div className="flex w-3/5 flex-col items-center gap-6 sm:flex-row sm:gap-[8%]">
      <div className="flex flex-col justify-center gap-[8%]">
        <h1 className="lg:ext-3xl text-lg sm:text-xl md:text-2xl">
          Hi, my name is Youcef...
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl">
          Full stack development is the mastery of many many skills, the
          willingness to consume as much knowledge as possible and the love for
          technology.
        </h2>
      </div>
      <img
        src="./youcef-profile-pic.png"
        alt="Youcef Smiling"
        className="w-4/5 rounded-lg sm:w-1/3"
      />
    </div>
  );
};

export default Introduction;
