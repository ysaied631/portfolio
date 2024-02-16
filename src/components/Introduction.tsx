import React from 'react';

const Introduction = () => {
  return (
    <div className="flex w-3/5 flex-col items-center gap-6 md:flex-row md:gap-[8%]">
      <div className="flex flex-col justify-center gap-8">
        <h1 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
          Hi, my name is Youcef...
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl">
          Full stack development is the mastery of many many skills, the
          willingness to consume as much knowledge as possible and the love for
          technology.
        </h2>
      </div>
      <img
        src="./YoucefProfilePic.png"
        alt="Youcef Smiling"
        className="w-4/5 rounded-lg md:w-1/3"
      />
    </div>
  );
};

export default Introduction;
