import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <a
        href="https://www.linkedin.com/in/youcef-s-8a7804166"
        className="cursor-pointer no-underline"
      >
        <img
          src="./linkedin.svg"
          alt="LinkedIn Profile"
          width={32}
          height={32}
        />
      </a>
      <a
        href="https://github.com/ysaied631"
        className="cursor-pointer no-underline"
      >
        <img src="./github.svg" alt="Github Profile" width={32} height={32} />
      </a>
      <a
        href="mailto:youcef.saied@live.co.uk"
        className="cursor-pointer no-underline"
      >
        <img src="./email.svg" alt="Email" width={32} height={32} />
      </a>
    </div>
  );
};

export default Contact;
